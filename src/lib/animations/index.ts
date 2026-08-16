import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const isReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const fadeUp = (
  target: HTMLElement | string,
  options?: gsap.TweenVars
) => {
  if (typeof window === "undefined" || isReducedMotion()) return;

  return gsap.fromTo(
    target,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      ...options,
    }
  );
};

export const staggerChildren = (
  container: HTMLElement | string,
  childSelector: string,
  options?: gsap.TweenVars
) => {
  if (typeof window === "undefined" || isReducedMotion()) return;

  const targets = gsap.utils.toArray(
    typeof container === "string"
      ? `${container} ${childSelector}`
      : container.querySelectorAll(childSelector)
  );

  return gsap.fromTo(
    targets,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      ...options,
    }
  );
};

export const parallaxImage = (
  image: HTMLElement | string,
  container: HTMLElement | string,
  yPercent: number = -20
) => {
  if (typeof window === "undefined" || isReducedMotion()) return;

  return gsap.to(image, {
    yPercent: yPercent,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const imageReveal = (
  target: HTMLElement | string,
  options?: gsap.TweenVars
) => {
  if (typeof window === "undefined" || isReducedMotion()) return;

  return gsap.fromTo(
    target,
    { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      duration: 1.1,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
      },
      ...options,
    }
  );
};
