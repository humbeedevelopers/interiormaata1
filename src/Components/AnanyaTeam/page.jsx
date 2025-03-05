"use client";
import React, { useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
// import Cover_image from "@/images/AboutUs_Ananya_image.png";
import Cover_image from "@/images/img43.jpg";
import styles from "@/Components/AnanyaTeam/ananyaTeam.module.css";
const Page = () => {
  const text = useMemo(
    () =>
      // const text =
      "Some stories begin with logic, others with longing. Ananya’s began with both. Born in the quiet town of Alipurduar, West Bengal, she grew up where nature painted the skies and  whispered through the trees. Art was always around her—in the intricate patterns of fallen leaves, in the shifting hues of the river at dusk. But life took her down a different path: Electrical Engineering. The  lines and equations made sense, but they did not sing. And so, one day, she chose art. Interior design became her language, a way to translate emotions into spaces. Kolkata was where she  first carved her place in the world, but Mumbai, with its restless pulse, pushed her forward. Her career  soared, creativity flourished—until life asked something new of her. A move to Vadodara, a pause for family. But art does not pause.What seemed like an interruption became an evolution. Ananya picked up a camera, not to seek fame  but to share what she knew—to guide to inspire to teach others how to create",
    []
  );
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.008,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const imageAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1.3,
        ease: "easeOut",
      },
    },
  };
  const buttonAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 1.4,
        ease: "easeOut",
      },
    },
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div>
      <div className={styles.aboutUsHeader_outer}>
        <div className={styles.aboutUsHeader} ref={ref}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.9 }}
          >
            <HeadingTextAnimation
              heading={
                "Interior Maata Studio: A Dream Built in Uncertain Times"
              }
              justifyContent={"center"}
              className={styles.ananya}
            />
            {/* <HeadingTextAnimation
              heading={"Bhattacharjee"}
              justifyContent={"center"}
              className={styles.ananya}
            /> */}
          </motion.div>
          <div className={styles.aboutUs_flex_divider}>
            <div className={styles.aboutUs_banner_image_outer}>
              <motion.div
                className={styles.aboutUs_banner_image}
                variants={imageAnimation}
                initial="hidden"
                animate={controls}
              >
                <Image
                  src={Cover_image}
                  alt="image"
                  className={styles.aboutUs_banner_imageX}
                  // priority
                  loading="lazy" // Add this attribute
                />
              </motion.div>
            </div>
            <motion.div
              className={styles.aboutUs_banner_text_outer}
              variants={sentence}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.div className={styles.aboutUs_banner_text}>
                <p>
                  In 2020, the world stood still. Cities emptied, routines
                  faded, and homes—once just places to return to—became
                  everything. They became offices, schools, sanctuaries.
                  Suddenly, people weren’t just living in their spaces; they
                  were truly seeing them. The need for thoughtful, functional
                  design had never been greater. It was in the midst of this
                  shift that Interior Maata Studio was born. What started in a
                  small rented space with a handful of interns was never just a
                  business—it was a vision. A vision to create homes that
                  breathe, embrace, and inspire. With passion as its foundation,
                  Interior Maata Studio began transforming spaces, blending
                  modern minimalism with the warmth of traditional Indian
                  craftsmanship. Word spread, and what started as a quiet
                  initiative quickly grew into something bigger. A team formed,
                  ideas flourished, and soon, Interior Maata was no longer just
                  a name—it was a movement. Today, the studio stands strong with
                  20+ designers and a vast network of experts, shaping homes
                  with soul and intention. Having designed over 200 homes,
                  Interior Maata has become one of the most promising and
                  emerging design studios in the country. From metropolitan
                  cities to quiet towns, our work spans across India, bringing
                  timeless, functional design to life. But its reach doesn’t
                  stop there. Interior Maata’s signature design philosophy has
                  touched homes beyond borders, with international clients
                  embracing its approach to refined, breathable living. Every
                  project is crafted with an understanding of how people live,
                  move, and feel within their spaces. Every detail is
                  intentional, every corner designed to bring ease and beauty
                  into everyday life. Because a home is more than walls and
                  furniture. It is a reflection of the lives within it. And at
                  Interior Maata Studio, that belief is woven into every space
                  we create.
                </p>
              </motion.div>
              {/* for better optimisation removed it */}
              {/* {text.split("").map((char, index) => (
                <motion.span
                  className={styles.aboutUs_banner_text}
                  key={char + "-" + index}
                  variants={letter}
                >
                  {char}
                </motion.span>
              ))} */}
              {/* <motion.div
                className={styles.aboutUs_buttonOuter}
                variants={buttonAnimation}
                initial="hidden"
                animate={controls}
              >
                interior maata
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
