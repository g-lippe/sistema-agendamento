import React from "react";
import styles from "./rodape.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Rodape = () => {
  return (
    <>
      <footer>
        <div className={styles.icons}>
          <FaFacebook className={styles.facebookLogo} />
        </div>
        <div className={styles.icons}>
          <FaInstagram className={styles.instagramLogo} />
        </div>
        <div className={styles.icons}>
          <FaWhatsapp className={styles.whatsappLogo} />
        </div>
        <p>Desenvolvido com React</p>
      </footer>
    </>
  );
};

export default Rodape;
