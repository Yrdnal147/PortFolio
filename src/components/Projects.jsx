import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ArrowRight,
  ArrowUpRight,
  X,
  CheckCircle2,
  MapPin,
  Music,
  Briefcase,
  Users,
  Sparkles,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Mail,
} from 'lucide-react';
import {
  personalInfo,
  projects,
  projectCategories,
} from '../data/portfolioData';

function ProjectVisualPreview({ project }) {
  const variant = project.mockupVariant;

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-primary-soft/60 to-slate-200/70 p-6 dark:from-surface-dark dark:via-secondary-dark/60 dark:to-canvas-dark">
      {variant === 'choozz' && (
        <div className="w-60 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 dark:border-secondary/60 dark:bg-surface-dark">
          <div className="mb-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-soft px-2.5 py-0.5 text-[11px] font-bold text-primary-ink dark:bg-primary/15 dark:text-primary">
              <MapPin className="h-3 w-3" aria-hidden="true" /> Douala • Yaoundé
            </span>
            <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-bold text-white">
              VIP
            </span>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-primary/25 to-primary/10 p-3 dark:from-primary/20 dark:to-secondary/40">
            <div className="h-2.5 w-28 rounded-full bg-ink/80 dark:bg-white/85" />
            <div className="mt-2 h-2 w-20 rounded-full bg-secondary/45 dark:bg-white/35" />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-slate-200 bg-canvas-light p-2.5 dark:border-secondary/50 dark:bg-canvas-dark">
              <div className="h-2 w-12 rounded-full bg-secondary/50 dark:bg-white/50" />
              <div className="mt-1.5 h-2 w-8 rounded-full bg-primary" />
            </div>
            <div className="rounded-xl border border-slate-200 bg-canvas-light p-2.5 dark:border-secondary/50 dark:bg-canvas-dark">
              <div className="h-2 w-14 rounded-full bg-secondary/50 dark:bg-white/50" />
              <div className="mt-1.5 h-2 w-10 rounded-full bg-primary/70" />
            </div>
          </div>
        </div>
      )}

      {variant === 'gesform' && (
        <div className="w-64 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 dark:border-secondary/60 dark:bg-surface-dark">
          <div className="mb-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-2.5 py-0.5 text-[10px] font-bold text-primary-ink dark:bg-primary/15 dark:text-primary">
              <CalendarCheck className="h-3 w-3" aria-hidden="true" /> Planning
              &amp; Salles
            </span>
            <span className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[9px] font-bold text-white">
              Vercel
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-canvas-light px-3 py-2 dark:border-secondary/50 dark:bg-canvas-dark">
              <div className="space-y-1">
                <div className="h-2 w-20 rounded-full bg-ink/80 dark:bg-white/85" />
                <div className="h-1.5 w-14 rounded-full bg-secondary/40 dark:bg-white/35" />
              </div>
              <span className="rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-primary-on">
                Salle libre
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-slate-200 bg-canvas-light p-2 dark:border-secondary/50 dark:bg-canvas-dark">
                <div className="h-1.5 w-12 rounded-full bg-secondary/50 dark:bg-white/45" />
                <div className="mt-1.5 h-2 w-10 rounded-full bg-primary" />
              </div>
              <div className="rounded-xl border border-slate-200 bg-canvas-light p-2 dark:border-secondary/50 dark:bg-canvas-dark">
                <div className="h-1.5 w-14 rounded-full bg-secondary/50 dark:bg-white/45" />
                <div className="mt-1.5 h-2 w-8 rounded-full bg-secondary/60 dark:bg-secondary-light" />
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-slate-200/80 pt-2 font-mono text-[9px] text-secondary dark:border-secondary/45 dark:text-slate-400">
            <span>API Laravel</span>
            <span>Présences · Cursus</span>
          </div>
        </div>
      )}

      {variant === 'sonoritiz' && (
        <div className="w-60 rounded-2xl border border-secondary/60 bg-ink p-4 text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-on shadow-md shadow-primary/25">
              <Music className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <div className="h-2.5 w-24 rounded-full bg-white/90" />
              <div className="mt-2 h-2 w-16 rounded-full bg-white/40" />
            </div>
          </div>
          <div className="mt-4 flex h-8 items-end justify-between gap-1 px-1">
            {[40, 75, 55, 95, 65, 85, 45, 90, 60, 75, 50, 80].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className={`w-1.5 rounded-full ${
                  i < 7 ? 'bg-primary' : 'bg-secondary'
                }`}
              />
            ))}
          </div>
          <div className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary/70">
            <div className="h-full w-3/5 rounded-full bg-primary" />
          </div>
        </div>
      )}

      {variant === 'jobconnect' && (
        <div className="flex w-full max-w-[17rem] items-end gap-2.5 transition-transform duration-300 group-hover:-translate-y-1">
          <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-lg dark:border-secondary/60 dark:bg-surface-dark">
            <div className="mb-2.5 flex items-center justify-between">
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-secondary" />
                <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-secondary" />
              </div>
              <span className="rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-bold text-primary-ink dark:bg-primary/15 dark:text-primary">
                Web + Mobile
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-canvas-light p-2 dark:border-secondary/50 dark:bg-canvas-dark">
                <Briefcase
                  className="h-4 w-4 text-primary-ink dark:text-primary"
                  aria-hidden="true"
                />
                <div className="flex-1 space-y-1">
                  <div className="h-2 w-20 rounded-full bg-ink/75 dark:bg-white/80" />
                  <div className="h-1.5 w-12 rounded-full bg-secondary/40 dark:bg-white/30" />
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-canvas-light p-2 dark:border-secondary/50 dark:bg-canvas-dark">
                <Sparkles
                  className="h-4 w-4 text-primary-ink dark:text-primary"
                  aria-hidden="true"
                />
                <div className="flex-1 space-y-1">
                  <div className="h-2 w-16 rounded-full bg-ink/75 dark:bg-white/80" />
                  <div className="h-1.5 w-10 rounded-full bg-secondary/40 dark:bg-white/30" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-24 w-14 shrink-0 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg dark:border-secondary/60 dark:bg-surface-dark">
            <div className="mx-auto mb-2 h-1 w-5 rounded-full bg-slate-300 dark:bg-secondary" />
            <div className="space-y-1.5">
              <div className="h-4 rounded-md bg-primary/40" />
              <div className="h-4 rounded-md bg-slate-200 dark:bg-secondary/50" />
              <div className="h-4 rounded-md bg-slate-200 dark:bg-secondary/50" />
            </div>
          </div>
        </div>
      )}

      {variant === 'social' && (
        <div className="w-60 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 dark:border-secondary/60 dark:bg-surface-dark">
          <div className="mb-3 flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft text-primary-ink dark:bg-primary/15 dark:text-primary">
              <Users className="h-4 w-4" aria-hidden="true" />
            </div>
            <div className="space-y-1.5">
              <div className="h-2 w-24 rounded-full bg-ink/80 dark:bg-white/80" />
              <div className="h-1.5 w-14 rounded-full bg-secondary/40 dark:bg-white/35" />
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-canvas-light p-2.5 dark:border-secondary/50 dark:bg-canvas-dark">
            <div className="h-2 w-full rounded-full bg-secondary/35 dark:bg-white/35" />
            <div className="mt-1.5 h-2 w-4/5 rounded-full bg-secondary/25 dark:bg-white/25" />
            <div className="mt-2 h-2 w-2/5 rounded-full bg-primary" />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-2.5 w-10 rounded-full bg-primary/60" />
            <span className="h-2.5 w-10 rounded-full bg-slate-200 dark:bg-secondary" />
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, onOpenDetails }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.28 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-card dark:border-secondary/45 dark:bg-surface-dark dark:hover:border-primary/50"
    >
      {/* Clean Visual Preview */}
      <div className="relative h-56 w-full overflow-hidden border-b border-slate-200/80 dark:border-secondary/40">
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={`Aperçu de ${project.title}`}
            loading="lazy"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <ProjectVisualPreview project={project} />
        )}

        <span className="absolute left-4 top-4 rounded-full border border-slate-200/80 bg-white/95 px-3 py-1 text-xs font-bold text-ink shadow-sm backdrop-blur-sm dark:border-secondary/60 dark:bg-surface-dark/90 dark:text-white">
          {project.badge}
        </span>
      </div>

      {/* Clear, human-friendly text */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xl font-extrabold tracking-tight text-ink dark:text-white">
            {project.title}
          </h3>
          <span className="font-mono text-xs font-semibold text-secondary dark:text-slate-400">
            {project.year}
          </span>
        </div>

        <p className="mt-3 text-[15px] leading-relaxed text-secondary dark:text-slate-300">
          {project.summary}
        </p>

        {/* Discreet tech tags for technical recruiters */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-200 bg-canvas-light px-2.5 py-1 font-mono text-xs font-medium text-secondary dark:border-secondary/50 dark:bg-canvas-dark dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Reviewed CTAs: 1 clear primary action + 1 discreet tech link */}
        <div className="mt-6 flex flex-col gap-2.5 border-t border-slate-200/80 pt-5 dark:border-secondary/40 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={(e) => onOpenDetails(project, e.currentTarget)}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-on shadow-sm shadow-primary/20 transition-all hover:bg-primary-hover active:scale-[0.98]"
          >
            <span>Voir le projet en détail</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-secondary transition-colors hover:border-secondary/40 hover:text-ink dark:border-secondary/55 dark:bg-canvas-dark dark:text-slate-300 dark:hover:border-primary/45 dark:hover:text-white"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span>Code</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const triggerRef = useRef(null);
  const closeBtnRef = useRef(null);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  const navPool = filteredProjects.length > 0 ? filteredProjects : projects;
  const selectedIndex = navPool.findIndex((p) => p.id === selectedProjectId);
  const selectedProject =
    selectedIndex >= 0
      ? navPool[selectedIndex]
      : projects.find((p) => p.id === selectedProjectId) || null;

  const openDetails = (project, triggerEl) => {
    triggerRef.current = triggerEl || null;
    setSelectedProjectId(project.id);
  };

  const closeDetails = () => {
    setSelectedProjectId(null);
    triggerRef.current?.focus();
  };

  const stepProject = (delta) => {
    if (selectedIndex < 0 || navPool.length <= 1) return;
    const nextIdx = (selectedIndex + delta + navPool.length) % navPool.length;
    setSelectedProjectId(navPool[nextIdx].id);
  };

  useEffect(() => {
    if (!selectedProject) return undefined;
    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeDetails();
      if (e.key === 'ArrowRight') stepProject(1);
      if (e.key === 'ArrowLeft') stepProject(-1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject, selectedIndex, navPool.length]);

  const getCount = (catId) =>
    catId === 'all'
      ? projects.length
      : projects.filter((p) => p.categories.includes(catId)).length;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-slate-200/80 bg-canvas-light py-20 dark:border-secondary/35 dark:bg-canvas-dark sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Clear header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl"
        >
          <span className="inline-block rounded-full bg-primary-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-ink dark:bg-primary/15 dark:text-primary">
            Réalisations
          </span>
          <h2
            id="projects-heading"
            className="mt-3 text-2xl font-extrabold tracking-tight text-ink dark:text-white sm:text-3xl"
          >
            Quelques projets que j’ai conçus et développés
          </h2>
          <p className="mt-3 text-base leading-relaxed text-secondary dark:text-slate-300">
            Découvrez des exemples concrets d’applications mobiles, de sites web
            et de maquettes réalisés pour répondre à de vrais besoins.
          </p>
        </motion.div>

        {/* Simple, non-technical filter tabs */}
        <div
          role="tablist"
          aria-label="Choisir un type de projet"
          className="mt-8 flex flex-wrap gap-2"
        >
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? 'border-primary bg-primary text-primary-on shadow-sm shadow-primary/25'
                    : 'border-slate-200 bg-white text-secondary hover:border-secondary/40 hover:text-ink dark:border-secondary/50 dark:bg-surface-dark dark:text-slate-300 dark:hover:border-primary/45 dark:hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-xs ${
                    isActive
                      ? 'bg-primary-on/15 text-primary-on'
                      : 'bg-slate-100 text-secondary dark:bg-secondary/40 dark:text-slate-300'
                  }`}
                >
                  {getCount(cat.id)}
                </span>
              </button>
            );
          })}
        </div>

        <span className="sr-only" aria-live="polite">
          {filteredProjects.length}{' '}
          {filteredProjects.length > 1 ? 'projets affichés' : 'projet affiché'}
        </span>

        {/* Spacious 2-column grid */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={openDetails}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Conversion CTA banner below projects */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-secondary/50 dark:bg-surface-dark sm:p-8 lg:flex-row lg:items-center"
        >
          <div>
            <h3 className="text-lg font-extrabold text-ink dark:text-white sm:text-xl">
              Vous avez une idée d’application ou un poste à pourvoir ?
            </h3>
            <p className="mt-1.5 text-sm text-secondary dark:text-slate-300 sm:text-base">
              Expliquez-moi simplement votre besoin, je vous réponds rapidement
              et sans jargon.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-on shadow-sm shadow-primary/25 transition-all hover:bg-primary-hover"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Discuter sur WhatsApp</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-secondary-light"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Envoyer un email</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Clear, Plain-Language Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDetails}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
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
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-secondary/60 dark:bg-surface-dark"
            >
              {/* Modal header */}
              <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-200 bg-white/95 px-6 py-5 backdrop-blur-md dark:border-secondary/45 dark:bg-surface-dark/95">
                <div>
                  <span className="inline-block rounded-full bg-primary-soft px-3 py-0.5 text-xs font-bold text-primary-ink dark:bg-primary/15 dark:text-primary">
                    {selectedProject.badge} · {selectedProject.year}
                  </span>
                  <h3
                    id="project-modal-title"
                    className="mt-2 text-2xl font-extrabold text-ink dark:text-white"
                  >
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={closeDetails}
                  aria-label="Fermer la fenêtre du projet"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-secondary transition-colors hover:bg-slate-100 hover:text-ink dark:border-secondary/55 dark:text-slate-300 dark:hover:bg-secondary/40 dark:hover:text-white"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {/* Modal body */}
              <div className="space-y-6 px-6 py-6">
                <div className="rounded-2xl border border-primary/30 bg-primary-soft/60 p-5 dark:border-primary/25 dark:bg-primary/10">
                  <h4 className="text-sm font-bold text-primary-ink dark:text-primary">
                    À quoi sert ce projet ?
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink dark:text-slate-200 sm:text-[15px]">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-bold text-ink dark:text-white">
                    Ce que j’ai réalisé
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.whatIBuilt.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-secondary dark:text-slate-300 sm:text-[15px]"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0 text-primary-ink dark:text-primary"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2.5 text-sm font-bold text-ink dark:text-white">
                    Technologies utilisées
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-200 bg-canvas-light px-3 py-1.5 font-mono text-xs font-semibold text-ink dark:border-secondary/55 dark:bg-canvas-dark dark:text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal footer with clear navigation & CTA */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-canvas-light px-6 py-4 dark:border-secondary/45 dark:bg-canvas-dark/70">
                {navPool.length > 1 ? (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => stepProject(-1)}
                      className="inline-flex min-h-[40px] items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 text-xs font-bold text-secondary hover:text-ink dark:border-secondary/55 dark:bg-surface-dark dark:text-slate-200"
                    >
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                      <span>Précédent</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => stepProject(1)}
                      className="inline-flex min-h-[40px] items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 text-xs font-bold text-secondary hover:text-ink dark:border-secondary/55 dark:bg-surface-dark dark:text-slate-200"
                    >
                      <span>Suivant</span>
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                ) : (
                  <span />
                )}

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-ink hover:bg-slate-50 dark:border-secondary/55 dark:bg-surface-dark dark:text-white"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    <span>Code GitHub</span>
                  </a>

                  {selectedProject.demoUrl ? (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-primary-on hover:bg-primary-hover"
                    >
                      <span>Ouvrir la démo</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      onClick={closeDetails}
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-primary px-4 text-xs font-bold text-primary-on hover:bg-primary-hover"
                    >
                      <span>Discuter d’un projet similaire</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
