import Typewriter from "typewriter-effect";
import Link from "next/link";
import styles from "./welcome.module.css"
import Image from "next/image";
import Slide from "react-reveal/Slide";
import CardDev from "./components/cardDev";
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
                                    <p>Diante da relevância da revolução tecnológica para a sociedade, e diversas pesquisas sobre o tema, percebemos que a exclusão do acesso às ferramentas digitais, elevam amplas desigualdades sociais</p>
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
                            <div>
                                <Slide right>
                                    <iframe src="/welcome/monstroJogando.svg" frameBorder="0"></iframe>
                                </Slide>
                            </div>
                        </article>
                        <article>
                            <div>
                                <Slide left>
                                    <h2>Nosso Objetivo em Geral</h2>
                                    <hr />
                                    <p>O objetivo geral de nosso projeto é poder auxiliar as crianças no básico da informática, de maneira simples e inclusiva</p>
                                </Slide>
                            </div>
                            <div>
                                <Slide right>
                                    <iframe src="/welcome/monstroObjetivo.svg" frameBorder="0"></iframe>
                                </Slide>
                            </div>
                        </article>
                        <article>
                            <div>
                                <Slide left>
                                    <h2>Como Funciona</h2>
                                    <hr />
                                    <p>Ao clicar no botão "Começar" você cria uma conta de Professor/Responsável
                                        e pode "matricular" seus filhos ou alunos no site</p>
                                </Slide>
                            </div>
                            <div>
                                <Slide right>
                                    <iframe src="/welcome/monstroPai.svg" frameBorder="0"></iframe>
                                </Slide>
                            </div>
                        </article>
                        <article>
                            <div>
                                <Slide left>
                                    <h2>Bora Estudar!</h2>
                                    <hr />
                                    <p>
                                        Os alunos terão algumas vídeoaulas seguidas de um exercício, quando terminarem tudo,
                                        podem pegar seu diploma na tela "Desempenho"!<br/>

                                        Então, Bora Estudar?
                                    </p>
                                </Slide>
                            </div>
                            <div>
                                <Slide right>
                                    <iframe src="/welcome/monstroEstuda.svg" frameBorder="0"></iframe>
                                </Slide>
                            </div>
                        </article>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e9e9e9" fillOpacity="1" d="M0,96L11.4,85.3C22.9,75,46,53,69,37.3C91.4,21,114,11,137,58.7C160,107,183,213,206,240C228.6,267,251,213,274,186.7C297.1,160,320,160,343,154.7C365.7,149,389,139,411,160C434.3,181,457,235,480,245.3C502.9,256,526,224,549,181.3C571.4,139,594,85,617,90.7C640,96,663,160,686,176C708.6,192,731,160,754,144C777.1,128,800,128,823,112C845.7,96,869,64,891,90.7C914.3,117,937,203,960,208C982.9,213,1006,139,1029,101.3C1051.4,64,1074,64,1097,90.7C1120,117,1143,171,1166,160C1188.6,149,1211,75,1234,42.7C1257.1,11,1280,21,1303,48C1325.7,75,1349,117,1371,160C1394.3,203,1417,245,1429,266.7L1440,288L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"></path></svg>
            </section>
            
            <section className={styles.cards}>
                <CardDev name="Erick Rian"     cargo="Backend Dev"   username="erickrian" />
                <CardDev name="Maria Eduarda"  cargo="Documentadora" username="Mariaoliveiraa" />
                <CardDev name="Maria Rita"     cargo="Documentadora" username="erickrian"/>
                <CardDev name="Matheus Frank"  cargo="Frontend Dev"  username="M4theusFrank" />
                <CardDev name="Paulo Henrique" cargo="Fullstack Dev" username="PauloHenriqueOliveiradeAlmeida" />
            </section>

            <section className={styles.content}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e9e9e9ff" fillOpacity="1" d="M0,128L15,122.7C30,117,60,107,90,96C120,85,150,75,180,96C210,117,240,171,270,213.3C300,256,330,288,360,261.3C390,235,420,149,450,112C480,75,510,85,540,101.3C570,117,600,139,630,160C660,181,690,203,720,218.7C750,235,780,245,810,218.7C840,192,870,128,900,112C930,96,960,128,990,160C1020,192,1050,224,1080,197.3C1110,171,1140,85,1170,69.3C1200,53,1230,107,1260,160C1290,213,1320,267,1350,272C1380,277,1410,235,1425,213.3L1440,192L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg>
                <div className={styles.contentInfo}>
                    <figure>
                        <Slide bottom>
                            <Image src="/monstros.svg" alt="Monstros" layout="responsive" width={90} height={90}/>
                        </Slide>
                    </figure>
                    <Slide bottom>
                        <h3>Feito com &#10084; para o TCC</h3>
                    </Slide>
                </div>
            </section>
        </div>
    );
}
export default Welcome;