# 3-chamonate-kpi

Hub interno de indicadores de rentabilidad de Chamonate — Maquinaria.

## Stack

- Next.js 16 + TypeScript + Tailwind v4
- lucide-react
- Build estático (sin DB)
- Deploy: Vercel — `3-chamonate-kpi.vercel.app`

## Dashboards

| Módulo | Color | URL |
| --- | --- | --- |
| Maquinaria | Azul | `3-chamonate-maquinaria.vercel.app` |

El hub enlaza a proyectos Vercel independientes por cada dashboard. El proyecto antiguo
`3-chamonate-kpi-maquinaria` fue eliminado; el dashboard de maquinaria vive en
`3-chamonate-maquinaria` (repo propio).

## Desarrollo local

```bash
npm install
npm run dev
```
