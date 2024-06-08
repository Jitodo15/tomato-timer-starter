
let isRunning = false;

const timeDisplay = document.getElementById("time-left");
const studyButton = document.getElementById("study-btn");
const breakButton = document.getElementById("break-btn");



function updateTimerDisplay(minutes, seconds){
    const paddedMinute = minutes.toString().padStart(2, "0");
    const paddedSeconds = seconds.toString().padStart(2, "0");
    timeDisplay.textContent = `${paddedMinute}:${paddedSeconds}`;


}

function startTimer(duration){
    let minutes = Math.floor(duration/60);
    let seconds = duration % 60;

    const paddedMinute = minutes.toString().padStart(2, "0");
    const paddedSeconds = seconds.toString().padStart(2, "0");
    timeDisplay.textContent = `${paddedMinute}:${paddedSeconds}`;

    if(isRunning){
        const interval = setInterval(() => {
            seconds--;
            if(seconds < 0){
                minutes--;
                seconds = 59;
            }
            if(minutes < 0){
                clearInterval(interval);
                return;
            }
            const paddedMinute = minutes.toString().padStart(2, "0");
            const paddedSeconds = seconds.toString().padStart(2, "0");
            timeDisplay.textContent = `${paddedMinute}:${paddedSeconds}`;
        }, 1000)
    }
}

function startStudySession() {
    isRunning = true;
    let studyCount = document.getElementById("study-count");
    startTimer(1500)

    studyCount.textContent = parseInt(studyCount.textContent) + 1;
}

function startBreakSession() {
    let breakCount = document.getElementById("break-count");
    startTimer(300)

    breakCount.textContent = parseInt(breakCount.textContent) + 1;

}

studyButton.addEventListener('click', startStudySession)
breakButton.addEventListener('click', startBreakSession)
