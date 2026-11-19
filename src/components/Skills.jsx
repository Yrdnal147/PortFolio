import { motion } from 'framer-motion';
import { Smartphone, Server, Layers } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Smartphone,
  Server,
  Layers,
};

export default function Skills() {
  return (
    <section
      id="skills"
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
            02 / Compétences
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Stack technique &amp; savoir-faire
          </h2>
          <p className="mt-2.5 max-w-2xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Des technologies éprouvées en production pour livrer des produits
            mobiles et web maintenables, rapides et centrés utilisateur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Layers;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 transition-colors hover:border-blue-500/40 dark:border-white/10 dark:bg-surface-dark/70 dark:hover:border-blue-500/40"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {category.description}
                </p>

                <ul className="mt-auto flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 transition-colors group-hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:group-hover:border-white/15"
                    >
                      {skill}
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
