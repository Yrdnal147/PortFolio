import { useState, useEffect, useRef } from 'react';
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
  Link2,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
} from 'lucide-react';
import {
  projects,
  projectCategories,
  projectTechFilters,
} from '../data/portfolioData';

function ProjectMockupPlaceholder({ project }) {
  const variant = project.mockupVariant;

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent} bg-slate-900/95 p-5`}
    >
      {/* Subtle architectural dot grid */}
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
        <div className="relative z-10 w-56 rounded-2xl border border-white/15 bg-[#0B1120]/90 p-3.5 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/20 px-2 py-0.5 font-mono text-[10px] text-blue-300">
              <MapPin className="h-2.5 w-2.5" aria-hidden="true" /> Douala •
              Yaoundé
            </span>
            <span className="rounded bg-amber-500/20 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-amber-300">
              VIP
            </span>
          </div>
          <div className="h-14 rounded-lg bg-gradient-to-r from-blue-600/35 to-indigo-500/25 p-2.5">
            <div className="h-2 w-24 rounded bg-white/75" />
            <div className="mt-1.5 h-1.5 w-16 rounded bg-white/30" />
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <div className="rounded-md border border-white/10 bg-white/5 p-2">
              <div className="h-1.5 w-10 rounded bg-white/55" />
              <div className="mt-1 h-1.5 w-6 rounded bg-blue-400/70" />
            </div>
            <div className="rounded-md border border-white/10 bg-white/5 p-2">
              <div className="h-1.5 w-12 rounded bg-white/55" />
              <div className="mt-1 h-1.5 w-8 rounded bg-emerald-400/70" />
            </div>
          </div>
        </div>
      )}

      {variant === 'sonoritiz' && (
        <div className="relative z-10 w-56 rounded-2xl border border-white/15 bg-[#0B1120]/90 p-3.5 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 text-white shadow-lg shadow-blue-500/30">
              <Music className="h-5 w-5" aria-hidden="true" />
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
                className={`w-1.5 rounded-full transition-all duration-300 ${
                  i < 7
                    ? 'bg-blue-400 group-hover:bg-sky-300'
                    : 'bg-white/20'
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
        <div className="relative z-10 flex w-full max-w-[16.5rem] items-end gap-2.5 transition-transform duration-300 group-hover:-translate-y-1">
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
                <Briefcase
                  className="h-3.5 w-3.5 text-blue-400"
                  aria-hidden="true"
                />
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 w-20 rounded bg-white/75" />
                  <div className="h-1.5 w-12 rounded bg-white/30" />
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2">
                <Sparkles
                  className="h-3.5 w-3.5 text-cyan-400"
                  aria-hidden="true"
                />
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 w-16 rounded bg-white/75" />
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
        <div className="relative z-10 w-56 rounded-2xl border border-white/15 bg-[#0B1120]/90 p-3.5 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
          <div className="mb-2.5 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/25 text-blue-300">
              <Users className="h-3.5 w-3.5" aria-hidden="true" />
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
    </div>
  );
}

