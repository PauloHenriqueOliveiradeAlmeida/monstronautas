import Head from "next/head";
import { useState } from "react";
import styles from "./perfilAluno.module.css";
import nookies from "nookies";
import jsonwebtoken from "jsonwebtoken";
import Connection from "./api/connection";
import { faPenToSquare, faSave } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import Router from "next/router";
import { faClose } from "@fortawesome/free-solid-svg-icons";
function PerfilAluno({id, nome, idade, sexo}) {
    const [changeCard, setChangeCard] = useState();
    const [sexoNovo, setSexoNovo] = useState("m");
    const { register, handleSubmit } = useForm();

    async function submit(data) {
        const req = await fetch("/api/updateAlunos", {
            method: "POST",
            body: JSON.stringify({id: id, name: data.name, idade: data.idade, sexo: sexoNovo}),
            headers: {
                "Content-Type": "application/json"
            }
        });

        try {
            const res = await req.json();
            if (res.sucess) {
                Router.reload();
            }
        }
        catch {
            window.alert("Não foi possível mudar as informações :(\nTente novamente mais tarde...")
        }
    }

    function changeDatas() {
        setChangeCard((
            <form className={styles.bgCard} onSubmit={handleSubmit(submit)}>
                <div className={`${styles.card} ${styles.changeCard}`}>
                    <FontAwesomeIcon icon={faClose} className={styles.close} onClick={() => {
                        setChangeCard();
                    }}/>
                    <input type="text" placeholder={nome} {...register("name")} />
                    <div>
                        <input type="number" placeholder={idade} {...register("idade")} /><label>anos</label>
                    </div>

                    <div>
                        <div>
                            <input type="radio" name="sexo" value="menino" id="menino" checked="true" onClick={() => {
                                setSexoNovo("m");
                            }}/>
                            <label htmlFor="menino">Menino</label>
                        </div>
                        <div>
                            <input type="radio" name="sexo" value="menina" id="menina" onClick={() => {
                                setSexoNovo("f");
                            }}/>
                            <label htmlFor="menina">Menina</label>
                        </div>
                    </div>
                    <button className={styles.button}><FontAwesomeIcon icon={faSave} /></button>
                </div>
            </form>
        ));
    }
    return (
        <div className={styles.body}>
            <Head>
                <html lang="pt-br"/>
                <title>Monstronautas - Perfil do Aluno</title>
            </Head>
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
                id: id,
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