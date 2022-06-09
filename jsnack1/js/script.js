const num = [1,2,3,4,5,6,7,8,9]
// let num = [];
// for (let i=1; i < 50; i++) {
//     num += i
// }
console.log(num)

const evenBox = document.getElementById('even');
const oddBox = document.getElementById('odd');


for (i=0; i < num.length; i++) {
    console.log(num[i])
    if (num[i] % 2 === 0) {
        evenBox.innerHTML += `${num[i]} `;
    } else {
        oddBox.innerHTML += `${num[i]} `;
    }
}