import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Mail, Phone, MapPin, Github, Linkedin, Download, ArrowRight, Send,
  Code2, Brain, Eye, Database, Wrench, Layout, Sparkles, Cpu, FileSearch,
  Scan, Gauge, Search, MessagesSquare, Activity, LineChart, UtensilsCrossed,
  GraduationCap, Cloud, Bot, Workflow, Camera, Menu, X, ExternalLink,
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-strong shadow-lg shadow-primary/5" : "glass"
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
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-2xl" />
          <div className="relative animate-float">
            <div className="glow-border relative overflow-hidden rounded-[2rem] glass-strong p-2 animate-glow-pulse">
              <img
                src={milanImg}
                alt="Milan Tamang, AI Engineer"
                width={1024}
                height={1024}
                className="h-full w-full rounded-[1.6rem] object-cover"
              />
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




/* --------------------------------- Contact ------------------------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    formRef.current?.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's <span className="text-gradient">build something</span></>}>
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
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

        <form ref={formRef} onSubmit={onSubmit} className="glass-strong relative overflow-hidden rounded-2xl p-6">
          <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative space-y-4">
            <Field label="Name"><input required name="name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60" placeholder="Your name" /></Field>
            <Field label="Email"><input required type="email" name="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60" placeholder="you@example.com" /></Field>
            <Field label="Message"><textarea required name="message" rows={5} className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60" placeholder="Tell me about your project…" /></Field>
            <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-[1.01]">
              {sent ? "Message sent ✓" : <>Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
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
    <footer className="relative mt-20 border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="font-display text-base">
          <span className="text-gradient font-bold">Milan.dev</span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          © 2026 Milan Tamang. Built with passion for AI and innovation.
        </p>
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
    <section ref={ref} id={id} className="scroll-mt-24 py-20 md:py-28">
      <div className={`mx-auto max-w-6xl px-4 ${visible ? "animate-fade-up" : "opacity-0"}`}>
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
