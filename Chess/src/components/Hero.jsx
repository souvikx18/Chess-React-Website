import React, { useRef, useEffect } from 'react';
import './Hero.css';
import Navbar from './Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tilt from 'react-parallax-tilt';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const kingRef = useRef(null);
  const heroRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  useEffect(() => {
    const h1 = document.querySelector('.hero-heading');
    const p = document.querySelector('.hero-subtext');
    const btn = document.querySelector('.hero-button');

    gsap.set([h1, p, btn], { y: 80, opacity: 0 });

    gsap.to(h1, {
      y: 0,
      opacity: 1,
      delay: 0.2,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.to(p, {
      y: 0,
      opacity: 1,
      delay: 0.4,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.to(btn, {
      y: 0,
      opacity: 1,
      delay: 0.6,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, []);

  useEffect(() => {
    const heading1 = document.querySelector('.section1-heading');
    const para1 = document.querySelector('.section1-para');

    if (heading1 && para1) {
      gsap.set([heading1, para1], { opacity: 0, x: 100 });

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: heading1,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      tl1.to(heading1, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .to(para1, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, "-=0.6");
    }
  }, []);

  useEffect(() => {
    const heading2 = document.querySelector('.section2-heading');
    const para2 = document.querySelector('.section2-para');

    if (heading2 && para2) {
      gsap.set([heading2, para2], { opacity: 0, y: 60 });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: heading2,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      tl2.to(heading2, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .to(para2, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, "-=0.5");
    }
  }, []);

  useEffect(() => {
    const overlay = document.querySelector('.section3-overlay');
    const h1 = overlay.querySelector('h1');
    const p = overlay.querySelector('p');
    const btn = overlay.querySelector('button');

    const showOverlay = gsap.timeline({ paused: true });

    showOverlay.to(overlay, {
      opacity: 1,
      duration: 0.8,
      delay: 0.1,
      pointerEvents: 'auto',
    });

    showOverlay.to(h1, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    }, "-=0.4");

    showOverlay.to(p, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    }, "-=0.6");

    showOverlay.to(btn, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    }, "-=0.6");

    ScrollTrigger.create({
      trigger: section3Ref.current,
      start: 'top center',
      end: 'bottom top',
      onEnter: () => showOverlay.play(),
      onLeaveBack: () => {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.5,
          pointerEvents: 'none',
        });
        gsap.set([h1, p, btn], {
          opacity: 0,
          y: 80,
        });
        showOverlay.pause(0);
      },

    });
  }, []);


  useEffect(() => {
    const heroImg = kingRef.current;
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;
    const section3 = document.querySelector('.section3');

    if (!heroImg || !section1 || !section2 || !section3) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section1,
        start: 'top 70%',
        endTrigger: section3,
        end: 'top center',
        scrub: true,

      },
    });


    tl.to(heroImg, {
      x: 700,
      y: 810,
      scale: 1.0,
      rotate: -30,
      ease: 'power2.out',
    });

    tl.to(heroImg, {
      x: 1250,
      y: 1110,
      scale: 0.87,
      rotate: 10,
      ease: 'power2.inOut',
    });

    tl.to(heroImg, {
      x: 1830,
      y: 1890,
      scale: 1.9,
      rotate: -30,
      ease: 'power2.inOut',
    });

  }, []);

  useEffect(() => {
    const s4Heading = document.querySelector('.section4-heading');
    const featureCards = document.querySelectorAll('.feature-card');

    if (s4Heading && featureCards.length > 0) {
      gsap.set([s4Heading, ...featureCards], { opacity: 0, y: 100 });

      gsap.to([s4Heading, ...featureCards], {
        scrollTrigger: {
          trigger: '.section4',
          start: 'top 85%',
          end: 'center 50%',
          scrub: 1.5,
        },
        opacity: 1,
        y: 0,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }
  }, []);

  useEffect(() => {
    const s5Heading = document.querySelector('.section5-heading');
    const ratingCards = document.querySelectorAll('.rating-card');

    if (s5Heading && ratingCards.length > 0) {
      gsap.set([s5Heading, ...ratingCards], { opacity: 0, y: 100 });

      gsap.to([s5Heading, ...ratingCards], {
        scrollTrigger: {
          trigger: '.section5',
          start: 'top 85%',
          end: 'center 50%',
          scrub: 1.5,
        },
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }
  }, []);

  useEffect(() => {
    const statBoxes = document.querySelectorAll('.stat-box');
    const shareBox = document.querySelector('.share-box');
    
    if (statBoxes.length > 0 && shareBox) {
      gsap.set([...statBoxes, shareBox], { opacity: 0, scale: 0.9, y: 80 });
      gsap.to([...statBoxes, shareBox], {
        scrollTrigger: {
          trigger: '.section6',
          start: 'top 90%',
          end: 'center 60%',
          scrub: 1.5,
        },
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }
  }, []);


  return (
    <>
      <div className="hero-container" ref={heroRef}>
        <Navbar />
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-content"><Tilt
          className="tilt-wrapper"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          scale={1.03}
          gyroscope={true}
          transitionSpeed={2000}
          perspective={2000}
          style={{ width: 'fit-content', margin: '0 auto' }}
        >
          <h1 className="hero-heading">The Chess Awakens</h1>
          <p className="hero-subtext">From scattered chaos to strategy — scroll to begin.</p>
          <button className="hero-button">PLAY NOW</button>
        </Tilt>
        </div>

      </div>

      <div className="hero-model1">
        <img
          src="./images/king.png"
          alt=""
          className="hero-img"
          ref={kingRef}
        />
      </div>
      <div className="section1" ref={section1Ref}>
        <div className="section1-left">
        </div>
        <div className="section1-right">
          <h1 className="section1-heading">Master Every Move</h1>
          <p className="section1-para">
            In the world of chess, every move matters. Whether you're opening strong or defending with grace, each piece tells a story. <br /><br />
            At MateX, we help you decode those stories — from timeless tactics to modern strategies — so you’re never just playing; you're commanding.
          </p>
        </div>
      </div>

      <div className="section2" ref={section2Ref}>
        <div className="section2-top">
          <div></div>
          <img src="/images/section2.png" alt="White King" className="king-img" />
        </div>
        <h1 className="section2-heading">The Battle Begins</h1>
        <p className="section2-para">A timeless clash of strategy and elegance—where power meets precision, and every move counts.</p>
      </div>

      <div className="section3" ref={section3Ref}>
        <img src="./images/section3-1.png" alt="" className="section3-img" />

        <div className="section3-overlay">
          <Tilt
            className="tilt-wrapper"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.03}
            gyroscope={true}
            transitionSpeed={2000}
            perspective={2000}
            style={{ width: 'fit-content', margin: '0 auto' }}
          >
            <h1>Checkmate is Inevitable</h1>
            <p>Even the mightiest fall when strategy is supreme.</p>
            <button>Play Your First Game</button>
          </Tilt>
        </div>
      </div>

      <div className="section4">
        <h2 className="section4-heading">Explore Capabilities</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Bullet & Blitz</h3>
            <p>Test your speed and instincts in lightning-fast time controls. Adrenaline guaranteed.</p>
          </div>
          <div className="feature-card">
            <h3>AI Analysis</h3>
            <p>Analyze your games instantly with our elite engine integration. Find brilliant moves.</p>
          </div>
          <div className="feature-card">
            <h3>Mind Mastery</h3>
            <p>Train your brain, predict every move, and outthink opponents at every level.</p>
          </div>
        </div>
      </div>

      <div className="section5">
        <h2 className="section5-heading">Players Command the Board</h2>
        <div className="ratings-grid" id="ratings-grid-force-reload">
          <div className="rating-card">
            <img src="/images/avatar_one_1774699185865.png" alt="Alex M." className="rating-avatar" />
            <div className="stars">★★★★★</div>
            <p className="review-text">"MateX completely changed how I see the board. The UI is stunning and the engine analysis is lightning fast."</p>
            <h4 className="player-name">— Alex M., 2100 ELO</h4>
          </div>
          <div className="rating-card">
            <img src="/images/avatar_two_1774699203880.png" alt="Sarah T." className="rating-avatar" />
            <div className="stars">★★★★☆</div>
            <p className="review-text">"The smoothest chess experience out there. It's incredibly gorgeous and responsive in bullet games."</p>
            <h4 className="player-name">— Sarah T., Grandmaster</h4>
          </div>
          <div className="rating-card">
            <img src="/images/avatar_three_1774699222942.png" alt="David K." className="rating-avatar" />
            <div className="stars">★★★☆☆</div>
            <p className="review-text">"I love the game modes and training paths. Feels like a totally premium app. Absolute game-changer."</p>
            <h4 className="player-name">— David K., Enthusiast</h4>
          </div>
          <div className="rating-card">
            <img src="/images/avatar_four_1774699239319.png" alt="Elena V." className="rating-avatar" />
            <div className="stars">★★★★★</div>
            <p className="review-text">"The puzzles are mind-bending and perfectly paced. The absolute best platform for serious improvement."</p>
            <h4 className="player-name">— Elena V., IM</h4>
          </div>
          <div className="rating-card">
            <img src="/images/avatar_five_1774699255884.png" alt="James R." className="rating-avatar" />
            <div className="stars">★★★★☆</div>
            <p className="review-text">"A great platform with a stunning interface. Still waiting on a few obscure variants, but overall fantastic."</p>
            <h4 className="player-name">— James R., Club Player</h4>
          </div>
          <div className="rating-card">
            <img src="/images/avatar_six_1774699273380.png" alt="Mia C." className="rating-avatar" />
            <div className="stars">★★★☆☆</div>
            <p className="review-text">"Unbelievable dark-mode aesthetics. I can play for hours without eye strain. The engine is brilliant."</p>
            <h4 className="player-name">— Mia C., Streamer</h4>
          </div>
        </div>
      </div>

      <div className="section6">
        <div className="community-stats">
          <div className="stat-box">
            <h3>1M+</h3>
            <p>Games Played</p>
          </div>
          <div className="stat-box">
            <h3>50k+</h3>
            <p>Active Players</p>
          </div>
          <div className="stat-box">
            <h3>99%</h3>
            <p>Uptime</p>
          </div>
        </div>
        
        <div className="share-box">
          <h2>Join the Elite. Share the Glory.</h2>
          <p>Invite your friends and start dominating the boards together.</p>
          <div className="share-buttons">
            <button className="share-btn twitter">Share on X</button>
            <button className="share-btn facebook">Share on FB</button>
            <button className="share-btn instagram">Share on IG</button>
            <button className="share-btn whatsapp">Share on WA</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">Mate<span>X</span></div>
          <p className="footer-tagline">Master Every Move. Command the Board.</p>
          <div className="social-links">
            <a href="#">Play</a>
            <a href="#">Learn</a>
            <a href="#">Community</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 MateX Platforms. Unstoppable strategy.
        </div>
      </footer>

    </>

  );
};

export default Hero;
