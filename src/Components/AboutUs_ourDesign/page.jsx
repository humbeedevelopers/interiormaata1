import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import styles from "@/Components/AboutUs_ourDesign/aboutUs_ourDesign.module.css";
import Emphasis_logo from "@/svgs/emphasis1.svg";
import Variety_logo from "@/svgs/variety1.svg";
import Unity_logo from "@/svgs/unity1.svg";
import Functionality_logo from "@/svgs/functionality1.svg";
import Materiality_logo from "@/svgs/materiality1.svg";

function Seventh_Section() {
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
    <div className={styles.ourDesign_outer}>
      <div className={styles.seventh_Section_container}>
        <div className={styles.seventh_Section_content_text}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.9 }}
          >
            <HeadingTextAnimation heading={"Our "} justifyContent={"left"} />
            <HeadingTextAnimation heading={"design "} justifyContent={"left"} />
            <HeadingTextAnimation
              heading={"Approach "}
              justifyContent={" left"}
            />
          </motion.div>
        </div>
        <p className={styles.seventh_Section_content_text1}>
          We have an integrated process for
          <br />
          our products to ensure they reflect <br />
          our values, deliver on the targets,
          <br /> and meet our users' expectations.
        </p>
      </div>

      {/* table section */}
      <div className={styles.table_Section}>
        <div className={styles.table_content}>
          <Image
            className={styles.ourDesign_icons}
            src={Emphasis_logo}
            alt="image"
          />
          <div className={styles.table_section_content}>
            <p className={styles.table_Section_emphasis}>emphasis</p>
            <p className={styles.table_content_emphasis}>
              Highlighting key design elements to create focal points and
              enhance spatial experience.
            </p>
          </div>
        </div>
        <div className={styles.table_content}>
          <Image
            className={styles.ourDesign_icons}
            src={Functionality_logo}
            alt="image"
          />
          <div className={styles.table_section_content}>
            <p className={styles.table_Section_emphasis}>Functionality</p>
            <p className={styles.table_content_emphasis}>
              Ensuring efficient space planning, smart layouts, and practical
              design solutions.
            </p>
          </div>
        </div>
        <div className={styles.table_content}>
          <Image
            className={styles.ourDesign_icons}
            src={Unity_logo}
            alt="image"
          />
          <div className={styles.table_section_content}>
            <p className={styles.table_Section_emphasis}>Aesthetics</p>
            <p className={styles.table_content_emphasis}>
              Balancing colors, textures, and forms to create visually appealing
              and harmonious spaces.
            </p>
          </div>
        </div>
        <div className={styles.table_content}>
          <Image
            className={styles.ourDesign_icons}
            src={Functionality_logo}
            alt="image"
          />
          <div className={styles.table_section_content}>
            <p className={styles.table_Section_emphasis}>Sustainability</p>
            <p className={styles.table_content_emphasis}>
              Integrating eco-friendly materials, energy-efficient solutions,
              and sustainable practices.
            </p>
          </div>
        </div>
        <div className={styles.table_content}>
          <Image
            className={styles.ourDesign_icons}
            src={Materiality_logo}
            alt="image"
          />
          <div className={styles.table_section_content}>
            <p className={styles.table_Section_emphasis}>Innovation</p>
            <p className={styles.table_content_emphasis}>
              Leveraging new technologies, smart design tools, and creative
              problem-solving for modern solutions.
            </p>
          </div>
        </div>
        <div className={styles.table_content}>
          <Image
            className={styles.ourDesign_icons}
            src={Materiality_logo}
            alt="image"
          />
          <div className={styles.table_section_content}>
            <p className={styles.table_Section_emphasis}>User-Centric Design</p>
            <p className={styles.table_content_emphasis}>
              Understanding client needs, lifestyle, and emotions to craft
              personalized and meaningful spaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Seventh_Section;
