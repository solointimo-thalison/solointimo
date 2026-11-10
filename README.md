# Solo Intimo

Site institucional estático da Solo Intimo, feito com React Router, Vite e TypeScript. Não usa backend, banco de dados, autenticação, hospedagem de e-mail nem servidor de aplicação. As imagens do projeto ficam na pasta `apps/web/public/images`.

## Rodar localmente

Requisitos: Node.js 22.22 ou mais recente dentro da linha 22 e npm.

```bash
npm install
npm run dev
```

## Publicar o código no GitHub

Crie um repositório vazio no GitHub e, nesta pasta do projeto, execute:

```bash
git init
git add .
git commit -m "Site Solo Intimo"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

O `.gitignore` exclui dependências e arquivos gerados. Não há arquivo de credenciais ou variáveis de ambiente para enviar.

## Publicar como site novo no Netlify

1. No Netlify, escolha **Add new site** e importe o repositório do GitHub.
2. Deixe o diretório base vazio (raiz do repositório). O `netlify.toml` define o build estático e a pasta publicada.
3. Publique. Não é necessário configurar banco de dados, variáveis privadas, e-mail ou serviço de servidor.

O Netlify publica os arquivos gerados em `dist/apps/web/client`. A cada `push` para a branch de produção, ele gera uma nova publicação. O arquivo `robots.txt` estático permite indexação. Depois de escolher o domínio definitivo, atualize os metadados canônicos e links sociais caso queira vinculá-los a esse domínio.

## Build local

```bash
npm run build
```

O projeto mantém links externos de contato (WhatsApp, redes sociais, mapa e marcas citadas), mas não envia formulários nem dados a um servidor próprio.
