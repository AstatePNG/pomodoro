// definition of the different element of the page
let timer = document.getElementById("timer");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let travail = document.getElementById("travail");
let repos = document.getElementById("repos");

travail.classList.add("disabled");
repos.classList.add("disabled");

let timerPlaying = false;

timer.textContent = "25:00";

start.onclick = function(){
    let iconElement;
    if(timerPlaying == false){
        start.innerHTML = 'Reset <i class="bi bi-arrow-counterclockwise"></i>';
        timerPlaying = true;
        travail.classList.remove("disabled");
        travail.classList.remove("btn-outline-warning");
        travail.classList.add("btn-warning");
        repos.classList.add("disabled");
    }
    else {
        start.innerHTML = 'Start <i class="bi bi-caret-right-fill"></i>';
        timerPlaying = false;
        travail.classList.add("disabled");
        travail.classList.remove("btn-warning");
        travail.classList.add("btn-outline-warning");
        repos.classList.add("disabled");
        repos.classList.remove("btn-info");
        repos.classList.add("btn-outline-info");
    }
    start.appendChild(iconElement);
}