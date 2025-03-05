"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import Button6 from "@/Common/Buttons/button6";
import Image from "next/image";
import { FreeMode, Thumbs, Pagination, Autoplay } from "swiper/modules";
import project1 from "@/images/img71.jpg";
// import project2 from "@/images/newimg1.jpg";
// import project3 from "@/images/project3.jpg";
// import project4 from "@/images/project4.jpg";
import styles from "@/Components/KnowAboutUsHeaderOne/knowAboutUs.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Page = () => {
  const text =
    "Trad-Mo embodies the harmonious fusion of Traditional Indian and Modern minimal Design . Its an idea of an open bright space with Complementary furniture but some Indian traditional elements were you have your roots hold , that’s when you know you are in the right space . This a sustainable style of design , more than that this is a way of life .If you think about the Practical side of the Style , Minimal maintenance required for Trad-Mo . Timeless , Sustainable , Close to your root , Maintenance free Life complementing today’s lifestyle . ";

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
    <>
      <div>
        <div className={styles.aboutUsHeader_outer}>
          <div className={styles.aboutUsHeader} ref={ref}>
            <div>
              <p className={styles.ananya}>TRAD-MO</p>
            </div>
            {/* <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.9 }}
            >
              <HeadingTextAnimation
                heading={"TRAD-MO"}
                justifyContent={"center"}
                className={styles.ananya}
              />
            </motion.div> */}
            <div className={styles.aboutUs_flex_divider}>
              <div className={styles.aboutUs_banner_image_outer}>
                <Image
                  src={project1}
                  alt="none"
                  className={styles.ImageProject}
                />
              </div>
              <motion.div
                className={styles.aboutUs_banner_text_outer}
                // variants={sentence}
                // initial="hidden"
                // animate={inView ? "visible" : "hidden"}
              >
                <p className={styles.aboutUs_banner_text}>
                  A name that carries meaning in every syllable— "Trad" for the
                  traditions that shape us, "Mo" for the effortless modernity we
                  embrace. A home that carries the whispers of the past yet
                  breathes with the ease of the present. A space where modern
                  minimalism does not erase history but rather lets it shine in
                  its purest form. It was in this beautiful harmony of old and
                  new that Ananya, the founder of Interior Maata Studio, found
                  inspiration. She saw how Indian homes were evolving—embracing
                  clean, functional design, yet holding onto their deep love for
                  tradition. And so, TradMo was born—a design philosophy that
                  blends the sleekness of modern living with the rich soul of
                  Indian heritage. And so, Tradmo is not just a design style—it
                  is a way of life. It brings together the best of both worlds:
                  clean, breathable, and functional spaces infused with the
                  warmth of Indian aesthetics. A practical home, yet deeply
                  emotional. A place where the past and present exist in
                  harmony. From modern city apartments to soulful heritage
                  homes, Interior Maata Studio has shaped Tradmo into a
                  movement—one that redefines Indian homes for a new generation.
                  Because no matter how much we evolve, our roots always find a
                  way back home.
                </p>
                {/* {text.split("").map((char, index) => (
                  <motion.span
                    className={styles.aboutUs_banner_text}
                    key={char + "-" + index}
                    variants={letter}
                  >
                    {char}
                  </motion.span>
                ))} */}
                {/* <div
                  className={styles.aboutUs_buttonOuter}
                  // variants={buttonAnimation}
                  // initial="hidden"
                  // animate={controls}
                >
                  <Button6 button_text="KNOW MORE" />
                </div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
