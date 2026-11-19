import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Layers,
  Clock,
} from 'lucide-react';
import { personalInfo, projects, experiences } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero({ reducedMotion, onQuickFilterCategory }) {
  const [focusIdx, setFocusIdx] = useState(0);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const id = window.setInterval(() => {
      setFocusIdx((prev) => (prev + 1) % personalInfo.rotatingFocus.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const jumpToCategory = (category) => {
    onQuickFilterCategory(category);
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Présentation"
      className="relative overflow-hidden border-b border-secondary/15 dark:border-secondary/40"
    >
      {/* Subtle radial spotlight & dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-subtle-grid [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_65%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px] dark:bg-primary/10"
      />

      <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left: Identity, rotating craft focus, CTAs & social bar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/35 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary-ink dark:border-primary/30 dark:bg-primary/10 dark:text-primary">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  {!reducedMotion && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  )}
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span>{personalInfo.availability}</span>
              </span>
            </motion.div>

            {/* Main H1 */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
            >
              {personalInfo.fullName}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-3.5 font-mono text-sm font-semibold text-primary-ink dark:text-primary sm:text-[15px]"
            >
              {personalInfo.role}
            </motion.p>

            {/* Dynamic specialization rotator */}
            <motion.div
              variants={itemVariants}
              className="mt-3 flex flex-wrap items-baseline gap-x-1.5 text-sm font-medium text-secondary dark:text-slate-300"
            >
              <span className="font-mono text-xs text-secondary/80 dark:text-slate-400">
                &gt;_ focus :
              </span>
              {reducedMotion ? (
                <span className="font-semibold text-slate-900 dark:text-white">
                  {personalInfo.rotatingFocus[0]}
                </span>
              ) : (
                <span className="relative inline-flex h-6 overflow-hidden align-bottom">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={focusIdx}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.28 }}
                      className="font-semibold text-slate-900 dark:text-white"
                    >
                      {personalInfo.rotatingFocus[focusIdx]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              )}
            </motion.div>

            {/* Hook (2 lines max) */}
            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-xl text-base leading-relaxed text-secondary dark:text-slate-400"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Primary (#04E762) & Secondary (#454955) CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-on shadow-sm shadow-primary/25 transition-all hover:bg-primary-hover active:scale-[0.98]"
              >
                <span>Voir mes projets</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-secondary/35 bg-secondary px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-secondary-light active:scale-[0.98] dark:border-secondary dark:bg-secondary/45 dark:text-slate-100 dark:hover:border-primary/40 dark:hover:bg-secondary/70"
              >
                <span>Me contacter</span>
              </a>
            </motion.div>

            {/* Social links & location */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-secondary/15 pt-5 text-sm text-secondary dark:border-secondary/40 dark:text-slate-400"
            >
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-primary-ink dark:hover:text-primary"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span className="font-mono text-xs">GitHub</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-primary-ink dark:hover:text-primary"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span className="font-mono text-xs">
                  {personalInfo.linkedinName}
                </span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-primary-ink dark:hover:text-primary"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span className="font-mono text-xs">{personalInfo.email}</span>
              </a>

              <span className="inline-flex items-center gap-1 text-secondary/75 dark:text-slate-500">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="font-mono text-xs">{personalInfo.location}</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Quick-access interactive decks for Réalisations & Parcours */}
          <motion.aside
            aria-label="Accès rapide aux réalisations et au parcours"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="flex flex-col gap-4 lg:col-span-5"
          >
            {/* Deck 1: Réalisations Quick Access */}
            <div
              data-bp-box
              className="group relative overflow-hidden rounded-2xl border border-secondary/20 bg-white/95 p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 dark:border-secondary/50 dark:bg-surface-dark/80 dark:hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-primary/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-primary-ink dark:text-primary">
                    [P]
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    Réalisations
                  </span>
                </div>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 font-mono text-xs font-medium text-primary-ink transition-colors hover:opacity-80 dark:text-primary"
                >
                  <span>0{projects.length} projets</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>

              {/* Fanned mini-cards preview */}
              <a
                href="#projects"
                aria-label="Accéder aux 4 réalisations clés"
                className="mt-4 grid grid-cols-2 gap-2"
              >
                {projects.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-xl border border-secondary/15 bg-secondary/[0.04] p-2.5 transition-all duration-200 group-hover:border-primary/30 dark:border-secondary/40 dark:bg-secondary/15"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-semibold text-primary-ink dark:text-primary">
                        {p.index}
                      </span>
                      <span className="font-mono text-[9px] text-secondary/80 dark:text-slate-400">
                        {p.categories[0]}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-xs font-semibold text-slate-900 dark:text-white">
                      {p.title}
                    </p>
                    <p className="mt-0.5 truncate font-mono text-[10px] text-secondary/80 dark:text-slate-400">
                      {p.stack.slice(0, 2).join(' · ')}
                    </p>
                  </div>
                ))}
              </a>

              {/* 1-click filtered jumps */}
              <div className="mt-3.5 flex flex-wrap items-center gap-1.5 border-t border-secondary/15 pt-3 dark:border-secondary/40">
                <Layers
                  className="mr-0.5 h-3.5 w-3.5 text-secondary/70 dark:text-slate-400"
                  aria-hidden="true"
                />
                {['Mobile', 'Web', 'UI/UX'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => jumpToCategory(cat)}
                    className="rounded-md border border-secondary/20 bg-white px-2 py-0.5 font-mono text-[10px] font-medium text-secondary transition-colors hover:border-primary/60 hover:text-primary-ink dark:border-secondary/50 dark:bg-secondary/20 dark:text-slate-300 dark:hover:border-primary/60 dark:hover:text-primary"
                  >
                    Filtrer : {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Deck 2: Parcours Stamp Strip Quick Access */}
            <a
              href="#experience"
              data-bp-box
              aria-label="Explorer le parcours professionnel de 2021 à 2026"
              className="group block rounded-2xl border border-secondary/20 bg-white/95 p-5 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 dark:border-secondary/50 dark:bg-surface-dark/80 dark:hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-primary/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-primary-ink dark:text-primary">
                    [E]
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    Parcours
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-secondary transition-colors group-hover:text-primary-ink dark:text-slate-400 dark:group-hover:text-primary">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>2021 → 2026</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>

              <div className="mt-3.5 grid grid-cols-5 gap-1.5">
                {experiences.map((exp, idx) => (
                  <div
                    key={exp.id}
                    className={`flex flex-col items-center rounded-lg border px-1.5 py-2 text-center transition-transform duration-200 group-hover:-translate-y-0.5 ${
                      idx === 0
                        ? 'border-primary/50 bg-primary/15 text-primary-ink dark:text-primary'
                        : 'border-secondary/20 bg-secondary/[0.05] text-secondary dark:border-secondary/45 dark:bg-secondary/20 dark:text-slate-300'
                    }`}
                  >
                    <span className="font-mono text-xs font-bold">
                      {exp.monogram}
                    </span>
                    <span className="mt-1 font-mono text-[9px] opacity-75">
                      {exp.shortPeriod.slice(-4)}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-xs text-secondary dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-slate-200">
                  Ziloo
                </span>{' '}
                · OIF Inchclass · Localhost Digital · Fulife · Nexttel
              </p>
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
