import { motion } from 'framer-motion';
import { Smartphone, Globe, Palette } from 'lucide-react';
import { servicesAndSkills } from '../data/portfolioData';

const iconMap = {
  Smartphone,
  Globe,
  Palette,
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
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
            Ce que je peux faire pour vous
          </span>
          <h2
            id="skills-heading"
            className="mt-3 text-2xl font-extrabold tracking-tight text-ink dark:text-white sm:text-3xl"
          >
            Services &amp; compétences clés
          </h2>
          <p className="mt-3 text-base leading-relaxed text-secondary dark:text-slate-300">
            Que vous cherchiez à créer une application pour vos clients ou à
            renforcer votre équipe technique, j’interviens sur trois domaines
            complémentaires.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {servicesAndSkills.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="flex flex-col rounded-3xl border border-slate-200/90 bg-canvas-light p-7 shadow-soft transition-all hover:border-primary/55 hover:shadow-card dark:border-secondary/45 dark:bg-surface-dark dark:hover:border-primary/50"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-on shadow-sm shadow-primary/20">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-secondary dark:text-slate-400">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-secondary dark:text-slate-300 sm:text-[15px]">
                  {service.plainDescription}
                </p>

                {/* Technical skills cleanly grouped at the bottom (no progress bars) */}
                <div className="mt-auto pt-6">
                  <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-secondary/80 dark:text-slate-400">
                    {service.toolsLabel}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-ink dark:border-secondary/50 dark:bg-canvas-dark dark:text-slate-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
