import react from 'react';
import styles from "./dashboard.module.css";
import Image from "next/image";
import Link from 'next/link';
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function dashboard() {
    return (
        <div className={styles.body}>

            <div className={styles.top}>

                <Link href="" passHref>
                    <Image src="/logo.png" layout="fixed" width="70px"
                        height="70px" className={styles.logo} alt="Logotipo"/>
                </Link>

                <Link href="" passHref>
                    <FontAwesomeIcon icon={faGear} />
                    {/* <Image src="/configuracao.png" layout="fixed"
                        width="80px" height="80px" className={styles.config} alt="Botão Configuração"/> */}
                </Link>

            </div>

            <div className={styles.center}>

                <Link href="" passHref className={styles.link}>
                    <Image src="/dois.png" layout="responsive" width="80px"
                        height="80px" className={styles.dois} id="img" alt="Entrar na Fase 1"/>
                </Link>

                <Link href="" passHref>
                    <Image src="/quatro.png" layout="responsive" width="80px"
                        height="80px" className={styles.quatro} alt="Entrar na Fase 2"/>
                </Link>

                <Link href="" passHref>
                    <Image src="/cinco.png" layout="responsive" width="80px"
                        height="80px" className={styles.cinco} alt="Entrar na Fase 3"/>
                </Link>

                <Link href="" passHref>
                    <Image src="/sete.png" layout="responsive" width="80px"
                        height="80px" className={styles.sete} alt="Entrar na Fase 4"/>
                </Link>

                <Link href="" passHref>
                    <Image src="/nove.png" layout="responsive" width="80px"
                        height="80px" className={styles.nove} alt="Entrar na Fase 5"/>
                </Link>

                <Link href="" passHref>
                    <Image src="/dez.png" layout="responsive" width="80px"
                        height="80px" className={styles.dez} alt="Entrar na Fase 6"/>
                </Link>

                <Link href="" passHref>
                    <Image src="/treze.png" layout="responsive" width="80px"
                        height="80px" className={styles.treze} alt="Entrar na Fase 7"/>
                </Link>

            </div>

        </div>


    )
}
export default dashboard;