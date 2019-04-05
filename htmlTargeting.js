let p1Score = 0;
let p2Score = 0;
let round = 1;
const img = document.getElementById('shadowImage');
function targetHTML() {
    //Info of random pkmn
    const imgSrc = randomPkmn[0].image;
    const name0 = randomPkmn[0].name;
    const name1 = randomPkmn[1].name;
    const name2 = randomPkmn[2].name;
    const name3 = randomPkmn[3].name;
    
    //Elements by ID
    
    img.src = imgSrc;
    img.style.filter = "brightness(0)";

    /*
    const html_name_0 = document.getElementById('aBtn');
    html_name_0.innerText = name0;

    const html_name_1 = document.getElementById('bBtn');
    html_name_1.innerText = name1;

    const html_name_2 = document.getElementById('xBtn');
    html_name_2.innerText = name2;

    const html_name_3 = document.getElementById('yBtn');
    html_name_3.innerText = name3;
    */
}

function updateBrightness() {
    img.style.filter = "none";
}

function updateScore() {
    const p1ScoreDisplay = document.getElementById('p1r'+`${round}`);
    p1ScoreDisplay.innerText = p1Score;

    const p2ScoreDisplay = document.getElementById('p2r'+`${round}`);
    p2ScoreDisplay.innerText = p2Score;
}