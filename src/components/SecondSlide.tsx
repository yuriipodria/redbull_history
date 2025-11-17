import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import gradientTextLogo from "../assets/gradient-text-logo.png";

const SecondSlide = () => {
  const scrollProgress = useMotionValue(0);

  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 15,
    mass: 0.5,
  });

  const x = useTransform(smoothProgress, [0, 100], ["125%", "0%"]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const current = scrollProgress.get();
      const newValue = Math.max(0, Math.min(100, current + e.deltaY * 0.05));
      scrollProgress.set(newValue);
    };

    setTimeout(() => {
      window.addEventListener("wheel", handleWheel);
      // }, 5000);
    }, 0);

    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrollProgress]);

  return (
    <motion.div
      className="font-futura text-brand-red bg-dark-blue absolute top-1/2 h-screen w-full -translate-y-1/2 text-6xl font-bold"
      style={{ x }}
    >
      <div className="bg-light-gray absolute h-full w-[170px] origin-top-left -translate-x-[170px] -skew-x-12"></div>

      <div className="bg-dark-blue absolute h-full w-60 origin-top-left -skew-x-12"></div>

      <div className="relative mt-[200px] flex h-full flex-col gap-15 px-20">
        <div className="flex items-end justify-between">
          <p className="text-6xl font-normal tracking-[15.7px] uppercase">
            Energy drink
          </p>

          <img
            src={gradientTextLogo}
            alt="gradient-text-logo"
            className="h-[210px]"
          />
        </div>

        <p className="font-inter from-brand-red via-brand-red to-light-brand-red bg-linear-to-r from-0% via-25% to-100% bg-clip-text text-center text-[290px] leading-[0.8] font-black tracking-[-5px] text-transparent uppercase">
          Gives you
        </p>

        <div className="flex items-end justify-between">
          <p className="font-inter text-light-gray text-[290px] leading-[0.8] font-black tracking-[-2px] uppercase [text-shadow:0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(255,255,255,0.6),0_0_25px_rgba(255,255,255,0.4)]">
            Wiiings
          </p>

          <p className="font-futura text-2xl uppercase">Let's fly?</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SecondSlide;
