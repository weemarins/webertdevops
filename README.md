# Webert DevOps Blog

Blog estático profissional baseado em Next.js com exportação para S3.

## Tecnologias
- Next.js (última versão)
- Markdown para posts (`/content/posts`)
- Tema escuro, layout responsivo, foco técnico DevOps
- SEO otimizado, exportação estática (`output: 'export'`)

## Como usar

1. `npm install`
2. `npm run dev` – iniciar servidor de desenvolvimento
3. `npm run build` – compila e exporta para `out/` para deploy estático

Os arquivos exportados em `out/` podem ser hospedados em qualquer serviço de arquivos estáticos como AWS S3.

## Estrutura de conteúdo

- `content/posts` contém os arquivos Markdown com frontmatter
- Cada post possui `title`, `date`, `description`, `tags`

## Páginas criadas
- `/` página inicial com lista de posts
- `/posts/[slug]` página individual do post
- `/about` página sobre o autor
- `/tags` lista de tags
- `/tags/[tag]` posts filtrados por tag
- `/404` página de erro

## Autor
Webert Marins — Especialista em Kubernetes e Cloud

LinkedIn: placeholder


> Projeto gerado automaticamente via Copilot/AI no ambiente de desenvolvimento.