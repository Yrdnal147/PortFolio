import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  const degrees = education.degrees || [];
  const attestations = education.Attestations || education.certifications || [];

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-slate-200/80 bg-white py-20 dark:border-secondary/35 dark:bg-canvas-dark sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl"
        >
          <span className="inline-block rounded-full bg-primary-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-ink dark:bg-primary/15 dark:text-primary">
            Diplômes &amp; Formations
          </span>
          <h2
            id="education-heading"
            className="mt-3 text-2xl font-extrabold tracking-tight text-ink dark:text-white sm:text-3xl"
          >
            Mon parcours académique
          </h2>
          <p className="mt-3 text-base leading-relaxed text-secondary dark:text-slate-300">
            Une formation universitaire complète en Génie Logiciel (jusqu’au
            Master 2), renforcée par des spécialisations pratiques en mobile et
            web.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* University Degrees */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-slate-200/90 bg-canvas-light p-6 shadow-soft dark:border-secondary/45 dark:bg-surface-dark sm:p-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-on">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-ink dark:text-white">
                Diplômes universitaires
              </h3>
            </div>

            <ul className="divide-y divide-slate-200 dark:divide-secondary/40">
              {degrees.map((degree) => (
                <li
                  key={`${degree.title}-${degree.period}`}
                  className="py-4 first:pt-0 last:pb-0"
                >
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start sm:gap-4">
                    <div>
                      <p className="text-base font-bold text-ink dark:text-white">
                        {degree.title}
                      </p>
                      <p className="mt-0.5 text-sm text-secondary dark:text-slate-400">
                        {degree.institution}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 font-mono text-xs font-semibold ${
                        degree.current
                          ? 'bg-primary-soft text-primary-ink dark:bg-primary/15 dark:text-primary'
                          : 'text-secondary dark:text-slate-400'
                      }`}
                    >
                      {degree.period}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Specialized Trainings */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="flex flex-col rounded-3xl border border-slate-200/90 bg-canvas-light p-6 shadow-soft dark:border-secondary/45 dark:bg-surface-dark sm:p-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-white">
                <Award className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-ink dark:text-white">
                Attestations &amp; Formations
              </h3>
            </div>

            <ul className="divide-y divide-slate-200 dark:divide-secondary/40">
              {attestations.map((cert) => (
                <li
                  key={`${cert.title}-${cert.period}`}
                  className="py-4 first:pt-0 last:pb-0"
                >
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start sm:gap-4">
                    <div>
                      <p className="text-base font-bold text-ink dark:text-white">
                        {cert.title}
                      </p>
                      <p className="mt-0.5 text-sm text-secondary dark:text-slate-400">
                        {cert.institution}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-xs font-semibold text-secondary dark:text-slate-400">
                      {cert.period}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <div className="rounded-2xl border border-primary/30 bg-primary-soft/70 p-4 dark:border-primary/25 dark:bg-primary/10">
                <p className="text-sm leading-relaxed text-ink dark:text-slate-200">
                  Un double socle <strong>académique (Bac+5)</strong> et{' '}
                  <strong>pratique</strong> pour concevoir des solutions
                  fiables, claires et adaptées aux besoins réels des
                  utilisateurs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
