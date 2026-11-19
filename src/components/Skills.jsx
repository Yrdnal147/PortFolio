import { motion } from 'framer-motion';
import { Smartphone, Server, Layers, ArrowUpRight } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Smartphone,
  Server,
  Layers,
};

export default function Skills({ onFilterByTech, reducedMotion }) {
  const handleSkillClick = (tech) => {
    if (!tech) return;
    onFilterByTech(tech);
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
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
              [S]
            </span>
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-secondary dark:text-slate-400">
              02 / Compétences
            </span>
          </div>
          <h2
            id="skills-heading"
            className="mt-2.5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
          >
            Stack technique &amp; savoir-faire
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-secondary dark:text-slate-400 sm:text-base">
            Clique sur une technologie marquée d’une flèche pour filtrer
            instantanément les réalisations associées.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Layers;
            return (
              <motion.div
                key={category.id}
                data-bp-box
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group flex flex-col rounded-2xl border border-secondary/20 bg-white p-6 transition-colors hover:border-primary/50 dark:border-secondary/50 dark:bg-surface-dark/80 dark:hover:border-primary/50"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary-ink dark:text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-secondary/70 dark:text-slate-500">
                    {category.code}
                  </span>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-secondary dark:text-slate-400">
                  {category.description}
                </p>

                <ul className="mt-auto flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <li key={skill.name}>
                      {skill.filterTech ? (
                        <button
                          type="button"
                          onClick={() => handleSkillClick(skill.filterTech)}
                          title={`Voir les projets utilisant ${skill.filterTech}`}
                          className="inline-flex items-center gap-1 rounded-md border border-secondary/20 bg-secondary/[0.05] px-2.5 py-1 font-mono text-xs font-medium text-slate-800 transition-colors hover:border-primary/60 hover:bg-primary/15 hover:text-primary-ink dark:border-secondary/50 dark:bg-secondary/25 dark:text-slate-200 dark:hover:border-primary/60 dark:hover:bg-primary/15 dark:hover:text-primary"
                        >
                          <span>{skill.name}</span>
                          <ArrowUpRight
                            className="h-3 w-3 opacity-70"
                            aria-hidden="true"
                          />
                        </button>
                      ) : (
                        <span className="inline-block rounded-md border border-secondary/20 bg-secondary/[0.05] px-2.5 py-1 font-mono text-xs font-medium text-slate-800 dark:border-secondary/50 dark:bg-secondary/25 dark:text-slate-200">
                          {skill.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
