---
title: "Erro ao expandir PVC no OpenShift: lições aprendidas na prática"
date: "2026-03-03"
description: "Entenda por que um PersistentVolumeClaim pode entrar em estado Lost e como resolver a situação com segurança."
image: "/images/placeholder.png"
tags:
  - kubernetes
  - storage
  - openshift
  - troubleshooting
---

Recentemente precisei expandir um PersistentVolumeClaim (PVC) em um cluster OpenShift.  
A ideia era simples: aumentar o tamanho do volume e seguir normalmente.

Mas ao verificar o status, encontrei:


kubectl get pvc

NAME STATUS VOLUME CAPACITY ACCESS MODES
app-pvc Lost pvc-xyz 0


E foi aí que começou a investigação.

## Primeiro passo: validar a StorageClass

Antes de qualquer tentativa de expansão, é essencial verificar se a StorageClass permite resize:


kubectl get storageclass exemplo-storageclass -o yaml


O ponto mais importante é:


allowVolumeExpansion: true


Se esse campo não estiver habilitado, o Kubernetes não permitirá expansão.

## Segundo passo: entender o status Lost

Quando um PVC entra em estado `Lost`, significa que ele perdeu a referência válida para o PersistentVolume.

Algumas possíveis causas:

- O PV foi deletado manualmente
- Houve falha no backend de storage
- Mudança na StorageClass
- Problemas no provisionador CSI
- Inconsistências após upgrades do cluster

Um PVC em estado `Lost` não pode ser expandido, pois não existe mais volume saudável associado.

## Verificando o PersistentVolume


kubectl get pv pvc-xyz -o yaml


Confirme se:

- O PV ainda existe
- Está com `status: Bound`
- O `claimRef` aponta corretamente para o PVC

Se o PV estiver ausente ou inconsistente, a expansão não será possível.

## Como resolver

Como o volume original não estava mais íntegro, a solução foi criar um novo PVC com o tamanho desejado:


apiVersion: v1
kind: PersistentVolumeClaim
metadata:
name: app-pvc-novo
spec:
accessModes:
- ReadWriteMany
storageClassName: exemplo-storageclass
resources:
requests:
storage: 20Gi


Depois disso, foi necessário atualizar o Deployment para utilizar o novo PVC e aplicar a alteração:


kubectl apply -f deployment.yaml


## Boas práticas para evitar esse cenário

- Sempre validar `allowVolumeExpansion`
- Monitorar eventos do PVC com `kubectl describe pvc`
- Não deletar PV manualmente sem avaliar impacto
- Manter backup antes de alterações estruturais
- Revisar volumes antigos em clusters que passaram por upgrades

## Conclusão

Expandir PVC é simples quando o recurso está saudável.  
Mas quando o estado é `Lost`, o problema não é o tamanho — é a integridade do volume.

Troubleshooting em Kubernetes muitas vezes não é sobre executar comandos, e sim entender o ciclo de vida completo dos recursos.

E storage, definitivamente, merece atenção especial em qualquer ambiente produtivo.