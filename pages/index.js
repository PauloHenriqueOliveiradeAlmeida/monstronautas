import styles from '../styles/Home.module.css'
import Welcome from './components/welcome'
export default function Home() {
  return (
    <div className={styles.container}>
      <Welcome/>
    </div>
  )
}
