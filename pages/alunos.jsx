import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "./alunos.module.css";
import nookies from "nookies";
import jsonwebtoken from "jsonwebtoken";
import Connection from "./api/connection";
import { useEffect, useState } from "react";
function Alunos({childrens}) {
    const [card, setCard] = useState();
    const [info_alunos, setInfo_alunos] = useState();
    const router = useRouter();

    useEffect(() => {
        let alunos = [];
        if (childrens.length == 0) {
            setInfo_alunos(
                (
                <div>
                    <h1>Nenhum Aluno Cadastrado</h1>
                    <p>Clique no + Para adicionar um novo aluno</p>
                </div>
                )
            );
        }
        else {
            for (let i = 0; i < childrens.length; i++) {
                alunos.push(
                    <div className={styles.alunosCard} key={i} onClick={() => {cardAssistireDesempenho(childrens[i].id_aluno)}}>
                        <p className={styles.alunosCardName}>{childrens[i].nome_aluno}</p>
                        <p>{childrens[i].idade_aluno} Anos</p>    
                    </div> 
                );
            };
        }
        setInfo_alunos(alunos);
    }, [childrens]);

    function cardAssistireDesempenho(id) {
        setCard(
            <div className={styles.cardBg} onClick={() => {setCard()}}>
                <div className={styles.cardAssistirDesempenho}>
                    <Link href={{
                        pathname: "/dashboard",
                        query: {id: id}
                    }} passHref>
                        <figure className={styles.assistir}>
                            <Image src="/cardBotaoAssistir.svg" width={200} height={200} alt="Botão Assistir" />
                            <legend>Assistir</legend>
                        </figure>
                    </Link>
                    <Link href={{
                        pathname: "/desempenho",
                        query: {id: id}
                    }} passHref>
                        <figure className={styles.desempenho}>
                            <Image src="/cardBotaoDesempenho.svg" width={200} height={200} alt="Botão Desempenho" />
                            <legend>Desempenho</legend>
                        </figure>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.alunos}>
            <h1>Alunos</h1>
            <hr />
            <div className={styles.infoAlunos}>
                {info_alunos}
            </div>
            <button className={styles.addAlunos} onClick={() => {
                router.push("/novoAluno");
            }}>+</button>
            {card}
        </div>
    );
}
export async function getServerSideProps(ctx) {
    try {
        const token = nookies.get(ctx);
        const id = jsonwebtoken.verify(token.next_auth_token, process.env.JWT_SECRET);
        
        const con = await Connection("SELECT id_aluno, nome_aluno, idade_aluno FROM tb_alunos where fk_id_responsavel=?", [id.id]);

        return {
            props: {
                childrens: con
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

export default Alunos;