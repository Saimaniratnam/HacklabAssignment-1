const redLight = document.getElementById('red-light');
const yellowLight = document.getElementById('yellow-light');
const greenLight = document.getElementById('green-light');
const redBtn = document.getElementById('red-btn');
const yellowBtn = document.getElementById('yellow-btn');
const greenBtn = document.getElementById('green-btn');
const stateDisplay = document.getElementById('state-display');

let currentState = 's1'; // Initial state
let timer1, timer2, timer3;

function updateState(newState) {
    clearTimers();
    resetLights();
    currentState = newState;
    stateDisplay.textContent = newState;
    document.getElementById(`${getColorFromState(currentState)}-light`).classList.add('active');
    startTimer(newState);
}

function resetLights() {
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');
}

function getColorFromState(state) {
    switch (state) {
        case 's1':
            return 'red';
        case 's2':
            return 'green';
        case 's3':
            return 'yellow';
        default:
            return '';
    }
}

function startTimer(state) {
    let delay;
    switch (state) {
        case 's1':
            delay = 20000; // 20 seconds
            timer1 = setTimeout(() => updateState('s2'), delay);
            break;
        case 's2':
            delay = 15000; // 15 seconds
            timer2 = setTimeout(() => updateState('s3'), delay);
            break;
        case 's3':
            delay = 5000; // 5 seconds
            timer3 = setTimeout(() => updateState('s1'), delay);
            break;
    }
}

function clearTimers() {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
}

redBtn.addEventListener('click', () => updateState('s1'));
yellowBtn.addEventListener('click', () => updateState('s3'));
greenBtn.addEventListener('click', () => updateState('s2'));

updateState('s1');