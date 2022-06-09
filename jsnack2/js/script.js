const gameResult = document.getElementById('game-result');
const sumBtn = document.getElementById('sum-btn');
let userNumbers;
let sum = 0;


sumBtn.addEventListener('click',
    function() {
    userNumbers = document.getElementById('user-numbers').value;    
    console.log(userNumbers) 
    for(i=0; i<userNumbers.length; i++) {

        let singleNumber = parseInt(userNumbers[i]);
        console.log(singleNumber)

        sum += singleNumber;
        gameResult.innerHTML = sum;
    }
    }
)




