import { useEffect, lazy, Suspense, useRef } from 'react';
import styles from './Home.module.css';
import {
  Globe,
  ArrowUpRight
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

  useEffect(() => {
    // Load Spline viewer script precisely
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.70/build/spline-viewer.js';
    script.async = true;
    document.head.appendChild(script);

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
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

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
          // We keep trying a few times even after finding it to ensure it stays hidden
          if (hideCount > 10 && intervalId) {
            clearInterval(intervalId);
          }
        }
      }
    };

    const intervalId = setInterval(hideSplineLogo, 1000);

    return () => {
      document.head.removeChild(script);
      observer.disconnect();
      mutationObserver.disconnect();
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <>
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
      </nav>

      {/* HERO */}
      <section className={styles.hero}>

        {/* CSE text behind robot */}
        <h1 className={styles.bgText}>COMPUTER<br />SCIENCE</h1>

        {/* Spline robot with background class */}
        {/* @ts-ignore */}
        <spline-viewer
          ref={viewerRef}
          className={styles.background}
          url="https://prod.spline.design/jy3wX1wO7Csr14qu/scene.splinecode"
          background="transparent"
        />

        <div className={styles.heroBadge}>
          <span>Est. Department of</span>
          <span>Computer Science & Engineering</span>
        </div>
      </section>

      {/* ADDITIONAL SECTIONS - Lazy Loaded */}
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
    </>
  );
}