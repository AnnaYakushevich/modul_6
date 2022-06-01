/* const trafficLightE1 = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightE1.style.background = ('green');
    trafficLightE1.removeEventListener('click', makeGreen);
    trafficLightE1.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightE1.style.background = ('yellow');
    trafficLightE1.removeEventListener('click', makeYellow);
    trafficLightE1.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightE1.style.background = ('red');
    console.log('работает функция makeRed');
    trafficLightE1.removeEventListener('click', makeRed);
    trafficLightE1.addEventListener('click', makeGreen);
}

trafficLightE1.addEventListener('click', makeRed);
trafficLightE1.addEventListener('click', makeYellow);
trafficLightE1.addEventListener('click', makeGreen); */

const trafficLightE1 = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLightE1.style.background = ('green');
    trafficLightE2.style.background = ('black'); 
    trafficLightE3.style.background = ('black');

    trafficLightE1.addEventListener('click', makeGreen);
}

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE3.style.background = ('black'); 
    trafficLightE1.style.background = ('black');

    trafficLightE2.addEventListener('click', makeYellow);
}

function makeRed() {    
    trafficLightE3.style.background = ('red'); 
    trafficLightE1.style.background = ('black'); 
    trafficLightE2.style.background = ('black'); 

    trafficLightE3.addEventListener('click', makeRed);
}

trafficLightE1.addEventListener('click', makeGreen);
trafficLightE2.addEventListener('click', makeYellow);
trafficLightE3.addEventListener('click', makeRed);