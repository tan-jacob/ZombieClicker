let mushWidth = 170;
let mushHeight = 120;
let game;
let deathTimer = 750;
let isDying = false;
let score = 0;
let mush = document.getElementById("mush");
let deathsound = document.getElementById("deathSound");
let endbutton = document.getElementById("endgame");
let scorebox = document.getElementById("score");

mush.onclick = clickMush;
endbutton.onclick = endGame;

function moveMush() {
    if (isDying == false) {
        mush.src = "images/mushidle1.gif"
        let width = window.innerWidth;
        let height = window.innerHeight;
        mush.style.left = Math.random() * (width - mushWidth) + "px";
        mush.style.top = Math.random() * (height - mushHeight) + "px";
        mush.style.margin = 0 + "px";
    }
}

function clickMush() {
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

function updateScore() {
    score++;
    scorebox.innerHTML = "Click the mush to mush it! Your Score: " + score;

}

function mushBirth() {
    moveMush();
    game = setInterval(moveMush, 2000);
}

function mushDeath() {
    mush.src = "images/mushdeath2.gif";
    deathsound.play();
}

function resetLocation() {
    mush.src = "images/mushidle1.gif"
    let width = window.innerWidth;
    let height = window.innerHeight;
    mush.style.left = ((width - mushWidth) / 2) + "px";
    mush.style.top = ((height - mushHeight) / 2) + "px";
    //mush.style.margin-left =  -60 + "px";
    //mush.style.margin-top = -85 + "px";
}

function endGame() {
    clearInterval(game);
    resetLocation();
    score = 0;
    scorebox.innerHTML = "Click the mush to mush it! Your Score: " + score;
}


