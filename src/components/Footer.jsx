import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:px-6 sm:text-left">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © {personalInfo.copyrightYear} {personalInfo.fullName} —{' '}
          {personalInfo.location}
        </p>
        <p className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
          Conçu avec React • Tailwind CSS • Framer Motion
        </p>
      </div>
    </footer>
  );
}
