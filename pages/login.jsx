import Link from "next/link"
import styles from "./login.module.css"
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/context";
import Password from "./components/password";
function Login() {
    const [password, setPassword] = useState();
    const {register, handleSubmit} = useForm();
    const { signIn } = useContext(AuthContext);
    async function sign(data) {
        const req = await signIn({email: data.email, password: password});
    }
    return (
        <form className={styles.container} onSubmit={handleSubmit(sign)}>
            <h2 className={styles.login}>Olá, Vamos começar a Aprender!</h2>
            <fieldset className={styles.form}>
                <input className={styles.formInput} type="email" name="email" placeholder="Digite seu email" {...register("email")}/>

                <label>Agora a senha</label>
                <Password set={setPassword}/>
                <button className={styles.formInput}>Entrar</button>
            </fieldset>
            <Link href="/new_account">
                <a className={styles.criarConta}>Não tem conta? crie aqui</a>
            </Link>
        </form>
    )
}
export default Login;
