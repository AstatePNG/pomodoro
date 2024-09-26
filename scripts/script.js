// definition of the different element of the page
let timer = document.getElementById("timer");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let travail = document.getElementById("travail");
let repos = document.getElementById("repos");

travail.classList.add("disabled");
repos.classList.add("disabled");

timer.textContent = "25:00";

// function runTimer() {
//     let minute = timer.textContent.substring(0, 2);
//     let seconde = timer.textContent.substring(3,2);

//     while(minute>0 && seconde>0){
//         if(seconde==0){
//             minute = minute - 1;
//             seconde = 59;
//         }
//         else{
//             seconde = seconde - 1;
//         }
//         timer.textContent = minute + ':' + seconde;
//     }
// }

start.onclick = function(){
    let iconElement;
    if(timerPlaying == false){
        start.innerHTML = 'Reset <i class="bi bi-arrow-counterclockwise"></i>';
        travail.classList.remove("disabled");
        travail.classList.remove("btn-outline-warning");
        travail.classList.add("btn-warning");
        repos.classList.add("disabled");
        // runTimer();
    }
    else {
        start.innerHTML = 'Start <i class="bi bi-caret-right-fill"></i>';
        travail.classList.add("disabled");
        travail.classList.remove("btn-warning");
        travail.classList.add("btn-outline-warning");
        repos.classList.add("disabled");
        repos.classList.remove("btn-info");
        repos.classList.add("btn-outline-info");
    }
    start.appendChild(iconElement);
}