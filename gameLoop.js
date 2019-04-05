let timer = 7;
let pause = false;

let p1Answers = [];
let p2Answers = [];


function gameLoop() {
    if(!pause) {
        selectRandomPkmn();
        targetHTML();
        canInput = true;
        let timerInterval = setInterval(() => {
            console.log(timer);
            if(timer === 0) {
                clearInterval(timerInterval);
                canInput = false;
                checkAnswers();
                updateBrightness();
                updateScore();
                round++;
                clearAnserPkmn();
                clearRandomPkmn();
                pause = true;
                timer = 7;
                window.requestAnimationFrame(gameLoop);
            } else {
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
            p1Score++;
        }
    }
    if(p2Answered){
        if(p2Answers[0].name === randomPkmn[0].name) {
            p2Score++;
        }
    }
    
    console.log('p1Score: ', p1Score);
    console.log('p2Score', p2Score);
}