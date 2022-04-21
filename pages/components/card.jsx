import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./card.module.css"

function Card(props) {
    const [visible, setVisible] = useState("visible");
    return (
        <div style={{visibility: visible}} className={styles.cardWindow}>
            <div className={styles.card}>
                <FontAwesomeIcon icon={faXmark} onClick={() => {setVisible("hidden")}} className={styles.close}/>
                <h2>{props.title}</h2>
                <p>{props.body}</p>
                <button onClick={() => {setVisible("hidden")}}>{props.button}</button>
            </div>
        </div>
    );
}
export default Card;