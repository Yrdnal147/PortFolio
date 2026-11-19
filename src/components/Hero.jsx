import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-200/80 dark:border-white/10"
    >
      {/* Subtle radial spotlight & dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-subtle-grid [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,#000_65%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[38rem] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[110px] dark:bg-blue-500/15"
      />

      <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-7">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{personalInfo.availability}</span>
            </span>
          </motion.div>

          {/* Main H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {personalInfo.fullName}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-4 font-mono text-sm font-medium text-blue-600 dark:text-blue-400 sm:text-base"
          >
            {personalInfo.role}
          </motion.p>

          {/* Hook (2 lines max on desktop) */}
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/25 transition-all hover:bg-blue-500 active:scale-[0.98]"
            >
              <span>Voir mes projets</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-all hover:border-slate-400 hover:bg-slate-50 active:scale-[0.98] dark:border-white/15 dark:bg-surface-dark/80 dark:text-slate-100 dark:hover:border-white/25 dark:hover:bg-surface-dark"
            >
              <span>Me contacter</span>
            </a>
          </motion.div>

          {/* Social links & location */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6 text-sm text-slate-600 dark:border-white/10 dark:text-slate-400"
          >
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              <Github className="h-4 w-4" />
              <span className="font-mono text-xs">GitHub</span>
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              <span className="font-mono text-xs">
                {personalInfo.linkedinName}
              </span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              <Mail className="h-4 w-4" />
              <span className="font-mono text-xs">{personalInfo.email}</span>
            </a>

            <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-500 sm:ml-auto">
              <MapPin className="h-3.5 w-3.5" />
              <span className="font-mono text-xs">{personalInfo.location}</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
