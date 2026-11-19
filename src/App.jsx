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
import {
  navLinks,
  projectCategories,
  projectTechFilters,
} from './data/portfolioData';

function getInitialFilters() {
  try {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    const tech = params.get('tech');
    return {
      category: projectCategories.includes(cat) ? cat : 'Tous',
      tech: projectTechFilters.includes(tech) ? tech : null,
    };
  } catch {
    return { category: 'Tous', tech: null };
  }
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  const [blueprint, setBlueprint] = useState(() => {
    try {
      return localStorage.getItem('blueprint') === '1';
    } catch {
      return false;
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

  const [activeSection, setActiveSection] = useState('projects');
  const [filters, setFilters] = useState(getInitialFilters);
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);

  // Sync dark mode class
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

  // Sync blueprint mode attribute
  useEffect(() => {
    const root = document.documentElement;
    if (blueprint) {
      root.setAttribute('data-blueprint', 'true');
    } else {
      root.removeAttribute('data-blueprint');
    }
    try {
      localStorage.setItem('blueprint', blueprint ? '1' : '0');
    } catch {
      // ignore storage errors
    }
  }, [blueprint]);

  // Sync reduced-motion attribute
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

  // Sync project filter query params in URL cleanly (inspired by rmichels.com)
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      if (filters.category !== 'Tous') {
        url.searchParams.set('cat', filters.category);
      } else {
        url.searchParams.delete('cat');
      }
      if (filters.tech) {
        url.searchParams.set('tech', filters.tech);
      } else {
        url.searchParams.delete('tech');
      }
      window.history.replaceState({}, '', url.toString());
    } catch {
      // ignore history errors
    }
  }, [filters]);

  // Track active section in viewport for floating notch Navbar
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
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const notify = useCallback((message) => {
    setToast(message);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToast(null), 2400);
  }, []);

  const handleCategoryChange = (category) =>
    setFilters((prev) => ({ ...prev, category }));

  const handleTechChange = (tech) =>
    setFilters((prev) => ({ ...prev, tech }));

  const handleQuickFilterCategory = (category) =>
    setFilters({ category, tech: null });

  const handleFilterByTechFromSkills = (tech) =>
    setFilters({ category: 'Tous', tech });

  const handleResetFilters = () => setFilters({ category: 'Tous', tech: null });

  return (
    <MotionConfig reducedMotion={reducedMotion ? 'always' : 'user'}>
      <div className="min-h-screen bg-canvas-light text-slate-900 transition-colors duration-200 dark:bg-canvas-dark dark:text-slate-100">
        {/* Skip to content link (keyboard & screen reader accessibility) */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>

        <Navbar
          theme={theme}
          toggleTheme={() =>
            setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
          }
          blueprint={blueprint}
          toggleBlueprint={() => setBlueprint((prev) => !prev)}
          activeSection={activeSection}
        />

        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          <Hero
            reducedMotion={reducedMotion}
            onQuickFilterCategory={handleQuickFilterCategory}
          />
          <Projects
            activeCategory={filters.category}
            activeTech={filters.tech}
            onCategoryChange={handleCategoryChange}
            onTechChange={handleTechChange}
            onResetFilters={handleResetFilters}
            onNotify={notify}
          />
          <Skills
            onFilterByTech={handleFilterByTechFromSkills}
            reducedMotion={reducedMotion}
          />
          <Experience />
          <Education />
          <Contact onNotify={notify} />
        </main>

        <Footer
          reducedMotion={reducedMotion}
          toggleReducedMotion={() => setReducedMotion((prev) => !prev)}
          blueprint={blueprint}
          toggleBlueprint={() => setBlueprint((prev) => !prev)}
        />

        {/* Global accessible toast notification (inspired by rmichels.com) */}
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
                className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-secondary-dark/95 px-4 py-2.5 font-mono text-xs font-medium text-white shadow-xl backdrop-blur-md dark:border-primary/40 dark:bg-surface-dark"
              >
                <Check
                  className="h-3.5 w-3.5 text-primary"
                  aria-hidden="true"
                />
                <span>{toast}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}
