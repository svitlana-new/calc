//const btnMemo = document.querySelectorAll('.memo button');
//btnMemo.forEach(memo => memo.addEventListener('click', memoPressed));

const display = document.querySelector('.display');

//function memoPressed (ev) {
 //   display.value += ev.target.innerText;
//}

const btnOpers = document.querySelectorAll('.opers button');
btnOpers.forEach(opers => opers.addEventListener('click', opersPressed));

function opersPressed (ev) {
    display.value += ev.target.innerText;
      
    }

const btnDigits = document.querySelectorAll('.digits button');
btnDigits.forEach(digit => digit.addEventListener('click', digitPressed));

function digitPressed (ev) {
    display.value += ev.target.innerText;
}

const btnEqual = document.querySelector('.equal');
btnEqual.addEventListener('click', equalPressed);

function equalPressed () {
    display.value = (eval(display.value));
}

const btnClean = document.querySelector('.clean');
btnClean.addEventListener('click', clickPressed);

function clickPressed () {
    display.value = null;
}


const btnZero = document.querySelector('.zero');
btnZero.addEventListener('click', divByZero)

function divByZero (display) {

if (display.value === '/0')
{
    btnEqual.preventDefault()
    alert('Ділити на нуль не можна:)')
}
}