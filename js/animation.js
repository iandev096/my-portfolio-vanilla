gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
tl.from(".intro__content", {
  y: "-30%",
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut,
});

tl.from(
  ".stagger1",
  {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    ease: Power4.easeOut,
    duration: 2,
  },
  "-=1.5"
);

tl.from(
  ".intro__hero",
  {
    opacity: 0,
    y: 80,
    // stagger: 0.3,
    ease: Power4.easeOut,
    duration: 2,
  },
  "-=2"
);

gsap.from(".square-anim", {
  stagger: 0.2,
  scale: 0.1,
  duration: 1.5,
  ease: Back.easeOut.config(1.7),
});

gsap.from(".transition2", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "top bottom",
  },
  opacity: 0,
  y: 50,
  stagger: 0.3,
  duration: 1.2,
});

gsap.from(".transition3", {
  scrollTrigger: {
    trigger: ".transition3",
    start: "top bottom",
  },
  opacity: 0,
  y: 50,
  stagger: 0.6,
  duration: 1.2,
});
