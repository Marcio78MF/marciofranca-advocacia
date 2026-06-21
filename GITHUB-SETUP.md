# Márcio França Advocacia — Setup para GitHub

Este arquivo contém instruções para configurar o repositório no GitHub após fazer upload dos arquivos.

## 1. Fazer upload dos arquivos

1. Acesse https://github.com/Marcio78MF/marciofranca-advocacia
2. Clique em **"Add file"** → **"Upload files"**
3. Selecione todos os arquivos do ZIP extraído (exceto `node_modules/` e `dist/`)
4. Commit com mensagem: `"Commit inicial: site institucional Márcio França Advocacia"`

## 2. Configurar GitHub Pages (opcional)

Para servir o site via GitHub Pages:

1. Vá para **Settings** → **Pages**
2. Em "Build and deployment", selecione:
   - **Source**: GitHub Actions
   - **Branch**: main
3. Crie um arquivo `.github/workflows/deploy.yml` com o conteúdo abaixo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 10
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. Faça commit e push do arquivo `.github/workflows/deploy.yml`
5. O GitHub Actions executará automaticamente e publicará em `https://Marcio78MF.github.io/marciofranca-advocacia/`

## 3. Estrutura do projeto

```
marciofranca-adv/
├── client/                 # Frontend React + Vite
│   ├── src/
│   │   ├── pages/         # Páginas (Home, AreaPage, Blog, etc.)
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── lib/           # Utilitários (site.ts, seo.ts, etc.)
│   │   ├── hooks/         # Custom React hooks
│   │   └── index.css      # Design system (Tailwind + tokens)
│   ├── public/            # Assets estáticos (favicon, robots.txt, sitemap.xml)
│   └── index.html         # HTML de entrada
├── package.json           # Dependências
├── vite.config.ts         # Configuração do Vite
├── tsconfig.json          # Configuração TypeScript
└── README.md              # Documentação
```

## 4. Desenvolvimento local

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Pré-visualizar build
pnpm preview
```

## 5. Tecnologias

- **React 19** + TypeScript
- **Vite** (build tool)
- **Tailwind CSS 4** (design system)
- **shadcn/ui** (componentes)
- **Wouter** (roteamento cliente)
- **Framer Motion** (animações)

## 6. Conformidade

O site segue o **Provimento 205/2021 da OAB** (publicidade jurídica ética):
- Sem promessas de resultado
- Sem depoimentos fabricados
- Disclaimer de responsabilidade
- Informações técnicas e precisas

---

**Repositório**: https://github.com/Marcio78MF/marciofranca-advocacia
**Site ao vivo**: https://www.marciofranca.adv.br
