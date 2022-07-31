import Card from "./components/card"
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styles from "./new_account.module.css"
function NovoAluno() {
    const router = useRouter();
    const [sexo, setSexo] = useState("f");
    const { register, handleSubmit } = useForm();
    // Função de envio de informações para o Backend
    async function submit(data) {
        const req = await fetch("/api/new_aluno", {
          method: "POST",
          body: JSON.stringify({name: data.name, idade: data.idade, sexo: sexo}),
          headers: {
            "Content-Type": "application/json",
          }
        });
        try {
          const res = await req.json();
          if (res.create) {
            router.push("/alunos");
          }
        }
        catch {
          alert("Houve uma falha na comunicação com o servidor, \nestamos trabalhando para resolver o problema");          
        }
      }
    return (
        <div className={styles.container}>
            <h2>Vamos Começar</h2>
            <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <label htmlFor="">Nome:</label>
                <input type="text" className={styles.input} {...register("name")} required/>

                <label htmlFor="">Idade:</label>
                <input type="number" className={styles.input} min="1" max="18" {...register("idade")} required/>

                <label htmlFor="">Aluno é:</label>
                <div>
                    <input type="radio" name="sexo" id="f" onClick={() => {setSexo("f")}} defaultChecked/><label htmlFor="f">Menina</label><br />
                    <input type="radio" name="sexo" id="m" onClick={() => {setSexo("m")}}/><label htmlFor="m">Menino</label>
                </div>
                <button className={styles.submit}>Ingressar Astronauta!</button>
            </form>
        </div>
    );
}
export default NovoAluno;