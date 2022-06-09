let sum = 0;
let num;
const gameResult = document.getElementById('game-result')

for(let i = 0; i < 10; i++) {
    num = parseInt(prompt('dammi un numero'));
    sum += num;
}
gameResult.innerHTML = sum




