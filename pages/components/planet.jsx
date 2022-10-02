import Image from "next/image";
import styles from "./planet.module.css";
function Planet(props) {
    return (
        <figure className={styles.planetFigure}>
            <Image src={`/planets/planet${props.numberPlanet}${props.locked}.svg`} layout="fixed" width="140px" 
            height="140px" alt={`Entrar na Fase ${props.numberPlanet}`} className={styles.planets}/>
        </figure>
    );
}

Planet.defaultProps = {
    numberPlanet: 1,
    locked: "Lock"
}

export default Planet;