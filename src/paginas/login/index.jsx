import Rodape from "componentes/rodape";
import styles from "./login.module.scss";
import Sidebar from "componentes/menu/Sidebar";

export default function TelaLogin() {
  return (
    <div>
      <Sidebar />
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

        <div className={styles.cont_criarConta}>
          <p>
            Não tem uma conta?{" "}
            <span>
              <a href="">Criar uma agora</a>
            </span>{" "}
          </p>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
