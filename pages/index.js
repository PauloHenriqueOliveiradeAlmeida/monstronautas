import styles from '../styles/Home.module.css'
import Login from './components/login/login'
import Image from 'next/image'
import mascote from '../public/mascote.svg'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <Login/>
      </div>
    </div>
  )
}
