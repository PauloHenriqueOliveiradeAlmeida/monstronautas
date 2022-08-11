import react from 'react';
import styles from "./dashboard.module.css";
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
function dashboard() {
    let [position, setPosition] = useState(-300);

    function showMenu() {
        setPosition(
            position === 0 ? -50 : 0
        );
    }
    return (
        <div className={styles.body}>

            <header>
                <nav className={styles.top}>
                    <Image src="/logo.jpeg" layout="fixed" width="64px"
                        height="64px" className={styles.logo} />

                    <div className='Configuracao'>

                        <div className={styles.botao}>
                            <label for="botao">Clique aqui</label>
                            <input type="checkbox" className={styles.configuracao} id="botao" onChange={() => showMenu('list')} />
                        </div>
                    </div>
                    <div style={{ right: `${position}vw` }} className={styles.list}>
                        <ul className={styles.navList}>
                            <li><a href="/">Meu Perfil</a></li>
                            <li><a href="/">Login e senha</a></li>
                            <li><a href="/">Adicionar amigo</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <div className={styles.center}>

                <Link href="" className={styles.link}>
                    <Image src="/dois.png" layout="responsive" width="80px"
                        height="80px" className={styles.dois} id="img" />
                </Link>

                <Link href="">
                    <Image src="/quatro.png" layout="responsive" width="80px"
                        height="80px" className={styles.quatro} />
                </Link>

                <Link href="">
                    <Image src="/cinco.png" layout="responsive" width="80px"
                        height="80px" className={styles.cinco} />
                </Link>

                <Link href="">
                    <Image src="/sete.png" layout="responsive" width="80px"
                        height="80px" className={styles.sete} />
                </Link>

                <Link href="">
                    <Image src="/nove.png" layout="responsive" width="80px"
                        height="80px" className={styles.nove} />
                </Link>
                <Link href="">
                    <Image src="/dez.png" layout="responsive" width="80px"
                        height="80px" className={styles.dez} />
                </Link>
                <Link href="">
                    <Image src="/treze.png" layout="responsive" width="80px"
                        height="80px" className={styles.treze} />
                </Link>

            </div>

        </div>


    )

}




export default dashboard;