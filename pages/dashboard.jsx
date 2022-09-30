import styles from "./dashboard.module.css";
import Image from "next/image";
import Link from 'next/link';
import Router from "next/router";
import nookies from "nookies";
import jsonwebtoken from "jsonwebtoken";
import Connection from "./api/connection";
import { useState } from 'react';
import { faClose, faGear, faForward, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Planet from "./components/planet";
import ReactAudioPlayer from 'react-audio-player';
function Dashboard({aulas, id}) {
    const [position, setPosition] = useState(-600);
    const [cardVideo, setCardVideo] = useState();
    const planets = [];
    const videos = [
        "https://www.youtube.com/embed/_pdSAN6PO6w",
        "https://www.youtube.com/embed/g0-Yz1g31ig?start=6",
        "https://www.youtube.com/embed/mpHP2eNYvMw?start=6"
    ]
    const phases = [
        {
            question: "Qual das imagens é o mouse?",
            audio: "audio2",
            options: [
                {
                    img: "monitor",
                    correct: false
                }, {
                    img: "teclado",
                    correct: false
                }, {
                    img: "mouse",
                    correct: true
                }, {
                    img: "gabinete",
                    correct: false
                }
            ]
        },
        {
        question: "Qual é o símbolo de Download?",
        audio: "audio5",
        options: [
            {
                img: "power",
                correct: false
            },
            {
                img: "raio",
                correct: false
            },
            {
                img: "disquete",
                correct: false
            },
            {
                img: "baixar",
                correct: true
            }
        ]
        },
        {
            question: "Qual é o celular?",
            audio: "audio3",
            options: [
                {
                    img: "celular",
                    correct: true
                },
                {
                    img: "calculadora",
                    correct: false
                },
                {
                    img: "camera",
                    correct: false
                },
                {
                    img: "tablet",
                    correct: true
                }
            ]
            }
    ]
    for (let i = 1; i <= 3; i++) {
        planets.push(
        <div className={styles.planetsContainer} onClick={() => {showCardVideo(aulas < i ? true : false, i - 1)}} key={`containerAula${i}`}>
            <h3 key={`nomeAula${i}`}>Aula {i}</h3>
            <Planet props={{
                numberPlanet: i,
                locked: aulas < i ? "Lock" : ""
            }} key={`aula${i}`}/>
        </div>
        )
    }

    function showMenu() {
        setPosition(
            position === 0 ? -600 : 0
        );
        
    }

    function showCardVideo(lock, linkVideo) {
        if (!lock) {
            setCardVideo((
                <div className={styles.cardBg} onClick={() => {}}>
                    <div className={styles.cardVideo}>
                        <FontAwesomeIcon icon={faClose} className={styles.close} onClick={() => {setCardVideo()}}/>
                        <iframe
                        src={videos[linkVideo]}
                        title="Aprendendo a usar o computador" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                        <button onClick={() => {showCardActivities(linkVideo)}}><FontAwesomeIcon icon={faForward}/></button>
                    </div>
                </div>
            ));
        }
    }

    function showCardActivities(phase) {
        setCardVideo((
            <div className={styles.cardBg}>
                <div className={styles.cardVideo}>
                    <ReactAudioPlayer
                        src={`/audio/${phases[phase].audio}.mp4`}
                        autoPlay
                    />
                    <FontAwesomeIcon icon={faClose} className={styles.close} onClick={() => {setCardVideo()}}/>
                    <iframe src="/professorAnimate.svg" frameBorder="0"></iframe>
                    <h3>{phases[phase].question}</h3>
                    <div className={styles.activitiesOptions}>
                        <button><Image src={`/atividades/${phases[phase].options[0].img}.svg`} layout="fixed" width={60} height={60} alt="monitor" onClick={() => {answerQuestion(phases[phase].options[0].correct)}}/></button>
                        <button><Image src={`/atividades/${phases[phase].options[1].img}.svg`} layout="fixed" width={60} height={60} alt="teclado" onClick={() => {answerQuestion(phases[phase].options[1].correct)}}/></button>

                        <button><Image src={`/atividades/${phases[phase].options[2].img}.svg`} layout="fixed" width={60} height={60} alt="mouse" onClick={() => {answerQuestion(phases[phase].options[2].correct)}}/></button>
                        <button><Image src={`/atividades/${phases[phase].options[3].img}.svg`} layout="fixed" width={60} height={60} alt="gabinete" onClick={() => {answerQuestion(phases[phase].options[3].correct)}}/></button>
                    </div>
                </div>
            </div>
        ));
    }

    async function answerQuestion(correct) {
        if (correct) {
            setCardVideo((
                <div className={styles.cardBg}>
                    <div className={styles.cardVideo}>
                        <ReactAudioPlayer
                            src="/audio/audio6.mp4"
                            autoPlay
                        />
                        <FontAwesomeIcon icon={faClose} className={styles.close} onClick={() => {setCardVideo()}}/>
                        <iframe src="/professorAnimate.svg" frameBorder="0"></iframe>
                        <h3>Você Acertou, Parabéns!</h3>
                        <button onClick={() => {setCardVideo()}}><FontAwesomeIcon icon={faCheck} /></button>
                    </div>
                </div>
            ));
            
            const req = await fetch("/api/updateClasses", {
                method: "POST",
                body: JSON.stringify({aula_atual_aluno: aulas <= 3 ? aulas + 1 : aulas, id: id}),
                headers: {
                  "Content-Type": "application/json",
                }
              });

            try {
                const res = await req.json();
                if (res.sucess) {
                    setTimeout(() => {Router.reload()}, 7000);
                    
                }
            } catch {
                
            }
        }
        else {
            setCardVideo((
                <div className={styles.cardBg}>
                    <div className={styles.cardVideo}>
                        <ReactAudioPlayer
                            src="/audio/audio7.mp4"
                            autoPlay
                        />
                        <FontAwesomeIcon icon={faClose} className={styles.close} onClick={() => {setCardVideo()}}/>
                        <iframe src="/professorAnimate.svg" frameBorder="0"></iframe>
                        <h3>Que Pena, Quem sabe mais tarde você consiga...</h3>
                        <button onClick={() => {setCardVideo()}}><FontAwesomeIcon icon={faCheck} /></button>
                    </div>
                </div>
            ));
        }
    }
    return (
        <div className={styles.body}>
            <header className={styles.header}>
                <Image src="/logo.svg" layout="fixed" width={75}
                    height={75} className={styles.logo} alt="Logotipo"/>

                <FontAwesomeIcon icon={faGear} onClick={showMenu} className={styles.configuracao} />
                
                <nav style={{ right: `${position}px` }} className={styles.menuNav}>
                    <ul className={styles.menu}>
                        <li>
                            <Link href={{pathname: "/perfilAluno", query: {id: id}}} passHref>
                                <figure>
                                    <Image src="/botaoPerfil.svg" layout="fixed" width={200} height={200} alt="Ver Perfil"/>
                                    <legend>Perfil</legend>
                                </figure>
                            </Link>
                        </li>
                        <li>
                            <Link href={{
                                pathname: "/desempenho",
                                query: {id: id}
                            }} passHref>
                                <figure>
                                    <Image src="/cardBotaoDesempenho.svg" layout="fixed" width={200} height={200} alt="Ver Desempenho"/>
                                    <legend>Desempenho</legend>
                                </figure>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <div className={styles.center}>
                {planets}
                {cardVideo}
            </div>
            
            <figure className={styles.teacherFigure}>
                <ReactAudioPlayer
                    src="/audio/audio4.mp4"
                    autoPlay={aulas<=1?true:false}
                />            
                <Image src="/professor.svg" alt="Professor" layout="fixed" width={200} height={200} className={styles.teacher}/>
            </figure>
        </div>


    )

}
export async function getServerSideProps(ctx) {
    try {
        const token = nookies.get(ctx);
        const id = ctx.query.id;
        const id_responsavel = jsonwebtoken.verify(token.next_auth_token, process.env.JWT_SECRET);
    
        const con = await Connection("SELECT aula_atual_aluno from tb_alunos where id_aluno=?", [id])

        return {
            props: {
                aulas: parseInt(con[0].aula_atual_aluno),
                id: id
            }
        }
    }
    catch {
        return {
            redirect: {
              permanent: false,
              destination: "/",
            }
          };
    }
}

export default Dashboard;