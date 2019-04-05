let p1Score = 'O';
let p2Score = 'O';
let p1ScoreTotal = 0;
let p2ScoreTotal = 0;
let round = 1;
const img = document.getElementById('shadowImage');
const command = document.getElementById('command');
const header = document.getElementById('header');
function targetHTML() {
    //Info of random pkmn
    const imgSrc = randomPkmn[0].image;
    const name0 = answerPkmn[0].name;
    const name1 = answerPkmn[1].name;
    const name2 = answerPkmn[2].name;
    const name3 = answerPkmn[3].name;
    
    //Elements by ID
    
    img.src = imgSrc;
    img.style.filter = "brightness(0)";

    
    const html_name_0 = document.getElementById('aBtn');
    html_name_0.innerText = name0;

    const html_name_1 = document.getElementById('bBtn');
    html_name_1.innerText = name1;

    const html_name_2 = document.getElementById('xBtn');
    html_name_2.innerText = name2;

    const html_name_3 = document.getElementById('yBtn');
    html_name_3.innerText = name3;
    
}

function updateBrightness() {
    img.style.filter = "none";
}

function updateScore() {
    const p1ScoreDisplay = document.getElementById('p1r'+`${round}`);
    p1ScoreDisplay.innerText = p1Score;

    const p2ScoreDisplay = document.getElementById('p2r'+`${round}`);
    p2ScoreDisplay.innerText = p2Score;

    const p1ScoreDisplayTotal = document.getElementById('totalp1');
    p1ScoreDisplayTotal.innerText = p1ScoreTotal;

    const p2ScoreDisplayTotal = document.getElementById('totalp2');
    p2ScoreDisplayTotal.innerText = p2ScoreTotal;
}

function targetPause() {
    command.innerText = 'Press R to continue...';
}

function targetUnpause() {
    command.innerText = 'Good Luck!';
}

function targetWho() {
    header.innerText = "Who's that Pokemon?";
}

function targetPokemon() {
    header.innerText = `It's ${randomPkmn[0].name}!`
}

function updateTimer() {
    command.innerText = `${timer}`;
}

