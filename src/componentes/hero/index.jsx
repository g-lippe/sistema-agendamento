import styles from './hero.module.scss'

function Hero() {
  return (
    <div className={styles.banner}>
      <div className={styles.hero_text}>
        <h1 >DataPet</h1>
        <h2>
          Cuide do seu pet <span className={styles.destaque}>sem sair de casa</span>
        </h2>
        <p>
          solução de ponta para agendamentos de petshop<br />
        </p>
      </div>
    </div>
  )
}

export default Hero;