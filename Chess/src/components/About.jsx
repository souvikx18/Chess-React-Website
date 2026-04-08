import React, { useEffect } from 'react';
import './About.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Tilt from 'react-parallax-tilt';
import { getLenis } from '../lenis';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const About = () => {
  useEffect(() => {
    // ─── 1. Sync Lenis with GSAP ScrollTrigger ───────────────────────────────
    // getLenis() reads the live instance (initLenis runs in App.jsx's useEffect).
    const lenis = getLenis();

    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.lagSmoothing(0);
    }

    // Scroll to top on mount
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // ─── 2. Helper: build a clean ScrollTrigger config ───────────────────────
    const st = (trigger, start = 'top 85%', extra = {}) => ({
      trigger,
      start,
      toggleActions: 'play none none reverse',
      ...extra,
    });

    // ─── 3. Mission Section ───────────────────────────────────────────────────
    const missionHeading = document.querySelector('.mission-heading');
    const missionPara    = document.querySelector('.mission-para');
    const missionKing    = document.querySelector('.mission-king-img');

    if (missionHeading && missionPara) {
      gsap.set([missionHeading, missionPara], { opacity: 0, y: 60 });

      gsap.to(missionHeading, {
        scrollTrigger: st(missionHeading),
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      });

      gsap.to(missionPara, {
        scrollTrigger: st(missionPara),
        opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.15,
      });
    }

    if (missionKing) {
      gsap.set(missionKing, { opacity: 0, x: 80, scale: 0.85 });
      gsap.to(missionKing, {
        scrollTrigger: st('.mission-section', 'top 80%'),
        opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.3,
      });
    }

    // ─── 4. Story Section ─────────────────────────────────────────────────────
    const storyHeading = document.querySelector('.story-heading');
    const storyTagline = document.querySelector('.story-tagline');
    const storyParas   = document.querySelectorAll('.story-para');
    const storyCards   = document.querySelectorAll('.story-card');

    if (storyHeading) {
      gsap.set(storyHeading, { opacity: 0, y: -40 });
      gsap.to(storyHeading, {
        scrollTrigger: st(storyHeading, 'top 88%'),
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      });
    }

    if (storyTagline) {
      gsap.set(storyTagline, { opacity: 0, scale: 0.9 });
      gsap.to(storyTagline, {
        scrollTrigger: st(storyTagline, 'top 88%'),
        opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(1.4)', delay: 0.1,
      });
    }

    if (storyParas.length > 0) {
      gsap.set(storyParas, { opacity: 0, x: -50 });
      gsap.to(storyParas, {
        scrollTrigger: {
          trigger: storyParas[0],
          start: 'top 82%',
          end: 'bottom 55%',
          scrub: 1.2,
        },
        opacity: 1, x: 0, stagger: 0.3, ease: 'power3.out',
      });
    }

    if (storyCards.length > 0) {
      gsap.set(storyCards, { opacity: 0, y: 70, scale: 0.95 });
      gsap.to(storyCards, {
        scrollTrigger: st('.story-mission-vision', 'top 85%'),
        opacity: 1, y: 0, scale: 1, stagger: 0.2, duration: 0.9, ease: 'power3.out',
      });
    }

    // ─── 5. Team Section ──────────────────────────────────────────────────────
    const teamHeading = document.querySelector('.team-heading');
    const teamCards   = document.querySelectorAll('.team-card');

    if (teamHeading) {
      gsap.set(teamHeading, { opacity: 0, y: -50 });
      gsap.to(teamHeading, {
        scrollTrigger: st('.team-section', 'top 88%'),
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      });
    }

    if (teamCards.length > 0) {
      gsap.set(teamCards, { opacity: 0, y: 80, scale: 0.92 });
      gsap.to(teamCards, {
        scrollTrigger: {
          trigger: '.team-section',
          start: 'top 78%',
          end: 'center 45%',
          scrub: 1.5,
        },
        opacity: 1, y: 0, scale: 1, stagger: 0.18, ease: 'power2.out',
      });
    }

    // ─── 6. Vision Section ────────────────────────────────────────────────────
    const visionHeading = document.querySelector('.vision-heading');
    const visionPara    = document.querySelector('.vision-para');
    const visionStats   = document.querySelectorAll('.vision-stat');

    if (visionHeading) {
      gsap.set(visionHeading, { opacity: 0, scale: 0.85 });
      gsap.to(visionHeading, {
        scrollTrigger: st(visionHeading, 'top 87%'),
        opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
      });
    }

    if (visionPara) {
      gsap.set(visionPara, { opacity: 0, y: 40 });
      gsap.to(visionPara, {
        scrollTrigger: st(visionPara, 'top 87%'),
        opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.1,
      });
    }

    if (visionStats.length > 0) {
      gsap.set(visionStats, { opacity: 0, y: 50, scale: 0.92 });
      gsap.to(visionStats, {
        scrollTrigger: {
          trigger: visionStats[0],
          start: 'top 88%',
          end: 'bottom 70%',
          scrub: 1.5,
        },
        opacity: 1, y: 0, scale: 1, stagger: 0.25, ease: 'power2.out',
      });
    }

    // ─── 7. Why Section ───────────────────────────────────────────────────────
    const whyHeading = document.querySelector('.why-heading');
    const whyCards   = document.querySelectorAll('.why-card');
    const whyGrid    = document.querySelector('.why-grid');

    if (whyHeading) {
      gsap.set(whyHeading, { opacity: 0, scale: 0.85 });
      gsap.to(whyHeading, {
        scrollTrigger: st(whyHeading, 'top 87%'),
        opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
      });
    }

    if (whyCards.length > 0) {
      gsap.set(whyCards, { opacity: 0, y: 70 });
      gsap.to(whyCards, {
        scrollTrigger: st('.why-grid', 'top 85%'),
        opacity: 1, y: 0, stagger: 0.12, duration: 0.85, ease: 'power3.out',
      });
    }

    // ─── 8. Mouse follow on Why cards ────────────────────────────────────────
    const handleMouseMove = (e) => {
      whyCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    };

    if (whyGrid) whyGrid.addEventListener('mousemove', handleMouseMove);

    // ─── Cleanup ──────────────────────────────────────────────────────────────
    return () => {
      if (whyGrid) whyGrid.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (lenis) lenis.off('scroll', ScrollTrigger.update);
    };
  }, []);

  const icons = {
    clean: (
      <svg className="why-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 21V9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    performance: (
      <svg className="why-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    universal: (
      <svg className="why-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M23 21V19C22.9993 17.3712 21.9997 15.9103 20.465 15.228" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 3.13C17.7699 3.52309 18.9992 5.10517 19 6.91699C19 8.7288 17.7699 10.3109 16 10.7039" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    innovation: (
      <svg className="why-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  };

  return (
    <div id="about" className="about-section">
      {/* Mission Section */}
      <div className="mission-section">
        <div className="mission-content">
          <h2 className="mission-heading">Our Mission</h2>
          <p className="mission-para">
            At MateX, our mission is to democratize chess mastery for players of all levels. We believe that strategic thinking, creativity, and competitive spirit should be accessible to everyone, regardless of experience or background. Through innovative technology, comprehensive training tools, and a vibrant community, we empower players to reach their full potential and experience the profound joy of checkmate.
          </p>
        </div>
        <div className="mission-image">
          <img src="/images/king.png" alt="Chess King" className="mission-king-img" />
        </div>
      </div>

      {/* Story Section */}
      <div className="story-section">
        <h2 className="story-heading">The Mate<span className="highlight-x">X</span> Story</h2>
        <div className="story-banner">
          <p className="story-tagline">Think Smart. Play Better. Win Ahead.</p>
        </div>
        <div className="story-content">
          <div className="story-main">
            <p className="story-para">
              Matex was founded by <span className="highlight-text">Souvik in 2025</span> with a vision to transform chess into a smarter, more engaging digital experience. What began as an idea quickly evolved into a mission-driven platform.
              <br /><br />
              <span className="highlight-text">In 2026, development officially started</span>, turning this vision into reality—focused on innovation, strategy, and performance.
            </p>
          </div>
          <div className="story-mission-vision">
            <div className="story-card story-mission">
              <h3 className="story-card-title">Mission</h3>
              <p className="story-card-text">
                To create a powerful chess platform that helps players learn, improve, and compete at every level.
              </p>
            </div>
            <div className="story-card story-vision">
              <h3 className="story-card-title">Vision</h3>
              <p className="story-card-text">
                To become a leading global chess ecosystem driven by intelligence, technology, and strategic excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2 className="team-heading">Meet Our Team</h2>
        <div className="team-grid">
          <Tilt
            className="tilt-wrapper"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
            gyroscope={true}
            transitionSpeed={1500}
            perspective={1500}
          >
            <div className="team-card">
              <img src="/images/team_member_4.jpg" alt="Souvik" className="team-avatar" />
              <h3>Souvik</h3>
              <p className="team-role">Founder & CEO</p>
              <p className="team-bio">Visionary leader and full-stack maestro dedicated to reinventing the digital chess experience for millions worldwide.</p>
            </div>
          </Tilt>
          <Tilt
            className="tilt-wrapper"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
            gyroscope={true}
            transitionSpeed={1500}
            perspective={1500}
          >
            <div className="team-card">
              <img src="/images/team_member_1.png" alt="Liam Carter" className="team-avatar" />
              <h3>Liam Carter</h3>
              <p className="team-role">Chief Technology Officer</p>
              <p className="team-bio">Tech veteran architecting MateX's scalable backend infrastructure and real-time multiplayer engines.</p>
            </div>
          </Tilt>
          <Tilt
            className="tilt-wrapper"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
            gyroscope={true}
            transitionSpeed={1500}
            perspective={1500}
          >
            <div className="team-card">
              <img src="/images/team_member_2.png" alt="Maya Patel" className="team-avatar" />
              <h3>Maya Patel</h3>
              <p className="team-role">Head of Design & UX</p>
              <p className="team-bio">Creative force behind MateX's sleek, immersive interface, ensuring every move feels intuitive and elegant.</p>
            </div>
          </Tilt>
          <Tilt
            className="tilt-wrapper"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
            gyroscope={true}
            transitionSpeed={1500}
            perspective={1500}
          >
            <div className="team-card">
              <img src="/images/team_member_3.png" alt="Ethan Wright" className="team-avatar" />
              <h3>Ethan Wright</h3>
              <p className="team-role">Lead AI Engineer</p>
              <p className="team-bio">AI specialist developing our advanced chess analysis tools and adaptive bot personalities.</p>
            </div>
          </Tilt>

        </div>
      </div>

      {/* Vision Section */}
      <div className="vision-section">
        <h2 className="vision-heading">Our Vision for the Future</h2>
        <p className="vision-para">
          We envision a world where chess is not just a game, but a universal language of strategy and intellect. MateX is committed to pushing the boundaries of what's possible in digital chess, from groundbreaking AI coaching to immersive virtual reality tournaments. Our goal is to make chess the most accessible, engaging, and intellectually rewarding pursuit for generations to come.
        </p>
        <div className="vision-stats">
          <div className="vision-stat">
            <h3>100K+</h3>
            <p>Players Worldwide</p>
          </div>
          <div className="vision-stat">
            <h3>Live</h3>
            <p>Matches & Tournaments</p>
          </div>
          <div className="vision-stat">
            <h3>95%</h3>
            <p>User Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Why Section */}
      <div className="why-section">
        <h2 className="why-heading">Why Mate<span className="highlight-x">X</span>?</h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-card-inner"></div>
            <div className="why-card-content">
              <div className="why-icon-container">{icons.clean}</div>
              <span className="why-card-top">CLEAN</span>
              <h3 className="why-card-main">MINIMAL DESIGN</h3>
            </div>
          </div>
          <div className="why-card">
            <div className="why-card-inner"></div>
            <div className="why-card-content">
              <div className="why-icon-container">{icons.performance}</div>
              <span className="why-card-top">PERFORMANCE</span>
              <h3 className="why-card-main">DRIVEN EXPERIENCE</h3>
            </div>
          </div>
          <div className="why-card">
            <div className="why-card-inner"></div>
            <div className="why-card-content">
              <div className="why-icon-container">{icons.universal}</div>
              <span className="why-card-top">UNIVERSAL</span>
              <h3 className="why-card-main">SKILL LEVEL</h3>
            </div>
          </div>
          <div className="why-card">
            <div className="why-card-inner"></div>
            <div className="why-card-content">
              <div className="why-icon-container">{icons.innovation}</div>
              <span className="why-card-top">FUTURE-READY</span>
              <h3 className="why-card-main">INNOVATION</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="about-footer">
        <p>© 2026 MateX Platforms. Built for strategy. Designed to win.</p>
      </footer>
    </div>
  );
};

export default About;