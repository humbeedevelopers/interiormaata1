"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import HeadingTextAnimation from "@/Common/AnimatedText/HeadingTextAnimation";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Stairs from "@/Animations/Stairs";
import wrong_logo from "@/images/wrong_logo.png";
import Interior_last_room_Svg from "@/svgs/Interior_Lastroom.svg";
import styles from "@/app/Single_Project_Layout/Single_project.module.css";
import { usePathname, useSearchParams } from "next/navigation";
import fallbackImage from "@/images/consultancyProjectImage1.png"; // Add your fallback image
import Link from "next/link";

const Project_Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMaterialModal, setIsMaterialModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [singleProject, setSingleProject] = useState([]);
  const [tabUrl, setTabUrl] = useState("");
  const [loading, setLoading] = useState(true); // Track image loading state
  const searchParams = useSearchParams();
  const [headingLoading, setHeadingLoading] = useState(false); // Track heading loading state
  const [heading, setHeading] = useState(null); // Store heading name
  const pathname = usePathname();
  
  // useEffect(() => {
  //   // Check if the hash is in the URL and scroll to the corresponding element
  //   if (window.location.hash) {
  //     const element = document.getElementById(window.location.hash.substring(1));
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   } else {
  //     // If no hash, just scroll to the top
  //     window.scrollTo(0, 0);
  //   }
  // }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);  // Ensure scroll position is reset
      }
    }, 100);  // Delay to ensure content is loaded

    return () => clearTimeout(timer);  // Clean up the timer
  }, []);  
  useEffect(() => {
    // Scroll to top of the page when it is loaded
    window.scrollTo(0, 0);
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    let hashUrl = hash.slice(1);
    setTabUrl(hashUrl);
    handleSingleProject(hashUrl);
  }, [pathname, searchParams]);


  const handleSingleProject = async (hashUrl) => {
    try {
      const response = await fetch(
        `https://interiormaataassets.humbeestudio.xyz/wp-json/acf/v3/posts/${hashUrl}/`
      );
      const data = await response.json();
      setSingleProject([data]);
      // If heading is not already available, set it to the fetched one
      if (data?.acf?.project_name) {
        setHeading(data.acf.project_name);
      }
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  // const handleImageClick = (imageSrc) => {
  //   setCurrentImage(imageSrc);
  //   setIsModalOpen(true);
  // };

  const handleImageClick = (imageSrc, isMaterial = false) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
    setIsMaterialModal(isMaterial); // Set this flag to distinguish modal type
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };
  const handleImageLoad = () => {
    setLoading(false); // Set loading to false once image is fully loaded
  };
  const handleImageError = (e) => {
    e.target.src =
      "https://interiormaataassets.humbeestudio.xyz/images/img7.jpg";
    // Set the width and height of the image element directly
    // e.target.style.width = "500px"; // Set your desired width
    // e.target.style.height = "300px"; // Set your desired height
  };

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const [refX, inViewX] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();
  const controlsX = useAnimation();
  const controls2 = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inViewX) {
      controlsX.start("visible");
    }
  }, [controlsX, inViewX]);
  useEffect(() => {
    if (inView2) {
      controlsX.start("visible");
    }
  }, [controls2, inView2]);

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

  const handleHeadingClick = async () => {
    if (!heading) {
      setHeadingLoading(true); // Start loading when clicked

      const hashUrl = tabUrl; // Assuming the `tabUrl` is the correct identifier for the project
      const response = await fetch(
        `https://interiormaataassets.humbeestudio.xyz/wp-json/acf/v3/posts/${hashUrl}/`
      );
      const data = await response.json();

      setHeadingLoading(false); // Stop loading after fetch is complete
      setHeading(data?.acf?.project_name || "Default Project Name"); // Update heading
    }
  };

  return (
    <Stairs>
      {singleProject?.map((item, index) => {
        // Check if at least one material image exists
        const hasMaterialImages = [
          item.acf.material_image1,
          item.acf.material_image2,
          item.acf.material_image3,
          item.acf.material_image4,
          item.acf.material_image5,
          item.acf.material_image6,
        ].some((img) => img); // This will return true if any image is available

        return (
          <div className={styles.First_project_layout_header} key={index}>
            <div className={styles.first_project_layout_outer}>
              <div className={styles.first_project_layout_content}>
                <div className={styles.first_project_text_header}>
                  <motion.div
                    ref={ref2}
                    initial="hidden"
                    animate={inView2 ? "visible" : "hidden"}
                    transition={{ duration: 0.9 }}
                  >
                    <HeadingTextAnimation
                      // heading={item?.acf?.project_name}
                      // justifyContent={"center"}
                      heading={
                        heading || item?.acf?.project_name || "Loading..."
                      }
                      justifyContent={"center"}
                      onClick={handleHeadingClick} // Trigger API fetch on click
                    />
                    {headingLoading && <p>Loading...</p>}
                  </motion.div>
                </div>
              </div>
            </div>
            {loading && (
              <div></div>
              // <div className={styles.loader}>
              //   <div className={styles.loaderSpinner}></div>
              //   <p>Loading images...</p>
              // </div>
            )}
            <div className={styles.First_project_layout_image}>
              {item.acf.heading_image && (
                <div className={styles.First_project_layout_image2_innerX}>
                  <Image
                    src={item.acf.heading_image}
                    alt="none"
                    className={styles.Single_project_image1}
                    width={1000}
                    height={600}
                    onLoadingComplete={handleImageLoad}
                    onError={handleImageError} // Handle error and use fallback image
                    onClick={() => handleImageClick(item.acf.heading_image)} // ✅ Click to open modal
                  />
                  <Image
                    src={item.acf.image2}
                    alt="none"
                    className={styles.Single_project_image1}
                    width={1000}
                    height={400}
                    onLoadingComplete={handleImageLoad}
                    onError={handleImageError} // Handle error and use fallback image
                    onClick={() => handleImageClick(item.acf.image2)} // ✅ Click to open modal
                  />
                </div>
              )}

              {item.acf.image4 && (
                <div className={styles.First_project_layout_image2_innerX}>
                  <Image
                    src={item.acf.image3}
                    alt="none"
                    className={styles.Single_project_image1}
                    width={1000}
                    height={400}
                    onLoadingComplete={handleImageLoad}
                    onError={handleImageError} // Handle error and use fallback image
                    onClick={() => handleImageClick(item.acf.image3)} // ✅ Click to open modal
                  />
                  <Image
                    src={item.acf.image4}
                    alt="none"
                    className={styles.Single_project_image1}
                    width={1000}
                    height={600}
                    onLoadingComplete={handleImageLoad}
                    onError={handleImageError} // Handle error and use fallback image
                    onClick={() => handleImageClick(item.acf.image4)} // ✅ Click to open modal
                  />
                </div>
              )}

              {item.acf.image5 && item.acf.image6 && (
                <div className={styles.First_project_layout_image2}>
                  <div
                    className={styles.First_project_layout_image2_inner}
                    onClick={() => handleImageClick(item.acf.image5)}
                  >
                    <Image
                      src={item.acf.image5}
                      alt="none"
                      className={styles.Single_project_image1}
                      width={1000}
                      height={500}
                      onLoadingComplete={handleImageLoad}
                      onError={handleImageError} // Handle error and use fallback image
                    />
                  </div>
                  <div
                    className={styles.First_project_layout_image2_inner}
                    onClick={() => handleImageClick(item.acf.image6)}
                  >
                    <Image
                      src={item.acf.image6}
                      alt="none"
                      className={styles.Single_project_image1}
                      width={1000}
                      height={500}
                      onLoadingComplete={handleImageLoad}
                      onError={handleImageError} // Handle error and use fallback image
                    />
                  </div>
                </div>
              )}

              {item.acf.image7 && (
                <div className={styles.First_project_layout_image2_innerX}>
                  <Image
                    src={item.acf.image7}
                    alt="none"
                    className={styles.Single_project_image1}
                    width={1000}
                    height={700}
                    onLoadingComplete={handleImageLoad}
                    onError={handleImageError} // Handle error and use fallback image
                    onClick={() => handleImageClick(item.acf.image7)} // ✅ Click to open modal
                  />
                  <Image
                    src={item.acf.image8}
                    alt="none"
                    className={styles.Single_project_image1}
                    width={1000}
                    height={300}
                    onLoadingComplete={handleImageLoad}
                    onError={handleImageError} // Handle error and use fallback image
                    onClick={() => handleImageClick(item.acf.image8)} // ✅ Click to open modal
                  />
                </div>
              )}
            </div>

            <div className={styles.interior_material_outer}>
              {/* Render the heading only if there's at least one material image */}
              {hasMaterialImages && (
                <div className={styles.first_project_text_header}>
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 0.9 }}
                  >
                    <HeadingTextAnimation
                      heading={"Material"}
                      justifyContent={"center"}
                    />
                  </motion.div>
                </div>
              )}

              <div className={styles.interior_material_content}>
                {[
                  {
                    img: item.acf.material_image1,
                    name: item.acf.material_name1,
                  },
                  {
                    img: item.acf.material_image2,
                    name: item.acf.material_name2,
                  },
                  {
                    img: item.acf.material_image3,
                    name: item.acf.material_name3,
                  },
                  {
                    img: item.acf.material_image4,
                    name: item.acf.material_name4,
                  },
                  {
                    img: item.acf.material_image5,
                    name: item.acf.material_name5,
                  },
                  {
                    img: item.acf.material_image6,
                    name: item.acf.material_name6,
                  },
                ]
                  .filter((imgObj) => imgObj.img) // Filter out objects without an image
                  .map((imgObj, index) => (
                    <div
                      className={styles.interior_material_text}
                      onClick={() => handleImageClick(imgObj.img, true)} // Pass `true` for material images
                      // onClick={() => handleImageClick(imgObj.img)}
                      key={index}
                    >
                      <Image
                        src={imgObj.img}
                        alt="Interior Material"
                        className={styles.interior_material_img}
                        width={1000}
                        height={600}
                        onError={handleImageError} // Handle error and use fallback image
                        onLoadingComplete={handleImageLoad}
                      />
                      <div className={styles.interior_material_overlay}>
                        <p className={styles.interior_material_overlay_text}>
                          {imgObj.name}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {isModalOpen && (
                <div className={styles.modal} onClick={handleModalClick}>
                  <div
                  className={isMaterialModal ? styles.modalContentOne : styles.modalContent}
                    // className={styles.modalContent}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className={styles.close} onClick={handleCloseModal}>
                      <Image className={styles.image} src={wrong_logo} alt="Close" />
                    </span>
                    <Image
                      src={currentImage}
                      alt="Interior Material"
                      className={styles.modalImage}
                      width={1000}
                      height={600}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className={styles.Interior_second_text_content}>
              <div className={styles.Interior_second_text_content_first}>
                <motion.div
                  ref={ref1}
                  initial="hidden"
                  animate={inView1 ? "visible" : "hidden"}
                  transition={{ duration: 0.9 }}
                >
                  <HeadingTextAnimation
                    heading={"interior maata: an estate agency"}
                    justifyContent={"center"}
                  />
                  <HeadingTextAnimation
                    heading={"with a conscience, selling beautiful"}
                    justifyContent={"center"}
                  />
                  <HeadingTextAnimation
                    heading={"homes across vadodara & beyond..."}
                    justifyContent={"center"}
                  />
                </motion.div>
              </div>
            </div>

            <div className={styles.interior_last_room_Section}>
              {item.acf.thumbnail && item.acf.video && (
                <Link href={item.acf.video} target="_blank">
                  <Image
                    src={item.acf.thumbnail}
                    alt="none"
                    className={styles.interior_last_room_img}
                    width={1000}
                    height={700}
                  />
                  <div className={styles.interior_last_room_overlay}>
                    <div className={styles.interior_last_room_overlay_svgs}>
                      <Image
                        src={Interior_last_room_Svg}
                        className={styles.inetrior_lastroom_img}
                        alt="none"
                      />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </Stairs>
  );
};

export default Project_Header;
