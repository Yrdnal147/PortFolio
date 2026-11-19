import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download, MessageCircle } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme, activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'border-b border-slate-200/90 bg-white/95 shadow-soft backdrop-blur-md dark:border-secondary/45 dark:bg-canvas-dark/95'
          : 'border-b border-slate-200/60 bg-canvas-light/90 backdrop-blur-sm dark:border-secondary/30 dark:bg-canvas-dark/90'
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6"
      >
        {/* Brand name: Samuel Ndedy.dev */}
        <a
          href="#hero"
          className="group inline-flex items-baseline rounded-lg py-1 text-base font-extrabold tracking-tight text-ink dark:text-white sm:text-lg"
        >
          <span>{personalInfo.brandFirst}</span>
          <span className="font-mono text-primary-ink transition-colors dark:text-primary">
            {personalInfo.brandSuffix}
          </span>
        </a>

        {/* Desktop simple French links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`inline-flex min-h-[40px] items-center rounded-xl px-3.5 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-primary-soft text-primary-ink dark:bg-primary/15 dark:text-primary'
                      : 'text-secondary hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-secondary/35 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop clear actions */}
        <div className="hidden items-center gap-2.5 lg:flex">
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-secondary transition-colors hover:border-secondary/40 hover:text-ink dark:border-secondary/50 dark:bg-surface-dark dark:text-slate-200 dark:hover:border-primary/50 dark:hover:text-primary"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <a
            href={personalInfo.cvPath}
            download
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-ink transition-colors hover:border-secondary/40 hover:bg-slate-50 dark:border-secondary/50 dark:bg-surface-dark dark:text-slate-100 dark:hover:border-primary/40 dark:hover:bg-secondary/35"
          >
            <Download className="h-4 w-4 text-secondary dark:text-slate-300" aria-hidden="true" />
            <span>Mon CV</span>
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-[40px] items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-on shadow-sm shadow-primary/25 transition-all hover:bg-primary-hover active:scale-[0.98]"
          >
            <span>Me contacter</span>
          </a>
        </div>

        {/* Mobile controls (large touch targets >= 44px) */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={theme === 'dark'}
            aria-label={
              theme === 'dark'
                ? 'Passer en mode clair'
                : 'Passer en mode sombre'
            }
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-secondary dark:border-secondary/50 dark:bg-surface-dark dark:text-slate-200"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 text-sm font-semibold text-ink dark:border-secondary/50 dark:bg-surface-dark dark:text-white"
          >
            {mobileOpen ? (
              <>
                <X className="h-5 w-5" aria-hidden="true" />
                <span>Fermer</span>
              </>
            ) : (
              <>
                <Menu className="h-5 w-5" aria-hidden="true" />
                <span>Menu</span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile simple, touch-friendly menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200 bg-white dark:border-secondary/40 dark:bg-surface-dark lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1.5 px-4 py-4 sm:px-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`flex min-h-[48px] items-center rounded-xl px-4 text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-primary-soft text-primary-ink dark:bg-primary/15 dark:text-primary'
                        : 'text-ink hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-secondary/30'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="mt-3 grid grid-cols-1 gap-2.5 border-t border-slate-200 pt-4 dark:border-secondary/40 sm:grid-cols-2">
                <a
                  href={personalInfo.cvPath}
                  download
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-secondary/25 bg-slate-50 px-4 text-sm font-bold text-ink dark:border-secondary/60 dark:bg-secondary/30 dark:text-white"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Télécharger mon CV</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-on"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Me contacter</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
