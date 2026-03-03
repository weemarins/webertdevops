---
title: "Troubleshooting de Pods em CrashLoopBackOff"
date: "2025-12-10"
description: "Passo a passo para diagnosticar e resolver pods que ficam em CrashLoopBackOff."
tags:
  - kubernetes
  - troubleshooting
  - pods
---

Ao se deparar com um pod em CrashLoopBackOff, o primeiro passo é conferir os eventos e logs:

```
kubectl describe pod meu-pod
kubectl logs meu-pod --previous
```

Explique as possíveis causas e soluções.
