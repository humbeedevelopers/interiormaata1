import styles from "@/Components/Whatsapp_Button/whatsapp.module.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/08031406773"
      target="_blank"
      rel="noreferrer noopener"
      className={styles.whatsappButton}
    >
      <div className={styles.pingAnimation}></div>
      <div className={styles.iconContainer}>
        <FaWhatsapp className={styles.icon} />
      </div>
    </a>
  );
};

export default WhatsAppButton;
