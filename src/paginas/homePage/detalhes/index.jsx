import styles from './detalhes.module.scss'


function Detalhes() {
  return (
    <section className={styles.seção}>

      <div className={styles.faixa} style={{ backgroundImage: 'url(/imagens/fundo_pet.png)' }}>
        <h2>
          Nós trabalhamos com mais de 250 Petshops <br /> para garantir o melhor e mais rápido atendimento do seu pet <br />
        </h2>
      </div>


      <div className={styles.porque}>
        <h1>Por que utilizar o DataPet?</h1>

        <div className={styles.containerCards}>

          <div className={styles.cardMotivo + ' hover_shadow'} >
            <h3>Mais rápido</h3>
            <p>
              Chega de ficar procurando por algum lugar aberto,  ou de ficar ligando para combinar um horário
            </p>
          </div>

          <div className={styles.cardMotivo + ' hover_shadow'} >
            <h3>Melhores Escolhas</h3>
            <p>
              Nosso site permite que você descubra e compare dezenas de estabelecimentos perto de você
            </p>
          </div>
        </div>
      </div>

      <div className={styles.como}>
        <div className={styles.como_left}>
          <h2>Mas como funciona?</h2>
          <p>Agende um atendimento para seu pet em 4 passos</p>
        </div>

        <div className={styles.como_right}>
          <p>Comece pesquisando por um estabelecimento</p>
          <p>Escolha que tipo de serviço deseja agendar</p>
          <p>Selecione um dos horários disponíveis</p>
          <p>Agende seu horário!</p>
        </div>

      </div>


    </section>
  );
}

export default Detalhes;