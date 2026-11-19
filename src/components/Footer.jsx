import { personalInfo } from '../data/portfolioData';

export default function Footer({
  reducedMotion,
  toggleReducedMotion,
  blueprint,
  toggleBlueprint,
}) {
  return (
    <footer className="border-t border-secondary/15 py-8 dark:border-secondary/40">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <div>
          <p className="text-xs text-secondary dark:text-slate-400">
            © {personalInfo.copyrightYear} {personalInfo.fullName} —{' '}
            {personalInfo.location}
          </p>
          <p className="mt-1 font-mono text-[11px] text-secondary/70 dark:text-slate-500">
            React • Tailwind CSS • Framer Motion
          </p>
        </div>

        {/* User accessibility & display preferences */}
        <div
          aria-label="Préférences d'affichage et d'accessibilité"
          className="flex flex-wrap items-center justify-center gap-4 text-xs text-secondary dark:text-slate-400"
        >
          <label className="inline-flex cursor-pointer items-center gap-2 select-none">
            <input
              type="checkbox"
              checked={reducedMotion}
              onChange={toggleReducedMotion}
              className="h-3.5 w-3.5 rounded border-secondary/40 accent-primary"
            />
            <span className="font-mono text-[11px]">Animations réduites</span>
          </label>

          <label className="inline-flex cursor-pointer items-center gap-2 select-none">
            <input
              type="checkbox"
              checked={blueprint}
              onChange={toggleBlueprint}
              className="h-3.5 w-3.5 rounded border-secondary/40 accent-primary"
            />
            <span className="font-mono text-[11px]">Mode Blueprint</span>
          </label>
        </div>
      </div>
    </footer>
  );
}
