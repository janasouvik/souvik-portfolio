import { Variants } from "framer-motion";

export const fadeIn = (delay: number = 0, duration: number = 0.4): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const fadeInUp = (delay: number = 0, duration: number = 0.4): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const pageTransitionVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeInOut" } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.25, ease: "easeInOut" } },
};
