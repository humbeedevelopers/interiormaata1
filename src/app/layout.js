"use client";
import { useEffect } from "react";
import Form from "@/Common/Form/page";
import Headers from "@/Common/headers/index";
import Footer from "@/Common/Footer/page";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import Refresh from "@/Components/Refresh/page";
import "./globals.css";
import DisableZoom from "@/Components/DisableZoom/page";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const location1 = usePathname();
   useEffect(() => {
    // console.log(window);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-9X7CWWC2RR");

    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer");
// })(window, document, "script", "dataLayer", "GTM-W6VNSPT6");
  });

  return (
    <html lang="en" className={`${poppins.variable}`}>
         <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Interior Maata: Creating soulful elegance through minimal and sustainable home decor." />
        <meta name="keywords" content="interior design, sustainable decor, minimalism, Ananya Bhattacharjee" />
        <meta name="author" content="Ananya Bhattacharjee" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://interiormaata.com" />
        <meta property="og:title" content="Interior Maata" />
        <meta property="og:description" content="Creating soulful elegance through minimal and sustainable home decor." />
        {/* <meta property="og:image" content="https://interiormaataassets.humbeestudio.xyz/mainsiteassets/images/AboutUs_Ananya_image.png" /> */}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://interiormaata.com" />
        <meta property="twitter:title" content="Interior Maata" />
        <meta property="twitter:description" content="Creating soulful elegance through minimal and sustainable home decor." />
        {/* <meta property="twitter:image" content="https://interiormaataassets.humbeestudio.xyz/mainsiteassets/images/AboutUs_Ananya_image.png" /> */}

        {/* <link rel="preload" href="https://interiormaataassets.humbeestudio.xyz/mainsiteassets/images/AboutUs_Ananya_image.png" as="image" /> */}
        {/* Add more preload links as necessary */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9X7CWWC2RR"></script>
      </head>
      {/* <meta http-equiv="refresh" content="3"/>  to refresh the website in every 3 seconds just for learning  */}
      <body>
      
        <Headers />
        <Refresh />
        <DisableZoom />
        {children}

        {location1 !== "/SocialMedia" && <Form />}
        <Footer />
      </body>
    </html>
  );
}
