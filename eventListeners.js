let canInput = false;
let start = false;
let p1Answered = false;
let p2Answered = false;

document.addEventListener('keydown', (key) => {
    if(canInput) {
        if(key.code === 'KeyA') {
            console.log('button pressed: A');
            p1Answers = [];
            p1Answers.push(answerPkmn[0]);
            console.log('P1 Selected: ' + `${p1Answers[0].name}`);
            p1Answered = true;
        }

        if(key.code === 'KeyS') {
            console.log('button pressed: S');
            p1Answers = [];
            p1Answers.push(answerPkmn[1]);
            console.log('P1 Selected: ' + `${p1Answers[0].name}`);
            p1Answered = true;
        }

        if(key.code === 'KeyD') {
            console.log('button pressed: D');
            p1Answers = [];
            p1Answers.push(answerPkmn[2]);
            console.log('P1 Selected: ' + `${p1Answers[0].name}`);
            p1Answered = true;
        }

        if(key.code === 'KeyF') {
            console.log('button pressed: F');
            p1Answers = [];
            p1Answers.push(answerPkmn[3]);
            console.log('P1 Selected: ' + `${p1Answers[0].name}`);
            p1Answered = true;
        }

        if(key.code === 'KeyQ') {
            console.log('button pressed: Q');
            p2Answers = [];
            p2Answers.push(answerPkmn[0]);
            console.log('P2 Selected: ' + `${p2Answers[0].name}`);
            p2Answered = true;
        }

        if(key.code === 'KeyW') {
            console.log('button pressed: W');
            p2Answers = [];
            p2Answers.push(answerPkmn[1]);
            console.log('P2 Selected: ' + `${p2Answers[0].name}`);
            p2Answered = true;
        }

        if(key.code === 'KeyE') {
            console.log('button pressed: E');
            p2Answers = [];
            p2Answers.push(answerPkmn[2]);
            console.log('P2 Selected: ' + `${p2Answers[0].name}`);
            p2Answered = true;
        }

        if(key.code === 'KeyR') {
            console.log('button pressed: R');
            p2Answers = [];
            p2Answers.push(answerPkmn[3]);
            console.log('P2 Selected: ' + `${p2Answers[0].name}`);
            p2Answered = true;
        }
    }
    if(start === false) {
        if(key.code === 'ArrowUp') {
            start = true;
            gameLoop();
            targetUnpause();
        }
    }

    if(pause) {
        if(key.code === 'ArrowDown') {
            pause = false;
            
        }
    }

});