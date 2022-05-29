import Link from "next/link"
import styles from "./login.module.css"
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/context";
function Login() {
    const {register, handleSubmit} = useForm();
    const { signIn } = useContext(AuthContext);
    async function sign(data) {
        const req = await signIn(data);
        const res = req.json();
        console.log(res);
    }
    return (
        <form className={styles.container} onSubmit={handleSubmit(sign)}>
            <h2 className={styles.login}>Olá, Vamos começar a Aprender!</h2>
            <fieldset className={styles.form}>
                <input className={styles.formInput} type="email" name="email" placeholder="Email da Mamãe" {...register("email")}/>
                <input className={styles.formInput} type="password" name="senha" placeholder="Senha da Mamãe" {...register("password")}/>
                <button className={styles.formInput}>Entrar</button>
            </fieldset>
            <Link href="/new_account">
                <a className={styles.criarConta}>Não tem conta? crie aqui</a>
            </Link>
        </form>
    )
}
export default Login;
