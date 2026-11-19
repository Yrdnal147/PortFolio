import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  MapPin,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ reducedMotion }) {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-slate-200/80 bg-white dark:border-secondary/35 dark:bg-canvas-dark"
    >
      {/* Very soft ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/15 blur-[120px] dark:bg-primary/10"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left column: clear, human introduction & CTA hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7"
          >
            {/* Friendly availability pill */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary-soft px-4 py-1.5 text-sm font-semibold text-primary-ink dark:border-primary/35 dark:bg-primary/15 dark:text-primary">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  {!reducedMotion && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  )}
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                <span>{personalInfo.availability}</span>
              </span>
            </div>

            {/* Clear name & value proposition */}
            <p className="text-base font-semibold text-secondary dark:text-slate-300 sm:text-lg">
              Bonjour, je suis{' '}
              <span className="font-bold text-ink dark:text-white">
                {personalInfo.fullName}
              </span>
            </p>

            <h1
              id="hero-heading"
              className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-ink dark:text-white sm:text-4xl lg:text-[2.75rem]"
            >
              {personalInfo.headline}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-secondary dark:text-slate-300 sm:text-lg">
              {personalInfo.tagline}
            </p>

            {/* Primary & Secondary CTAs (touch-friendly >= 48px) */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#projects"
                className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-2xl bg-primary px-6 py-3.5 text-base font-bold text-primary-on shadow-sm shadow-primary/30 transition-all hover:bg-primary-hover active:scale-[0.98]"
              >
                <span>Découvrir mes réalisations</span>
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-2xl bg-secondary px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-secondary-light active:scale-[0.98] dark:bg-secondary/75 dark:hover:bg-secondary"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>Discuter ensemble</span>
              </a>
            </div>

            {/* Direct tertiary CV link + reassuring note */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-secondary dark:text-slate-400">
              <a
                href={personalInfo.cvPath}
                download
                className="inline-flex min-h-[40px] items-center gap-2 font-semibold text-ink underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary-ink dark:text-white dark:hover:text-primary"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Télécharger mon CV (PDF)</span>
              </a>

              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2
                  className="h-4 w-4 text-primary-ink dark:text-primary"
                  aria-hidden="true"
                />
                <span>{personalInfo.responseTime}</span>
              </span>
            </div>
          </motion.div>

          {/* Right column: Human Portrait Card + 3 easy-to-read milestones */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-slate-200/90 bg-canvas-light p-5 shadow-card dark:border-secondary/50 dark:bg-surface-dark sm:p-6">
              {/* Dedicated Portrait Frame (public/photo-samuel.jpg) */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-secondary/50 dark:bg-canvas-dark">
                {!photoError ? (
                  <img
                    src={personalInfo.photoPath}
                    alt={`Portrait de ${personalInfo.fullName}`}
                    onError={() => setPhotoError(true)}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-primary-soft via-white to-slate-100 p-6 text-center dark:from-secondary-dark dark:via-surface-dark dark:to-canvas-dark">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary bg-secondary text-3xl font-extrabold tracking-tight text-white shadow-lg shadow-primary/15">
                      {personalInfo.initials}
                    </div>
                    <p className="mt-4 text-base font-bold text-ink dark:text-white">
                      {personalInfo.fullName}
                    </p>
                    <p className="mt-1 text-xs font-medium text-secondary dark:text-slate-400">
                      {personalInfo.shortRole}
                    </p>
                  </div>
                )}

                {/* Location badge */}
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/95 px-3 py-1 text-xs font-semibold text-ink shadow-sm backdrop-blur-sm dark:border-secondary/60 dark:bg-surface-dark/90 dark:text-white">
                  <MapPin
                    className="h-3.5 w-3.5 text-primary-ink dark:text-primary"
                    aria-hidden="true"
                  />
                  <span>{personalInfo.location}</span>
                </span>
              </div>

              {/* 3 instant trust & clarity metrics */}
              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {personalInfo.keyMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-slate-200/80 bg-white p-3 text-center dark:border-secondary/45 dark:bg-canvas-dark/80"
                  >
                    <p className="text-base font-extrabold text-ink dark:text-white sm:text-lg">
                      {metric.value}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium leading-tight text-secondary dark:text-slate-400">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
