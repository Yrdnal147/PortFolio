import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-slate-200/80 py-20 dark:border-white/10 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
            03 / Parcours professionnel
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Expériences professionnelles
          </h2>
          <p className="mt-2.5 max-w-2xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Un parcours progressif en développement web et mobile au sein
            d’équipes techniques à Douala.
          </p>
        </motion.div>

        <div className="relative pl-6 sm:pl-8">
          {/* Vertical timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[7px] top-2 w-px bg-slate-200 dark:bg-white/10 sm:left-[9px]"
          />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative"
              >
                {/* Timeline dot */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-6 top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 sm:-left-8 sm:h-5 sm:w-5 ${
                    exp.current
                      ? 'border-blue-500 bg-blue-500/20'
                      : 'border-slate-300 bg-canvas-light dark:border-white/25 dark:bg-canvas-dark'
                  }`}
                >
                  {exp.current && (
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                  )}
                </span>

                <div className="rounded-2xl border border-slate-200/90 bg-white p-5 transition-colors hover:border-blue-500/35 dark:border-white/10 dark:bg-surface-dark/70 dark:hover:border-blue-500/35 sm:p-6">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-blue-600 dark:text-blue-400">
                            Actuel
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
                        <span className="inline-flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                          <Briefcase className="h-3.5 w-3.5 text-blue-500" />
                          {exp.company}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <span className="shrink-0 font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-3.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {exp.description}
                  </p>

                  {exp.tags && exp.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
