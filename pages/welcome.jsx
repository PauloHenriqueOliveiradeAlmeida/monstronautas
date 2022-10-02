import Typewriter from "typewriter-effect";
import Link from "next/link";
import styles from "./welcome.module.css"
import Image from "next/image";
import Slide from "react-reveal/Slide";
function Welcome() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/login" className={styles.login}>
                    <a className={styles.login}>Continuar a Aventura</a>
                </Link>
            </header>
            <main className={styles.main}>
                <figure className={styles.mascoteField}>
                    <Image src="/main-mascote.svg" layout="responsive" width={0} height={0} className={styles.mascote} alt="Mascote Voador" />
                </figure>
                <div className={styles.mainText}>
                    <p className={styles.text}>Vamos viajar pelo espaço e...</p>

                    {/* A Tag Typewriter Produz efeito de escrita */}
                    <Typewriter options={{
                        strings: [
                            "APRENDER", "BRINCAR", "ESTUDAR", "DIVERTIR" //Em strings coloca tudo que é para escrever
                        ],
                        autoStart: true, //controla se ja vai comecar a escrever
                        loop: true // controla se vai ficar sempre executando
                    }} className={styles.typewriter} />
                    <Link href="/new_account" className={styles.button}>
                        <a className={styles.button}>Começar</a>
                    </Link>
                </div>
            </main>


            <section className={styles.content}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e9e9e9ff" fillOpacity="1" d="M0,288L12,288C24,288,48,288,72,288C96,288,120,288,144,250.7C168,213,192,139,216,133.3C240,128,264,192,288,229.3C312,267,336,277,360,266.7C384,256,408,224,432,186.7C456,149,480,107,504,101.3C528,96,552,128,576,128C600,128,624,96,648,80C672,64,696,64,720,58.7C744,53,768,43,792,74.7C816,107,840,181,864,192C888,203,912,149,936,154.7C960,160,984,224,1008,240C1032,256,1056,224,1080,192C1104,160,1128,128,1152,106.7C1176,85,1200,75,1224,101.3C1248,128,1272,192,1296,202.7C1320,213,1344,171,1368,176C1392,181,1416,235,1428,261.3L1440,288L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"></path></svg>
                <div className={styles.contentInfo}>
                    <div>
                        <article>
                            <div>
                                <Slide left>
                                    <h2>Causa pela qual lutamos</h2>
                                    <hr />
                                    <p>Diante da relevância da revolução tecnológica para a sociedade, e diversas pesquisas sobre o tema, percebemos que a exclusão do acesso às ferramentas digitais, elevam amplas desigualdades sociais.</p>
                                </Slide>
                            </div>
                            <div>
                                <Slide right>
                                    <iframe src="/welcome/professorEspada.svg" frameBorder="0"></iframe>
                                </Slide>
                            </div>

                        </article>
                        <article>
                            <div>
                                <Slide left>
                                    <h2>Método Divertido de ensinar</h2>
                                    <hr />
                                    <p>No método de funcionamento buscamos uma forma intitulada “Gameficação” que consiste em tornar a experiência do usuário mais atrativa simulando como se tudo fosse “um jogo”</p>
                                </Slide>
                            </div>
                        </article>
                        <article>
                            <div>
                                <Slide left>
                                    <h2>Nosso Objetivo em Geral</h2>
                                    <hr />
                                    <p>O objetivo geral de nosso projeto é poder auxiliar as crianças no básico da informática, de maneira simples e inclusiva.</p>
                                </Slide>
                            </div>
                        </article>
                        <article>
                            <div>
                                <Slide left>
                                    <h2>Nosso Objetivo Específico</h2>
                                    <hr />
                                    <p>Nosso objetivo específico é de possibilitar aos usuários a oportunidade de se familiarizem com o computador desde a infância para que mais a frente elas tenham facilidade para realizar trabalhos escolares e até mesmo em seus futuros empregos.</p>
                                </Slide>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Welcome;