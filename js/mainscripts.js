function moveMush(){
    mush.src="images/mushidle1.gif"
    let width = window.innerWidth;
    let height = window.innerHeight;
    

    mush.style.left = Math.random()*(width - 170) + "px";
    mush.style.top = Math.random()*(height - 120) + "px";
    mush.style.margin = 0 + "px";
}

function clickMush(){
    score++;
    let scorebox = document.getElementById("score");
    mush.src="images/mushdeath2.gif";
    scorebox.innerHTML = "Click the mush to mush it! Your Score: " + score;
}

function mushDeath(){

}

let score = 0;

let mush = document.getElementById("mush");

mush.onclick = clickMush;

let game = setInterval(moveMush, 2000);