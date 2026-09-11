# Birds On Cloud Website

Portfólio institucional estático da Birds On Cloud, desenvolvido em React e Vite e preparado para Cloudflare Pages.

## Desenvolvimento local

```powershell
pnpm install
pnpm dev
```

O terminal mostrará o endereço local do site.

http://127.0.0.1:8000

## Ambiente Python

A `venv` permanece disponível para ferramentas auxiliares locais, embora o frontend não dependa de Python:

```powershell
.\venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
```

## Build de produção

```powershell
pnpm build
pnpm preview
```

Os arquivos finais são gerados em `dist/`.

## Cloudflare Pages

- Framework preset: `Vite`
- Build command: `pnpm build`
- Build output directory: `dist`
- Node.js: versão LTS atual

O site não requer backend, banco de dados ou variáveis de ambiente.

http://127.0.0.1:4173/#services


# Adicionar novas marcas e certificados 

Enquanto não existirem, são exibidos placeholders identificados. Para ativar um logo inicial, altere logo: null para o caminho indicado em logoFile.
Para adicionar itens futuramente, basta acrescentar um objeto à respectiva lista:
brands.push({
  name: "Nova Empresa",
  logo: "/assets/brands/nova-empresa.svg",
});
certifications.push({
  name: "Nova Certification",
  issuer: "Issuer",
  professional: "Professional Name",
  credentialId: "",
  logo: "/assets/certifications/nova-certification.svg",
});