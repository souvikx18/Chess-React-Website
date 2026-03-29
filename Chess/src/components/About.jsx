import React, { useEffect } from 'react';
import './About.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Mission Section Animation
    const missionHeading = document.querySelector('.mission-heading');
    const missionPara = document.querySelector('.mission-para');
    const missionKing = document.querySelector('.mission-king');

    if (missionHeading && missionPara) {
      gsap.set([missionHeading, missionPara], { opacity: 0, y: 80 });

      gsap.to(missionHeading, {
        scrollTrigger: {
          trigger: missionHeading,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.to(missionPara, {
        scrollTrigger: {
          trigger: missionPara,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      });
    }

    // King only visible on Slide 1 (Mission) — fades out when leaving
    if (missionKing) {
      gsap.to(missionKing, {
        scrollTrigger: {
          trigger: '.mission-section',
          start: 'bottom 80%',  // start fading as Mission bottom leaves viewport
          end: 'bottom 20%',    // fully gone before Story section arrives
          scrub: 1,
        },
        opacity: 0,
        scale: 0.85,
        ease: 'power2.inOut',
      });
    }

    // Story Section Animation
    const storyHeading = document.querySelector('.story-heading');
    const storyParas = document.querySelectorAll('.story-para');
    const storyCards = document.querySelectorAll('.story-card');

    if (storyHeading && storyParas.length > 0) {
      gsap.set(storyHeading, { opacity: 0, y: -50 });

      gsap.to(storyHeading, {
        scrollTrigger: {
          trigger: storyHeading,
          start: 'top 90%',
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        ease: 'power3.out',
      });

      gsap.set(storyParas, { opacity: 0, x: -50 });

      gsap.to(storyParas, {
        scrollTrigger: {
          trigger: storyParas[0],
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1.5,
        },
        opacity: 1,
        x: 0,
        stagger: 0.3,
        ease: 'power3.out',
      });
    }

    if (storyCards.length > 0) {
      gsap.set(storyCards, { opacity: 0, y: 80 });
      gsap.to(storyCards, {
        scrollTrigger: {
          trigger: '.story-mission-vision',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });
    }

    // Team Section Animation
    const teamHeading = document.querySelector('.team-heading');
    const teamCards = document.querySelectorAll('.team-card');

    if (teamHeading && teamCards.length > 0) {
      gsap.set([teamHeading, ...teamCards], { opacity: 0, scale: 0.9, y: 100 });

      gsap.to(teamHeading, {
        scrollTrigger: {
          trigger: '.team-section',
          start: 'top 90%',
          scrub: 2,
        },
        opacity: 1,
        scale: 1,
        y: 0,
        ease: 'power2.out',
      });

      gsap.to(teamCards, {
        scrollTrigger: {
          trigger: '.team-section',
          start: 'top 75%',
          end: 'center 50%',
          scrub: 2,
        },
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }

    // Vision Section Animation
    const visionHeading = document.querySelector('.vision-heading');
    const visionPara = document.querySelector('.vision-para');
    const visionStats = document.querySelectorAll('.vision-stat');

    if (visionHeading && visionPara && visionStats.length > 0) {
      gsap.set(visionHeading, { opacity: 0, scale: 0.8 });

      gsap.to(visionHeading, {
        scrollTrigger: {
          trigger: visionHeading,
          start: 'top 85%',
          scrub: 1,
        },
        opacity: 1,
        scale: 1,
        ease: 'power3.out',
      });

      gsap.set(visionPara, { opacity: 0, y: 40 });

      gsap.to(visionPara, {
        scrollTrigger: {
          trigger: visionPara,
          start: 'top 85%',
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        ease: 'power3.out',
      });

      gsap.set(visionStats, { opacity: 0, scale: 0.9, y: 60 });

      gsap.to(visionStats, {
        scrollTrigger: {
          trigger: visionStats[0],
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: 2,
        },
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.3,
        ease: 'power2.out',
      });
    }

    // Why Section Animation and Mouse Follow
    const whyHeading = document.querySelector('.why-heading');
    const whyCards = document.querySelectorAll('.why-card');
    const whyGrid = document.querySelector('.why-grid');

    if (whyHeading && whyCards.length > 0) {
      gsap.set(whyHeading, { opacity: 0, scale: 0.8 });
      gsap.to(whyHeading, {
        scrollTrigger: {
          trigger: whyHeading,
          start: 'top 85%',
          scrub: 1,
        },
        opacity: 1,
        scale: 1,
        ease: 'power3.out',
      });

      gsap.set(whyCards, { opacity: 0, y: 80 });
      gsap.to(whyCards, {
        scrollTrigger: {
          trigger: '.why-grid',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }

    const handleMouseMove = (e) => {
      whyCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    if (whyGrid) {
      whyGrid.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (whyGrid) {
        whyGrid.removeEventListener('mousemove', handleMouseMove);
      }
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
      {/* Global King Piece Journey */}
      <img src="/images/king.png" alt="Chess King" className="mission-king" />

      {/* Mission Section */}
      <div className="mission-section">
        <div className="mission-content">
          <h2 className="mission-heading">Our Mission</h2>
          <p className="mission-para">
            At MateX, our mission is to democratize chess mastery for players of all levels. We believe that strategic thinking, creativity, and competitive spirit should be accessible to everyone, regardless of experience or background. Through innovative technology, comprehensive training tools, and a vibrant community, we empower players to reach their full potential and experience the profound joy of checkmate.
          </p>
        </div>
        <div className="mission-image"></div>
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