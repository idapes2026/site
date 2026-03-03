# Site (GitHub Pages) — Segurança

Este projeto é um site estático (Vite + React) hospedado no GitHub Pages.

## ⚠️ Importante (Segurança)
- **Não coloque chaves de API (ex.: GEMINI_API_KEY) no front-end.**
- Tudo que entra no build do site pode ser inspecionado publicamente no navegador (DevTools).
- Se você precisar de recursos de IA, faça via **backend** (API própria / serverless) para manter segredos protegidos.

## Desenvolvimento local
```bash
npm install
npm run dev
