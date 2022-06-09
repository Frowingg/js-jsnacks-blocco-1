const userNumbers= prompt('dammmi 4 cifre');

const gameResult = document.getElementById('game-result');

let sum = 0;

for (i=0; i<userNumbers.length; i++) {

    let singleNumber = parseInt(userNumbers[i])
    sum += singleNumber;
    gameResult.innerHTML = sum
}
