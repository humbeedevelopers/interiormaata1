"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "./SliderOne.css";
import Residential_Interior_Design from "@/images/Rectangle-261.png";
import Commercial_Interior_Design from "@/images/Rectangle-350.png";
import Office_Interior_Design from "@/images/officeInerior.jpg";
import Button11 from "@/Common/Buttons/button11"
import Services_interior_svg from "@/svgs/Services_svg.svg";
import arrow from "@/svgs/slider_arrow.svg";
import styles from "@/Components/Service_SliderOne/slider.module.css";
const Page = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: false, // Only trigger once
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true, // Only trigger once
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true, // Only trigger once
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls.start("visible");
    }
  }, [controls, inView1]);

  useEffect(() => {
    if (inView2) {
      controls.start("visible");
    }
  }, [controls, inView2]);

  useEffect(() => {
    if (inView3) {
      controls.start("visible");
    }
  }, [controls, inView3]);
  return (
    <div className="productSlider">
      <div className="wrapper">
        <Swiper
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          speed={1500}
          // navigation={{
          //   nextEl: ".productSlider .right",
          //   prevEl: ".productSlider .left",
          // }}
          // pagination={{
          //   dynamicBullets: true,
          //   clickable: true,
          // }}
          autoplay={{
            delay: 3000, // Change slide every 3 seconds
            disableOnInteraction: false, // Keeps autoplay running after user interaction
          }}
          modules={[Navigation, EffectFade, Pagination, Autoplay]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="productSliderCardItemOne">
              <div className="card2">
                <Image
                  src={Residential_Interior_Design}
                  alt="none"
                  className="imgg"
                ></Image>
              </div>
              <div className="card1">
                {/* <HomePageCommonHeading heading={"Our Product"} /> */}
                <div className={styles.Services_second_Content_inner}>
                  <motion.div
                    ref={ref1}
                    initial="hidden"
                    animate={inView1 ? "visible" : "hidden"}
                    transition={{ duration: 0.1, delay: 0 }}
                  >
                    <HeadingTextAnimation
                      heading={"Interior Consultancy"}
                      justifyContent={"left"}
                      className={styles.Services_Content_residential}
                    />
                    <HeadingTextAnimation
                      heading={"Design & PMC"}
                      justifyContent={"left"}
                      className={styles.Services_Content_residential}
                    />
                  </motion.div>
                  <div>
                    <p className={styles.Services_Content_residential_desc}>
                      From concept to creation, we shape spaces that reflect
                      your vision—blending aesthetics, functionality, and expert
                      project management for a seamless transformation.
                    </p>
                    <Button11 button_text="Inquire Now"/>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="productSliderCardItemOne">
              <div className="card2">
                <Image
                  src={Commercial_Interior_Design}
                  alt="none"
                  className="imgg"
                ></Image>
              </div>
              <div className="card1">
                <motion.div
                  className={styles.Services_second_Content}
                  ref={ref2}
                >
                  {/* content */}
                  <div className={styles.Services_second_Content_inner}>
                    <motion.div
                      initial="hidden"
                      animate={inView2 ? "visible" : "hidden"}
                      transition={{ duration: 0.5 }}
                    >
                      <HeadingTextAnimation
                        heading={"Commercial "}
                        justifyContent={"left"}
                        className={styles.Services_Content_residential}
                      />
                      <HeadingTextAnimation
                        heading={"Interior Design"}
                        justifyContent={"left"}
                        className={styles.Services_Content_residential}
                      />
                    </motion.div>
                    <div>
                      <p className={styles.Services_Content_residential_desc}>
                        Crafting designs from timeless structures that harmonize
                        form, function, and finesse, backed by seamless Project
                        management.
                      </p>
                      <Button11 button_text="Inquire Now"/>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="productSliderCardItemOne">
              <div className="card2">
                <Image
                  src={Office_Interior_Design}
                  alt="none"
                  className="imgg"
                ></Image>
              </div>
              <div className="card1">
                <motion.div
                  className={styles.Services_second_Content}
                  ref={ref3}
                >
                  {/* content */}
                  <div className={styles.Services_second_Content_inner}>
                    <motion.div
                      initial="hidden"
                      animate={inView3 ? "visible" : "hidden"}
                      transition={{ duration: 0.5 }}
                    >
                      <HeadingTextAnimation
                        heading={"Office "}
                        justifyContent={"left"}
                        className={styles.Services_Content_residential}
                      />
                      <HeadingTextAnimation
                        heading={"Interior Design"}
                        justifyContent={"left"}
                        className={styles.Services_Content_residential}
                      />
                    </motion.div>
                    <div>
                      <p className={styles.Services_Content_residential_desc}>
                        From blueprint to reality—flawless transformations with
                        a touch of elegance and effortless precision.A seemless
                        execution with expert team with more than 15+ years of
                        experience .
                      </p>
                      <Button11 button_text="Inquire Now"/>
                    </div>
                  </div>
                  {/* content ends */}
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="slider_btn">
          <div className="left">
            <Image src={arrow} alt="slider_arrow" />
          </div>
          <div className="right">
            <Image src={arrow} alt="slider_arrow" />
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Page;
