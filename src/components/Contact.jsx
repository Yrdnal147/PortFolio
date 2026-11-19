import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  MessageCircle,
  Github,
  Linkedin,
  Download,
  ArrowUpRight,
  Clock,
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
    onNotify?.('Adresse email copiée !');
    window.setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-canvas-light py-20 dark:bg-canvas-dark sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-primary-soft px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary-ink dark:bg-primary/15 dark:text-primary">
            Me contacter simplement
          </span>
          <h2
            id="contact-heading"
            className="mt-3 text-2xl font-extrabold tracking-tight text-ink dark:text-white sm:text-4xl"
          >
            Parlons de votre projet ou de votre opportunité
          </h2>
          <p className="mt-3 text-base leading-relaxed text-secondary dark:text-slate-300">
            Choisissez le moyen qui vous convient le mieux — pas de formulaire
            compliqué, vous me contactez directement.
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-ink dark:text-primary">
            <Clock className="h-4 w-4" aria-hidden="true" />
            <span>
              {personalInfo.responseTime} · {personalInfo.location} &amp; à
              distance
            </span>
          </p>
        </motion.div>

        {/* 3 ultra-clear action cards (WhatsApp, Email, CV & Réseaux) */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1: WhatsApp (Fastest & most approachable) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col rounded-3xl border-2 border-primary bg-white p-7 shadow-card dark:bg-surface-dark"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-on">
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary-ink dark:bg-primary/15 dark:text-primary">
                Le plus rapide
              </span>
            </div>

            <h3 className="mt-5 text-xl font-extrabold text-ink dark:text-white">
              Écrire sur WhatsApp
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary dark:text-slate-300">
              Idéal pour poser une question rapide, présenter une idée ou fixer
              un appel.
            </p>
            <p className="mt-4 font-mono text-sm font-bold text-ink dark:text-white">
              {personalInfo.phoneDisplay}
            </p>

            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-on shadow-sm shadow-primary/25 transition-all hover:bg-primary-hover active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Envoyer un message WhatsApp</span>
            </a>
          </motion.div>

          {/* Card 2: Email + 1-click copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-soft dark:border-secondary/50 dark:bg-surface-dark"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </div>

            <h3 className="mt-5 text-xl font-extrabold text-ink dark:text-white">
              Envoyer un email
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary dark:text-slate-300">
              Pratique pour m’envoyer une fiche de poste, un cahier des charges
              ou proposer un entretien.
            </p>
            <p className="mt-4 break-all font-mono text-sm font-bold text-ink dark:text-white">
              {personalInfo.email}
            </p>

            <div className="mt-auto flex flex-col gap-2.5 pt-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-2xl bg-secondary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-secondary-light active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Ouvrir ma messagerie</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl border px-4 py-2 text-sm font-bold transition-all ${
                  copied
                    ? 'border-primary bg-primary-soft text-primary-ink dark:bg-primary/15 dark:text-primary'
                    : 'border-slate-200 bg-canvas-light text-ink hover:border-secondary/40 dark:border-secondary/55 dark:bg-canvas-dark dark:text-slate-200'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden="true" />
                    <span>Adresse copiée !</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    <span>Copier l’adresse email</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Card 3: CV & Professional Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-soft dark:border-secondary/50 dark:bg-surface-dark"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-ink dark:bg-secondary/50 dark:text-white">
              <Download className="h-6 w-6" aria-hidden="true" />
            </div>

            <h3 className="mt-5 text-xl font-extrabold text-ink dark:text-white">
              CV &amp; Profils en ligne
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary dark:text-slate-300">
              Téléchargez mon CV complet en PDF ou retrouvez mes profils
              professionnels.
            </p>

            <div className="mt-auto flex flex-col gap-2.5 pt-6">
              <a
                href={personalInfo.cvPath}
                download
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-canvas-light px-4 py-2.5 text-sm font-bold text-ink transition-colors hover:border-primary hover:bg-primary-soft/60 dark:border-secondary/55 dark:bg-canvas-dark dark:text-white dark:hover:border-primary"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Télécharger mon CV (PDF)</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-primary/50 dark:border-secondary/55 dark:bg-canvas-dark dark:text-slate-200"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Linkedin
                    className="h-4 w-4 text-primary-ink dark:text-primary"
                    aria-hidden="true"
                  />
                  <span>LinkedIn — {personalInfo.linkedinName}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-secondary" aria-hidden="true" />
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-primary/50 dark:border-secondary/55 dark:bg-canvas-dark dark:text-slate-200"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Github className="h-4 w-4 text-secondary dark:text-slate-300" aria-hidden="true" />
                  <span>GitHub — {personalInfo.githubHandle}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-secondary" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
