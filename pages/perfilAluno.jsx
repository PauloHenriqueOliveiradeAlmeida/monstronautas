import { useState } from "react";
import styles from "./perfilAluno.module.css";
import nookies from "nookies";
import jsonwebtoken from "jsonwebtoken";
import Connection from "./api/connection";
import { faPenToSquare, faSave } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function PerfilAluno({nome, idade, sexo}) {
    const [changeCard, setChangeCard] = useState();

    function changeDatas() {
        setChangeCard((
            <div className={styles.bgCard}>
                <div className={`${styles.card} ${styles.changeCard}`}>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button><FontAwesomeIcon icon={faSave} /></button>
                </div>
            </div>
        ));
    }
    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <h2>{nome}</h2>
                <hr />
                <p>Idade: {idade} anos</p>
                <p>sexo: {sexo == "m" ? "Menino" : "Menina"}</p>

                <button onClick={() => {changeDatas()}} className={styles.button}><FontAwesomeIcon icon={faPenToSquare} /></button>
            </div>
            {changeCard}
        </div>
    );
}

export async function getServerSideProps(ctx) {
    try {
        const token = nookies.get(ctx);
        const id = ctx.query.id;
        const id_responsavel = jsonwebtoken.verify(token.next_auth_token, process.env.JWT_SECRET);
    
        const con = await Connection("SELECT nome_aluno, idade_aluno, sexo_aluno from tb_alunos where id_aluno=?", [id])

        return {
            props: {
                nome: con[0].nome_aluno,
                idade: con[0].idade_aluno,
                sexo: con[0].sexo_aluno
            }
        }
    }
    catch {
        return {
            redirect: {
              permanent: false,
              destination: "/",
            }
        };
    }
}

export default PerfilAluno;