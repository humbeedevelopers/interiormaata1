import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Home_Layer from "@/svgs/new_border.svg";
import styles from "@/Components/AboutUs_threeCards/AboutUs_threeCards.module.css";
import about_image1 from "@/images/archimg1.png";
import about_image2 from "@/images/archimg2.png";
import about_image3 from "@/images/archimg3.png";
import Link from "next/link";
function Landing_page() {
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
    <div className={styles.landing_page_second_container} ref={ref}>
      <div className={styles.landing_page_second_images}>
      <Link href="/Services">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.2 }}
          className={styles.Landing_image1}
        >
          <Image src={Home_Layer} alt="none" className={styles.ImageHidden} />
          <Image src={about_image1} alt="none" className={styles.about_hover} />
          <div className={styles.overlay_text}>
            <p className={styles.overlay_text_content}>Interior <br />Consultancy</p>
            <p className={styles.overlay_text_content1}>Design & PMC</p>
          </div>
        </motion.div>
        </Link>
        <Link href="/Services">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.3 }}
          className={styles.Landing_image2}
        >
          <Image src={Home_Layer} alt="none"  className={styles.ImageHidden}/>
          <Image src={about_image2} alt="none" className={styles.about_hover} />
          <div className={styles.overlay_text}>
          <p className={styles.overlay_text_content}>architectural <br />Consultancy</p>
            <p className={styles.overlay_text_content1}>Design & PMC</p>
          </div>
        </motion.div>
        </Link>
        <Link href="/Services">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.4 }}
          className={styles.Landing_image3}
        >
          <Image src={Home_Layer} alt="none"  className={styles.ImageHidden}/>
          <Image src={about_image3} alt="none" className={styles.about_hover} id={styles.about_hoverOne}/>
          <div className={styles.overlay_text}>
            <p className={styles.overlay_text_content}>Complete Build Solution</p>
            <p className={styles.overlay_text_content1}>End-to-End Execution </p>
          </div>
        </motion.div>
        </Link>
      </div>
    </div>
  );
}
export default Landing_page;
