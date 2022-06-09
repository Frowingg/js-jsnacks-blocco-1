// let sum = 0;
// let num;
// let userNumbers;
// const gameResult = document.getElementById('game-result')

// for(let i = 0; i < 10; i++) {
//     userNumbers.getElementById('user-numbers').value
//     userNumbers += []
//     // num = parseInt(prompt('dammi un numero'));
//     sum += num;
// }
// gameResult.innerHTML = sum

let sum = 0;
let userNumber = document.getElementById('user-number');
const gameResult = document.getElementById('game-result');
const sumBtn = document.getElementById('sum-btn')
gameResult.innerHTML = sum
console.log(typeof(sum))

sumBtn.addEventListener('click',
    function() {
        console.log(typeof(parseInt(userNumber.value)))
        sum += parseInt(userNumber.value)
        console.log(sum)
        gameResult.innerHTML = sum
    }
)




