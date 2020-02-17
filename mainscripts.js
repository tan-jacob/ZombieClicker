function moveZombie(){

    let width = window.innerWidth;
    let height = window.innerHeight;
    let zom = document.getElementById('zombie');

    zom.style.left = Math.random()*(width - 128) + "px";
    zom.style.top = Math.random()*(height - 128) + "px";
    zom.style.margin = 0 + "px";
}

function clickZombie(){
    score++;
    let scorebox = document.getElementById("score");
    scorebox.innerHTML = "Click the zombie to kill it! Your Score: " + score;
}

let score = 0;

let zombie = document.getElementById("zombie");

zombie.onclick = clickZombie;

let game = setInterval(moveZombie, 2000);