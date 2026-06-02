import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Wrench } from "lucide-react";

const PORTAL_INICIO_URL = "https://3-chamonate-inicio.vercel.app";

type Modulo = {
  titulo: string;
  descripcion: string;
  url: string;
  icono: React.ComponentType<{ className?: string }>;
  disponible?: boolean;
  acento: {
    glow: string;
    iconBg: string;
    iconRing: string;
    iconBgHover: string;
    iconRingHover: string;
    iconColor: string;
    dot: string;
    dotShadow: string;
    textActive: string;
    border: string;
    shadow: string;
  };
};

const MODULOS: Modulo[] = [
  {
    titulo: "Maquinaria",
    descripcion: "Rentabilidad de la flota: ingresos reales por OT vs costos, EERR por labor y máquina.",
    url: "https://3-chamonate-maquinaria.vercel.app",
    icono: Wrench,
    acento: {
      glow: "bg-blue-500/10 group-hover:bg-blue-500/20",
      iconBg: "bg-blue-500/10",
      iconRing: "ring-blue-500/30",
      iconBgHover: "group-hover:bg-blue-500/20",
      iconRingHover: "group-hover:ring-blue-400/50",
      iconColor: "text-blue-400",
      dot: "bg-blue-400",
      dotShadow: "shadow-[0_0_8px_rgba(96,165,250,0.6)]",
      textActive: "text-blue-400",
      border: "hover:border-blue-500/40",
      shadow: "hover:shadow-blue-500/20",
    },
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundDeco />

      <main className="relative mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16 lg:py-24">
        <Link
          href={PORTAL_INICIO_URL}
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          Volver al portal de inicio
        </Link>

        <header className="flex flex-col items-center text-center">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl shadow-blue-900/30 ring-1 ring-white/10">
            <Image
              src="/chamonate-logo.png"
              alt="Chamonate"
              width={1000}
              height={300}
              className="h-auto w-full"
              priority
            />
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            Indicadores de rentabilidad
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            KPIs{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Chamonate
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-zinc-400 sm:text-lg">
            Elige el dashboard que quieres revisar.
          </p>
        </header>

        <section className="mt-16 grid gap-5 sm:mt-20 sm:grid-cols-2 max-w-2xl mx-auto w-full">
          {MODULOS.map((modulo) => (
            <ModuloCard key={modulo.titulo} modulo={modulo} />
          ))}
        </section>

        <footer className="mt-20 border-t border-white/5 pt-6 text-center text-xs text-zinc-500">
          <p>
            Chamonate · Indicadores internos · Mantenido por{" "}
            <span className="text-zinc-400">Cenade</span>
          </p>
        </footer>
      </main>
    </div>
  );
}

function ModuloCard({ modulo }: { modulo: Modulo }) {
  const Icon = modulo.icono;
  const a = modulo.acento;
  const disponible = modulo.disponible !== false;

  const inner = (
    <>
      <div className={`pointer-events-none absolute -right-20 -top-20 size-64 rounded-full ${a.glow} blur-3xl transition-opacity`} />

      <div className="relative flex items-start justify-between">
        <div className={`flex size-12 items-center justify-center rounded-xl ${a.iconBg} ring-1 ${a.iconRing} transition-all ${disponible ? `${a.iconBgHover} ${a.iconRingHover}` : ""}`}>
          <Icon className={`size-6 ${a.iconColor}`} />
        </div>
        {disponible ? (
          <ArrowUpRight className={`size-5 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${a.iconColor.replace("text-", "group-hover:text-")}`} />
        ) : (
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            En desarrollo
          </span>
        )}
      </div>

      <h3 className={`relative mt-5 text-xl font-semibold ${disponible ? "text-white" : "text-zinc-500"}`}>
        {modulo.titulo}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">
        {modulo.descripcion}
      </p>

      <div className="relative mt-5 flex items-center gap-1.5 text-xs">
        <span className={`size-1.5 rounded-full ${a.dot} ${a.dotShadow}`} />
        <span className={`font-medium ${a.textActive}`}>
          {disponible ? "Abrir dashboard" : "Próximamente"}
        </span>
      </div>
    </>
  );

  if (disponible) {
    return (
      <Link
        href={modulo.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-6 shadow-xl transition-all ${a.border} ${a.shadow} sm:p-7`}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-6 opacity-40 shadow-xl sm:p-7 cursor-not-allowed select-none">
      {inner}
    </div>
  );
}

function BackgroundDeco() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-900/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-emerald-600/10 blur-[100px]" />
      <div className="absolute -bottom-20 left-0 h-[300px] w-[300px] rounded-full bg-orange-600/10 blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
