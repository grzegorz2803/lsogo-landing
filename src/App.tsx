import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { SectionDivider } from "./components/SectionDivider";
import { SectionHeading } from "./components/SectionHeading";
import { landingContent } from "./content/landingContent";
import { useState } from "react";

function App() {
  const { brand, nav, hero, features, premiere, contact, footer } =
    landingContent;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-amber-400/8 blur-3xl" />
        <div className="absolute bottom-[5%] right-[-5%] h-80 w-80 rounded-full bg-amber-300/8 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <Container className="py-5">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-3xl font-semibold tracking-[0.08em] text-amber-400"
            >
              {brand}
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base text-slate-200 transition hover:text-amber-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#kontakt"
              className="hidden rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950! shadow-[0_0_20px_rgba(251,191,36,0.3)] transition hover:bg-amber-300 md:inline-flex"
            >
              Kontakt
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 text-sm font-semibold text-slate-100 transition hover:bg-white/10 md:hidden"
            >
              Menu
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-[0_0_30px_rgba(2,6,23,0.4)] md:hidden">
              <div className="flex flex-col gap-3">
                {nav.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base text-slate-200 transition hover:bg-white/5 hover:text-amber-300"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="#kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950! shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                >
                  Kontakt
                </a>
              </div>
            </div>
          )}
        </Container>
      </header>

      <main className="relative z-10">
        <section className="flex min-h-[72vh] items-center py-14 md:min-h-[86vh] md:py-28">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="max-w-3xl">
                <div className="inline-flex rounded-full border border-amber-300/20 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
                  {hero.badge}
                </div>

                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-amber-300 drop-shadow-[0_0_25px_rgba(251,191,36,0.35)] sm:text-6xl md:mt-8 md:text-7xl lg:text-8xl">
                  {hero.title}
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl md:mt-6 md:text-2xl md:leading-9">
                  {hero.subtitle}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg md:mt-6 md:leading-8">
                  {hero.description}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button href={hero.primaryHref}>{hero.primaryCta}</Button>
                  <Button href={hero.secondaryHref} variant="secondary">
                    {hero.secondaryCta}
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <SectionDivider />

        <section id="funkcje" className="py-10">
          <Container>
            <SectionHeading
              eyebrow={features.eyebrow}
              title={features.title}
              description={features.description}
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {features.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-4xl border border-white/10 bg-slate-950/50 p-8 shadow-[0_0_40px_rgba(2,6,23,0.35)] transition hover:-translate-y-1 hover:border-amber-300/20"
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-2xl text-slate-950 shadow-[0_0_30px_rgba(251,191,36,0.35)]">
                    ✦
                  </div>
                  <h3 className="text-2xl font-semibold text-amber-200">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-slate-300">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <SectionDivider />

        <section id="premiera" className="py-10">
          <Container>
            <div className="rounded-4xl border border-amber-300/15 bg-slate-950/45 p-8 shadow-[0_0_40px_rgba(2,6,23,0.35)] md:p-12">
              <SectionHeading
                eyebrow={premiere.eyebrow}
                title={premiere.title}
                centered={false}
              />

              <div className="mt-6 inline-flex rounded-full border border-amber-300/25 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
                {premiere.badge}
              </div>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
                {premiere.text}
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {/* BOX premiera */}
                <div className="inline-flex flex-col rounded-2xl border border-amber-300/20 bg-amber-400/8 px-5 py-4 shadow-[0_0_24px_rgba(251,191,36,0.08)] w-fit">
                  <span className="text-xs uppercase tracking-[0.22em] text-amber-300/70">
                    {premiere.timelineLabel}
                  </span>
                  <span className="mt-2 text-2xl font-semibold text-amber-200 md:text-3xl">
                    {premiere.timelineValue}
                  </span>
                </div>

                {/* BADGE pilotaż */}
                <div className="inline-flex w-fit rounded-full border border-green-300/30 bg-green-400/10 px-4 py-2 text-sm text-green-300">
                  Pilotaż — bezpłatny dostęp
                </div>
              </div>

              <p className="mt-6 text-lg text-amber-300">{premiere.pilot}</p>
              <Button href="#kontakt" className="mt-6">
                Zgłoś parafię do pilotażu
              </Button>
            </div>
          </Container>
        </section>

        <SectionDivider />

        <section id="kontakt" className="py-10 pb-24">
          <Container>
            <div className="rounded-4xl border border-white/10 bg-slate-950/50 p-8 shadow-[0_0_40px_rgba(2,6,23,0.35)] md:p-12">
              <SectionHeading
                eyebrow={contact.eyebrow}
                title={contact.title}
                centered={false}
              />

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {contact.text}
              </p>

              <div className="mt-8">
                <Button href={`mailto:${contact.email}`}>
                  {contact.email}
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        {footer}
      </footer>
    </div>
  );
}

export default App;
