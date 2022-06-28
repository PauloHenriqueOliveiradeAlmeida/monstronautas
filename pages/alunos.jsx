import { useRouter } from "next/router";
import styles from "./alunos.module.css";
import nookies from "nookies";
import jsonwebtoken from "jsonwebtoken";
import Connection from "./api/connection";
function Alunos({childrens}) {
    const router = useRouter();
    return (
        <div className={styles.alunos}>
            <h1>Alunos</h1>
            <hr />
            <div>
                {JSON.stringify(childrens)}
            </div>
            <button className={styles.addAlunos} onClick={() => {
                router.push("/novoAluno");
            }}>+</button>
        </div>
    );
}
export async function getServerSideProps(ctx) {
    const token = nookies.get(ctx)
    const id = jsonwebtoken.verify(token.next_auth_token, process.env.JWT_SECRET);
    
    const con = await Connection("SELECT nome_aluno FROM tb_alunos where fk_id_responsavel=?", [id.id]);

    const values = con;
    return {
        props: {
            childrens: values
        }
    }
}

export default Alunos;