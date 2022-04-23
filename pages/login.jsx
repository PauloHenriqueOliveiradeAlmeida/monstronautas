import React, { useState } from "react"
import styles from "./login.module.css"
function Login() {

    const [values, setValues] = useState();
    console.log(values)
    const handleChangeValues = value =>{
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    const clickbutton = () =>{
        console.log(values);
    }
    }
    return (
<<<<<<< HEAD:pages/components/login/login.jsx
        <form action="pages/conexao" className={styles.container}>
            <h2 className={styles.login}>Vamos Fazer Login</h2>
=======
        <form action="" className={styles.container}>
            <h2 className={styles.login}>Olá, Vamos começar a Aprender!</h2>
>>>>>>> origin:pages/login.jsx
            <fieldset className={styles.form}>
                <input className={styles.formInput} type="email" name="email" placeholder="Email da Mamãe" onChange={handleChangeValues}/>
                <input className={styles.formInput} type="password" name="senha" placeholder="Senha da Mamãe" onChange={handleChangeValues}/>
                <input className={styles.formInput} type="button" name="botao" value="Entrar" onClick = {() => clickbutton()}/>
            </fieldset>
            <a href="http://" target="_blank" rel="noopener noreferrer" className={styles.criarConta}>Não tem conta? crie aqui</a>
        </form>
    )
}
export default Login;