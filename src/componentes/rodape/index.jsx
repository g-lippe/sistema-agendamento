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
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.facebookLogo} />
          </a>
        </div>
        <div className={styles.icons}>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.instagramLogo} />
          </a>
        </div>
        <div className={styles.icons}>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className={styles.whatsappLogo} />
          </a>
        </div>
        <p>Desenvolvido com React</p>
      </footer>
    </>
  );
};

export default Rodape;
