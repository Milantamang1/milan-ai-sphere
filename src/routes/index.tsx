import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Mail, Phone, MapPin, Github, Linkedin, Download, ArrowRight, Send,
  Code2, Brain, Eye, Database, Wrench, Layout, Sparkles, Cpu, FileSearch,
  Scan, Gauge, Search, MessagesSquare, Activity, LineChart, UtensilsCrossed,
  GraduationCap, Workflow, Bot, Camera, Menu, X, ExternalLink,
} from "lucide-react";
import milanImg from "@/assets/milan.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Milan Tamang — AI Engineer Portfolio" },
      { name: "description", content: "AI Engineer from Kathmandu specializing in computer vision, OCR, NLP, semantic search, and RAG systems." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundFX />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


/* ------------------------------- Background ------------------------------- */
function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      <div
        className="absolute -top-[20rem] left-1/2 h-[45rem] w-[45rem] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.18 220 / 0.35), transparent 70%)", animation: "aurora-drift 18s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[30%] -left-40 h-[34rem] w-[34rem] rounded-full opacity-50 blur-[100px]"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.18 290 / 0.3), transparent 70%)", animation: "aurora-drift 22s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute bottom-[-10rem] right-[-10rem] h-[38rem] w-[38rem] rounded-full opacity-40 blur-[110px]"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.16 250 / 0.25), transparent 70%)", animation: "aurora-drift 26s ease-in-out infinite" }}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.025] mix-blend-overlay" />
    </div>
  );
}


/* --------------------------------- Navbar -------------------------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${scrolled ? "glass-strong shadow-lg shadow-primary/5" : "glass"
            }`}
        >
          <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-gradient">Milan.dev</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Hire Me <ArrowRight className="h-4 w-4" />
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg glass md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl glass-strong p-3 md:hidden">
            <nav className="flex flex-col">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------------------------- Hero --------------------------------- */
