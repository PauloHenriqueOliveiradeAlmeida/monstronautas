import styles from '../styles/Home.module.css'
import Welcome from './welcome'
export default function Home() {
  return (
    <div className={styles.container}>
      <Welcome/>
    </div>
  )
}
