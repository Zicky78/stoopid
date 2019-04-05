let timer = 7;
let rounds = 10;
let roundNumber = 1;
let canInput = true;
let pause = true;
let start = false;

function gameLoop() {
    if(!start) {
        gameLoop();
    } else {
        selectRandomPkmn();
        targetHTML();
        let timerInterval = setInterval(() => {

        }, (timer * 1000));
    }
}