import styles from './login.module.scss'


export default function TelaLogin() {
  return (
    <div className={styles.cont_principal}>
      <h2>Faça login no DataPet</h2>

      <div className={styles.cont_inputs}>
        <label htmlFor="">Endereço de email</label>
        <input className={styles.input_mail} type="text" />
        <label htmlFor="">Senha</label>
        <input className={styles.input_password} type="text" />

        <a href="">Esqueceu a senha?</a>

        <button>Entrar</button>

      </div>

    </div>
  )
}