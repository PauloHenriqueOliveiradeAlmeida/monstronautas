import styles from "./login.module.css"
function Login() {
    return (
        <form action="" className={styles.container}>
            <h2 className={styles.login}>Olá, Vamos começar a Aprender!</h2>
            <fieldset className={styles.form}>
                <input className={styles.formInput} type="email" placeholder="Email da Mamãe"/>
                <input className={styles.formInput} type="password" placeholder="Senha da Mamãe"/>
                <input className={styles.formInput} type="button" value="Entrar" />
            </fieldset>
            <a href="http://" target="_blank" rel="noopener noreferrer" className={styles.criarConta}>Não tem conta? crie aqui</a>
        </form>
    )
}
export default Login;