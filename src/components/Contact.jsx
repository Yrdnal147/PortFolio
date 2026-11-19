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

export default function Contact({ onNotify }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = personalInfo.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopied(true);
    onNotify?.('Adresse email copiée dans le presse-papiers !');
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          data-bp-box
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-3xl border border-secondary/20 bg-white p-7 dark:border-secondary/50 dark:bg-surface-dark/85 sm:p-10"
        >
          {/* Subtle top-right primary glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/15 blur-[100px]"
          />

          <div className="relative">
            <div className="flex items-center gap-2.5">
              <span className="rounded-md bg-primary/15 px-2 py-0.5 font-mono text-xs font-semibold text-primary-ink dark:text-primary">
                [C]
              </span>
              <span className="font-mono text-xs font-medium uppercase tracking-widest text-secondary dark:text-slate-400">
                05 / Contact
              </span>
            </div>

            <h2
              id="contact-heading"
              className="mt-2.5 max-w-2xl text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              Un projet, une opportunité en React/React Native ou Flutter ?
              Discutons-en.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-secondary dark:text-slate-400 sm:text-base">
              Réponse rapide par email ou WhatsApp — aucun formulaire lourd,
              accès direct. Disponible à Douala et en remote.
            </p>

            {/* Primary Email + Copy Row */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                onContextMenu={(e) => {
                  e.preventDefault();
                  handleCopyEmail();
                }}
                title="Envoyer un email (clic droit pour copier)"
                className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-on shadow-sm shadow-primary/25 transition-all hover:bg-primary-hover active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{personalInfo.email}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all active:scale-[0.98] ${
                  copied
                    ? 'border-primary/60 bg-primary/15 text-primary-ink dark:text-primary'
                    : 'border-secondary/30 bg-secondary/10 text-slate-900 hover:border-secondary/50 hover:bg-secondary/15 dark:border-secondary dark:bg-secondary/35 dark:text-slate-100 dark:hover:border-primary/45 dark:hover:bg-secondary/55'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden="true" />
                    <span>Copié !</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    <span>Copier l’email</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Channels Grid */}
            <div className="mt-8 grid grid-cols-1 gap-3.5 border-t border-secondary/15 pt-7 dark:border-secondary/40 sm:grid-cols-3">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-secondary/20 bg-secondary/[0.04] p-4 transition-colors hover:border-primary/50 dark:border-secondary/45 dark:bg-secondary/20 dark:hover:border-primary/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary-ink dark:text-primary">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-secondary dark:text-slate-400">
                      WhatsApp / Tél.
                    </p>
                    <p className="font-mono text-xs font-semibold text-slate-900 dark:text-white">
                      {personalInfo.phoneDisplay}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-secondary/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-ink dark:text-slate-400 dark:group-hover:text-primary"
                  aria-hidden="true"
                />
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-secondary/20 bg-secondary/[0.04] p-4 transition-colors hover:border-primary/50 dark:border-secondary/45 dark:bg-secondary/20 dark:hover:border-primary/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/15 text-secondary dark:bg-secondary/60 dark:text-white">
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-secondary dark:text-slate-400">
                      GitHub
                    </p>
                    <p className="font-mono text-xs font-semibold text-slate-900 dark:text-white">
                      {personalInfo.githubHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-secondary/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-ink dark:text-slate-400 dark:group-hover:text-primary"
                  aria-hidden="true"
                />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-secondary/20 bg-secondary/[0.04] p-4 transition-colors hover:border-primary/50 dark:border-secondary/45 dark:bg-secondary/20 dark:hover:border-primary/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary-ink dark:text-primary">
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-secondary dark:text-slate-400">
                      LinkedIn
                    </p>
                    <p className="font-mono text-xs font-semibold text-slate-900 dark:text-white">
                      {personalInfo.linkedinName}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-secondary/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-ink dark:text-slate-400 dark:group-hover:text-primary"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
