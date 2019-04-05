let randomPkmn = [];
let usedPkmn = [];
let answerPkmn = [];

function selectRandomPkmn() {
    for(i = 0; i < 4; i++) {
        let random = pkmn[Math.floor(Math.random() * pkmn.length)];
        if(!randomPkmn.includes(random) && !usedPkmn.includes(random)) {
            randomPkmn.push(random);
        }
        else {
            selectRandomPkmn();
        }
    }
    console.log('Random Pokemon');
    console.table([randomPkmn[0], randomPkmn[1], randomPkmn[2], randomPkmn[3]]);
    selectRandomAnswers();
}

function selectRandomAnswers() {
    while(answerPkmn.length < 4) {
        let randomAnswer = randomPkmn[Math.floor(Math.random() * randomPkmn.length)];
        console.log('RandomAnswer: ', randomAnswer);
        if(!answerPkmn.includes(randomAnswer)) {
            answerPkmn.push(randomAnswer);
        }
    }
    console.log('Answer Pokemon');
    console.table([answerPkmn[0], answerPkmn[1], answerPkmn[2], answerPkmn[3]]);
    console.log('Used Pokemon');
    console.log(usedPkmn);
}

function clearRandomPkmn() {
    usedPkmn.push(randomPkmn[0]);
    randomPkmn = [];
}

function clearUsedPkmn() {
    usedPkmn = [];
}

function clearAnserPkmn() {
    answerPkmn = [];
}

