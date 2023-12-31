import styles from './detalhes.module.scss'


function Detalhes() {
  return (
    <section >

      <div className={styles.faixa} style={{ backgroundImage: 'url(/imagens/fundo_pet.png)' }}>
        <h2>
          Nós trabalhamos com mais de 250 Petshops <br /> para garantir o melhor e mais rápido atendimento do seu pet <br />
        </h2>
      </div>



      <h1>Por que utilizar o DataPet?</h1>


      <div className={styles.containerCards}>

        <div className={styles.cardMotivo} >
          <h3>Mais rápido</h3>
          <p>
            Chega de ficar procurando por algum lugar aberto,  ou de ficar ligando para combinar um horário 
          </p>
        </div>

        <div className={styles.cardMotivo} >
          <h3>Melhores Escolhas</h3>
          <p>
            Nosso site permite que você descubra e compare dezenas de estabelecimentos perto de você
          </p>
        </div>


      </div>


    </section>
  );
}

export default Detalhes;