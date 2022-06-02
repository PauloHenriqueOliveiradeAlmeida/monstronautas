import Card from "./components/card"
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./new_account.module.css"
function NovoAluno() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [idade, setIdade] = useState();
    const [sexo, setSexo] = useState("p");

    // Função de envio de informações para o Backend
    async function submit(event) {
        event.preventDefault();
        const req = await fetch("/api/new_aluno", {
          method: "POST",
          body: JSON.stringify({name: name, idade: idade, sexo: sexo}),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const res = await req.json();
        if (res.create === true) {
          router.push("/alunos");
        }
        else {
            setCard(
                <Card 
                title="Ocorreu um Erro..." 
                body="Infelizmente não foi possível realizar seu Cadastro, verifique as informações e tente novamente mais tarde" button="OK" />
            );
        }
      }
    return (
        <div className={styles.container}>
            <h2>Vamos Começar</h2>
            <form className={styles.form}>
                <label htmlFor="">Nome:</label>
                <input type="text" className={styles.input} value={name} onChange={(e) => {setName(e.target.value)}} required/>

                <label htmlFor="">Idade:</label>
                <input type="number" className={styles.input} min="1" max="18" value={idade} onChange={(e) => {setIdade(e.target.value)}} required/>

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