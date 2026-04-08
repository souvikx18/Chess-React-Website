import React, { useEffect, useRef } from 'react';
import './Learn.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getLenis } from '../lenis';

gsap.registerPlugin(ScrollTrigger);

// ─── SVG ICONS ────────────────────────────────────────────────────────────────
const IconBook = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="learn-icon-svg">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 7h6M9 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconBrain = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="learn-icon-svg">
    <path d="M12 6.5C12 4.5 13.5 3 15.5 3C17.5 3 19 4.5 19 6.5C21 6.5 22 7.5 22 9.5C22 11 21 12 19.5 12.5C19.8 13 20 13.7 20 14.5C20 16.5 18.5 18 16.5 18H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 6.5C12 4.5 10.5 3 8.5 3C6.5 3 5 4.5 5 6.5C3 6.5 2 7.5 2 9.5C2 11 3 12 4.5 12.5C4.2 13 4 13.7 4 14.5C4 16.5 5.5 18 7.5 18H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18v3M9 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconTarget = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="learn-icon-svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconTrophy = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="learn-icon-svg">
    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 3H7v8a5 5 0 0010 0V3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 5h2a2 2 0 012 2v1a4 4 0 01-4 4M7 5H5a2 2 0 00-2 2v1a4 4 0 004 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="learn-icon-svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconZap = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="learn-icon-svg">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="learn-play-svg">
    <path d="M8 5l11 7-11 7V5z" fill="currentColor"/>
  </svg>
);

const IconChess = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="learn-icon-svg">
    <path d="M12 3c0 0-1 1-1 3h2c0-2-1-3-1-3zM10 6h4l1 3H9l1-3zM8.5 9h7l.5 3h-8l.5-3zM7 12h10l1 5H6l1-5zM5 17h14v2H5v-2zM4 19h16v2H4v-2z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-svg">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="star-svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

// ─── DATA ──────────────────────────────────────────────────────────────────────
const CURRICULUM = [
  {
    id: 'beginner',
    level: 'Beginner',
    tag: 'FOUNDATION',
    badge: '01',
    color: '#38bdf8',
    lessons: 12,
    duration: '4 Weeks',
    description: 'Master the fundamentals: piece movement, board control, and basic tactics.',
    topics: ['Piece Movements', 'Basic Openings', 'Checkmate Patterns', 'Simple Endgames'],
  },
  {
    id: 'intermediate',
    level: 'Intermediate',
    tag: 'STRATEGY',
    badge: '02',
    color: '#818cf8',
    lessons: 18,
    duration: '6 Weeks',
    description: 'Go deeper with positional play, tactical motifs, and opening theory.',
    topics: ['Opening Systems', 'Pawn Structure', 'Piece Coordination', 'Tactical Motifs'],
  },
  {
    id: 'advanced',
    level: 'Advanced',
    tag: 'MASTERY',
    badge: '03',
    color: '#34d399',
    lessons: 24,
    duration: '8 Weeks',
    description: 'Compete at a high level with deep endgame study and grandmaster analysis.',
    topics: ['Complex Endgames', 'Grandmaster Games', 'Tournament Prep', 'AI Analysis'],
  },
];

const FEATURES = [
  {
    icon: <IconBrain />,
    title: 'AI-Powered Coach',
    desc: 'Real-time feedback from our adaptive AI engine that learns your weaknesses and designs custom drills.',
  },
  {
    icon: <IconTarget />,
    title: 'Puzzle Precision',
    desc: '10,000+ curated puzzles ranked by Elo — sharpen your calculation and pattern recognition daily.',
  },
  {
    icon: <IconBook />,
    title: 'Master Courses',
    desc: 'Structured video courses taught by titled players, with interactive board replay at every step.',
  },
  {
    icon: <IconShield />,
    title: 'Opening Lab',
    desc: 'Explore and memorize openings with our visual tree builder and personalized repertoire tracker.',
  },
  {
    icon: <IconTrophy />,
    title: 'Live Tournaments',
    desc: 'Apply your knowledge in ranked events — weekly Swiss tournaments and monthly championships.',
  },
  {
    icon: <IconZap />,
    title: 'Flash Drills',
    desc: 'Speed-based exercises that build board vision, pattern recall, and rapid decision-making.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Arjun Mehta',
    rating: 5,
    role: 'Club Player → Elo 1800',
    text: 'MateX\'s structured curriculum took me from 1200 to 1800 in just 6 months. The AI coach is insanely accurate at pinpointing my mistakes.',
  },
  {
    name: 'Elena Vasquez',
    rating: 5,
    role: 'Beginner → Tournament Finalist',
    text: 'I had zero chess knowledge. The beginner path was so clear, engaging, and fun. Now I\'m playing in local tournaments!',
  },
  {
    name: 'James Liu',
    rating: 5,
    role: 'FIDE Candidate Master',
    text: 'Even at my level, the grandmaster analysis and opening lab brought a completely new depth to my preparation.',
  },
];

