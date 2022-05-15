import Link from "next/link"
import styles from "./login.module.css"
function Login() {
    return (
        <form action="" className={styles.container}>
            <h2 className={styles.login}>Olá, Vamos começar a Aprender!</h2>
            <fieldset className={styles.form}>
                <input className={styles.formInput} type="email" name="email" placeholder="Email da Mamãe"/>
                <input className={styles.formInput} type="password" name="senha" placeholder="Senha da Mamãe"/>
                <input className={styles.formInput} type="button" name="botao" value="Entrar"/>
            </fieldset>
            <Link href="/new_account">
                <a className={styles.criarConta}>Não tem conta? crie aqui</a>
            </Link>
        </form>
    )
}
export default Login;
