import logo from "../assets/logo.svg";
import logoText from "../assets/logo-text.svg";
import burger from "../assets/burger.svg";
import firstSlide from "../assets/first-slide.png";
import darker from "../assets/darker.png";
import { motion } from "framer-motion";

const FirstSlide = () => {
  return (
    <>
      <div className="absolute -z-30 h-full w-full bg-neutral-800"></div>

      <motion.img
        src={firstSlide}
        alt="background"
        className="absolute -z-20 h-full w-full object-cover object-center"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <img
        src={darker}
        alt="background"
        className="absolute -z-10 h-full w-full object-center"
      />

      <div className="flex h-full flex-col justify-between px-20 py-20">
        <div className="flex items-center justify-between">
          <motion.img
            src={logoText}
            alt="logotext"
            className="h-6"
            initial={{
              translateY: "150%",
              opacity: 0,
            }}
            animate={{
              translateY: "0%",
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          <motion.img
            src={logo}
            alt="logo"
            className="absolute left-1/2 -translate-x-1/2"
            initial={{
              width: "70%",
              top: "50%",
              translateY: "-50%",
            }}
            animate={{
              width: "6rem",
              top: "4rem",
              translateY: "0%",
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />

          <motion.img
            src={burger}
            alt="burger"
            className="h-6 w-6"
            initial={{
              translateY: "150%",
              opacity: 0,
            }}
            animate={{
              translateY: "0%",
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 3.5,
            }}
          />
        </div>

        <div className="flex justify-between">
          <motion.p
            className="font-futura text-brand-red text-2xl font-bold uppercase"
            initial={{
              translateY: "100%",
              opacity: 0,
            }}
            animate={{
              translateY: "0%",
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 4,
            }}
          >
            Watch product
          </motion.p>

          <motion.p
            className="font-futura text-brand-red text-2xl font-bold uppercase"
            initial={{
              translateY: "150%",
              opacity: 0,
            }}
            animate={{
              translateY: "0%",
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 4.5,
            }}
          >
            Ready to fly?
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default FirstSlide;
