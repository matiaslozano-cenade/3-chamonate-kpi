# 3-chamonate-kpi

Hub interno de indicadores de rentabilidad de Chamonate — Campo, Packing y Maquinaria.

## Stack

- Next.js 16 + TypeScript + Tailwind v4
- lucide-react
- Build estático (sin DB)
- Deploy: Vercel — `3-chamonate-kpi.vercel.app`

## Dashboards

| Módulo | Color | URL |
| --- | --- | --- |
| Campo | Verde | `3-chamonate-kpi-campo.vercel.app` |
| Packing | Naranja | `3-chamonate-kpi-packing.vercel.app` |
| Maquinaria | Azul | `3-chamonate-maquinaria.vercel.app` |

El hub enlaza a proyectos Vercel independientes por cada dashboard. El proyecto antiguo
`3-chamonate-kpi-maquinaria` fue eliminado; el dashboard de maquinaria vive en
`3-chamonate-maquinaria` (repo propio).

## Desarrollo local

```bash
npm install
npm run dev
```
