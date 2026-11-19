import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  X,
  CheckCircle2,
  MapPin,
  Music,
  Briefcase,
  Users,
  Sparkles,
} from 'lucide-react';
import { projects, projectCategories } from '../data/portfolioData';

function ProjectMockupPlaceholder({ project }) {
  const variant = project.mockupVariant;

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent} bg-slate-900/95 p-5`}
    >
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      {variant === 'choozz' && (
        <div className="relative z-10 w-52 rounded-2xl border border-white/15 bg-[#0B1120]/90 p-3.5 shadow-2xl">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/20 px-2 py-0.5 font-mono text-[10px] text-blue-300">
              <MapPin className="h-2.5 w-2.5" /> Douala • Yaoundé
            </span>
            <span className="rounded bg-amber-500/20 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-amber-300">
              VIP
            </span>
          </div>
          <div className="h-14 rounded-lg bg-gradient-to-r from-blue-600/35 to-indigo-500/25 p-2.5">
            <div className="h-2 w-24 rounded bg-white/70" />
            <div className="mt-1.5 h-1.5 w-16 rounded bg-white/30" />
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <div className="rounded-md border border-white/10 bg-white/5 p-2">
              <div className="h-1.5 w-10 rounded bg-white/50" />
              <div className="mt-1 h-1.5 w-6 rounded bg-blue-400/60" />
            </div>
            <div className="rounded-md border border-white/10 bg-white/5 p-2">
              <div className="h-1.5 w-12 rounded bg-white/50" />
              <div className="mt-1 h-1.5 w-8 rounded bg-emerald-400/60" />
            </div>
          </div>
        </div>
      )}

      {variant === 'sonoritiz' && (
        <div className="relative z-10 w-52 rounded-2xl border border-white/15 bg-[#0B1120]/90 p-3.5 shadow-2xl">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 text-white shadow-lg shadow-blue-500/30">
              <Music className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="h-2 w-24 rounded bg-white/80" />
              <div className="mt-1.5 h-1.5 w-16 rounded bg-white/35" />
            </div>
          </div>
          <div className="mt-4 flex h-7 items-end justify-between gap-1 px-1">
            {[40, 75, 55, 95, 65, 85, 45, 90, 60, 75, 50, 80].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className={`w-1.5 rounded-full ${
                  i < 7 ? 'bg-blue-400' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
          <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-3/5 rounded-full bg-blue-500" />
          </div>
        </div>
      )}

      {variant === 'jobconnect' && (
        <div className="relative z-10 flex w-full max-w-[16rem] items-end gap-2.5">
          <div className="flex-1 rounded-xl border border-white/15 bg-[#0B1120]/90 p-3 shadow-2xl">
            <div className="mb-2 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="ml-auto font-mono text-[9px] text-cyan-300">
                Web + Mobile
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2">
                <Briefcase className="h-3.5 w-3.5 text-blue-400" />
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 w-20 rounded bg-white/70" />
                  <div className="h-1.5 w-12 rounded bg-white/30" />
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 w-16 rounded bg-white/70" />
                  <div className="h-1.5 w-10 rounded bg-white/30" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-24 w-14 shrink-0 rounded-xl border border-white/15 bg-[#0B1120]/95 p-2 shadow-xl">
            <div className="mx-auto mb-2 h-1 w-5 rounded-full bg-white/25" />
            <div className="space-y-1.5">
              <div className="h-4 rounded bg-blue-500/25" />
              <div className="h-4 rounded bg-white/10" />
              <div className="h-4 rounded bg-white/10" />
            </div>
          </div>
        </div>
      )}

      {variant === 'social' && (
        <div className="relative z-10 w-56 rounded-2xl border border-white/15 bg-[#0B1120]/90 p-3.5 shadow-2xl">
          <div className="mb-2.5 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/25 text-blue-300">
              <Users className="h-3.5 w-3.5" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-20 rounded bg-white/75" />
              <div className="h-1 w-12 rounded bg-white/30" />
            </div>
          </div>
          <div className="h-12 rounded-lg border border-white/10 bg-white/[0.04] p-2">
            <div className="h-1.5 w-full rounded bg-white/30" />
            <div className="mt-1.5 h-1.5 w-4/5 rounded bg-white/20" />
            <div className="mt-1.5 h-1.5 w-2/5 rounded bg-blue-400/50" />
          </div>
          <div className="mt-2.5 flex items-center gap-2">
            <span className="h-2 w-8 rounded-full bg-blue-500/40" />
            <span className="h-2 w-8 rounded-full bg-white/15" />
            <span className="ml-auto font-mono text-[9px] text-slate-400">
              Firebase
            </span>
          </div>
        </div>
      )}

      {/* Subtle corner badge indicating screenshot slot */}
      <span className="absolute bottom-2.5 right-3 rounded border border-white/10 bg-black/50 px-2 py-0.5 font-mono text-[10px] text-slate-300 backdrop-blur-sm">
        {project.subtitle}
      </span>
    </div>
  );
}

function ProjectCard({ project, onOpenDetails }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/45 hover:shadow-lg hover:shadow-blue-500/5 dark:border-white/10 dark:bg-surface-dark/75 dark:hover:border-blue-500/45"
    >
      {/* Image / Mockup zone */}
      <div className="relative h-52 w-full overflow-hidden border-b border-slate-200/80 dark:border-white/10">
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            loading="lazy"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <ProjectMockupPlaceholder project={project} />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] font-medium text-blue-600 dark:text-blue-400">
              {project.subtitle}
            </p>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            aria-label={`Voir les détails de ${project.title}`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
          >
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Tech stack badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-[11px] font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-3 border-t border-slate-200/80 pt-4 dark:border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-800 transition-colors hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-white/[0.08]"
          >
            <Github className="h-3.5 w-3.5" />
            <span>Code GitHub</span>
          </a>

          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-500"
          >
            <span>Démo / Détails</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'Tous'
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory)
        );

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="border-b border-slate-200/80 py-20 dark:border-white/10 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header + Category Filter */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
              01 / Réalisations
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Projets clés
            </h2>
            <p className="mt-2.5 max-w-xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              Une sélection d’applications mobiles, web et prototypes UI/UX
              conçus pour résoudre des usages concrets.
            </p>
          </motion.div>

          {/* Category filter pills */}
          <div
            role="tablist"
            aria-label="Filtrer les projets par catégorie"
            className="inline-flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white p-1 dark:border-white/10 dark:bg-surface-dark/70"
          >
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-3.5 py-1.5 font-mono text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive 2-column grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/15 dark:bg-[#0F172A]"
            >
              <div className="flex items-start justify-between border-b border-slate-200/80 px-6 py-5 dark:border-white/10">
                <div>
                  <p className="font-mono text-xs font-medium text-blue-600 dark:text-blue-400">
                    {selectedProject.subtitle}
                  </p>
                  <h3
                    id="project-modal-title"
                    className="mt-1 text-xl font-bold text-slate-900 dark:text-white"
                  >
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Fermer la fenêtre"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-5 px-6 py-5">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {selectedProject.longDescription}
                </p>

                <div>
                  <h4 className="mb-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Points clés
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Stack technique
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-200/80 bg-slate-50/70 px-6 py-4 dark:border-white/10 dark:bg-black/20">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:border-white/15 dark:bg-surface-dark dark:text-slate-200 dark:hover:bg-white/10"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>Voir sur GitHub</span>
                </a>

                {selectedProject.demoUrl ? (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    <span>Ouvrir la démo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    <span>Demander une démo</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
