
let timer = 60;
let score = 0;

function incScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getHit(){
    let hit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hit;
}

function makeBubble(){
    let clutter = "";

    for (let i = 1; i <= 168; i++) {
        let randomNum = Math.floor(Math.random() * 10); 
        clutter += `<div class="bubble">${randomNum}</div>`; 
    }
    
    document.querySelector(".pbottom").innerHTML = clutter;
}

function startTimer(){
    let timerend = setInterval(function() {
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerend);
        }
    }, 1000);
}

    document.querySelector(".pbottom")
    .addEventListener("click", function(dets){
        alert("Kam kr raa ha")
        
    });
    

// incScore();
getHit();
startTimer();
makeBubble();




