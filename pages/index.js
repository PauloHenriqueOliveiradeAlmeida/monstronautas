import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/main.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header class={styles.header}>
        <figure>
          <img alt="logo"/>
        </figure>
      </header>

      <form className={styles.form}>
        <label>E-mail do Papai ou da Mamãe</label>
        <input type="email" required/>
        
        <label>Quais Animaizinhos?</label>
        <div>
          <input type="checkbox"/>Elefante
          <input type="checkbox"/>Mamaco
          <input type="checkbox"/>Paraguaio
        </div>
      </form>

    </div>
  )
}
