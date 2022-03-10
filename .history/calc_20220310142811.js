let a = ''; //first number
let b = ''; //second number
let sigh =''; // operation sigh
let finish = false;

const digit = ['0','1', '2', '3','4','5','6','7','8','9','.'];
const action = ['-', '+', 'X', '/'];

//screen
const out = document.querySelector('.calc-screen p');

//button AC (clear all)
function clearAll() {
    a=''; //first number and result
    b=''; //second number
    sigh= '';//operation
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;