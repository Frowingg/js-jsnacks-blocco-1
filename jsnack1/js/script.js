// controllo di una lista di numeri per divisione a schermo tra pari e dispari

const num = [1,2,3,4,5,6,7,8,9];

const evenBox = document.getElementById('even');
const oddBox = document.getElementById('odd');


for (i=0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        evenBox.innerHTML += `${num[i]} `;
    } else {
        oddBox.innerHTML += `${num[i]} `;
    }
}