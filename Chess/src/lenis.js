// src/lenis.js
import Lenis from 'lenis'

export let lenis;

export const getLenis = () => lenis;

export const initLenis = () => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
    direction: 'vertical',
  })

  // RAF loop lives here for pages that don't use GSAP (e.g. Hero).
  // About.jsx drives lenis via gsap.ticker to sync with ScrollTrigger.
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  return lenis
}

export const scrollToTop = () => {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  }
  window.scrollTo(0, 0);
};
