import { useForm } from "react-hook-form";
import styles from "./new_account.module.css";
import { useRouter } from "next/router"
import { useState } from "react";
import Password from "./components/password";
import Card from './components/card';
function NewAccount() {
    const [password, setPassword] = useState();
    const { register, handleSubmit } = useForm();
    const router = useRouter();


    // Função de envio de informações para o Backend
    async function submit(data) {
        if (password.length > 0) {
            const req = await fetch("/api/new_account", {
              method: "POST",
              body: JSON.stringify({name: data.name, email: data.email, password: password}),
              headers: {
                "Content-Type": "application/json"
              }
            });
            try {
                const res = await req.json();
                if (res.createAccount == true) {
                    router.push("/alunos");
                }
                else {
                    alert("Falha ao criar perfil, estamos trabalhando para corrigir isso");
                }
            }
            catch {
                alert("Falha ao criar perfil, estamos trabalhando para corrigir isso");
            }
          }
        else {
            setCard(<Card title="Opa! Você esqueceu algo..." body="Parece que você não digitou nenhuma senha, por favor, para sua segurança digite uma senha de até 6 animaizinhos" button="OK" />)
        }
    }
    return (
        <div className={styles.container}>
            <h2>Olá, Vamos Começar!</h2>
            <form className={styles.form}  onSubmit={handleSubmit(submit)}>
                <label htmlFor="nome">Gostaríamos de saber seu Nome</label>
                <input type="text" max="50" min="1" name="name" {...register("name")} className={styles.input} required/>

                <hr className={styles.hr} />
                <label htmlFor="email">Informe o Email</label>
                <input type="email" name="email" id="email" {...register("email")} className={styles.input} required/>

                <label htmlFor="">Agora, uma senha BEM Divertida</label>
                <Password set={setPassword}/>
                <button className={styles.submit}>Partir para a Aventura!</button>
            </form>
        </div>
    )
}
export default NewAccount;
