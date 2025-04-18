import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import "./style4.css";
import { blur, translate } from "../../anim";
import nav_logo from "@/svgs/logo.svg";
import Image from "next/image";
import AboutUsPopup from "@/Components/Aboutus_Popup/page";
import ProjectsPopup from "@/Components/Projects_Popup/page";

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  handleNavLink,
  hoverPopupHandler,
  setHoverPopup,
  hoverPopupContent,
  hoverPopup,
  hoverPopupIndex,
  popupHandler,
}) {
  const router = useRouter();
  const [isPopupHovered, setIsPopupHovered] = useState(false);
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [noExitAnimation, setNoExitAnimation] = useState(false);
  // const [isMenuOpenone, setIsMenuOpenone] = useState(true); // Track if menu is open
  const popupHideTimeout = useRef(null);
  const [isMenuOpenone, setIsMenuOpenone] = useState(true); // or false by default if closed
  const [isMobile, setIsMobile] = useState(false);
  const [isSvgClicked, setIsSvgClicked] = useState(false); // Track SVG click state
  const pathname = usePathname();

  // Detect window size for mobile view (less than 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit={noExitAnimation ? "" : "exit"}
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  const handleMouseLeave = () => {
    if (!isPopupHovered && !isLinkHovered) {
      popupHideTimeout.current = setTimeout(() => {
        setSelectedLink({ isActive: false, index: null });
        setHoverPopup(false);
      }, 300);
    }
  };

  const handleMouseEnterLink = (index) => {
    setSelectedLink({ isActive: true, index });
    setIsLinkHovered(true);
    clearTimeout(popupHideTimeout.current);
  };

  const handleMouseLeaveLink = () => {
    setIsLinkHovered(false);
    handleMouseLeave();
  };

  const handleMouseEnterPopup = () => {
    if (popupHideTimeout.current) {
      clearTimeout(popupHideTimeout.current);
    }
    setIsPopupHovered(true);
  };

  const handleMouseLeavePopup = () => {
    setIsPopupHovered(false);
    handleMouseLeave();
  };
 // Mobile click handler for About Us
  // const handleMobileAboutUsClick = () => {
  //   setHoverPopup(true); // Show the popup
  //   hoverPopupHandler("About us"); // Trigger the hoverPopupHandler for "About us"
  // };
  // Mobile click handler for About Us (open and close the popup)
  const handleMobileAboutUsClick = () => {
    // Toggle the SVG click state (blur effect)
    setIsSvgClicked((prev) => !prev); // Toggle the blur state

    // Check if popup is already open, then close it
    if (hoverPopup) {
      setHoverPopup(false); // Close the popup
    } else {
      setHoverPopup(true); // Open the popup
      hoverPopupHandler("About us"); // Trigger the hoverPopupHandler for "About us"
    }
  };


   // Handling click on the logo to close the menu and redirect
   const handleLogoClick = () => {
    // Close the menu
    setIsMenuOpenone(false);

    // Call navLinkHandler and popupHandler before redirect
    handleNavLink();
    // popupHandler();

    // Redirect after closing the menu
    setTimeout(() => {
      router.push(pathname === "/" ? "/" : "/Homepage");
    }, 300); // Timeout for animation (adjust as needed)
  };

  return (
    <>
      <div className={`nav_body ${isSvgClicked ? "blurred" : ""} ${isMenuOpenone ? "menu-open" : "menu-closed"}`}>
        {/* <div className={`nav_body ${isSvgClicked ? "blurred" : ""}`}> */}
        <div
          className={`navOpenLogo`}
          onClick={handleLogoClick} // Update the click handler for the logo
          // onClick={() => router.push(pathname === "/" ? "/" : "/Homepage")}
        >
          <Image
            src={nav_logo}
            alt="Description of the image"
            className="navOpenLogo_img"
          />
        </div>
        {links.map((link, index) => {
          const { title, href } = link;
          const isAboutUs = title === "About us";

          return (
            <Link
              key={`l_${index}`}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                if (index === 3 && popupHandler) {
                  popupHandler();
                }

                if (title !== "PROJECTS") {
                  setNoExitAnimation(false);
                  handleNavLink();
                  router.push(href);
                } else {
                  setNoExitAnimation(true);
                  setHoverPopup(true);
                  hoverPopupHandler(title);
                }
              }}
            >
              <motion.p
                onMouseOver={() => {
                  handleMouseEnterLink(index);
                  if (
                    !isMobile &&
                    (title === "About us" || title === "PROJECTS")
                  ) {
                    setHoverPopup(true);
                    hoverPopupHandler(title);
                  }
                }}
                onMouseLeave={handleMouseLeaveLink}
                variants={blur}
                animate={
                  selectedLink.isActive && selectedLink.index !== index
                    ? "open"
                    : "closed"
                }
                className={
                  hoverPopup && hoverPopupIndex === index ? "blurred" : ""
                }
              >
                {getChars(title)}
              </motion.p>
            </Link>
          );
        })}
        {/* If mobile, display the SVG for About Us */}
        {isMobile &&
          selectedLink.index ===
            links.findIndex((link) => link.title === "About us") && (
            <div
              className={`about-us-mobile-popup ${isSvgClicked ? "no-blur" : ""}`} // Ensure SVG is not blurred
              onClick={handleMobileAboutUsClick}
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                className="MobileSvg"
              >
                <path d="M0 3l12 18 12-18h-24zm12 16.197l-10.132-15.197h20.263l-10.131 15.197" />
              </svg>
            </div>
          )}
          {/* </div> */}
      </div>

      {hoverPopup && (
        <div
          onMouseOver={handleMouseEnterPopup}
          onMouseLeave={handleMouseLeavePopup}
        >
          {selectedLink.index ===
            links.findIndex((link) => link.title === "About us") && (
            <AboutUsPopup
              content={hoverPopupContent}
              handleNavLink={handleNavLink}
            />
          )}
          {selectedLink.index ===
            links.findIndex((link) => link.title === "PROJECTS") && (
            <ProjectsPopup
              content={hoverPopupContent}
              handleNavLink={handleNavLink}
            />
          )}
        </div>
      )}
    </>
  );
}
