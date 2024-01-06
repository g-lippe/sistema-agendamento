import styles from "./hero.module.scss";
import petBg from "../../../assets/imagens/pet_photo_placeholder.jpg";

function Hero() {
  return (
    <div className={styles.banner}>
      <div className={styles.hero_text}>
        <h1>DataPet</h1>
        <h2>
          Cuide do seu pet{" "}
          <span className={styles.destaque}>sem sair de casa</span>
        </h2>
        <p>
          solução prática e simples para agendamentos de petshop
          <br />
        </p>
      </div>
      <div className={styles.hero_img}>
        <img src={petBg} alt="pet background" />
      </div>
    </div>
  );
}

export default Hero;
