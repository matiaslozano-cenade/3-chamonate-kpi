# 3-chamonate-kpi

Hub interno de indicadores de rentabilidad de Chamonate.

## Stack

- Next.js 16 + TypeScript + Tailwind v4
- lucide-react
- Build estático (sin DB)
- Deploy: Vercel — `3-chamonate-kpi.vercel.app`

## Dashboards

| Módulo | Color | Archivo |
| --- | --- | --- |
| Campo | Verde | `/public/campo.html` |
| Packing | Naranja | `/public/packing.html` |
| Maquinaria | Azul | `/public/maquinaria.html` |

Cada dashboard es un HTML standalone (Tailwind CDN + Chart.js) servido desde `/public`.

## Desarrollo local

```bash
npm install
npm run dev
```

Para reemplazar un dashboard, sobrescribir el HTML correspondiente en `/public`.
