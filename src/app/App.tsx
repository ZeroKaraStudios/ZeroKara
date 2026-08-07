import { useState } from "react";
import { Plus, Minus, BarChart2, Layers, Smile, Image, Bell, LayoutGrid, Check, ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoSrc from "@/imports/ZeroKara_Icono_-_Extra_-_Cato-Yun.png";

const RED = "#E30613";
const DARK = "#080808";

const services = [
  {
    icon: BarChart2,
    title: "Métricas y Análisis",
    desc: "Seguimiento de crecimiento, engagement y audiencia. Reportes visuales que te ayudan a entender tu canal.",
  },
  {
    icon: Layers,
    title: "Overlays Personalizados",
    desc: "Diseños de overlay únicos para tu stream: webcam, alertas, paneles y escenas completas.",
  },
  {
    icon: Smile,
    title: "Pack de Emoticonos",
    desc: "Emotes personalizados para Twitch, YouTube y Discord. Expresivos, únicos y listos para subir.",
  },
  {
    icon: Image,
    title: "Identidad de Canal",
    desc: "Banners, miniaturas, logo y paleta de colores. Todo lo que necesitas para una presencia profesional.",
  },
  {
    icon: Bell,
    title: "Alertas Animadas",
    desc: "Follow, sub, donación y raid. Alertas animadas que hacen memorable cada interacción.",
  },
  {
    icon: LayoutGrid,
    title: "Paneles de Canal",
    desc: "Paneles de información, redes sociales, comandos y reglas. Con diseño que refleja tu identidad.",
  },
];

const packages = [
  {
    name: "Spark",
    tagline: "Para streamers que empiezan",
    price: "$149",
    period: "pago único",
    description: "Lo esencial para comenzar con buena imagen. Ideal si estás dando tus primeros pasos en el streaming.",
    features: [
      "Logo de canal",
      "3 paneles de información",
      "Pack de 5 emoticonos",
      "Banner de perfil",
      "1 revisión incluida",
    ],
    featured: false,
    cta: "Comenzar",
  },
  {
    name: "Wave",
    tagline: "Para streamers en crecimiento",
    price: "$349",
    period: "pago único",
    description: "Un kit completo de branding para streamers que quieren diferenciarse y crecer con consistencia.",
    features: [
      "Todo lo de Spark",
      "Overlay completo (cam + chat + alertas)",
      "Pack de 10 emoticonos",
      "Pantallas de transición",
      "Análisis mensual de métricas",
      "3 revisiones incluidas",
    ],
    featured: true,
    cta: "El más elegido",
  },
  {
    name: "Luminary",
    tagline: "Identidad de marca completa",
    price: "$699",
    period: "pago único",
    description: "Branding de nivel profesional. Para streamers que quieren convertir su canal en una marca real.",
    features: [
      "Todo lo de Wave",
      "Identidad visual completa",
      "Pack de 20 emoticonos",
      "Introducción animada (intro/outro)",
      "Seguimiento de métricas trimestral",
      "Revisiones ilimitadas",
    ],
    featured: false,
    cta: "Escalar ahora",
  },
];

const faqs = [
  {
    q: "¿Cuáles son los métodos de pago?",
    a: "Aceptamos transferencias bancarias (SPEI), tarjetas de crédito y débito (Visa, Mastercard), PayPal y pago por criptomonedas. Para paquetes mayores a $300 USD, también ofrecemos pago en dos cuotas.",
  },
  {
    q: "¿Cuánto tiempo tarda la entrega?",
    a: "Spark: 3-5 días hábiles. Wave: 7-10 días hábiles. Luminary: 14-21 días hábiles. Los tiempos pueden variar según la carga de trabajo del equipo, pero siempre te mantenemos informado sobre el avance.",
  },
  {
    q: "¿Puedo pedir un paquete personalizado?",
    a: "Por supuesto. Si ninguno de nuestros paquetes se adapta exactamente a lo que necesitas, diseñamos una propuesta a tu medida. Cuéntanos qué tienes en mente y armaremos algo pensado solo para tu canal.",
  },
  {
    q: "¿Cuántas revisiones incluyen?",
    a: "Spark incluye 1 revisión, Wave incluye 3 y Luminary tiene revisiones ilimitadas. Cada revisión cubre ajustes de color, texto y composición dentro del mismo concepto original.",
  },
  {
    q: "¿Me quedo con los archivos originales?",
    a: "Sí. Al finalizar el proyecto, te entregamos todos los archivos fuente editables (AI, PSD o Figma según el caso), además de los formatos exportados listos para usar en tu plataforma.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="py-6 cursor-pointer select-none"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-6">
        <span
          className="text-base font-medium leading-snug transition-colors duration-200"
          style={{
            color: open ? RED : "#F5F5F5",
            fontFamily: "var(--font-body)",
          }}
        >
          {q}
        </span>
        <span className="shrink-0 mt-0.5" style={{ color: RED }}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </div>
      <div
        style={{
          maxHeight: open ? "200px" : "0",
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.3s ease",
        }}
      >
        <p
          className="mt-4 text-sm leading-relaxed pr-8"
          style={{ color: "#888888", fontFamily: "var(--font-body)" }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ background: DARK, fontFamily: "var(--font-body)", color: "#F5F5F5", minHeight: "100vh" }}>

      {/* ── Nav ──────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{ background: "rgba(8,8,8,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "#888888", letterSpacing: "0.2em" }}>
          Streaming Branding
        </span>
        <div className="hidden md:flex items-center gap-8">
          {["Servicios", "Paquetes", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm transition-colors duration-200"
              style={{ color: "#888888" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F5F5F5")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888888")}
            >
              {item}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm font-semibold px-5 py-2 transition-opacity duration-200 hover:opacity-85"
            style={{ background: RED, color: "#F5F5F5", letterSpacing: "0.04em" }}
          >
            Contactar
          </a>
        </div>
      </nav>

      {/* ── Hero / Logo centered ──────────────────────────────────── */}
      <section className="pt-24 pb-0 flex flex-col items-center text-center px-6">
        {/* Logo */}
        <div className="relative mt-10 mb-2">
          <ImageWithFallback
            src={logoSrc}
            alt="ZeroKara Studio logo — ink splash with serpent motifs"
            className="w-56 h-56 md:w-72 md:h-72 object-contain select-none"
            style={{ filter: "invert(1)", mixBlendMode: "screen" }}
          />
        </div>

        {/* Tagline */}
        <div className="flex items-center gap-3 mb-6">
          <div style={{ width: 40, height: 1, background: RED }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: RED, letterSpacing: "0.22em" }}>
            Studio de Branding para Streamers
          </span>
          <div style={{ width: 40, height: 1, background: RED }} />
        </div>

        {/* Hero headline */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 max-w-4xl"
          style={{ fontFamily: "var(--font-display)", color: "#F5F5F5", lineHeight: 1.0 }}
        >
          TU CANAL,<br />
          <span style={{ color: RED }}>TU MARCA.</span>
        </h1>

        <p className="text-lg max-w-xl mb-8 leading-relaxed" style={{ color: "#888888" }}>
          Diseñamos la identidad visual, overlays, emotes y métricas que convierten tu stream en una experiencia que la audiencia no olvida.
        </p>

        <div className="flex items-center gap-4 mb-0">
          <a
            href="#paquetes"
            className="px-8 py-3 text-sm font-semibold flex items-center gap-2 transition-opacity duration-200 hover:opacity-85"
            style={{ background: RED, color: "#F5F5F5" }}
          >
            Ver paquetes <ArrowRight size={14} />
          </a>
          <a
            href="#servicios"
            className="px-8 py-3 text-sm font-semibold flex items-center gap-2 transition-colors duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#F5F5F5" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = RED)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)")}
          >
            <Play size={12} fill="currentColor" /> Ver showreel
          </a>
        </div>

        {/* Red slash divider */}
        <div className="w-full max-w-5xl mt-20 mb-0 relative">
          <div style={{ height: 2, background: `linear-gradient(90deg, transparent, ${RED}, transparent)` }} />
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────── */}
      <section style={{ background: "#0E0E0E", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["12", "Editores en equipo"],
            ["8", "Diseñadores activos"],
            ["300+", "Proyectos entregados"],
            ["180+", "Streamers satisfechos"],
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <div
                className="text-4xl md:text-5xl font-bold mb-1"
                style={{ fontFamily: "var(--font-display)", color: RED }}
              >
                {num}
              </div>
              <div className="text-xs tracking-wide uppercase" style={{ color: "#888888", letterSpacing: "0.1em" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section id="servicios" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div style={{ width: 24, height: 2, background: RED }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: RED, letterSpacing: "0.2em" }}>
                  Servicios
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-display)", color: "#F5F5F5", lineHeight: 1.05 }}
              >
                TODO LO QUE<br />NECESITA TU STREAM
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#888888" }}>
              Desde el primer diseño hasta el análisis de tu crecimiento. Un solo estudio para todo tu canal.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="p-8 group transition-colors duration-300 cursor-default"
                  style={{ background: "#080808" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0F0F0F")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#080808")}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-5 transition-colors duration-300"
                    style={{ background: "rgba(227,6,19,0.12)", border: `1px solid rgba(227,6,19,0.25)` }}
                  >
                    <Icon size={18} style={{ color: RED }} />
                  </div>
                  <h3
                    className="text-base font-bold mb-3"
                    style={{ fontFamily: "var(--font-display)", color: "#F5F5F5", letterSpacing: "0.04em" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Packages ─────────────────────────────────────────────── */}
      <section
        id="paquetes"
        className="py-24 px-6"
        style={{ background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <div style={{ width: 24, height: 2, background: RED }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: RED, letterSpacing: "0.2em" }}>
                Paquetes
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)", color: "#F5F5F5", lineHeight: 1.05 }}
            >
              ELIGE TU KIT<br />DE BRANDING
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="relative flex flex-col p-8 transition-all duration-300"
                style={{
                  background: pkg.featured ? RED : "#111111",
                  border: pkg.featured ? "none" : "1px solid rgba(255,255,255,0.08)",
                  outline: pkg.featured ? `3px solid ${RED}` : "none",
                  outlineOffset: pkg.featured ? "3px" : "0",
                }}
              >
                {pkg.featured && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 tracking-widest uppercase"
                    style={{ background: "#F5F5F5", color: RED, whiteSpace: "nowrap" }}
                  >
                    ★ Más elegido
                  </div>
                )}

                <div className="mb-5">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase block mb-2"
                    style={{ color: pkg.featured ? "rgba(245,245,245,0.7)" : "#888888", letterSpacing: "0.15em" }}
                  >
                    {pkg.tagline}
                  </span>
                  <h3
                    className="text-3xl"
                    style={{ fontFamily: "var(--font-display)", color: "#F5F5F5", letterSpacing: "0.04em" }}
                  >
                    {pkg.name}
                  </h3>
                </div>

                <div className="mb-5 flex items-baseline gap-2">
                  <span
                    className="text-4xl font-bold"
                    style={{ fontFamily: "var(--font-display)", color: "#F5F5F5" }}
                  >
                    {pkg.price}
                  </span>
                  <span className="text-xs uppercase tracking-wide" style={{ color: pkg.featured ? "rgba(245,245,245,0.6)" : "#888888" }}>
                    {pkg.period}
                  </span>
                </div>

                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: pkg.featured ? "rgba(245,245,245,0.8)" : "#888888" }}
                >
                  {pkg.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        size={13}
                        className="mt-0.5 shrink-0"
                        style={{ color: pkg.featured ? "#F5F5F5" : RED }}
                      />
                      <span className="text-sm" style={{ color: pkg.featured ? "rgba(245,245,245,0.9)" : "#BBBBBB" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-3 text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200"
                  style={{
                    background: pkg.featured ? "#F5F5F5" : "transparent",
                    color: pkg.featured ? RED : RED,
                    border: pkg.featured ? "none" : `1px solid ${RED}`,
                    letterSpacing: "0.08em",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    if (!pkg.featured) { el.style.background = RED; el.style.color = "#F5F5F5"; }
                    else { el.style.opacity = "0.9"; }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    if (!pkg.featured) { el.style.background = "transparent"; el.style.color = RED; }
                    else { el.style.opacity = "1"; }
                  }}
                >
                  {pkg.cta} <ArrowRight size={13} />
                </button>
              </div>
            ))}
          </div>

          <div
            className="mt-10 text-center py-5 px-8"
            style={{ border: "1px dashed rgba(255,255,255,0.12)" }}
          >
            <span className="text-sm" style={{ color: "#888888" }}>
              ¿Necesitas algo diferente?{" "}
              <a
                href="#faq"
                className="font-semibold underline underline-offset-2"
                style={{ color: RED }}
              >
                Armamos paquetes personalizados
              </a>{" "}
              según tu canal y presupuesto.
            </span>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div style={{ width: 24, height: 2, background: RED }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: RED, letterSpacing: "0.2em" }}>
                  FAQ
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)", color: "#F5F5F5" }}
              >
                PREGUNTAS<br />FRECUENTES
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#888888" }}>
                Transparencia total en cada etapa. Si tu duda no está aquí, escríbenos directamente.
              </p>

              {/* Logo small */}
              <div className="mb-8">
                <ImageWithFallback
                  src={logoSrc}
                  alt="ZeroKara Studio"
                  className="w-28 h-28 object-contain opacity-60"
                  style={{ filter: "invert(1)", mixBlendMode: "screen" }}
                />
              </div>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider px-6 py-3 transition-opacity duration-200 hover:opacity-85"
                style={{ background: RED, color: "#F5F5F5", letterSpacing: "0.08em" }}
              >
                Escríbenos <ArrowRight size={13} />
              </a>
            </div>

            {/* Right accordion */}
            <div className="lg:col-span-3">
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                {faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: RED }}
      >
        <span
          className="text-xs font-semibold tracking-widest uppercase block mb-4"
          style={{ color: "rgba(245,245,245,0.7)", letterSpacing: "0.2em" }}
        >
          ¿Listo para empezar?
        </span>
        <h2
          className="text-4xl md:text-6xl mb-8"
          style={{ fontFamily: "var(--font-display)", color: "#F5F5F5", lineHeight: 1.0 }}
        >
          HAGAMOS TU CANAL<br />INOLVIDABLE
        </h2>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold uppercase tracking-wider transition-opacity duration-200 hover:opacity-90"
          style={{ background: "#F5F5F5", color: RED, letterSpacing: "0.1em" }}
        >
          Agendar consulta <ArrowRight size={14} />
        </a>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer
        className="py-8 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src={logoSrc}
              alt="ZeroKara Studio"
              className="w-10 h-10 object-contain"
              style={{ filter: "invert(1)", mixBlendMode: "screen" }}
            />
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-display)", color: "#F5F5F5", letterSpacing: "0.15em" }}
            >
              ZeroKara Studio
            </span>
          </div>
          <span className="text-xs" style={{ color: "#888888" }}>
            © 2026 ZeroKara Studio. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-6">
            {["Privacidad", "Términos", "Discord"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "#888888" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = RED)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888888")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
