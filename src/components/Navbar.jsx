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
            ? 'border-secondary/20 bg-canvas-light/85 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-secondary/60 dark:bg-[#0D0F14]/85 dark:shadow-black/40'
            : 'border-secondary/15 bg-canvas-light/70 backdrop-blur-md dark:border-secondary/40 dark:bg-canvas-dark/70'
        }`}
      >
        {/* Minimalist brand logo */}
        <a
          href="#"
          className="group flex items-center gap-1 rounded-md font-mono text-sm font-semibold tracking-tight text-slate-900 dark:text-white sm:text-base"
        >
          <span>Samuel</span>
          <span className="text-primary-ink transition-transform duration-200 group-hover:translate-x-0.5 dark:text-primary">
            .dev
          </span>
        </a>

        {/* Centered floating notch links on desktop */}
        <ul className="hidden items-center gap-1 rounded-xl border border-secondary/15 bg-secondary/[0.06] p-1 dark:border-secondary/40 dark:bg-secondary/20 md:flex">
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
                      : 'text-secondary hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-white shadow-sm ring-1 ring-secondary/15 dark:bg-secondary/60 dark:ring-primary/30"
                    />
                  )}
                  <span className="relative z-10 font-mono text-[10px] font-semibold text-primary-ink dark:text-primary">
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
                ? 'border-primary/60 bg-primary/15 text-primary-ink dark:text-primary'
                : 'border-secondary/20 bg-white/80 text-secondary hover:border-primary/50 hover:text-primary-ink dark:border-secondary/50 dark:bg-surface-dark/80 dark:text-slate-400 dark:hover:border-primary/50 dark:hover:text-primary'
            }`}
          >
            <Grid2x2 className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

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
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-secondary/20 bg-white/80 text-secondary transition-colors hover:border-primary/50 hover:text-primary-ink dark:border-secondary/50 dark:bg-surface-dark/80 dark:text-slate-300 dark:hover:border-primary/50 dark:hover:text-primary"
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
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-primary-on shadow-sm shadow-primary/25 transition-all hover:bg-primary-hover active:scale-[0.98]"
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
                ? 'border-primary/60 bg-primary/15 text-primary-ink dark:text-primary'
                : 'border-secondary/20 bg-white text-secondary dark:border-secondary/50 dark:bg-surface-dark dark:text-slate-400'
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
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-secondary/20 bg-white text-secondary dark:border-secondary/50 dark:bg-surface-dark dark:text-slate-300"
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
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-secondary/20 bg-white text-secondary dark:border-secondary/50 dark:bg-surface-dark dark:text-slate-300"
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
            className="mx-auto mt-2 max-w-5xl rounded-2xl border border-secondary/20 bg-canvas-light/95 p-3 shadow-xl backdrop-blur-xl dark:border-secondary/60 dark:bg-[#0D0F14]/95 md:hidden"
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
                          ? 'bg-primary/15 text-primary-ink dark:text-primary'
                          : 'text-secondary hover:bg-secondary/10 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-secondary/30 dark:hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="font-mono text-xs opacity-70">
                        {link.code}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-2.5 border-t border-secondary/15 pt-2.5 dark:border-secondary/40">
              <a
                href={personalInfo.cvPath}
                download
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-on transition-colors hover:bg-primary-hover"
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
