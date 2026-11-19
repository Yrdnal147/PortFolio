import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download, Grid2x2 } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar({
  theme,
  toggleTheme,
  blueprint,
  toggleBlueprint,
  activeSection,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-6">
      <nav
        aria-label="Navigation principale"
        className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl border px-4 transition-all duration-200 sm:px-5 ${
          scrolled
            ? 'border-slate-200/90 bg-canvas-light/85 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/15 dark:bg-[#0D111A]/85 dark:shadow-black/30'
            : 'border-slate-200/60 bg-canvas-light/65 backdrop-blur-md dark:border-white/10 dark:bg-canvas-dark/65'
        }`}
      >
        {/* Minimalist brand logo */}
        <a
          href="#"
          className="group flex items-center gap-1 rounded-md font-mono text-sm font-semibold tracking-tight text-slate-900 dark:text-white sm:text-base"
        >
          <span>Samuel</span>
          <span className="text-blue-500 transition-transform duration-200 group-hover:translate-x-0.5">
            .dev
          </span>
        </a>

        {/* Centered floating notch links on desktop (inspired by yl0.me) */}
        <ul className="hidden items-center gap-1 rounded-xl border border-slate-200/70 bg-slate-100/70 p-1 dark:border-white/10 dark:bg-white/[0.03] md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-white shadow-sm ring-1 ring-slate-200/80 dark:bg-white/10 dark:ring-white/10"
                    />
                  )}
                  <span className="relative z-10 font-mono text-[10px] text-blue-600 dark:text-blue-400">
                    {link.code}
                  </span>
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop utility actions */}
        <div className="hidden items-center gap-2 md:flex">
          {/* Blueprint Mode Toggle (inspired by yl0.me) */}
          <button
            type="button"
            onClick={toggleBlueprint}
            aria-pressed={blueprint}
            title={
              blueprint
                ? 'Désactiver le mode Blueprint'
                : 'Activer le mode Blueprint (grille technique)'
            }
            aria-label="Mode Blueprint"
            className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
              blueprint
                ? 'border-blue-500/60 bg-blue-500/15 text-blue-600 dark:text-blue-400'
                : 'border-slate-200 bg-white/80 text-slate-600 hover:border-blue-500/40 hover:text-blue-600 dark:border-white/10 dark:bg-surface-dark/80 dark:text-slate-400 dark:hover:border-blue-500/40 dark:hover:text-blue-400'
            }`}
          >
            <Grid2x2 className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={theme === 'dark'}
            title={
              theme === 'dark'
                ? 'Passer en mode clair'
                : 'Passer en mode sombre'
            }
            aria-label={
              theme === 'dark'
                ? 'Passer en mode clair'
                : 'Passer en mode sombre'
            }
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white/80 text-slate-700 transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:border-white/10 dark:bg-surface-dark/80 dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:text-blue-400"
          >
            {theme === 'dark' ? (
              <Sun className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Moon className="h-3.5 w-3.5" aria-hidden="true" />
            )}
          </button>

          <a
            href={personalInfo.cvPath}
            download
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-500 active:scale-[0.98]"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Télécharger mon CV</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1.5 md:hidden">
          <button
            type="button"
            onClick={toggleBlueprint}
            aria-pressed={blueprint}
            aria-label="Mode Blueprint"
            className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border ${
              blueprint
                ? 'border-blue-500/60 bg-blue-500/15 text-blue-600 dark:text-blue-400'
                : 'border-slate-200 bg-white text-slate-600 dark:border-white/10 dark:bg-surface-dark dark:text-slate-400'
            }`}
          >
            <Grid2x2 className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={theme === 'dark'}
            aria-label={
              theme === 'dark'
                ? 'Passer en mode clair'
                : 'Passer en mode sombre'
            }
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-surface-dark dark:text-slate-300"
          >
            {theme === 'dark' ? (
              <Sun className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Moon className="h-3.5 w-3.5" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-surface-dark dark:text-slate-300"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="mx-auto mt-2 max-w-5xl rounded-2xl border border-slate-200/90 bg-canvas-light/95 p-3 shadow-xl backdrop-blur-xl dark:border-white/15 dark:bg-[#0D111A]/95 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'location' : undefined}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="font-mono text-xs opacity-60">
                        {link.code}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-2.5 border-t border-slate-200/80 pt-2.5 dark:border-white/10">
              <a
                href={personalInfo.cvPath}
                download
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Télécharger mon CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
