import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const values = [
  { number: "01", title: "Curiosity first", description: "I like asking better questions before I start building." },
  { number: "02", title: "Make it useful", description: "Good work should feel clear, intentional, and genuinely helpful." },
  { number: "03", title: "Keep learning", description: "Every project is a chance to stretch into something new." },
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream text-ink">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-8">
        <a href="#" className="font-display text-lg font-bold tracking-tight">PA<span className="text-moss">.</span></a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-ink/60 sm:flex">
          <a className="transition hover:text-ink" href="#about">About</a>
          <a className="transition hover:text-ink" href="#values">Values</a>
          <a className="transition hover:text-ink" href="#contact">Contact</a>
        </nav>
        <a href="mailto:acharyapragalbha@gmail.com" className="rounded-full border border-ink/15 px-4 py-2 text-xs font-bold transition hover:border-moss hover:bg-moss hover:text-white">Say hello</a>
      </header>

      <main>
        <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 lg:px-8 lg:pb-36 lg:pt-32">
          <div className="pointer-events-none absolute -right-40 top-4 -z-0 h-96 w-96 rounded-full bg-lime/70 blur-3xl" />
          <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-moss"><span className="h-2 w-2 rounded-full bg-moss" />Personal website · 2024</p>
          <h1 className="relative z-10 max-w-4xl font-display text-6xl font-bold leading-[0.94] tracking-[-0.06em] sm:text-8xl lg:text-[9.5rem]">Hello, I&apos;m <span className="text-moss">Pragalbha.</span></h1>
          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-ink/15 pt-6 sm:flex-row sm:items-start">
            <p className="max-w-md text-lg leading-relaxed text-ink/65">I&apos;m building this space to share a little about myself, my interests, and what I&apos;m working on.</p>
            <a href="#about" className="group flex items-center gap-2 text-sm font-bold">Explore my world<ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} /></a>
          </div>
        </section>

        <section id="about" className="bg-moss text-cream">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.5fr] lg:px-8 lg:py-32">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime">01 / About me</p>
            <div>
              <h2 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">A work in progress, in the best possible way.</h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/70">I&apos;m interested in the ideas, people, and small details that make digital experiences feel more human. This is where I&apos;ll document the things I learn and the projects I&apos;m proud of.</p>
            </div>
          </div>
        </section>

        <section id="values" className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-moss">02 / What matters</p><h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">A few guiding ideas.</h2></div>
            <p className="max-w-xs text-sm leading-relaxed text-ink/55">The principles I bring to every new challenge.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.number} className="rounded-2xl bg-white p-7 shadow-card">
                <span className="text-sm font-bold text-moss">{value.number}</span>
                <h3 className="mt-16 font-display text-2xl font-bold">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/55">{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-6 mb-6 rounded-3xl bg-lime px-6 py-20 text-center sm:px-12 lg:mx-auto lg:max-w-6xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-moss">03 / Contact</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">Let&apos;s make something meaningful.</h2>
          <a href="mailto:acharyapragalbha@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-cream transition hover:bg-moss"><Mail size={17} />acharyapragalbha@gmail.com</a>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 text-sm text-ink/50 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Pragalbha Acharya</p>
        <div className="flex gap-4">
          <a href="https://github.com/ludeathefer" aria-label="GitHub" className="transition hover:text-ink"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/pragalbha-acharya-a371b4299" aria-label="LinkedIn" className="transition hover:text-ink"><Linkedin size={18} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
