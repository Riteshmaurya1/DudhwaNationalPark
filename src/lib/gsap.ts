import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Safely register GSAP plugins on client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export const animateReveal = (
  element: HTMLElement | string,
  options?: gsap.TweenVars
) => {
  if (typeof window === "undefined") return;

  return gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      ...options,
    }
  );
};
