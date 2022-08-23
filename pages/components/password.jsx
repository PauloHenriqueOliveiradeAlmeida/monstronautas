import { useState } from "react";
import styles from "./password.module.css"
import Card from './card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faHippo, faFrog, faCat, faOtter, faCrow, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

function Password(props) {
    const [password, setPassword] = useState("");
    const [card, setCard] = useState();
    // Função responsável   por verificar o tamanho da senha e, se menor que 6 adicionar um novo animal
    function addCharinPassword(char) {
        let password_char_groups = password.trim().split(/(\s+)/); // Pega a senha digitada e converte em um vetor separando por espaços, ex. "Lápis Quebrou" vira "Lápis", " ", "Quebrou"
        password_char_groups = password_char_groups.filter((e) => {
            return e.trim().length > 0; // Filtra o vetor transformando espaços inúteis em nada e, removendo todos os nada
        })
        if (password_char_groups.length < 6) {
            setPassword(`${password} ${char}`); // Se a senha for menor que 6 então pega o valor da senha + um animal
            props.set(`${password} ${char}`);

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

    return (
        <>
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
        </>
    );
}
export default Password;
