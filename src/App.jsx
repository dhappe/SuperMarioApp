import { useEffect, useState } from "react";
import "./index.css";
import { default as Main } from "./main.js";

function App() {
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0); // Estado para rastrear a pontuação

    useEffect(() => {
        Main(setGameOver, setScore); // Passe a função setGameOver e setScore para Main()
    }, []);

    const restartGame = () => {
        setGameOver(false);
        setScore(0); // Redefina a pontuação ao reiniciar o jogo
        window.location.reload();
    };

    return (
        <div className="game-board">
            <img src="../public/assets/clouds.png" alt="" className="clouds" />
            <img src="../public/assets/mario.gif" alt="" className="mario" />
            <img className="pipe" src="../public/assets/pipe.png" alt="" />
            {gameOver && (
                <div className="popup">
                    <img src="/assets/game-over.png" alt="Game Over" />
                    <p className="pontuacao">Pontuação: {score}</p>
                    <button className="popup-button" onClick={restartGame}>
                        Reiniciar
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
