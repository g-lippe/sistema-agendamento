import React from "react";
import styles from "./rodape.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const Rodape = () => {
  return (
    <footer>
      <p>Nossas redes sociais abaixo:</p>
      <FaFacebook className={styles.facebookLogo} />
      <FaInstagram className={styles.instagramLogo} />
      <FaWhatsapp className={styles.whatsappLogo} />
    </footer>
  );
};

export default Rodape;
