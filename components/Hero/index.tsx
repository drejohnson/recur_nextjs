import Router from "next/router";
import { motion } from "framer-motion";
import style from "./style.module.css";

import fadeInUp from "animations/fadeInUp";
import stagger from "animations/stagger";

const Hero = () => {
  return (
    <section className={style.hero}>
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={style.hero_graphic}
      >
        <img src="/events.svg" alt="Hero Graphic" />
      </motion.div>
      <motion.div variants={stagger(0.08)} className={style.hero_info}>
        <motion.h1 variants={fadeInUp}>
          When you need more control and flexiblity.
        </motion.h1>
        <motion.h2 variants={fadeInUp}>
          Recur helps you schedule aperiodic events with ease.
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ y: 0 }}
            onClick={() => Router.push("/dashboard")}
            type="button"
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
