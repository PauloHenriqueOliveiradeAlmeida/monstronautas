import { useRouter } from "next/router";
import styles from "./alunos.module.css"
function Alunos() {
    const router = useRouter();
    return (
        <div className={styles.alunos}>
            <h1>Alunos</h1>
            <hr />
            <button className={styles.addAlunos} onClick={() => {
                router.push("/novoAluno");
            }}>+</button>
        </div>
    );
}
export default Alunos;