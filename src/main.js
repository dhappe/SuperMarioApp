function Main(setGameOver, setScore) {
    const mario = document.querySelector(".mario");
    const pipe = document.querySelector(".pipe");
    let score = 0;

    const jump = () => {
        mario.classList.add("jump");
        setTimeout(() => {
            mario.classList.remove("jump");
            increaseScore(); // Chama a função para aumentar a pontuação quando o mario salta
        }, 600);
    };

    const increaseScore = () => {
        score++;
        setScore(score);
    };

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window
            .getComputedStyle(mario)
            .bottom.replace("px", "");

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 90) {
            pipe.style.animation = "none";
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = "none";
            mario.style.bottom = `${marioPosition}px`;

            mario.src = "/assets/game-over.png";
            mario.style.width = "55px";
            mario.style.marginLeft = "65px";

            clearInterval(loop);
            setGameOver(true);
        }
    }, 10);

    document.addEventListener("keydown", jump);
}

export default Main;
