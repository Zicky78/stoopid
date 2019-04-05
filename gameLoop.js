let timer = 7;
let pause = false;

let p1Answers = [];
let p2Answers = [];


function gameLoop() {
    if(!pause) {
        selectRandomPkmn();
        targetHTML();
        targetWho();
        canInput = true;
        let timerInterval = setInterval(() => {
            console.log(timer);
            if(timer === 0) {
                clearInterval(timerInterval);
                canInput = false;
                checkAnswers();
                updateBrightness();
                updateScore();
                targetPokemon();
                playCry();
                targetPause();
                round++;
                clearAnserPkmn();
                clearRandomPkmn();
                pause = true;
                timer = 7;
                window.requestAnimationFrame(gameLoop);
            } else {
                updateTimer();
                timer--;
            }      
        }, 1000);
    } else {
        window.requestAnimationFrame(gameLoop);
    }
}

function checkAnswers() {
    
    if(p1Answered) {
        if(p1Answers[0].name === randomPkmn[0].name) {
            p1ScoreTotal++;
            p1Score = 'O';
        } else {
            p1Score = 'X';
        }
    } else {
        p1Score = 'X';
    }
    if(p2Answered){
        if(p2Answers[0].name === randomPkmn[0].name) {
            p2ScoreTotal++;
            p2Score='O';
        } else {
            p2Score = 'X';
        }
    } else {
        p2Score = 'X';
    }
    
    console.log('p1Score: ', p1Score);
    console.log('p2Score', p2Score);
}

function playCry() {
    const audio = document.getElementById('audio');
    audio.src = randomPkmn[0].cry;
    audio.play();
}