import Image from "next/image";
import Link from "next/link";
import styles from "./cardDev.module.css"

 function CardDev(props) {

    return (
        <div className={styles.card}>
            <Image src={`https://github.com/${props.username}.png`} layout="fixed" width={120} height={120} alt="foto do Desenvolvedor"/>
            <h2>{props.name.split(" ", 1)}<br/>{props.name.substr(props.name.indexOf(" "), props.name.length)}</h2>
            <hr />
            <p>{props.cargo}</p>

            <Link href={`https://github.com/${props.username}`}>
                <a className={styles.button}>Github</a>
            </Link>
        </div>
    );
}

export default CardDev;