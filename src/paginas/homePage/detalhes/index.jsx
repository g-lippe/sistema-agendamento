import styles from './detalhes.module.scss'


function Detalhes() {
    return (
        <section className={styles.detalhes} style={{ backgroundImage: 'url(/imagens/fundo_pet.png)'}}>
            <h2>
                Nós trabalhamos com mais de 250 Petshops <br /> para garantir o melhor e mais rápido atendimento do seu pet <br />
                
            </h2>


        </section>
    );
}

export default Detalhes;