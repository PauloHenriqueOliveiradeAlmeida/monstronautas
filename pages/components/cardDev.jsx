import Image from "next/image";
import Link from "next/link";
import styles from "./cardDev.module.css"

 function CardDev(props) {

    const name = props.name != undefined ? props.name.split(" ", 1) : "";
    const secondName = props.name.substr(props.name.indexOf(" "), props.name.length);

    return (
        <div className={styles.card}>
            <Image src={`https://github.com/${props.username}.png`} layout="fixed" width={120} height={120} alt="foto do Desenvolvedor"/>
            <h2>{name}<br/>{secondName}</h2>
            <hr />
            <p>{props.cargo}</p>

            <Link href={`https://github.com/${props.username}`}>
                <a className={styles.button}>Github</a>
            </Link>
        </div>
    );
}

export default CardDev;