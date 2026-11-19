import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  ChevronLeft,
  ChevronRight,
  List,
  SlidersHorizontal,
  CheckCircle2,
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewMode, setViewMode] = useState('interactive'); // 'interactive' | 'timeline'

  const activeExp = experiences[selectedIndex];
  const progressPercent =
    experiences.length > 1
      ? (selectedIndex / (experiences.length - 1)) * 100
      : 0;

  const handleScrubberKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(experiences.length - 1, prev + 1));
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(0, prev - 1));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSelectedIndex(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSelectedIndex(experiences.length - 1);
    }
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-slate-200/80 py-20 dark:border-white/10 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header + View Mode Toggle (Interactive Scrubber vs Full Chronological Timeline) */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-2.5">
              <span className="rounded-md bg-blue-500/10 px-2 py-0.5 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
                [E]
              </span>
              <span className="font-mono text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                03 / Parcours professionnel
              </span>
              <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                — 01 à 0{experiences.length}
              </span>
            </div>
            <h2
              id="experience-heading"
              className="mt-2.5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              Expériences professionnelles
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              Navigue étape par étape sur la frise interactive ou affiche la
              chronologie complète pour une lecture rapide.
            </p>
          </motion.div>

          {/* Accessible View Switcher */}
          <div
            role="group"
            aria-label="Mode d'affichage du parcours"
            className="inline-flex items-center gap-1 self-start rounded-xl border border-slate-200/90 bg-white p-1 dark:border-white/10 dark:bg-surface-dark/70 md:self-auto"
          >
            <button
              type="button"
              aria-pressed={viewMode === 'interactive'}
              onClick={() => setViewMode('interactive')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-all ${
                viewMode === 'interactive'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Frise interactive</span>
            </button>

            <button
              type="button"
              aria-pressed={viewMode === 'timeline'}
              onClick={() => setViewMode('timeline')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-all ${
                viewMode === 'timeline'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <List className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Vue complète</span>
            </button>
          </div>
        </div>

        {/* MODE 1: Interactive Scrubber + Stamp Deck + Detail Dossier (inspired by yl0.me) */}
        {viewMode === 'interactive' ? (
          <div className="space-y-6">
            {/* Horizontal Timeline Scrubber */}
            <div
              data-bp-box
              className="rounded-2xl border border-slate-200/90 bg-white p-5 dark:border-white/10 dark:bg-surface-dark/70 sm:p-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Chronologie : Actuel → 2021
                </span>
                <span className="hidden font-mono text-[11px] text-slate-400 dark:text-slate-500 sm:inline">
                  Touches ← / → pour naviguer
                </span>
              </div>

              {/* Scrubber rail */}
              <div
                role="tablist"
                aria-label="Sélectionner une expérience sur la frise chronologique"
                onKeyDown={handleScrubberKeyDown}
                className="relative pb-2 pt-3"
              >
                {/* Base line */}
                <div
                  aria-hidden="true"
                  className="absolute left-4 right-4 top-[1.35rem] h-0.5 rounded-full bg-slate-200 dark:bg-white/10"
                />
                {/* Active fill */}
                <div
                  aria-hidden="true"
                  style={{ width: `calc(${progressPercent}% - 0px)` }}
                  className="absolute left-4 top-[1.35rem] h-0.5 max-w-[calc(100%-2rem)] rounded-full bg-blue-500 transition-all duration-300"
                />

                <div className="relative grid grid-cols-5 gap-1">
                  {experiences.map((exp, idx) => {
                    const isSelected = idx === selectedIndex;
                    const isPassed = idx <= selectedIndex;
                    return (
                      <button
                        key={exp.id}
                        type="button"
                        role="tab"
                        id={`exp-tab-${exp.id}`}
                        aria-selected={isSelected}
                        aria-controls={`exp-panel-${exp.id}`}
                        onClick={() => setSelectedIndex(idx)}
                        className="group flex flex-col items-center text-center focus:outline-none"
                      >
                        <span
                          className={`relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                            isSelected
                              ? 'scale-125 border-blue-500 bg-blue-500 shadow-md shadow-blue-500/40'
                              : isPassed
                                ? 'border-blue-500/70 bg-canvas-light dark:bg-canvas-dark'
                                : 'border-slate-300 bg-canvas-light group-hover:border-blue-400 dark:border-white/25 dark:bg-canvas-dark'
                          }`}
                        >
                          {isSelected && (
                            <span className="h-1.5 w-1.5 rounded-full bg-white" />
                          )}
                        </span>

                        <span
                          className={`mt-2.5 font-mono text-[10px] font-semibold transition-colors sm:text-xs ${
                            isSelected
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-200'
                          }`}
                        >
                          {exp.current ? 'Actuel' : exp.shortPeriod}
                        </span>
                        <span className="mt-0.5 hidden max-w-[110px] truncate text-[11px] font-medium text-slate-600 dark:text-slate-400 sm:block">
                          {exp.company}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tactile Stamp / Passport Selector Row (inspired by yl0.me's stamp deck) */}
              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-5">
                {experiences.map((exp, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => setSelectedIndex(idx)}
                      aria-label={`Afficher l'expérience chez ${exp.company} (${exp.period})`}
                      className={`group relative flex flex-col items-start rounded-xl border border-dashed p-3 text-left transition-all duration-200 ${
                        isSelected
                          ? 'border-blue-500 bg-blue-500/10 shadow-sm shadow-blue-500/10 dark:border-blue-400/70 dark:bg-blue-500/15'
                          : 'border-slate-300/90 bg-slate-50/70 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-white dark:border-white/15 dark:bg-white/[0.02] dark:hover:border-white/25 dark:hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-200/80 text-slate-700 dark:bg-white/10 dark:text-slate-200'
                          }`}
                        >
                          {exp.monogram}
                        </span>
                        <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">
                          {exp.index}
                        </span>
                      </div>
                      <p className="mt-2.5 line-clamp-1 text-xs font-bold text-slate-900 dark:text-white">
                        {exp.company}
                      </p>
                      <p className="mt-0.5 line-clamp-1 font-mono text-[10px] text-slate-500 dark:text-slate-400">
                        {exp.shortPeriod}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Synchronized Active Experience Detail Panel */}
            <AnimatePresence mode="wait">
              <motion.article
                key={activeExp.id}
                id={`exp-panel-${activeExp.id}`}
                role="tabpanel"
                aria-labelledby={`exp-tab-${activeExp.id}`}
                aria-live="polite"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-surface-dark/80 sm:p-7"
              >
                {/* Top mono metadata line like yl0.me's "/Mar 2024 - Now — Company" */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      /{activeExp.period}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-slate-300 dark:text-white/20"
                    >
                      —
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {activeExp.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {activeExp.location}
                    </span>
                    <span
                      className={`rounded-md px-2 py-0.5 font-mono text-[11px] font-medium ${
                        activeExp.current
                          ? 'border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400'
                          : 'border border-slate-200 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300'
                      }`}
                    >
                      {activeExp.type}
                    </span>
                  </div>
                </div>

                {/* Role & summary */}
                <div className="mt-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                    {activeExp.role}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {activeExp.description}
                  </p>

                  {/* Structured highlights */}
                  <ul className="mt-4 space-y-2">
                    {activeExp.highlights.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-blue-500"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: Tags + Prev/Next controls */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-4 dark:border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {activeExp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-[11px] font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={selectedIndex === 0}
                      onClick={() =>
                        setSelectedIndex((prev) => Math.max(0, prev - 1))
                      }
                      aria-label="Expérience plus récente"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-xs font-medium text-slate-700 transition-colors hover:border-blue-500/40 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-blue-400/40"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Plus récent</span>
                    </button>

                    <button
                      type="button"
                      disabled={selectedIndex === experiences.length - 1}
                      onClick={() =>
                        setSelectedIndex((prev) =>
                          Math.min(experiences.length - 1, prev + 1)
                        )
                      }
                      aria-label="Expérience précédente"
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-xs font-medium text-slate-700 transition-colors hover:border-blue-500/40 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-blue-400/40"
                    >
                      <span>Plus ancien</span>
                      <ChevronRight
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        ) : (
          /* MODE 2: Full Vertical Chronological Timeline (all 5 expanded for linear scanning / print) */
          <div className="relative pl-6 sm:pl-8">
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-[7px] top-2 w-px bg-slate-200 dark:bg-white/10 sm:left-[9px]"
            />

            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="relative"
                >
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
                            <Briefcase
                              className="h-3.5 w-3.5 text-blue-500"
                              aria-hidden="true"
                            />
                            {exp.company}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <span className="shrink-0 font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {exp.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
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
        )}
      </div>
    </section>
  );
}
