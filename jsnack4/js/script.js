let userNumber;
let array = [];
const gameResult = document.getElementById('game-result')

for(let i = 0; i < 6; i++) {
    userNumber = parseInt(prompt('dammi un numero'));
    if (userNumber % 2 ==! 0) {
        array += [userNumber] + ' '
    } else {
        null
    }
}
gameResult.innerHTML = array