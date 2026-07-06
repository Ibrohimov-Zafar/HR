import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";

const HeroBlob = lazy(() => import("@/components/HeroBlob"));

function ClientHeroBlob() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <Suspense fallback={null}>
      <HeroBlob />
    </Suspense>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});

const Icon = ({ name, className = "", fill = false, style }: { name: string; className?: string; fill?: boolean; style?: React.CSSProperties }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{ fontVariationSettings: fill ? "'FILL' 1" : undefined, ...style }}
  >
    {name}
  </span>
);

const companies = [
  { name: "Google", icon: "language", difficulty: "Hard", time: "60m", color: "error" },
  { name: "Meta", icon: "all_inclusive", difficulty: "Medium", time: "45m", color: "warning" },
  { name: "Amazon", icon: "shopping_cart", difficulty: "Hard", time: "90m", color: "error" },
  { name: "Microsoft", icon: "grid_view", difficulty: "Medium", time: "45m", color: "warning" },
  { name: "Netflix", icon: "play_circle", difficulty: "Hard", time: "60m", color: "error" },
  { name: "Uber", icon: "directions_car", difficulty: "Medium", time: "45m", color: "warning" },
];

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border-subtle">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-headline-md text-lg">
          <span className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center">
            <Icon name="bolt" className="text-[18px]" fill />
          </span>
          InterviewAI
        </a>
        <nav className="hidden md:flex items-center gap-8 text-text-secondary font-label-md text-label-md">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#companies" className="hover:text-foreground transition-colors">Companies</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline text-text-secondary hover:text-foreground text-label-md font-label-md">Sign in</button>
          <button className="btn-primary px-4 py-2 rounded-lg text-sm">Get Started</button>
        </div>
      </div>
    </header>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40 mesh-ai-overlay" />
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10 w-full grid md:grid-cols-2 gap-12 items-center py-20">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container font-label-md text-label-md">
                <Icon name="auto_awesome" className="text-[18px]" fill />
                <span>Next-Gen Interview Preparation</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl hero-gradient-text leading-tight max-w-xl">
                Practice Real Software Engineering Interviews with AI
              </h1>
              <p className="text-text-secondary font-body-lg text-body-lg max-w-lg">
                Master HR behavioral rounds, complex technical challenges, and large-scale system design. Your AI mentor provides real-time feedback just like a lead engineer at FAANG.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary px-8 py-4 rounded-xl font-headline-md shadow-lg flex items-center gap-2 group transition-all hover:shadow-primary-container/30">
                  Get Started Free
                  <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-xl border border-border-subtle bg-surface-card hover:bg-surface-container-low transition-colors font-headline-md">
                  View Demo
                </button>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative hidden md:block">
              <div className="glass-card p-6 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-error/60" />
                    <div className="w-2 h-2 rounded-full bg-warning/60" />
                    <div className="w-2 h-2 rounded-full bg-success/60" />
                  </div>
                </div>
                <div className="mb-6 border-b border-border-subtle pb-4">
                  <span className="font-label-md text-label-md text-text-secondary">interview_ai_engine.v2</span>
                </div>
                <div className="relative h-80 w-full rounded-2xl overflow-hidden bg-surface-container-lowest flex items-center justify-center">
                  <div className="absolute inset-0 mesh-ai-overlay opacity-60" />
                  <div className="absolute inset-0">
                    <ClientHeroBlob />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-3 bg-surface-container-low rounded-xl border border-border-subtle">
                    <p className="text-text-secondary text-[12px] uppercase tracking-wider font-label-md">AI Confidence</p>
                    <p className="text-primary font-headline-md">98.4%</p>
                  </div>
                  <div className="p-3 bg-surface-container-low rounded-xl border border-border-subtle">
                    <p className="text-text-secondary text-[12px] uppercase tracking-wider font-label-md">Response Latency</p>
                    <p className="text-tertiary font-headline-md">120ms</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success">
                    <Icon name="check_circle" />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md">Code Optimized</p>
                    <p className="text-text-secondary text-[12px]">Big O: O(n log n)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border-subtle bg-surface-container-lowest/50 py-10">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["50k+", "Engineers Prepped"],
              ["98%", "Placement Rate"],
              ["1M+", "Mock Sessions"],
              ["4.9/5", "User Satisfaction"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-headline-md text-primary text-2xl">{v}</p>
                <p className="text-text-secondary font-label-md">{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Companies */}
        <section id="companies" className="py-24 bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="font-headline-lg text-headline-lg mb-2">Practice Company-Specific Loops</h2>
                <p className="text-text-secondary">Simulate the exact interview pipeline of top tech companies.</p>
              </div>
              <button className="text-primary font-label-md text-label-md flex items-center gap-2 hover:underline">
                View All Companies <Icon name="open_in_new" className="text-[18px]" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {companies.map((c) => (
                <div key={c.name} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 mb-4 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={c.icon} className="text-primary text-3xl" />
                  </div>
                  <h3 className="font-headline-md text-sm mb-3">{c.name}</h3>
                  <div className="space-y-2 w-full">
                    <span
                      className={`px-2 py-0.5 rounded-md w-full block text-[10px] border ${
                        c.color === "error"
                          ? "bg-error/10 border-error/20 text-error"
                          : "bg-warning/10 border-warning/20 text-warning"
                      }`}
                    >
                      {c.difficulty}
                    </span>
                    <div className="flex items-center justify-center gap-1 text-text-secondary text-[12px]">
                      <Icon name="schedule" className="text-[14px]" /> {c.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Bento */}
        <section id="features" className="py-32 relative">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
            <div className="text-center mb-20">
              <h2 className="font-headline-lg text-headline-xl mb-4">Precision-Engineered Preparation</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Every feature is designed to bridge the gap between theoretical knowledge and successful interview execution.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* AI Voice */}
              <div className="md:col-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -mr-20 -mt-20 rounded-full group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon name="settings_voice" className="text-primary text-3xl" />
                    </div>
                    <div>
                      <h3 className="font-headline-md text-headline-md">AI Voice &amp; Behavioral</h3>
                      <p className="text-text-secondary">Low-latency conversational simulation.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <Icon name="mic_external_on" className="text-[18px]" />
                      </div>
                      <p className="text-body-md">Natural language understanding handles follow-up questions and "Tell me about a time..." scenarios flawlessly.</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <Icon name="graphic_eq" className="text-[18px]" />
                      </div>
                      <p className="text-body-md">Real-time tone analysis identifies confidence levels and areas for improved articulation.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 h-32 bg-surface-container-low rounded-xl border border-border-subtle flex items-end px-6 gap-1 relative overflow-hidden py-2">
                  {[48, 80, 64, 96, 40, 72, 56, 88, 44, 76].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary rounded-t-sm animate-pulse"
                      style={{ height: `${h}px`, animationDelay: `${i * 0.1}s`, animationDuration: `${0.8 + (i % 3) * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Editor */}
              <div className="glass-card rounded-3xl p-8 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center mb-8">
                  <Icon name="code" className="text-tertiary text-3xl" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-4">Integrated Editor</h3>
                <p className="text-text-secondary mb-6">Full Monaco Editor support with IntelliSense, multiple languages, and real-time execution.</p>
                <div className="mt-auto pt-6 border-t border-border-subtle flex flex-wrap gap-2">
                  {["Python", "Java", "TypeScript", "C++"].map((l) => (
                    <span key={l} className="text-[10px] font-label-md px-2 py-1 rounded bg-surface-container-high border border-border-subtle">
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resume & Github */}
              <div className="glass-card rounded-3xl p-8 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-8">
                  <Icon name="description" className="text-secondary text-3xl" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-4">Resume &amp; GitHub</h3>
                <p className="text-text-secondary">AI analyzes your experience and public repos to generate custom questions tailored to your actual skills.</p>
                <div className="mt-8 flex -space-x-4">
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-high flex items-center justify-center">
                    <Icon name="file_open" className="text-[16px]" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-high flex items-center justify-center">
                    <Icon name="terminal" className="text-[16px]" />
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="md:col-span-2 glass-card rounded-3xl p-8 grid md:grid-cols-2 gap-12">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                    <Icon name="insights" className="text-primary text-3xl" />
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-4">Mastery Metrics</h3>
                  <p className="text-text-secondary">Track your growth with deep-dive analytics on coding speed, memory efficiency, and communication clarity.</p>
                </div>
                <div className="bg-surface-container-low rounded-2xl border border-border-subtle p-6 flex flex-col gap-6 justify-center">
                  {[
                    ["Algorithmic Thinking", 85, "bg-primary"],
                    ["System Design", 62, "bg-tertiary"],
                    ["Behavioral Flow", 92, "bg-secondary"],
                  ].map(([label, pct, color]) => (
                    <div key={label as string} className="space-y-2">
                      <div className="flex justify-between font-label-md text-[12px]">
                        <span>{label}</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                        <div className={`${color} h-full`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg mb-4">Success Stories from FAANG Engineers</h2>
              <p className="text-text-secondary">Our users have landed offers at the world's most innovative companies.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Chen",
                  role: "SDE II at Google",
                  quote: "The AI mock interviews were indistinguishable from the real thing. The feedback on my system design diagrams helped me fix critical flaws before my loop.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_amH6oCCyIgrvuK5ic0LY2pOjIhZD-5vqRIn-DP1rWOuBbo2TjmzPyOyg0Ss0arFbARYUgGZlmAgNK66Ocl0D7Mjr8jD2qQ25qALUU6l8-G15Sk2sDP8uhoOftlMjfv5mzdbMu_8ksth0oqLptHxwEAUCEeTo0T1YQX2nUBBtBCNNZNZOZ_PP0gGjm-x-8PU77beS-SHjjqIJP6Y1O2TPgkmAlFdbDqUhdELU6XX35mDXm-fZZESJ",
                  featured: false,
                },
                {
                  name: "Sarah Jenkins",
                  role: "Frontend Lead at Meta",
                  quote: "I struggled with behavioral questions for years. InterviewAI's tone analysis gave me the confidence to articulate my impact effectively.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAontULDB1O5Un_0lbebH4gOR4LwN0D-4v_bwxfIeMdfSp-xyljv7vfL4iYW9U3j9gUSUJogqSf9dizi9iFK2eUsCj_tMwc2T0GTqBqbJYrS8f0BTk66KrLdyjUNr1-1ng5RdtA0E0-KJ3L3RDg-Mf5B-_hBYigZwI_rTmtZqitXzKZzi2rNhIlSLMcESNI4BjrbHifx0pWDZ0Z0yAeK7PfeOk276tuRvM4dv2m6hQeaHzWFeHva4BB",
                  featured: true,
                },
                {
                  name: "David Miller",
                  role: "Senior Engineer at Stripe",
                  quote: "The company-specific practice modes are a game changer. The Amazon Leadership Principles module was spot on.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWTmAJpKIA-bmSwOL3qP0G3IIc23_lH526JdXqKExQqQe83wJe1ytnq8v_laZqMgemTnRQRvBfMi45-Inv_14AKJp3Kf4nGVqo4OVMzKn7kKnLYQuzGzhQxNXJp1CMv6xBqFxS1KX3NeZ58YzZhmZezq8kT--KcR4qIDQroOTr5GexO44zNqQwbBlsngtjoU6LkmcYO_ovWdD8gYpX79VAAzX5xqOXx930t2Hn2W3Yb_32HGq7n3ow",
                  featured: false,
                },
              ].map((t) => (
                <div key={t.name} className={`glass-card p-8 rounded-2xl ${t.featured ? "border-primary/30" : ""}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high">
                      <img alt={t.name} className="w-full h-full object-cover" src={t.img} loading="lazy" />
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">{t.name}</p>
                      <p className="text-[12px] text-text-secondary">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-body-md text-text-secondary italic">"{t.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-32">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg mb-4">Pricing for Every Stage</h2>
              <p className="text-text-secondary">Start for free, upgrade when you're ready to get hired.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              <div className="glass-card p-8 rounded-3xl flex flex-col">
                <h3 className="font-headline-md mb-2">Free</h3>
                <p className="text-text-secondary mb-6">Essential prep for students.</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-text-secondary">/forever</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  <li className="flex items-center gap-2"><Icon name="check_circle" className="text-success text-sm" /> 2 Mock Interviews / Month</li>
                  <li className="flex items-center gap-2"><Icon name="check_circle" className="text-success text-sm" /> Basic Feedback Report</li>
                  <li className="flex items-center gap-2"><Icon name="check_circle" className="text-success text-sm" /> 500+ Practice Problems</li>
                  <li className="flex items-center gap-2 text-text-secondary/50"><Icon name="cancel" className="text-sm" /> Voice Simulation</li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-border-subtle hover:bg-surface-container-low transition-colors font-label-md">Get Started</button>
              </div>

              <div className="glass-card pricing-card-popular p-8 rounded-3xl flex flex-col relative md:scale-105 shadow-2xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 btn-primary px-4 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider">Most Popular</div>
                <h3 className="font-headline-md mb-2">Pro</h3>
                <p className="text-text-secondary mb-6">Complete interview mastery.</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-text-secondary">/month</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {[
                    "Unlimited AI Mock Interviews",
                    "Real-time Voice & Tone Analysis",
                    "Company-Specific Loops",
                    "System Design Whiteboard",
                    "Resume & GitHub Integration",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Icon name="check_circle" className="text-primary text-sm" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="btn-primary w-full py-4 rounded-xl shadow-lg font-headline-md">Unlock Pro Access</button>
              </div>

              <div className="glass-card p-8 rounded-3xl flex flex-col">
                <h3 className="font-headline-md mb-2">Enterprise</h3>
                <p className="text-text-secondary mb-6">For universities and cohorts.</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {["Everything in Pro", "Batch Onboarding", "Performance Dashboard", "Dedicated Support"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Icon name="check_circle" className="text-success text-sm" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl border border-border-subtle hover:bg-surface-container-low transition-colors font-label-md">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-surface-container-lowest/50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg mb-4">Frequently Asked Questions</h2>
              <p className="text-text-secondary">Everything you need to know about InterviewAI.</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "How accurate is the AI feedback?",
                  a: "Our AI is trained on thousands of real interview transcripts from top-tier companies. It benchmarks your answers against successful candidates, focusing on Big O efficiency, architectural trade-offs, and behavioral STAR method execution.",
                  open: true,
                },
                {
                  q: "Is my data and code private?",
                  a: "Absolutely. We encrypt all submissions. Your code and personal data are never used to train global models without explicit consent. Your practice sessions are private to you.",
                },
                {
                  q: "Which programming languages do you support?",
                  a: "We support 15+ major languages including Python, Java, C++, TypeScript, Go, Rust, and Ruby. Our code execution environment is isolated and fast.",
                },
              ].map((item) => (
                <details key={item.q} className="glass-card rounded-xl overflow-hidden group" open={item.open}>
                  <summary className="p-6 cursor-pointer flex justify-between items-center select-none font-headline-md text-lg list-none">
                    {item.q}
                    <Icon name="expand_more" className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-text-secondary">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="glass-card rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 mesh-ai-overlay opacity-50" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-block px-4 py-1 bg-primary/20 rounded-full text-primary font-bold text-[12px] mb-6 uppercase tracking-widest">
                Join 50,000+ Engineers
              </div>
              <h2 className="font-headline-xl text-headline-xl mb-6">Ready to land your dream role?</h2>
              <p className="text-text-secondary font-body-lg text-body-lg mb-10">
                Stop guessing what interviewers want. Start practicing with the tool that knows exactly how they think.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="btn-primary px-10 py-5 rounded-2xl font-headline-md shadow-2xl hover:brightness-110 transition-all">
                  Get Started For Free
                </button>
                <button className="bg-white/5 hover:bg-white/10 px-10 py-5 rounded-2xl font-headline-md border border-white/10 transition-colors backdrop-blur-md">
                  View Pro Features
                </button>
              </div>
              <p className="mt-8 text-text-secondary text-sm">No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-subtle py-12">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-4 text-text-secondary text-sm">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded btn-primary flex items-center justify-center">
              <Icon name="bolt" className="text-[14px]" fill />
            </span>
            <span>© 2026 InterviewAI. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
