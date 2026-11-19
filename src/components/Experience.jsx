import { motion } from 'framer-motion';
import { Briefcase, MapPin, GraduationCap } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-slate-200/80 bg-canvas-light py-20 dark:border-secondary/35 dark:bg-canvas-dark sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header + quick link to Education */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl"
          >
            <span className="inline-block rounded-full bg-primary-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-ink dark:bg-primary/15 dark:text-primary">
              Parcours professionnel
            </span>
            <h2
              id="experience-heading"
              className="mt-3 text-2xl font-extrabold tracking-tight text-ink dark:text-white sm:text-3xl"
            >
              Mes expériences sur le terrain
            </h2>
            <p className="mt-3 text-base leading-relaxed text-secondary dark:text-slate-300">
              Du plus récent au plus ancien, les entreprises et équipes avec
              lesquelles j’ai construit des applications web et mobiles à
              Douala.
            </p>
          </motion.div>

          <a
            href="#education"
            className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-ink shadow-soft transition-colors hover:border-primary/50 hover:text-primary-ink dark:border-secondary/50 dark:bg-surface-dark dark:text-slate-200 dark:hover:text-primary md:self-auto"
          >
            <GraduationCap className="h-4 w-4 text-primary-ink dark:text-primary" aria-hidden="true" />
            <span>Voir aussi mes diplômes</span>
          </a>
        </div>

        {/* Clean, directly readable vertical list — zero hidden clicks */}
        <div className="mt-12 space-y-5">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="grid grid-cols-1 gap-4 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-soft transition-colors hover:border-primary/50 dark:border-secondary/45 dark:bg-surface-dark sm:p-7 md:grid-cols-12 md:gap-6"
            >
              {/* Left: Period & status (super scannable) */}
              <div className="flex flex-row flex-wrap items-center justify-between gap-2 md:col-span-3 md:flex-col md:items-start md:justify-start md:border-r md:border-slate-200/80 md:pr-5 dark:md:border-secondary/40">
                <p className="font-mono text-sm font-bold text-ink dark:text-white">
                  {exp.period}
                </p>

                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                    exp.current
                      ? 'bg-primary text-primary-on'
                      : 'bg-slate-100 text-secondary dark:bg-secondary/40 dark:text-slate-300'
                  }`}
                >
                  {exp.type}
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-medium text-secondary dark:text-slate-400">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{exp.location}</span>
                </span>
              </div>

              {/* Right: Role, Company & plain-language description */}
              <div className="md:col-span-9">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-extrabold text-ink dark:text-white sm:text-xl">
                    {exp.role}
                  </h3>
                </div>

                <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-primary-ink dark:text-primary">
                  <Briefcase className="h-4 w-4" aria-hidden="true" />
                  <span>{exp.company}</span>
                </p>

                <p className="mt-3 text-[15px] leading-relaxed text-secondary dark:text-slate-300">
                  {exp.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-200 bg-canvas-light px-2.5 py-1 font-mono text-xs font-medium text-secondary dark:border-secondary/50 dark:bg-canvas-dark dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
