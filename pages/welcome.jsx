import Typewriter from "typewriter-effect";
import Link from "next/link";
import styles from "./welcome.module.css"
import Image from "next/image";
function Welcome() {
    return (
        <div className={styles.container}>
            <Link href="/login" className={styles.login}>
                <a className={styles.login}>Continuar a Aventura</a>
            </Link>
            <main className={styles.main}>
                <figure className={styles.mascoteField}>
                    <Image src="/main-mascote.svg" layout="responsive" width="30px" height={20} className={styles.mascote} alt="Mascote Voador"/>
                </figure>
                <div className={styles.mainText}>
                    <p className={styles.text}>Vamos viajar pelo espaço e...</p>

                    {/* A Tag Typewriter Produz efeito de escrita */}
                    <Typewriter options={{
                        strings: [
                            "APRENDER", "BRINCAR", "ESTUDAR", "DIVERTIR" //Em strings coloca tudo que é para escrever
                        ],
                        autoStart: true, //controla se ja vai comecar a escrever
                        loop: true // controla se vai ficar sempre executando
                    }} className={styles.typewriter}/>
                    <Link href="/login" className={styles.button}>
                        <a className={styles.button}>Começar</a>
                    </Link>
                </div>
            </main>
        </div>
    );
}
export default Welcome;