const STATS = [
  { value: '50K+', label: 'Active Learners' },
  { value: '10K+', label: 'Puzzles Solved Daily' },
  { value: '200+', label: 'Hours of Video Content' },
  { value: '98%', label: 'Student Improvement Rate' },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
const Learn = () => {
  const heroRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.lagSmoothing(0);
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // ── Hero entrance ──────────────────────────────────────────────────────
    const heroTl = gsap.timeline({ delay: 0.1 });
    heroTl
      .fromTo('.learn-hero-eyebrow', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
      .fromTo('.learn-hero-title', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.4')
      .fromTo('.learn-hero-subtitle', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo('.learn-hero-cta-group', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .fromTo('.learn-hero-stats', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .fromTo('.learn-hero-badge', { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(2)' }, '-=0.5');

    // Floating board animation
    gsap.to('.learn-hero-board', {
      y: -18,
      rotation: 1,
      duration: 4,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    });

    // ── Stats counter ──────────────────────────────────────────────────────
    const statEls = document.querySelectorAll('.lstat-value');
    statEls.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.7 },
        {
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
          opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.4)',
        }
      );
    });

    // ── Section headings ───────────────────────────────────────────────────
    const sectionHeadings = document.querySelectorAll('.section-heading');
    sectionHeadings.forEach(h => {
      gsap.fromTo(h,
        { opacity: 0, y: -40 },
        {
          scrollTrigger: { trigger: h, start: 'top 88%', toggleActions: 'play none none reverse' },
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        }
      );
    });

    const sectionSubtitles = document.querySelectorAll('.section-subtitle');
    sectionSubtitles.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        {
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1,
        }
      );
    });

    // ── Curriculum cards ───────────────────────────────────────────────────
    const currCards = document.querySelectorAll('.curr-card');
    if (currCards.length) {
      gsap.set(currCards, { opacity: 0, y: 80, scale: 0.95 });
      gsap.to(currCards, {
        scrollTrigger: { trigger: '.curriculum-grid', start: 'top 82%', toggleActions: 'play none none reverse' },
        opacity: 1, y: 0, scale: 1, stagger: 0.2, duration: 0.9, ease: 'power3.out',
      });
    }

    // ── Feature cards ──────────────────────────────────────────────────────
    const featCards = document.querySelectorAll('.feat-card');
    if (featCards.length) {
      gsap.set(featCards, { opacity: 0, y: 60 });
      gsap.to(featCards, {
        scrollTrigger: { trigger: '.features-grid', start: 'top 82%', toggleActions: 'play none none reverse' },
        opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      });
    }

    // ── Mouse spotlight on feature cards ──────────────────────────────────
    const handleMouseMove = (e) => {
      featCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    };
    const featGrid = document.querySelector('.features-grid');
    if (featGrid) featGrid.addEventListener('mousemove', handleMouseMove);

    // ── Testimonial cards ──────────────────────────────────────────────────
    const testCards = document.querySelectorAll('.test-card');
    if (testCards.length) {
      gsap.set(testCards, { opacity: 0, x: -60 });
      gsap.to(testCards, {
        scrollTrigger: { trigger: '.testimonials-grid', start: 'top 82%', toggleActions: 'play none none reverse' },
        opacity: 1, x: 0, stagger: 0.18, duration: 0.9, ease: 'power3.out',
      });
    }

    // ── CTA Section ────────────────────────────────────────────────────────
    gsap.fromTo('.learn-cta-section',
      { opacity: 0, scale: 0.95 },
      {
        scrollTrigger: { trigger: '.learn-cta-section', start: 'top 85%', toggleActions: 'play none none reverse' },
        opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
      }
    );

    // ── Path progress line ─────────────────────────────────────────────────
    gsap.fromTo('.path-line-fill',
      { scaleY: 0 },
      {
        scrollTrigger: { trigger: '.curriculum-section', start: 'top 70%', end: 'bottom 30%', scrub: 1.5 },
        scaleY: 1, transformOrigin: 'top center', ease: 'none',
      }
    );

    return () => {
      if (featGrid) featGrid.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (lenis) lenis.off('scroll', ScrollTrigger.update);
    };
  }, []);

  return (
    <div id="learn" className="learn-page">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="learn-hero" ref={heroRef}>
        <div className="learn-hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <div className="hero-grid-overlay" />
        </div>

        <div className="learn-hero-content">
          <span className="learn-hero-eyebrow">
            <span className="eyebrow-dot" />
            STRUCTURED CHESS EDUCATION
          </span>
          <h1 className="learn-hero-title">
            Master Chess <br />
            <span className="title-gradient">One Move at a Time</span>
          </h1>
          <p className="learn-hero-subtitle">
            From opening principles to grandmaster strategies — MateX's adaptive learning platform builds your skills with precision, speed, and depth.
          </p>
          <div className="learn-hero-cta-group">
            <button id="learn-start-btn" className="btn-primary-learn">
              <IconPlay />
              Start Learning Free
            </button>
            <button id="learn-browse-btn" className="btn-secondary-learn">
              Browse Curriculum
              <IconArrow />
            </button>
          </div>

          <div className="learn-hero-stats">
            {STATS.map((s, i) => (
              <div className="hero-stat-item" key={i}>
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="learn-hero-visual">
          <div className="learn-hero-board learn-hero-badge">
            <div className="board-glow" />
            <div className="chess-board-grid">
              {Array.from({ length: 64 }, (_, i) => {
                const row = Math.floor(i / 8);
                const col = i % 8;
                const isDark = (row + col) % 2 === 1;
                return <div key={i} className={`board-cell ${isDark ? 'dark' : 'light'}`} />;
              })}
            </div>
            <div className="board-pieces">
              <span className="bp bp-king">♔</span>
              <span className="bp bp-queen">♛</span>
              <span className="bp bp-rook">♜</span>
              <span className="bp bp-bishop">♝</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────── */}
      <section className="learn-stats-strip">
        {STATS.map((s, i) => (
          <div className="lstat-item" key={i}>
            <span className="lstat-value">{s.value}</span>
            <span className="lstat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── CURRICULUM ───────────────────────────────────────────────────── */}
      <section className="curriculum-section">
        <div className="section-header">
          <span className="section-eyebrow">YOUR LEARNING PATH</span>
          <h2 className="section-heading">
            A Clear Path to <span className="highlight-x">Mastery</span>
          </h2>
          <p className="section-subtitle">
            Every level is crafted by titled players and tested with thousands of learners. Progress at your own pace — no shortcuts, just real improvement.
          </p>
        </div>

        <div className="curriculum-grid">
          {/* Vertical connector line */}
          <div className="path-line">
            <div className="path-line-fill" />
          </div>

          {CURRICULUM.map((item, i) => (
            <div id={`curr-card-${item.id}`} className="curr-card" key={item.id} style={{ '--accent': item.color }}>
              <div className="curr-card-badge">{item.badge}</div>
              <div className="curr-card-header">
                <span className="curr-tag">{item.tag}</span>
                <h3 className="curr-level" style={{ color: item.color }}>{item.level}</h3>
                <p className="curr-desc">{item.description}</p>
              </div>
              <div className="curr-meta">
                <span className="curr-meta-item">
                  <strong>{item.lessons}</strong> Lessons
                </span>
                <span className="curr-meta-divider">•</span>
                <span className="curr-meta-item">
                  <strong>{item.duration}</strong>
                </span>
              </div>
              <ul className="curr-topics">
                {item.topics.map((t, j) => (
                  <li className="curr-topic-item" key={j}>
                    <span className="topic-dot" style={{ background: item.color }} />
                    {t}
                  </li>
                ))}
              </ul>
              <button id={`btn-start-${item.id}`} className="curr-cta-btn" style={{ '--accent': item.color }}>
                Start {item.level}
                <IconArrow />
              </button>
              <div className="curr-card-glow" style={{ background: `radial-gradient(circle at 50% 100%, ${item.color}18, transparent 70%)` }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section className="features-section">
        <div className="section-header">
          <span className="section-eyebrow">BUILT FOR IMPROVEMENT</span>
          <h2 className="section-heading">
            Tools That <span className="highlight-x">Elevate</span> Your Game
          </h2>
          <p className="section-subtitle">
            Every feature in MateX is engineered with one goal: to make you a stronger chess player, faster.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div id={`feat-card-${i}`} className="feat-card" key={i}>
              <div className="feat-card-spotlight" />
              <div className="feat-icon-wrap">{f.icon}</div>
              <h3 className="feat-title">{f.title}</h3>
              <p className="feat-desc">{f.desc}</p>
              <div className="feat-card-border" />
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="how-it-works-section">
        <div className="section-header">
          <span className="section-eyebrow">THE PROCESS</span>
          <h2 className="section-heading">How MateX Learning <span className="highlight-x">Works</span></h2>
          <p className="section-subtitle">A streamlined 4-step system that adapts to you from Day 1.</p>
        </div>

        <div className="hiw-steps">
          {[
            { step: '01', title: 'Take a Skill Assessment', desc: 'Our AI analyses your playing style, strengths, and gaps to build your personal learning profile.' },
            { step: '02', title: 'Follow Your Path', desc: 'Receive a tailored curriculum — video lessons, interactive puzzles, and live board analysis.' },
            { step: '03', title: 'Practice & Compete', desc: 'Apply skills in daily puzzles, blitz sessions, and ranked tournaments against real opponents.' },
            { step: '04', title: 'Track & Evolve', desc: 'Review your progress report weekly. Adjust your path based on Elo growth and weak-point analysis.' },
          ].map((s, i) => (
            <div id={`hiw-step-${i}`} className="hiw-step" key={i}>
              <div className="hiw-step-number">{s.step}</div>
              <div className="hiw-step-content">
                <h3 className="hiw-step-title">{s.title}</h3>
                <p className="hiw-step-desc">{s.desc}</p>
              </div>
              {i < 3 && <div className="hiw-connector" />}
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="testimonials-section">
        <div className="section-header">
          <span className="section-eyebrow">SUCCESS STORIES</span>
          <h2 className="section-heading">
            Real Players, <span className="highlight-x">Real Results</span>
          </h2>
          <p className="section-subtitle">
            Thousands of students have levelled up their game on MateX. Here's what they say.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div id={`test-card-${i}`} className="test-card" key={i}>
              <div className="test-stars">
                {Array.from({ length: t.rating }, (_, j) => <IconStar key={j} />)}
              </div>
              <p className="test-text">"{t.text}"</p>
              <div className="test-author">
                <div className="test-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <span className="test-name">{t.name}</span>
                  <span className="test-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="learn-cta-section">
        <div className="cta-orb cta-orb-1" />
        <div className="cta-orb cta-orb-2" />
        <div className="cta-content">
          <span className="cta-eyebrow">JOIN 50,000+ LEARNERS</span>
          <h2 className="cta-heading">
            Your Next Move <span className="title-gradient">Starts Today</span>
          </h2>
          <p className="cta-para">
            No credit card required. Access beginner lessons free and upgrade when you're ready to go deeper.
          </p>
          <div className="learn-hero-cta-group">
            <button id="cta-start-free-btn" className="btn-primary-learn">
              <IconPlay />
              Start for Free
            </button>
            <button id="cta-view-plans-btn" className="btn-secondary-learn">
              View Plans
              <IconArrow />
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="learn-footer">
        <p>© 2026 MateX Platforms. Built for strategy. Designed to win.</p>
      </footer>
    </div>
  );
};

export default Learn;
