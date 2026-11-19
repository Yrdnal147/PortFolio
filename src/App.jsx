import { useState, useEffect, useCallback, useRef } from 'react';
import { MotionConfig, AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { navLinks } from './data/portfolioData';

export default function App() {
  // Light mode by default (user-validated choice)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  const [reducedMotion, setReducedMotion] = useState(() => {
    try {
      const stored = localStorage.getItem('reduced-motion');
      if (stored === '1') return true;
      if (stored === '0') return false;
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      return false;
    }
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    if (reducedMotion) {
      root.setAttribute('data-reduced-motion', 'true');
    } else {
      root.removeAttribute('data-reduced-motion');
    }
    try {
      localStorage.setItem('reduced-motion', reducedMotion ? '1' : '0');
    } catch {
      // ignore storage errors
    }
  }, [reducedMotion]);

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const notify = useCallback((message) => {
    setToast(message);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToast(null), 2400);
  }, []);

  return (
    <MotionConfig reducedMotion={reducedMotion ? 'always' : 'user'}>
      <div className="min-h-screen bg-canvas-light text-ink transition-colors duration-200 dark:bg-canvas-dark dark:text-slate-100">
        {/* Skip to content link for keyboard and screen-reader users */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>

        <Navbar
          theme={theme}
          toggleTheme={() =>
            setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
          }
          activeSection={activeSection}
        />

        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          <Hero reducedMotion={reducedMotion} />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact onNotify={notify} />
        </main>

        <Footer
          reducedMotion={reducedMotion}
          toggleReducedMotion={() => setReducedMotion((prev) => !prev)}
        />

        {/* Accessible confirmation toast */}
        <div
          role="status"
          aria-live="polite"
          className="pointer-events-none fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
        >
          <AnimatePresence>
            {toast && (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.18 }}
                className="inline-flex items-center gap-2 rounded-2xl border border-primary/50 bg-ink px-4 py-3 text-sm font-semibold text-white shadow-xl"
              >
                <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>{toast}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}
