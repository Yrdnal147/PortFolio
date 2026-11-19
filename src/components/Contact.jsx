import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  MessageCircle,
  Github,
  Linkedin,
  ArrowUpRight,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = personalInfo.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 dark:border-white/10 dark:bg-surface-dark/80 sm:p-10"
        >
          {/* Subtle top-right glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/15 blur-[90px]"
          />

          <div className="relative">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
              05 / Contact
            </p>
            <h2 className="mt-2 max-w-2xl text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Un projet, une opportunité en React/React Native ou Flutter ?
              Discutons-en.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              Réponse rapide par email ou WhatsApp. Disponible pour des postes
              techniques, stages professionnels ou missions à Douala et en
              remote.
            </p>

            {/* Primary Email + Copy Row */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/25 transition-all hover:bg-blue-500 active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" />
                <span>{personalInfo.email}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all active:scale-[0.98] ${
                  copied
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                    : 'border-slate-300 bg-slate-50 text-slate-800 hover:border-slate-400 hover:bg-slate-100 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-white/25 dark:hover:bg-white/[0.08]'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Copié !</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copier l’email</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Channels Grid */}
            <div className="mt-8 grid grid-cols-1 gap-3.5 border-t border-slate-200/80 pt-7 dark:border-white/10 sm:grid-cols-3">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-blue-500/40 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      WhatsApp / Tél.
                    </p>
                    <p className="font-mono text-xs font-semibold text-slate-900 dark:text-white">
                      {personalInfo.phoneDisplay}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500" />
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-blue-500/40 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200/80 text-slate-800 dark:bg-white/10 dark:text-white">
                    <Github className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      GitHub
                    </p>
                    <p className="font-mono text-xs font-semibold text-slate-900 dark:text-white">
                      {personalInfo.githubHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-colors hover:border-blue-500/40 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      LinkedIn
                    </p>
                    <p className="font-mono text-xs font-semibold text-slate-900 dark:text-white">
                      {personalInfo.linkedinName}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
