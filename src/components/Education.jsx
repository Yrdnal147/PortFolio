import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-secondary/15 py-20 dark:border-secondary/40 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2.5">
            <span className="rounded-md bg-primary/15 px-2 py-0.5 font-mono text-xs font-semibold text-primary-ink dark:text-primary">
              [F]
            </span>
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-secondary dark:text-slate-400">
              04 / Formation académique
            </span>
          </div>
          <h2
            id="education-heading"
            className="mt-2.5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
          >
            Formations &amp; diplômes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* University Degrees */}
          <motion.div
            data-bp-box
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-secondary/20 bg-white p-6 dark:border-secondary/50 dark:bg-surface-dark/80"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary-ink dark:text-primary">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Diplômes universitaires
              </h3>
            </div>

            <ul className="divide-y divide-secondary/15 dark:divide-secondary/40">
              {education.degrees.map((degree) => (
                <li
                  key={`${degree.title}-${degree.period}`}
                  className="py-3.5 first:pt-0 last:pb-0"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {degree.title}
                      </p>
                      <p className="mt-0.5 text-xs text-secondary dark:text-slate-400">
                        {degree.institution}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 font-mono text-[11px] ${
                        degree.current
                          ? 'font-semibold text-primary-ink dark:text-primary'
                          : 'text-secondary/80 dark:text-slate-400'
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
            data-bp-box
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="flex flex-col rounded-2xl border border-secondary/20 bg-white p-6 dark:border-secondary/50 dark:bg-surface-dark/80"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary-ink dark:text-primary">
                <Award className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Formations spécialisées
              </h3>
            </div>

            <ul className="divide-y divide-secondary/15 dark:divide-secondary/40">
              {education.certifications.map((cert) => (
                <li
                  key={`${cert.title}-${cert.period}`}
                  className="py-4 first:pt-0 last:pb-0"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {cert.title}
                      </p>
                      <p className="mt-0.5 text-xs text-secondary dark:text-slate-400">
                        {cert.institution}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] text-secondary/80 dark:text-slate-400">
                      {cert.period}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <div className="rounded-xl border border-secondary/15 bg-secondary/[0.05] p-4 dark:border-secondary/45 dark:bg-secondary/20">
                <p className="font-mono text-xs leading-relaxed text-secondary dark:text-slate-300">
                  Cursus Génie Logiciel (Bac+5) combiné à une pratique intensive
                  en architecture mobile Flutter, écosystème React et design
                  produit Figma.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
