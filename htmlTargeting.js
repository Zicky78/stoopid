let p1Score = 0;
let p2Score = 0;
let round = 0;

function targetHTML() {

    
    //Info of random pkmn
    const imgSrc = randomPkmn[0].image;
    const name0 = randomPkmn[0].name;
    const name1 = randomPkmn[1].name;
    const name2 = randomPkmn[2].name;
    const name3 = randomPkmn[3].name;
    
    //Elements by ID
    const img = document.getElementById('');
    img.src = imgSrc;

    const html_name_0 = document.getElementById('');
    html_name_0.innerText = name0;

    const html_name_1 = document.getElementById('');
    html_name_1.innerText = name1;

    const html_name_2 = document.getElementById('');
    html_name_2.innerText = name2;

    const html_name_3 = document.getElementById('');
    html_name_3.innerText = name3;

    const p1ScoreDisplay = document.getElementById('');
    p1ScoreDisplay.innerText = p1Score;

    const p2ScoreDisplay = document.getElementById('');
    p2ScoreDisplay.innerText = p2Score;

}