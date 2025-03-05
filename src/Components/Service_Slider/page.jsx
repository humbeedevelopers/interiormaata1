"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "./Slider.css";
import Residential_Interior_Design from "@/images/Residential_Interior_Design.png";
import Commercial_Interior_Design from "@/images/Commercial_Interior_Design.png";
import Office_Interior_Design from "@/images/Office_Interior_Design.png";
import Services_interior_svg from "@/svgs/Services_svg.svg";
import arrow from "@/svgs/slider_arrow.svg";
import styles from "@/Components/Service_Slider/slider.module.css";
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
          speed={500}
          navigation={{
            nextEl: ".productSlider .right",
            prevEl: ".productSlider .left",
            // disabledClass: "swiper-button-disabled",
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Navigation, EffectFade, Pagination]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="productSliderCardItem">
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
                      heading={"Residential "}
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
                      Our firm specializes in creating thoughtfully designed
                      homes that blend aesthetics, functionality, and
                      personalization, ensuring every space reflects the
                      client’s lifestyle and vision.
                    </p>
                  </div>
                  <div>
                    <div className={styles.Services_Content_residential_list}>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg} alt="none" />
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Consultation & Needs Assessment – Understanding client
                          requirements, lifestyle, and design aspirations.
                        </p>
                      </div>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg} alt="none" />
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Space Planning & Layout Design – Optimizing space for
                          functionality, flow, and comfortwith the help of
                          Autocad layout
                        </p>
                      </div>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg} alt="none" />
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Concept Development & Visualization – Creating mood
                          boards, 3D renders, and design themes.
                        </p>
                      </div>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg} alt="none" />
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Furniture & Decor Selection – Curating furniture,
                          decor, and accessories for a cohesive look.
                        </p>
                      </div>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg} alt="none" />
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Custom Furniture & Built-ins – Designing tailor-made
                          furniture for seamless integration.
                        </p>
                      </div>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg} alt="none" />
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Lighting & Ambience Design – Enhancing mood and
                          functionality through strategic lighting.
                        </p>
                      </div>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg} alt="none" />
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          Material & Color Consultation – Selecting materials,
                          textures, and finishes for durability and style.
                        </p>
                      </div>
                      <div className={styles.Services_Content_list_inner}>
                        <Image src={Services_interior_svg} alt="none" />
                        <p
                          className={
                            styles.Services_Content_residential_list_text
                          }
                        >
                          End-to-End Project Management – Overseeing design
                          execution, vendor coordination, and timely completion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="productSliderCardItem">
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
                        Our Commercial architectural services focus on crafting
                        timeless, functional, and sustainable homes that reflect
                        personal lifestyles while optimizing space and
                        aesthetics.
                      </p>
                    </div>
                    <div>
                      <div className={styles.Services_Content_residential_list}>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none" />
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Site Analysis & Feasibility Studies – Evaluating
                            terrain, climate, and zoning regulations for optimal
                            design decisions.
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none" />
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Concept Development & Space Planning – Designing
                            thoughtful layouts that enhance flow, comfort, and
                            usability.
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none" />
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Architectural Design & 3D Visualization – Creating
                            detailed plans, elevations, and renders for clear
                            visualization.
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none" />
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Structural & MEP Integration – Ensuring seamless
                            coordination of structural, mechanical, electrical,
                            and plumbing elements.
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none" />
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Material Selection & Sustainability – Choosing
                            eco-friendly, durable materials for long-term
                            performance.
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none" />
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Regulatory Compliance & Approvals – Managing
                            permits, codes, and legal clearances.
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none" />
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Project Management & Execution – Overseeing the
                            construction process, ensuring quality, efficiency,
                            and timely delivery.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="productSliderCardItem">
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
                        Our office interior design services focus on creating
                        modern, functional, and inspiring workspaces that
                        enhance productivity, reflect brand identity, and ensure
                        employee well-being.
                      </p>
                    </div>

                    <div>
                      <div className={styles.Services_Content_residential_list}>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none" />
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Workplace Strategy & Consultation – Understanding
                            business goals to create efficient and ergonomic
                            workspaces.
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none" />
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Space Planning & Layout Design – Optimizing office
                            layouts for collaboration, flexibility, and workflow
                            efficiency.
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none" />
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Furniture & Décor Selection – Curating office
                            furniture, materials, and aesthetics for a cohesive
                            brand experience.
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none" />
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Acoustic & Lighting Design – Enhancing comfort,
                            focus, and energy efficiency with strategic
                            solutions.
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none" />
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Sustainable & Smart Office Solutions – Integrating
                            eco-friendly materials and technology for a
                            future-ready workspace.
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none" />
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Brand Integration & Aesthetics – Designing offices
                            that visually communicate company values and
                            culture.
                          </p>
                        </div>
                        <div className={styles.Services_Content_list_inner}>
                          <Image src={Services_interior_svg} alt="none" />
                          <p
                            className={
                              styles.Services_Content_residential_list_text
                            }
                          >
                            Project Management & Execution – Overseeing design
                            implementation to ensure seamless completion.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* content ends */}
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="slider_btn">
          <div className="left">
            <Image src={arrow} alt="slider_arrow" />
          </div>
          <div className="right">
            <Image src={arrow} alt="slider_arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
