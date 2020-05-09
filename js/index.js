const btnMemoAdd = document.querySelector('.memoAdd');
btnMemoAdd.addEventListener('click', memoAddPressed);

const display = document.querySelector('.display');
let memory = 0;

function memoAddPressed() {
    memory += display.value;
}

const btnMemoSub = document.querySelector('.memoSub');
btnMemoSub.addEventListener('click', memoSubPressed);

function memoSubPressed() {
    memory -= display.value;
}

const btnMemoRet = document.querySelector('.return-memo');
btnMemoRet.addEventListener('click', memoRetPressed);

function memoRetPressed() {
    display.value = memory;
}

const btnOpers = document.querySelectorAll('.opers button');
btnOpers.forEach(opers => opers.addEventListener('click', opersPressed));

function opersPressed(ev) {
    display.value += ev.target.innerText;

}

const btnDigits = document.querySelectorAll('.digits button');
btnDigits.forEach(digit => digit.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

const btnEqual = document.querySelector('.equal');
btnEqual.addEventListener('click', equalPressed);

function equalPressed() {
    display.value = (eval(display.value));
}

const btnClean = document.querySelector('.clean');
btnClean.addEventListener('click', clickPressed);

function clickPressed() {
    display.value = null;
}


const btnZero = document.querySelector('.zero');
btnZero.addEventListener('click', divByZero)

function divByZero(display) {

    if (display.value === '/0') {
        btnEqual.preventDefault()
        alert('Ділити на нуль не можна')
    }
}