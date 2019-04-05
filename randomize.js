let randomPkmn = [];
let usedPkmn = [];

function selectRandomPkmn() {
    for(i = 0; i < 4; i++) {
        let random = pkmn[Math.floor(Math.random() * pkmn.length)];
        if(!randomPkmn.includes(random) && !usedPkmn.includes(random)) {
            randomPkmn.push(random);
            if(i === 0) {
                usedPkmn.push(random);
            }
        }
        else {
            selectRandomPkmn();
        }
    }
}

function clearRandomPkmn() {
    randomPkmn = [];
}

function clearUsedPkmn() {
    usedPkmn = [];
}

selectRandomPkmn();

console.table([randomPkmn[0], randomPkmn[1], randomPkmn[2], randomPkmn[3]]);