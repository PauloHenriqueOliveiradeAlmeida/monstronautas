import react from 'react';
import styles from "./dashboard.module.css";
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function dashboard() {
    let [position, setPosition] = useState(-300);

    function showMenu() {
        setPosition(
            position === 0 ? -80 : 0
        );
    }
    return (
        <div className={styles.body}>
            <header>
                <nav className={styles.top}>
                    <Image src="/logo.jpeg" layout="fixed" width="64px"
                        height="64px" className={styles.logo} />

                    <div className='Configuracao'>

                        <FontAwesomeIcon icon={faGear} onClick={showMenu} className={styles.configuracao} />
                    </div>
                    <div style={{ right: `${position}vw` }} className={styles.list}>
                        <ul className={styles.navList}>
                            <li><a href="/">Meu Perfil</a></li>
                            <li><a href="/">Login e senha</a></li>
                            <li><a href="/">Adicionar amigo</a></li>
                        </ul>
                    </div>
                </nav >
            </header >
            <div className={styles.center}>

                <Link href="" passHref className={styles.link}>
                    <Image src="/dois.png" layout="responsive" width="80px"
                        height="80px" className={styles.dois} id="img" alt="Entrar na Fase 1" />
                </Link>

                <Link href="" passHref>
                    <Image src="/quatro.png" layout="responsive" width="80px"
                        height="80px" className={styles.quatro} alt="Entrar na Fase 2" />
                </Link>

                <Link href="" passHref>
                    <Image src="/cinco.png" layout="responsive" width="80px"
                        height="80px" className={styles.cinco} alt="Entrar na Fase 3" />
                </Link>

                <Link href="" passHref>
                    <Image src="/sete.png" layout="responsive" width="80px"
                        height="80px" className={styles.sete} alt="Entrar na Fase 4" />
                </Link>

                <Link href="" passHref>
                    <Image src="/nove.png" layout="responsive" width="80px"
                        height="80px" className={styles.nove} alt="Entrar na Fase 5" />
                </Link>

                <Link href="" passHref>
                    <Image src="/dez.png" layout="responsive" width="80px"
                        height="80px" className={styles.dez} alt="Entrar na Fase 6" />
                </Link>

                <Link href="" passHref>
                    <Image src="/treze.png" layout="responsive" width="80px"
                        height="80px" className={styles.treze} alt="Entrar na Fase 7" />
                </Link>

            </div>

        </div >


    )

}




export default dashboard;