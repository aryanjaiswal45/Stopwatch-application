let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');
let display = document.getElementById('display');

let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

function updateDisplay(time) {
    let date = new Date(time);
    let minutes = String(date.getUTCMinutes()).padStart(2, '0');
    let seconds = String(date.getUTCSeconds()).padStart(2, '0');
    let milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        updateDisplay(elapsedTime);
    }, 10);
    startStopBtn.textContent = 'Stop';
    startStopBtn.style.backgroundColor = '#dc3545';
}

function stopTimer() {
    clearInterval(timer);
    startStopBtn.textContent = 'Start';
    startStopBtn.style.backgroundColor = '#28a745';
}

startStopBtn.addEventListener('click', function() {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', function() {
    stopTimer();
    isRunning = false;
    elapsedTime = 0;
    updateDisplay(elapsedTime);
});
