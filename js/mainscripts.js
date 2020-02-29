function moveZombie(){
    document.getElementById("zombie").src="images/zombie2.png"
    let width = window.innerWidth;
    let height = window.innerHeight;
    let zom = document.getElementById('zombie');

    zom.style.left = Math.random()*(width - 100) + "px";
    zom.style.top = Math.random()*(height - 100) + "px";
    zom.style.margin = 0 + "px";
}

function clickZombie(){
    score++;
    let scorebox = document.getElementById("score");
    document.getElementById("zombie").src="images/death.gif";
    scorebox.innerHTML = "Click the zombie to kill it! Your Score: " + score;
}

let score = 0;

let zombie = document.getElementById("zombie");

zombie.onclick = clickZombie;

let game = setInterval(moveZombie, 2000);