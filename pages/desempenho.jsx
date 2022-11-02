import Head from "next/head";
import Link from "next/link";
import styles from "./desempenho.module.css";
import nookies from "nookies";
import jsonwebtoken from "jsonwebtoken";
import Connection from "./api/connection";
import { PieChart } from "react-minimal-pie-chart";
import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Certificado from "./certificado";

function Desempenho({id, nome, idade, sexo, aula_atual, token}) {
    const [toCertificate, setToCertificate] = useState({complete: false});
    const pdf = <Certificado/>
    let pdfDownloader;

    if (typeof window != "undefined") {
        pdfDownloader = <PDFDownloadLink document={pdf} fileName="Certificado.pdf" className={styles.button} style={{display: toCertificate.complete == true ? "block" : "none"}}>
            {({ blob, url, loading, error }) =>
            loading ? 'Carregando Certificado...' : 'Baixar Certificado'
            }
        </PDFDownloadLink>
        }

        
    const data = [
        {title: "Aulas Concluídas", value: aula_atual == 1 ? 0 : aula_atual - 1, color: "#FF0099"},
        {title: "Aulas não Concluídas", value: 3 - aula_atual < 0 ? 0 : 3 - aula_atual, color: "#4B08AD"}
    ]

    useEffect(() => {
        
        if (aula_atual > 3) {
            setToCertificate({complete: true});
        }
        else {
            setToCertificate({complete: false});
        }
    }, [aula_atual])

    return (
        <div className={styles.body}>
            <Head>
                <title>Monstronautas - Monitoramento Paterno</title>
            </Head>
            <div className={styles.card}>
            <Link href={{
                pathname: "/dashboard",
                query: {id: id}
                }}><a className={styles.close}><FontAwesomeIcon icon={faClose}/></a></Link>
                <h2>{nome}</h2>
                <h3>{idade} anos, {sexo == "m" ? "menino" : "menina"}</h3>
                <hr />
                <p>Aulas Concluídas: {aula_atual == 1 ? "Nenhuma" : aula_atual - 1}</p>
                <div className={styles.chartContainer}>
                    <div>
                        <div className={styles.chartMarkContainer}><span className={styles.aulaConcluida}></span><p>Aulas Concluídas</p></div>
                        <div className={styles.chartMarkContainer}><span className={styles.aulaNaoConcluida}></span><p>Aulas a Concluir</p></div>
                    </div>
                    <PieChart data={data} className={styles.chart} startAngle={90} label={({ dataEntry }) => dataEntry.value} lineWidth={30} animate/>
                </div>
                <hr style={{display: toCertificate.complete == true ? "block" : "none"}}/>
                {pdfDownloader}
            </div>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    try {
        const token = nookies.get(ctx);
        let token_aula;
        const id = ctx.query.id;
        const id_responsavel = jsonwebtoken.verify(token.next_auth_token, process.env.JWT_SECRET);
    
        const con = await Connection("SELECT nome_aluno, idade_aluno, sexo_aluno, aula_atual_aluno from tb_alunos where id_aluno=?", [id]);

        if (con[0].aula_atual_aluno > 3) {
            token_aula = jsonwebtoken.sign({id: id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});
        }
        else {
            token_aula = null;
        }
        return {
            props: {
                id: id,
                nome: con[0].nome_aluno,
                idade: con[0].idade_aluno,
                sexo: con[0].sexo_aluno,
                aula_atual: con[0].aula_atual_aluno,
                token: token_aula
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
export default Desempenho;