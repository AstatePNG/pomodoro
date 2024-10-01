// definition of the different element of the page
let timer = document.getElementById("timer");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let travail = document.getElementById("travail");
let repos = document.getElementById("repos");

// initialisation of the global variable used in the different functions
let minWork = 25;
let secWork = 0;
let minPause = 5;
let secPause = 0;
let running = null;
let isWorking = false;

// set both state button to an inactive state
travail.classList.add("disabled");
repos.classList.add("disabled");

timerPlaying = false;

// update the time displayed on the timer
function displayTimer(minute, seconde){
    let minD = (minute < 10 ? '0' + minute : minute);
    let secD = (seconde < 10 ? '0' + seconde : seconde);
    timer.textContent = minD + ':' + secD;
}

// change the display of the work button to active
function enableWorkButton(){
    travail.classList.remove("disabled");
    travail.classList.remove("btn-outline-warning");
    travail.classList.add("btn-warning");
}

// change the display of the pause button to active
function enablePauseButton(){
    repos.classList.remove("disabled");
    repos.classList.add("btn-info");
    repos.classList.remove("btn-outline-info");
}

// change the display of the work button to inactive
function disableWorkButton(){
    travail.classList.add("disabled");
    travail.classList.remove("btn-warning");
    travail.classList.add("btn-outline-warning");
}

// change the display of the pause button to inactive
function disablePauseButton(){
    repos.classList.add("disabled");
    repos.classList.remove("btn-info");
    repos.classList.add("btn-outline-info");
}

// update the time of the timer every secondes & call the function to update the time displayed
// switch the visual when their is a change of state.
// to make the timer run undefinitly, set the timer to a new time everytime their is a change of state 
function runTimer() {
    let minP = minWork;
    let secP = secWork;
    timerPlaying = true;
    isWorking = true;
    running = setInterval(function() {
        if(secP==0 & minP !=0){
            minP--;
            secP = 59;
        }
        else{
            secP--;
        }
        if (minP==0 && secP==0) {
            if(isWorking){
                isWorking = false;
                minP = minPause;
                secP = secPause;
                document.body.classList.add("pause");
                timer.classList.add("pause");
                disableWorkButton();
                enablePauseButton();
            }
            else{
                isWorking = true;
                minP = minWork;
                secP = secWork;
                document.body.classList.remove("pause");
                timer.classList.remove("pause");
                enableWorkButton();
                disablePauseButton();
            }
        }
        displayTimer(minP, secP);
    }, 1000);
}


document.onloadstart = displayTimer(minWork, secWork);

// start the timer the first time clicked, reset the time the second time
start.onclick = function(){
    if(timerPlaying == false){
        start.innerHTML = 'Reset <i class="bi bi-arrow-counterclockwise"></i>';
        disablePauseButton();
        enableWorkButton();
        runTimer();
    }
    else {
        clearInterval(running);
        displayTimer(minWork, secWork);
        start.innerHTML = 'Start <i class="bi bi-caret-right-fill"></i>';
        disablePauseButton();
        disableWorkButton();
        timerPlaying = false;
    }
}