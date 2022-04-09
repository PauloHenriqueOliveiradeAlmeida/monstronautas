import Typewriter from "typewriter-effect";
function Welcome() {
    return (
        <main>
            <p>Vamos viajar pelo espaço e...</p>
            <Typewriter options={{
                strings: [
                    "APRENDER", "BRINCAR", "ESTUDAR", "DIVERTIR"
                ],
                autoStart: true,
                loop: true
            }}/>
        </main>
    );
}
export default Welcome;