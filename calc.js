let a = ''; //first number
let b = ''; //second number
let sign =''; // operation sigh
let finish = false;

const digit = ['0','1', '2', '3','4','5','6','7','8','9','.'];
const action = ['-', '+', 'X', '/'];

//screen
const out = document.querySelector('.calc-screen p');

//button AC (clear all)
function clearAll() {
    a=''; //first number and result
    b=''; //second number
    sign= '';//operation
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //натиснута не кнопка
    if(!event.target.classList.contains('btn')) return;
    //натиснута кнопка clearALL
    if(event.target.classList.contains('ac')) return;

    out.textContent= '';
    //натиснута кнопка отримую
    const key = event.target.textContent;

    //якщо натиснуто 0 - 9 або .
    if(digit.includes(key)) {
        a+= key;
        console.log(a,b,sign);
        out.textContent= a;
    }

     //якщо натиснуто + -  /  * 
     if(action.includes(key)) {
        sign= key;
        console.log(a,b,sign);
        return;
    }
}