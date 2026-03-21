import { useEffect, lazy, Suspense, useRef, useState } from 'react';
import styles from './Home.module.css';
import {
  Globe,
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';

// Lazy load sections for performance
const AnnouncementsTicker = lazy(() => import("@/components/AnnouncementsTicker"));
const StatsBar = lazy(() => import("@/components/StatsBar"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const VisionMission = lazy(() => import("@/components/VisionMission"));
const WhyCSE = lazy(() => import("@/components/WhyCSE"));
const Academics = lazy(() => import("@/components/Academics"));
const Facilities = lazy(() => import("@/components/Facilities"));
const HodQuote = lazy(() => import("@/components/HodQuote"));
const Faculty = lazy(() => import("@/components/Faculty"));
const Activities = lazy(() => import("@/components/Activities"));
const Placements = lazy(() => import("@/components/Placements"));
const CTABanner = lazy(() => import("@/components/CTABanner"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  const viewerRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loadRest, setLoadRest] = useState(false);
  const [isMobileFallback, setIsMobileFallback] = useState(() => {
    if (typeof window !== 'undefined') {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      const isMobileUA = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
      return isTouch || isMobileUA || window.innerWidth <= 900;
    }
    return false;
  });

  useEffect(() => {
    const isMobile = window.innerWidth <= 900;
    // Delay rendering below-the-fold content entirely on mobile to prioritize hero paint
    const timer = setTimeout(() => setLoadRest(true), isMobile ? 800 : 150);
    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let script: HTMLScriptElement | null = null;
    let splineTimer: ReturnType<typeof setTimeout> | undefined;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    if (!isMobileFallback) {
      // Huge mobile optimization: Delay booting WebGL script so the page is interactive instantly
      splineTimer = setTimeout(() => {
        script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.12.70/build/spline-viewer.js';
        script.async = true;
        document.head.appendChild(script);
      }, window.innerWidth <= 900 ? 2500 : 0);

      // Persistent Spline Logo Hiding
      let hideCount = 0;
      const hideSplineLogo = () => {
        const viewer = viewerRef.current;
        if (viewer && viewer.shadowRoot) {
          const logo = viewer.shadowRoot.querySelector('#logo');
          if (logo) {
            (logo as HTMLElement).style.display = 'none';
            (logo as HTMLElement).style.opacity = '0';
            (logo as HTMLElement).style.pointerEvents = 'none';
            hideCount++;
            if (hideCount > 10 && intervalId) {
              clearInterval(intervalId);
            }
          }
        }
      };
      intervalId = setInterval(hideSplineLogo, 1000);
    }

    // Scroll-reveal logic - use MutationObserver to catch lazy-loaded elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.12 }
    );

    // Observe all current scroll-reveal elements
    const observeAll = () => {
      document.querySelectorAll(".scroll-reveal:not(.revealed)").forEach((el) => observer.observe(el));
    };
    observeAll();

    // Watch for new elements added to the DOM (from lazy-loaded components)
    let mutationTimeout: ReturnType<typeof setTimeout>;
    const mutationObserver = new MutationObserver(() => {
      clearTimeout(mutationTimeout);
      mutationTimeout = setTimeout(() => {
        observeAll();
      }, 200);
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(splineTimer);
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
      observer.disconnect();
      mutationObserver.disconnect();
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <main className={isMobileFallback ? styles.forceMobileLayout : ""}>
      {/* NAVBAR */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <Globe size={20} />
          <div>CSE<span>.</span>DEPT</div>
        </div>

        <div className={styles.navLinks}>
          <a href="#" className={`${styles.navLink} ${styles.active}`}>
            Home
          </a>
          <a href="#about" className={styles.navLink}>
            About
          </a>
          <a href="#academics" className={styles.navLink}>
            Academics
          </a>
          <a href="#facilities" className={styles.navLink}>
            Facilities
          </a>
          <a href="#faculty" className={styles.navLink}>
            Faculty
          </a>
          <a href="#activities" className={styles.navLink}>
            Activities
          </a>
          <a href="#placements" className={styles.navLink}>
            Placements
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </div>

        <a href="#contact" className={styles.navCta}>
          <span>Apply Now</span>
          <ArrowUpRight size={18} />
        </a>
        {/* MOBILE MENU BUTTON */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={18} />
          <span>MENU</span>
        </button>
      </nav>

      {/* MOBILE FULLSCREEN MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.navLogo}>
              <Globe size={20} />
              <div>CSE<span>.</span>DEPT</div>
            </div>
            <button 
              className={styles.closeMenuBtn} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} />
            </button>
          </div>
          <div className={styles.mobileMenuLinks}>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#academics" onClick={() => setIsMobileMenuOpen(false)}>Academics</a>
            <a href="#facilities" onClick={() => setIsMobileMenuOpen(false)}>Facilities</a>
            <a href="#faculty" onClick={() => setIsMobileMenuOpen(false)}>Faculty</a>
            <a href="#activities" onClick={() => setIsMobileMenuOpen(false)}>Activities</a>
            <a href="#placements" onClick={() => setIsMobileMenuOpen(false)}>Placements</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>
          <div className={styles.mobileMenuFooter}>
            <a href="#contact" className={styles.navCta} onClick={() => setIsMobileMenuOpen(false)}>
              <span>Apply Now</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className={styles.hero}>

        {/* CSE text behind robot */}
        <h1 className={styles.bgText}>COMPUTER<br />SCIENCE</h1>

        {/* Spline robot with background class */}
        {isMobileFallback ? (
          <img 
            src="/download.png" 
            alt="Robot background" 
            className={styles.mobileRobotImg} 
          />
        ) : (
          /* @ts-ignore */
          <spline-viewer
            ref={viewerRef}
            className={styles.background}
            url="https://prod.spline.design/jy3wX1wO7Csr14qu/scene.splinecode"
            background="transparent"
            events-target="none"
          />
        )}

        <div className={styles.heroBadge}>
          <span>Est. Department of</span>
          <span>Computer Science & Engineering</span>
        </div>
      </section>

      {/* ADDITIONAL SECTIONS - Lazy Loaded */}
      {loadRest && (
        <Suspense fallback={null}>
          <AnnouncementsTicker />
          <StatsBar />
          <div id="about">
            <AboutSection />
          </div>
          <VisionMission />
          <WhyCSE />
          <div id="academics">
            <Academics />
          </div>
          <Facilities />
          <div id="activities">
            <Activities />
          </div>
          <HodQuote />
          <Faculty />
          <Placements />
          <CTABanner />
          <div id="contact">
            <ContactSection />
          </div>
          <Footer />
        </Suspense>
      )}
    </main>
  );
}