function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-44 md:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
            AI Engineer · Computer Vision · NLP · OCR
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            Hi, I'm <span className="text-gradient">Milan Tamang</span>
          </h1>
          <p className="mt-4 font-display text-2xl font-semibold text-foreground/90 md:text-3xl">
            I Build Intelligent <span className="text-gradient">AI Systems</span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I design and develop real-world AI solutions using computer vision, OCR,
            NLP, semantic search, and RAG research to automate workflows and solve
            business problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.03]">
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/40">
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground">
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Kathmandu, Nepal</span>
            <a href="https://github.com/Milantamang1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Github className="h-4 w-4" /> Milantamang1</a>
            <a href="https://www.linkedin.com/in/milan-tamang-7449a620a/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
        </div>

        {/* Image */}
        <style>{`
          @keyframes avatarSweep {
            0% { top: 0%; opacity: 0; }
            5% { opacity: 0.8; }
            35% { top: 100%; opacity: 0.8; }
            40%, 100% { top: 100%; opacity: 0; }
          }
        `}</style>
        <div className="relative mx-auto w-full max-w-[23rem] group">
          {/* Animated Ambient Backdrop Glow */}
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-secondary/15 to-accent/20 blur-3xl opacity-80 transition-all duration-700 group-hover:scale-105" />

          <div className="relative animate-float-slow">
            {/* 3D Glass Frame */}
            <div className="glow-border relative overflow-hidden rounded-[2.2rem] glass-strong p-2.5 shadow-2xl transition-all duration-700 ease-out group-hover:[transform:perspective(1000px)_rotateY(6deg)_rotateX(-3deg)] group-hover:shadow-[0_20px_50px_rgba(var(--primary),0.15)] bg-black/40">

              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem] bg-black/50">
                <img
                  src={milanImg}
                  alt="Milan Tamang, AI Engineer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] object-center"
                />

                {/* Laser Sweep Overlay */}
                <div
                  className="absolute inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 pointer-events-none"
                  style={{
                    animation: "avatarSweep 6s cubic-bezier(0.4, 0, 0.2, 1) infinite",
                  }}
                />

                {/* Cybernetic HUD Target Corners */}
                <div className="absolute top-4 left-4 h-3.5 w-3.5 border-t-2 border-l-2 border-primary/45 rounded-tl transition-all duration-300 group-hover:scale-110" />
                <div className="absolute top-4 right-4 h-3.5 w-3.5 border-t-2 border-r-2 border-primary/45 rounded-tr transition-all duration-300 group-hover:scale-110" />
                <div className="absolute bottom-4 left-4 h-3.5 w-3.5 border-b-2 border-l-2 border-primary/45 rounded-bl transition-all duration-300 group-hover:scale-110" />
                <div className="absolute bottom-4 right-4 h-3.5 w-3.5 border-b-2 border-r-2 border-primary/45 rounded-br transition-all duration-300 group-hover:scale-110" />

                {/* Vignette Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating tech badges */}
            <FloatingBadge className="-left-6 top-8" delay="0s">Python</FloatingBadge>
            <FloatingBadge className="-right-4 top-20" delay="1.2s">YOLOv8</FloatingBadge>
            <FloatingBadge className="-left-8 bottom-24" delay="2.4s">OCR</FloatingBadge>
            <FloatingBadge className="-right-6 bottom-10" delay="0.6s">NLP</FloatingBadge>
            <FloatingBadge className="left-1/2 -bottom-4 -translate-x-1/2" delay="1.8s">RAG</FloatingBadge>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingBadge({ children, className = "", delay = "0s" }: { children: ReactNode; className?: string; delay?: string }) {
  return (
    <span
      style={{ animationDelay: delay }}
      className={`absolute z-10 inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 font-mono text-xs font-medium text-foreground shadow-lg shadow-primary/10 animate-float ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
      {children}
    </span>
  );
}

/* --------------------------------- About --------------------------------- */
function About() {
  const highlights = [
    { icon: Eye, label: "Computer Vision" },
    { icon: Scan, label: "OCR Automation" },
    { icon: Brain, label: "NLP & Semantic Search" },
    { icon: FileSearch, label: "RAG Research" },
    { icon: Cpu, label: "Backend AI APIs" },
  ];
  return (
    <Section id="about" eyebrow="About" title={<>Crafting AI that <span className="text-gradient">solves real problems</span></>}>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          I'm an AI Engineer with hands-on experience designing and deploying intelligent
          systems for real-world problems — computer vision, OCR, NLP, semantic search,
          document automation, and backend AI APIs. My work spans invoice detection,
          digital meter reading, multilingual chatbot research, and predictive forecasting.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {highlights.map(({ icon: Icon, label }) => (
          <div key={label} className="glass group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
            <div className="absolute inset-x-0 -top-px h-px divider-glow opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition-transform group-hover:scale-110">
              <Icon className="h-4 w-4" />
            </div>
            <p className="mt-3 text-sm font-medium">{label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}


/* --------------------------------- Skills -------------------------------- */
function Skills() {
  const groups = [
    { icon: Code2, title: "Programming", items: ["Python", "JavaScript", "SQL", "C/C++"] },
    { icon: Workflow, title: "Frameworks & APIs", items: ["Django", "Flask", "REST APIs"] },
    { icon: Brain, title: "AI / ML", items: ["YOLOv8", "SentenceTransformers", "LSTM", "BiLSTM", "OCR", "NLP", "Semantic Search", "RAG"] },
    { icon: Eye, title: "Computer Vision", items: ["OpenCV", "PaddleOCR", "EasyOCR", "Pillow"] },
    { icon: Layout, title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"] },
    { icon: Database, title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
    { icon: Wrench, title: "Tools", items: ["Git", "Docker", "VS Code", "Conda", "Google Colab"] },
  ];
  return (
    <Section id="skills" eyebrow="Skills" title={<>The stack I use to <span className="text-gradient">ship AI</span></>}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ icon: Icon, title, items }) => (
          <div key={title} className="group glass relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((i) => (
                <span key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-foreground/85 transition-colors hover:border-primary/40 hover:text-primary">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------- Projects ------------------------------- */
function Projects() {
  const projects = [
    {
      title: "AI-Powered Insurance Invoice Detection",
      desc: "Invoice extraction system using YOLOv8 + OCR to capture VAT, premium, total amount, invoice number, date, and stamp duty.",
      tech: ["YOLOv8", "OCR", "OpenCV", "Flask", "PyTorch"],
      impact: "94.6% mAP@50 · 91.5% accuracy",
      icon: FileSearch,
    },
    {
      title: "NOC Document Data Extraction",
      desc: "Structured data extraction from noisy scanned documents using OCR and computer vision.",
      tech: ["YOLOv8", "EasyOCR", "OpenCV", "Flask"],
      impact: "96.3% mAP@50 · 94.2% accuracy",
      icon: Scan,
    },
    {
      title: "Fuel Pump Digital Meter Reading",
      desc: "Real-time digit detection for fuel pump meters with CLAHE and gamma correction for glare resistance.",
      tech: ["YOLOv8", "OpenCV", "Flask"],
      impact: "99.5% accuracy",
      icon: Gauge,
    },
    {
      title: "AI-Powered Semantic Search Engine",
      desc: "Hybrid semantic search combining SentenceTransformers and FAISS with keyword + semantic ranking.",
      tech: ["FAISS", "NLP", "scikit-learn", "SentenceTransformers"],
      impact: "~92% retrieval accuracy",
      icon: Search,
    },
    {
      title: "AI Multilingual Chatbot — RAG Research",
      desc: "Chatbot supporting Nepali, Roman Nepali and English, exploring Retrieval-Augmented Generation.",
      tech: ["SentenceTransformers", "Flask", "FAISS"],
      impact: "94% Top-1 accuracy",
      icon: MessagesSquare,
    },
    {
      title: "Predictive Water Level System",
      desc: "LSTM / BiLSTM-based forecasting with a Django web dashboard for live monitoring.",
      tech: ["Django", "TensorFlow", "PostgreSQL"],
      impact: "Time-series forecasting",
      icon: Activity,
    },
    {
      title: "Stock Price Prediction System",
      desc: "Interactive UI for stock price prediction with Temporal Fusion Transformer research.",
      tech: ["Python", "TensorFlow", "ML", "Viz"],
      impact: "Research-grade accuracy",
      icon: LineChart,
    },
    {
      title: "Restaurant Management Website",
      desc: "Full-stack restaurant management system with authentication, admin panel and email flows.",
      tech: ["Django", "PostgreSQL", "Bootstrap"],
      impact: "Production deployment",
      icon: UtensilsCrossed,
    },
  ];

  return (
    <Section id="projects" eyebrow="Featured Projects" title={<>Selected <span className="text-gradient">AI work</span></>}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <article key={p.title} className="group glass relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Sparkles className="h-3 w-3" /> {p.impact}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

/* ------------------------------ Experience ------------------------------- */
function Experience() {
  const items = [
    { icon: FileSearch, title: "AI-Powered Invoice Extraction", desc: "Built end-to-end invoice detection and OCR pipeline used in production for insurance documents." },
    { icon: Scan, title: "NOC Document OCR Extraction", desc: "Engineered structured data extraction from noisy scanned NOC documents." },
    { icon: Gauge, title: "Fuel Pump Meter Reading", desc: "Designed real-time digit detection with image-enhancement preprocessing for glare resistance." },
    { icon: Search, title: "Semantic Search Development", desc: "Implemented hybrid keyword + embedding retrieval using FAISS and SentenceTransformers." },
    { icon: MessagesSquare, title: "Multilingual Chatbot Research", desc: "Researched RAG techniques across Nepali, Roman Nepali and English." },
    { icon: Workflow, title: "Bill Reconciliation Automation", desc: "Automated bill matching workflows to reduce manual reconciliation effort." },
    { icon: Bot, title: "WhatsApp Bulk Messaging Automation", desc: "Built scalable messaging automation for customer outreach." },
    { icon: Camera, title: "Parking Number Plate Detection", desc: "Research on ANPR pipelines for parking management." },
  ];

  return (
    <Section id="experience" eyebrow="Experience" title={<>Selected <span className="text-gradient">work highlights</span></>}>
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent md:left-1/2" />
        <div className="space-y-8">
          {items.map((it, idx) => {
            const Icon = it.icon;
            const left = idx % 2 === 0;
            return (
              <div key={it.title} className={`relative md:grid md:grid-cols-2 md:gap-10 ${left ? "" : "md:[&>*:first-child]:order-2"}`}>
                <div className={`relative pl-12 md:pl-0 ${left ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}>
                  <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30 md:left-1/2 md:-translate-x-1/2">
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </span>
                  <div className="glass rounded-2xl p-5 transition-all hover:border-primary/40">
                    <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* -------------------------------- Education ------------------------------ */
function Education() {
  const items = [
    { degree: "B.Sc. CSIT", school: "Ambition College", note: "Bachelor's in Computer Science & Information Technology" },
    { degree: "+2 Science", school: "Golden Gate International College", note: "Higher Secondary Education" },
    { degree: "SEE", school: "Little Garden English School", note: "Secondary Education Examination" },
  ];
  return (
    <Section id="education" eyebrow="Education" title={<>Academic <span className="text-gradient">journey</span></>}>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((e) => (
          <div key={e.degree} className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{e.degree}</h3>
            <p className="mt-1 text-sm font-medium text-foreground/85">{e.school}</p>
            <p className="mt-2 text-sm text-muted-foreground">{e.note}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}




/* ----------------------------- AI Work Visualizers ------------------------- */
function OCRVisualizer() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => (t + 1) % 100);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const isDateActive = tick >= 15 && tick <= 35;
  const isPremiumActive = tick >= 40 && tick <= 60;
  const isTotalActive = tick >= 65 && tick <= 85;

  return (
    <div className="relative w-full h-full flex flex-col justify-between">
      <div className="text-muted-foreground flex justify-between items-center mb-3 text-[10px]">
        <span>VISION: Invoice-Detector-v8</span>
        <span className="text-primary animate-pulse flex items-center gap-1 font-sans">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          ANALYSIS IN PROGRESS
        </span>
      </div>

      <div className="flex-1 flex gap-4 min-h-[220px]">
        {/* Left Side: Mock Document */}
        <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-4 relative overflow-hidden flex flex-col justify-between">
          {/* Laser Line */}
          <div
            className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"
            style={{ top: `${tick}%`, transition: "top 0.04s linear" }}
          />

          <div className="border-b border-white/10 pb-2 flex justify-between items-center">
            <span className="font-bold text-[9px] tracking-wider text-muted-foreground">Nepal Oil Corporation INVOICE</span>
            <span className="text-[8px] text-muted-foreground">#CD-2026</span>
          </div>

          <div className="space-y-3 my-3">
            <div
              className={`p-1.5 rounded border transition-all duration-150 relative ${isDateActive
                  ? "border-emerald-500/50 bg-emerald-500/5 shadow-[0_0_8px_rgba(16,185,129,0.05)]"
                  : "border-transparent bg-transparent"
                }`}
            >
              <div className="flex justify-between text-[8px] text-muted-foreground">
                <span>INVOICE DATE</span>
                {isDateActive && <span className="text-emerald-400 font-bold">DATE: 98.4%</span>}
              </div>
              <p className="text-foreground text-[10px] font-semibold">2026-07-02</p>
            </div>

            <div
              className={`p-1.5 rounded border transition-all duration-150 relative ${isPremiumActive
                  ? "border-primary/50 bg-primary/5 shadow-[0_0_8px_rgba(var(--primary),0.05)]"
                  : "border-transparent bg-transparent"
                }`}
            >
              <div className="flex justify-between text-[8px] text-muted-foreground">
                <span>PREMIUM AMOUNT</span>
                {isPremiumActive && <span className="text-primary font-bold font-sans">PREMIUM: 99.1%</span>}
              </div>
              <p className="text-foreground text-[10px] font-semibold">$2,500.00</p>
            </div>

            <div
              className={`p-1.5 rounded border transition-all duration-150 relative ${isTotalActive
                  ? "border-secondary/50 bg-secondary/5 shadow-[0_0_8px_rgba(var(--secondary),0.05)]"
                  : "border-transparent bg-transparent"
                }`}
            >
              <div className="flex justify-between text-[8px] text-muted-foreground">
                <span>TOTAL DUE</span>
                {isTotalActive && <span className="text-secondary font-bold font-sans">TOTAL: 99.5%</span>}
              </div>
              <p className="text-foreground text-[10px] font-semibold">$2,825.00</p>
            </div>
          </div>
        </div>

        {/* Right Side: Data Feed Terminal */}
        <div className="w-[140px] bg-black/50 border border-white/5 rounded-xl p-3 flex flex-col justify-between text-[9px]">
          <div>
            <p className="text-muted-foreground border-b border-white/5 pb-1 mb-2 uppercase tracking-wider text-[8px]">Extracted Data</p>
            <div className="space-y-2 font-mono">
              <div>
                <p className="text-muted-foreground text-[8px]">date:</p>
                <p className={`transition-colors font-semibold ${isDateActive ? "text-emerald-400" : "text-foreground/60"}`}>
                  "2026-07-02"
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-[8px]">premium:</p>
                <p className={`transition-colors font-semibold ${isPremiumActive ? "text-primary" : "text-foreground/60"}`}>
                  2500.00
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-[8px]">total:</p>
                <p className={`transition-colors font-semibold ${isTotalActive ? "text-secondary" : "text-foreground/60"}`}>
                  2825.00
                </p>
              </div>
            </div>
          </div>
          <div className="text-[8px] text-muted-foreground/60 mt-2 font-sans">
            Confidence: <span className="text-emerald-400 font-bold">99.0%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NetworkVisualizer() {
  const inputs = [50, 100, 150];
  const hidden1 = [30, 65, 100, 135, 170];
  const hidden2 = [30, 65, 100, 135, 170];
  const outputs = [75, 125];

  return (
    <div className="relative w-full h-full flex flex-col justify-between">
      <style>{`
        @keyframes networkDash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
      <div className="text-muted-foreground flex justify-between items-center mb-3 text-[10px]">
        <span>MODEL: DeepCV-Classifier-v2</span>
        <span className="text-emerald-500 animate-pulse flex items-center gap-1 font-sans">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          TRAINING ONLINE
        </span>
      </div>

      <div className="flex-1 flex items-center justify-center min-h-[220px]">
        <svg viewBox="0 0 400 200" className="w-full max-w-[340px] h-auto overflow-visible">
          {/* Layer Lines input -> hidden 1 */}
          {inputs.map((y1) =>
            hidden1.map((y2, idx) => (
              <line
                key={`in-h1-${y1}-${y2}`}
                x1="40"
                y1={y1}
                x2="140"
                y2={y2}
                className="stroke-primary/10 stroke-[1px]"
                style={{
                  strokeDasharray: "4 12",
                  animation: `networkDash ${1.5 + idx * 0.1}s linear infinite`,
                }}
              />
            ))
          )}

          {/* Layer Lines hidden 1 -> hidden 2 */}
          {hidden1.map((y1, idx1) =>
            hidden2.map((y2, idx2) => (
              <line
                key={`h1-h2-${y1}-${y2}`}
                x1="140"
                y1={y1}
                x2="260"
                y2={y2}
                className="stroke-secondary/10 stroke-[1px]"
                style={{
                  strokeDasharray: "4 12",
                  animation: `networkDash ${1.8 + (idx1 + idx2) * 0.05}s linear infinite`,
                }}
              />
            ))
          )}

          {/* Layer Lines hidden 2 -> output */}
          {hidden2.map((y1, idx1) =>
            outputs.map((y2, idx2) => (
              <line
                key={`h2-out-${y1}-${y2}`}
                x1="260"
                y1={y1}
                x2="360"
                y2={y2}
                className="stroke-accent/15 stroke-[1.5px]"
                style={{
                  strokeDasharray: "4 12",
                  animation: `networkDash ${1.2 + (idx1 + idx2) * 0.15}s linear infinite`,
                }}
              />
            ))
          )}

          {/* Input Nodes */}
          {inputs.map((y, idx) => (
            <circle
              key={`in-${idx}`}
              cx="40"
              cy={y}
              r="6"
              className="fill-black stroke-primary stroke-2 animate-pulse"
              style={{ animationDelay: `${idx * 0.3}s` }}
            />
          ))}

          {/* Hidden 1 Nodes */}
          {hidden1.map((y, idx) => (
            <circle
              key={`h1-${idx}`}
              cx="140"
              cy={y}
              r="5"
              className="fill-black stroke-secondary stroke-2"
            />
          ))}

          {/* Hidden 2 Nodes */}
          {hidden2.map((y, idx) => (
            <circle
              key={`h2-${idx}`}
              cx="260"
              cy={y}
              r="5"
              className="fill-black stroke-secondary stroke-2"
            />
          ))}

          {/* Output Nodes */}
          {outputs.map((y, idx) => (
            <circle
              key={`out-${idx}`}
              cx="360"
              cy={y}
              r="7"
              className="fill-black stroke-accent stroke-2"
            />
          ))}
        </svg>
      </div>

      <div className="border-t border-white/5 pt-3 grid grid-cols-3 text-center text-[10px] text-muted-foreground font-sans">
        <div>
          <p className="text-foreground font-semibold">Epoch 142/200</p>
          <p className="text-[8px] opacity-75">Iteration status</p>
        </div>
        <div>
          <p className="text-primary font-semibold font-mono">Loss: 0.0034</p>
          <p className="text-[8px] opacity-75">Training error</p>
        </div>
        <div>
          <p className="text-secondary font-semibold font-mono">Acc: 99.51%</p>
          <p className="text-[8px] opacity-75">Validation accuracy</p>
        </div>
      </div>
    </div>
  );
}

function RAGVisualizer() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col justify-between">
      <style>{`
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(3.5); opacity: 0; }
        }
      `}</style>
      <div className="text-muted-foreground flex justify-between items-center mb-3 text-[10px]">
        <span>ENGINE: Semantic-RAG-v4</span>
        <span className="text-secondary animate-pulse flex items-center gap-1 font-sans">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          RAG_INDEXING
        </span>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-3 min-h-[220px]">
        {/* Left Side: Vector Space Map */}
        <div className="w-full md:w-[130px] h-[100px] md:h-auto bg-black/40 border border-white/5 rounded-xl p-2 relative overflow-hidden flex items-center justify-center">
          <span className="absolute top-1.5 left-2 text-[7px] uppercase tracking-wider text-muted-foreground/60 font-sans">Embedding Space</span>

          <svg className="w-full h-full max-h-[140px]" viewBox="0 0 100 100">
            <line x1="0" y1="50" x2="100" y2="50" className="stroke-white/5 stroke-[0.5px]" />
            <line x1="50" y1="0" x2="50" y2="100" className="stroke-white/5 stroke-[0.5px]" />

            {/* Clusters */}
            <circle cx="30" cy="70" r="2" className="fill-white/10" />
            <circle cx="27" cy="73" r="1.5" className="fill-white/10" />
            <circle cx="33" cy="68" r="1.5" className="fill-white/10" />

            <circle cx="75" cy="35" r="2.5" className="fill-white/10" />
            <circle cx="78" cy="38" r="1.5" className="fill-white/10" />
            <circle cx="72" cy="32" r="1.5" className="fill-white/10" />

            {/* Target Cluster */}
            <circle cx="60" cy="60" r="3" className={`transition-all duration-500 ${step >= 3 ? "fill-primary" : "fill-white/20"}`} />
            <circle cx="56" cy="64" r="2" className={`transition-all duration-500 ${step >= 3 ? "fill-primary/80" : "fill-white/20"}`} />
            <circle cx="64" cy="57" r="1.5" className={`transition-all duration-500 ${step >= 3 ? "fill-primary/80" : "fill-white/20"}`} />

            {/* Query Vector dot */}
            {step === 0 && (
              <circle cx="10" cy="15" r="3" className="fill-secondary animate-bounce" />
            )}
            {step === 1 && (
              <path d="M10 15 Q 35 40, 60 60" fill="none" className="stroke-secondary/30 stroke-[1px] stroke-dasharray-[2,2]" />
            )}
            {step === 2 && (
              <circle cx="60" cy="60" r="2.5" className="fill-secondary animate-pulse" />
            )}

            {step >= 3 && (
              <>
                <circle cx="60" cy="60" r="1" className="stroke-primary fill-none stroke-2 origin-center" style={{ animation: "ripple 1.5s ease-out infinite" }} />
                <circle cx="60" cy="60" r="1" className="stroke-secondary fill-none stroke-[1px] origin-center" style={{ animation: "ripple 1.5s ease-out infinite", animationDelay: "0.5s" }} />
              </>
            )}
          </svg>
        </div>

        {/* Right Side: Log terminal */}
        <div className="flex-1 bg-black/50 border border-white/5 rounded-xl p-3 flex flex-col justify-between font-mono text-[9px] leading-relaxed relative overflow-hidden">
          <div className="space-y-1.5">
            <div>
              <span className="text-primary">user@milan-ai:~$</span>{" "}
              <span className="text-foreground">query "RAG pipelines"</span>
            </div>

            {step >= 1 && (
              <div className="text-muted-foreground/80 text-[8px]">
                &gt; Vectorizing... [0.12, -0.45, 0.88, ...]
              </div>
            )}

            {step >= 2 && (
              <div className="text-secondary font-semibold text-[8px]">
                &gt; Distance lookup: HNSW lookup complete
              </div>
            )}

            {step >= 3 && (
              <div className="bg-primary/10 border border-primary/20 rounded p-1 text-primary text-[8px]">
                <span className="font-bold">Match:</span> Catha_RAG.md (Sim: 0.941)
              </div>
            )}

            {step >= 4 && (
              <div className="text-emerald-400 animate-pulse text-[8px] line-clamp-2">
                &gt; LLM Response: "The RAG pipeline retrieves relevant snippets and feeds..."
              </div>
            )}
          </div>

          <div className="text-muted-foreground/40 border-t border-white/5 pt-1 mt-1 flex justify-between text-[7px] font-sans">
            <span>Latency: 38ms</span>
            <span>Step {step + 1}/5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIWorkVisualizer() {
  const [activeTab, setActiveTab] = useState<"ocr" | "network" | "rag">("ocr");

  return (
    <div className="glass-strong relative min-h-[380px] overflow-hidden rounded-2xl border border-white/10 flex flex-col w-full">
      <div className="absolute -inset-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/15 opacity-60 blur-3xl pointer-events-none" />

      {/* Visualizer header */}
      <div className="flex border-b border-white/10 bg-black/30 p-3 justify-between items-center relative z-10">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
        </div>
        <div className="flex gap-1">
          {(["ocr", "network", "rag"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-2.5 py-1 text-[10px] font-mono font-medium transition-all ${activeTab === tab
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground border border-transparent"
                }`}
            >
              {tab === "ocr" && "OCR_Scanner.py"}
              {tab === "network" && "neural_net.fit"}
              {tab === "rag" && "semantic_rag.go"}
            </button>
          ))}
        </div>
      </div>

      {/* Animation Area */}
      <div className="flex-1 relative p-5 font-mono text-xs flex flex-col justify-between overflow-hidden bg-black/20 z-10">
        {activeTab === "ocr" && <OCRVisualizer />}
        {activeTab === "network" && <NetworkVisualizer />}
        {activeTab === "rag" && <RAGVisualizer />}
      </div>
    </div>
  );
}

/* --------------------------------- Contact ------------------------------- */
function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's <span className="text-gradient">build something</span></>}>
      <div className="grid gap-[clamp(2rem,5vw,3rem)] lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-[clamp(1rem,2.5vw,1.25rem)]">
          <p className="text-muted-foreground">
            Open to AI engineering roles, freelance projects, and research collaborations.
            Reach me directly or send a message.
          </p>
          <ContactRow icon={Mail} label="Email" value="meelantamang0@gmail.com" href="mailto:meelantamang0@gmail.com" />
          <ContactRow icon={Phone} label="Phone" value="+977 9845171001" href="tel:+9779845171001" />
          <ContactRow icon={MapPin} label="Location" value="Kathmandu, Nepal" />

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://www.linkedin.com/in/milan-tamang-7449a620a/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl glass-strong px-4 py-2.5 text-sm font-medium transition-all hover:border-primary/40">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="https://github.com/Milantamang1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl glass-strong px-4 py-2.5 text-sm font-medium transition-all hover:border-primary/40">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>

        <div className="flex items-stretch">
          <AIWorkVisualizer />
        </div>
      </div>
    </Section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const inner = (
    <div className="glass group flex items-center gap-4 rounded-xl p-4 transition-all hover:border-primary/40">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

/* --------------------------------- Footer -------------------------------- */
function Footer() {
  return (
    <footer className="relative mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-px w-full divider-glow opacity-60" />
        <div className="flex flex-col items-center justify-between gap-4 py-10 sm:flex-row">
          <a href="#home" className="flex items-center gap-2 font-display text-base font-bold">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="text-gradient">Milan.dev</span>
          </a>
          <p className="text-xs text-muted-foreground">
            © 2026 Milan Tamang · Designed & engineered in Kathmandu
          </p>
          <div className="flex items-center gap-2">
            <a href="https://github.com/Milantamang1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-lg glass transition-all hover:border-primary/40 hover:text-primary">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/milan-tamang-7449a620a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-lg glass transition-all hover:border-primary/40 hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:meelantamang0@gmail.com" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-lg glass transition-all hover:border-primary/40 hover:text-primary">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------- Section -------------------------------- */
function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: ReactNode; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), obs.disconnect()),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} id={id} className="scroll-mt-24 py-24 md:py-32">
      <div className={`mx-auto max-w-6xl px-4 ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-primary">
            <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_8px_currentColor]" />
            {eyebrow}
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] md:text-5xl">
            {title}
          </h2>
          <div className="mt-6 h-px w-24 divider-glow" />
        </div>
        {children}
      </div>
    </section>
  );
}

