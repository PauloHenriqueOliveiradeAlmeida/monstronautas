import Card from './components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faHippo, faFrog, faCat, faOtter, faCrow, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useForm } from "react-hook-form"
import styles from "./new_account.module.css";
import { useRouter } from "next/router"
function NewAccount() {
    const [password, setPassword] = useState("");
    const { register, handleSubmit } = useForm();
    const router = useRouter();
    const [card, setCard] = useState();

    // Função responsável por verificar o tamanho da senha e, se menor que 6 adicionar um novo animal
    function addCharinPassword(char) {
        let password_char_groups = password.split(/(\s+)/); // Pega a senha digitada e converte em um vetor separando por espaços, ex. "Lápis Quebrou" vira "Lápis", " ", "Quebrou"
        password_char_groups = password_char_groups.filter((e) => {
            return e.trim().length > 0; // Filtra o vetor transformando espaços inúteis em nada e, removendo todos os nada
        })
        if (password_char_groups.length < 6) {
            setPassword(`${password} ${char}`); // Se a senha for menor que 6 então pega o valor da senha + um animal
            setCard(); // Remove o Card de Aviso
        }
        else {
            setCard(<Card title="Parece que a Senha é Grande Demais!" body="A Senha deve conter no máximo apenas 6 animaizinhos!😔" button="OK" />)
            // ^ Exibe o Card de Aviso ^
        }
    }

    // Função que remove animais da senha
    function removeCharinPassword() {
        let password_removal = password.substr(0, password.lastIndexOf(" ")); // Remove todos os caracteres após o último espaço
        setPassword(password_removal); // Define a senha
    }

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
        else {
            setCard(<Card title="Opa! Você esqueceu algo..." body="Parece que você não digitou nenhuma senha, por favor, para sua segurança digite uma senha de até 6 animaizinhos" button="OK" />)
        }
    }
    return (
        <div className={styles.container}>
            {card}
            <h2>Olá, Vamos Começar!</h2>
            <form className={styles.form}  onSubmit={handleSubmit(submit)}>
                <label htmlFor="nome">Gostaríamos de saber seu Nome</label>
                <input type="text" max="50" min="1" name="name" {...register("name")} className={styles.input} required/>

                <hr className={styles.hr} />
                <label htmlFor="email">Informe o Email</label>
                <input type="email" name="email" id="email" {...register("email")} className={styles.input} required/>

                <label htmlFor="">Agora, uma senha BEM Divertida</label>
                <div className={styles.echoPassword}>
                    {password}
                </div>
                <div className={styles.password}>
                    <div className={styles.passwordIcons}>
                        <FontAwesomeIcon icon={faDog} onClick={() => { addCharinPassword("cão") }} />
                        <FontAwesomeIcon icon={faCat} onClick={() => { addCharinPassword("gato") }} />
                        <FontAwesomeIcon icon={faHippo} onClick={() => { addCharinPassword("Hipo") }} /><br />

                        <FontAwesomeIcon icon={faFrog} onClick={() => { addCharinPassword("Sapo") }} />
                        <FontAwesomeIcon icon={faOtter} onClick={() => { addCharinPassword("Lontra") }} />
                        <FontAwesomeIcon icon={faCrow} onClick={() => { addCharinPassword("Urubu") }} />
                    </div>
                    <FontAwesomeIcon icon={faDeleteLeft} onClick={() => { removeCharinPassword() }} className={styles.del}/>
                </div>
                <button className={styles.submit}>Partir para a Aventura!</button>
            </form>
        </div>
    )
}
export default NewAccount;