function ProjectCard({ project, activeTech, onSelectTech, onOpenDetails }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/45 hover:shadow-xl hover:shadow-blue-500/5 dark:border-white/10 dark:bg-surface-dark/75 dark:hover:border-blue-500/45"
    >
      {/* Image / Mockup zone with editorial index (inspired by yl0.me) */}
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

        {/* Index badge top-left */}
        <span
          aria-hidden="true"
          className="absolute left-3 top-3 rounded-md border border-white/15 bg-black/55 px-2 py-0.5 font-mono text-[11px] font-semibold text-white backdrop-blur-md"
        >
          {project.index}
        </span>

        {/* Year + Category badge bottom-right */}
        <span className="absolute bottom-3 right-3 rounded-md border border-white/15 bg-black/55 px-2 py-0.5 font-mono text-[10px] text-slate-200 backdrop-blur-md">
          {project.year} · {project.subtitle}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-0.5 font-mono text-[11px] text-slate-500 dark:text-slate-400">
              {project.role}
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => onOpenDetails(project, e.currentTarget)}
            aria-label={`Ouvrir l'étude de cas de ${project.title}`}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>

        {/* Interactive stack badges (click to filter by tech) */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => {
            const isFilterable = projectTechFilters.includes(tech);
            const isSelected = activeTech === tech;
            if (!isFilterable) {
              return (
                <span
                  key={tech}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-[11px] font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                >
                  {tech}
                </span>
              );
            }
            return (
              <button
                key={tech}
                type="button"
                onClick={() => onSelectTech(isSelected ? null : tech)}
                aria-pressed={isSelected}
                title={`Filtrer les projets utilisant ${tech}`}
                className={`rounded-md border px-2.5 py-0.5 font-mono text-[11px] font-medium transition-colors ${
                  isSelected
                    ? 'border-blue-500 bg-blue-600 text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-500/50 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-blue-400/50 dark:hover:text-blue-300'
                }`}
              >
                {tech}
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-3 border-t border-slate-200/80 pt-4 dark:border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-800 transition-colors hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-white/20 dark:hover:bg-white/[0.08]"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Code GitHub</span>
          </a>

          <button
            type="button"
            onClick={(e) => onOpenDetails(project, e.currentTarget)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-500"
          >
            <span>Démo / Détails</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects({
  activeCategory,
  activeTech,
  onCategoryChange,
  onTechChange,
  onResetFilters,
  onNotify,
}) {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const triggerRef = useRef(null);
  const closeBtnRef = useRef(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === 'Tous' || project.categories.includes(activeCategory);
    const matchesTech = !activeTech || project.stack.includes(activeTech);
    return matchesCategory && matchesTech;
  });

  const hasActiveFilter = activeCategory !== 'Tous' || Boolean(activeTech);

  // Case study navigation across currently filtered list (or all projects fallback)
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
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
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
      if (e.key === 'Escape') {
        closeDetails();
      } else if (e.key === 'ArrowRight') {
        stepProject(1);
      } else if (e.key === 'ArrowLeft') {
        stepProject(-1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject, selectedIndex, navPool.length]);

  const handleShareFilteredLink = async () => {
    const url = new URL(window.location.href);
    url.hash = 'projects';
    if (activeCategory !== 'Tous') {
      url.searchParams.set('cat', activeCategory);
    } else {
      url.searchParams.delete('cat');
    }
    if (activeTech) {
      url.searchParams.set('tech', activeTech);
    } else {
      url.searchParams.delete('tech');
    }

    try {
      await navigator.clipboard.writeText(url.toString());
      onNotify?.('Lien de sélection copié !');
    } catch {
      onNotify?.('URL mise à jour dans la barre d’adresse.');
    }
  };

  const getCategoryCount = (cat) =>
    projects.filter((p) => {
      const catMatch = cat === 'Tous' || p.categories.includes(cat);
      const techMatch = !activeTech || p.stack.includes(activeTech);
      return catMatch && techMatch;
    }).length;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-slate-200/80 py-20 dark:border-white/10 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Editorial header inspired by yl0.me ([P] + range counter) */}
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2.5">
              <span className="rounded-md bg-blue-500/10 px-2 py-0.5 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
                [P]
              </span>
              <span className="font-mono text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                01 / Réalisations
              </span>
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                — 0{filteredProjects.length} / 0{projects.length}
              </span>
            </div>
            <h2
              id="projects-heading"
              className="mt-2.5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              Projets clés
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              Filtre par domaine ou par technologie pour explorer directement
              les réalisations pertinentes pour ton équipe.
            </p>
          </motion.div>

          {/* Primary Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filtrer les projets par catégorie"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-slate-200/90 bg-white p-1 dark:border-white/10 dark:bg-surface-dark/70"
          >
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              const count = getCategoryCount(category);
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onCategoryChange(category)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] ${
                      isActive ? 'text-blue-100' : 'text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary Tech Stack Filter Bar + Shareable URL (inspired by rmichels.com) */}
        <div
          data-bp-box
          className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 dark:border-white/10 dark:bg-white/[0.02]"
        >
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-500 dark:text-slate-400">
              <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Stack :</span>
            </span>
            {projectTechFilters.map((tech) => {
              const isSelected = activeTech === tech;
              return (
                <button
                  key={tech}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => onTechChange(isSelected ? null : tech)}
                  className={`rounded-md border px-2.5 py-1 font-mono text-[11px] font-medium transition-colors ${
                    isSelected
                      ? 'border-blue-500 bg-blue-600 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-blue-500/40 hover:text-blue-600 dark:border-white/10 dark:bg-surface-dark/70 dark:text-slate-300 dark:hover:border-blue-400/40 dark:hover:text-blue-300'
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <span className="sr-only" aria-live="polite">
              {filteredProjects.length}{' '}
              {filteredProjects.length > 1
                ? 'réalisations affichées'
                : 'réalisation affichée'}
            </span>
            {hasActiveFilter && (
              <>
                <button
                  type="button"
                  onClick={handleShareFilteredLink}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 font-mono text-[11px] font-medium text-blue-700 transition-colors hover:bg-blue-500/15 dark:text-blue-300"
                >
                  <Link2 className="h-3 w-3" aria-hidden="true" />
                  <span>Copier le lien filtré</span>
                </button>
                <button
                  type="button"
                  onClick={onResetFilters}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-slate-600 transition-colors hover:text-slate-900 dark:border-white/10 dark:bg-surface-dark dark:text-slate-300 dark:hover:text-white"
                >
                  <RotateCcw className="h-3 w-3" aria-hidden="true" />
                  <span>Réinitialiser</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Responsive 2-column grid OR empty state */}
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  activeTech={activeTech}
                  onSelectTech={onTechChange}
                  onOpenDetails={openDetails}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-10 text-center dark:border-white/15 dark:bg-surface-dark/40">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Aucune réalisation ne combine{' '}
              <span className="font-mono text-blue-600 dark:text-blue-400">
                {activeCategory}
              </span>{' '}
              et{' '}
              <span className="font-mono text-blue-600 dark:text-blue-400">
                {activeTech}
              </span>
              .
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-500"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Afficher tous les projets</span>
            </button>
          </div>
        )}
      </div>

      {/* Structured Case Study Modal with Prev/Next navigation (inspired by rmichels.com) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDetails}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
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
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/15 dark:bg-[#0D1322]"
            >
              {/* Sticky modal header */}
              <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-200/80 bg-white/95 px-6 py-4 backdrop-blur-md dark:border-white/10 dark:bg-[#0D1322]/95">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-blue-500/15 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                      {selectedProject.index} / 0{projects.length}
                    </span>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      {selectedProject.year} · {selectedProject.subtitle}
                    </span>
                  </div>
                  <h3
                    id="project-modal-title"
                    className="mt-1 text-xl font-bold text-slate-900 dark:text-white"
                  >
                    {selectedProject.title}
                  </h3>
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {selectedProject.role}
                  </p>
                </div>

                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={closeDetails}
                  aria-label="Fermer l'étude de cas"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:text-slate-900 dark:border-white/10 dark:text-slate-400 dark:hover:text-white"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {/* Structured Case Study Content */}
              <div className="space-y-6 px-6 py-5">
                {/* Contexte */}
                <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                  <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Contexte &amp; objectif
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {selectedProject.context}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <h4 className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Approche &amp; conception
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="mb-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Points clés réalisés
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-blue-500"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables + Stack 2-column summary */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Livrables
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.deliverables.map((deliv) => (
                        <span
                          key={deliv}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Stack technique
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-blue-500/25 bg-blue-500/10 px-2.5 py-1 font-mono text-xs font-medium text-blue-700 dark:text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer: Prev/Next stepper + GitHub/Demo actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 bg-slate-50/70 px-6 py-4 dark:border-white/10 dark:bg-black/25">
                {/* Prev / Next project controls */}
                {navPool.length > 1 ? (
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => stepProject(-1)}
                      aria-label="Projet précédent"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 font-mono text-xs font-medium text-slate-700 transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:border-white/15 dark:bg-surface-dark dark:text-slate-300 dark:hover:text-white"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Préc.</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => stepProject(1)}
                      aria-label="Projet suivant"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 font-mono text-xs font-medium text-slate-700 transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:border-white/15 dark:bg-surface-dark dark:text-slate-300 dark:hover:text-white"
                    >
                      <span>Suiv.</span>
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
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
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:border-white/15 dark:bg-surface-dark dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
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
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      onClick={closeDetails}
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-500"
                    >
                      <span>Demander une démo</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
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
