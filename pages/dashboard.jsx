import styles from "./dashboard.module.css";
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Dashboard() {
    const [position, setPosition] = useState(-600);
    function showMenu() {
        setPosition(
            position === 0 ? -600 : 0
        );
        
    }
    return (
        <div className={styles.body}>
            <header className={styles.header}>
                <Image src="/logo.svg" layout="fixed" width={75}
                    height={75} className={styles.logo} alt="Logotipo"/>

                <FontAwesomeIcon icon={faGear} onClick={showMenu} className={styles.configuracao} />
                
                <nav style={{ right: `${position}px` }} className={styles.menuNav}>
                    <ul className={styles.menu}>
                        <li>
                            <Link href="" passHref>
                                <figure>
                                    <Image src="/botaoPerfil.svg" layout="fixed" width={200} height={200} alt="Ver Desempenho"/>
                                    <legend>Perfil</legend>
                                </figure>
                            </Link>
                        </li>
                        <li>
                            <Link href="" passHref>
                                <figure>
                                    <Image src="/cardBotaoDesempenho.svg" layout="fixed" width={200} height={200} alt="Ver Desempenho"/>
                                    <legend>Desempenho</legend>
                                </figure>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

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




export default Dashboard;