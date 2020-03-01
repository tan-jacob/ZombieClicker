function moveMush(){
    if (isDying == false) {
        mush.src="images/mushidle1.gif"
        let width = window.innerWidth;
        let height = window.innerHeight;
        mush.style.left = Math.random()*(width - 170) + "px";
        mush.style.top = Math.random()*(height - 120) + "px";
        mush.style.margin = 0 + "px";
    }
}

function clickMush(){
    if (isDying) {
        return;
    }
    isDying = true;
    updateScore();
    mushDeath();
    setTimeout(function() {
        isDying = false;
        clearInterval(game);
        mushBirth();
    }, deathTimer);
}

function updateScore(){
    score++;
    let scorebox = document.getElementById("score");
    scorebox.innerHTML = "Click the mush to mush it! Your Score: " + score;

}

function mushBirth(){
    moveMush();
    game = setInterval(moveMush, 2000);
}

function mushDeath(){
    mush.src="images/mushdeath2.gif";
    deathsound.play();
}

let game;
let deathTimer = 750;
let isDying = false;
let score = 0;
let mush = document.getElementById("mush");
let deathsound = document.getElementById("deathSound");

mush.onclick = clickMush;