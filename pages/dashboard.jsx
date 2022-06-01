import react from 'react';
import styles from "./dashboard.module.css";
import Image from "next/image";
import Link from 'next/link';
import { config } from '@fortawesome/fontawesome-svg-core';

function dashboard() {
    return (
        <div className={styles.body}>

            <div className={styles.top}>

                <Link href="">
                    <Image src="/logo.png" layout="fixed" width="70px"
                        height="70px" className={styles.logo} />
                </Link>

                <Link href="">
                    <Image src="/configuracao.png" layout="fixed"
                        width="80px" height="80px" className={styles.config} />
                </Link>

            </div>

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