"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
// import Cover_image from "@/images/AboutUs_Ananya_image.png";
import Cover_image from "../../../public/image/AboutUs_Ananya_image1.jpg";
import styles from "@/Components/Ananya/ananya.module.css";
const Page = () => {
   const [showMore, setShowMore] = useState(false);
   
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
              heading={"ananya Bhattacharjee"}
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
                  width={350}
                  height={550}
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
                  Ananya’s Journey: Where Art Meets Soul Some stories begin with
                  logic, others with longing. Ananya’s began with both. Born in
                  the quiet town of Alipurduar, West Bengal, she grew up where
                  nature painted the skies and whispered through the trees. Art
                  was always around her—in the intricate patterns of fallen
                  leaves, in the shifting hues of the river at dusk. But life
                  took her down a different path: Electrical Engineering. The
                  lines and equations made sense, but they did not sing. And so,
                  one day, she chose art. Interior design became her language, a
                  way to translate emotions into spaces. Kolkata was where she
                  first carved her place in the world, but Mumbai, with its
                  restless pulse, pushed her forward. Her career soared,
                  creativity flourished—until life asked something new of her. 
                </p>
                <p className={styles.aboutUs_banner_textOne}>A
                  move to Vadodara, a pause for family. But art does not pause.
                  What seemed like an interruption became an evolution. Ananya
                  picked up a camera, not to seek fame, but to share what she
                  knew—to guide, to inspire, to teach others how to create homes
                  filled with warmth and meaning. What started as a quiet
                  passion soon grew into something greater. 
                  <p className={`${styles.aboutUs_banner_textOneOuter} ${showMore ? styles.show : styles.hide}`}>
                  In 2018, YouTube
                  India took notice, awarding her YouTube NextUp, and suddenly,
                  she wasn’t just designing spaces—she was shaping a movement.
                  Today, Ananya’s work is a fusion of heart and intellect. She
                  believes that design is not just about beauty, but about how a
                  space feels, breathes, and embraces those within it. Her homes
                  tell stories, where the simplicity of modern minimalism meets
                  the soul of traditional Indian craftsmanship. Every detail
                  speaks. Every corner hums with intention. Because a home, in
                  the end, is not just a place. It is a feeling
                  </p></p>
                  <div
                  className={styles.viewMoreButton}
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "View Less" : "View More"}
                </div>
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
