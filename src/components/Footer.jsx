import { ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer({ reducedMotion, toggleReducedMotion }) {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-secondary/40 dark:bg-surface-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand & Copyright */}
          <div className="text-center sm:text-left">
            <a
              href="#hero"
              className="text-base font-extrabold tracking-tight text-ink dark:text-white"
            >
              <span>{personalInfo.brandFirst}</span>
              <span className="font-mono text-primary-ink dark:text-primary">
                {personalInfo.brandSuffix}
              </span>
            </a>
            <p className="mt-1.5 text-sm text-secondary dark:text-slate-400">
              © {personalInfo.copyrightYear} {personalInfo.fullName} —{' '}
              {personalInfo.location}
            </p>
          </div>

          {/* Simple quick links */}
          <nav
            aria-label="Navigation du pied de page"
            className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-secondary dark:text-slate-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-ink dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <a
            href="#hero"
            className="inline-flex min-h-[42px] items-center gap-1.5 rounded-xl border border-slate-200 bg-canvas-light px-3.5 py-2 text-xs font-bold text-ink transition-colors hover:border-primary dark:border-secondary/50 dark:bg-canvas-dark dark:text-slate-200"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Haut de page</span>
          </a>
        </div>

        {/* Visual comfort toggle */}
        <div className="mt-6 flex justify-center border-t border-slate-200/80 pt-5 dark:border-secondary/35 sm:justify-end">
          <label className="inline-flex cursor-pointer items-center gap-2 text-xs font-medium text-secondary select-none dark:text-slate-400">
            <input
              type="checkbox"
              checked={reducedMotion}
              onChange={toggleReducedMotion}
              className="h-4 w-4 rounded border-slate-300 accent-primary"
            />
            <span>Réduire les animations (confort visuel)</span>
          </label>
        </div>
      </div>
    </footer>
  );
}
