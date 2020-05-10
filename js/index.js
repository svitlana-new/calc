const btnMemoAdd = document.querySelector('.memoAdd');
btnMemoAdd.addEventListener('click', memoAddPressed);

const display = document.querySelector('.display');
let memory = 0;

function memoAddPressed() {
    memory += parseFloat(display.value);
}

const btnMemoSub = document.querySelector('.memoSub');
btnMemoSub.addEventListener('click', memoSubPressed);

function memoSubPressed() {
    memory -= parseFloat(display.value);
}

const btnMemoRet = document.querySelector('.return-memo');
btnMemoRet.addEventListener('click', memoRetPressed);

function memoRetPressed() {
    display.value = parseFloat(memory);
}

const btnMemoClear = document.querySelector('.memoClear');
btnMemoClear.addEventListener('click', memoClearPressed);

function memoClearPressed () {
    memory = 0;
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
btnClean.addEventListener('click', cleanPressed);

function cleanPressed() {
    display.value = "";
}

const btnBackspace = document.querySelector('.backspace');
btnBackspace.addEventListener('click', backspacePressed);

function backspacePressed () {
    display.value = display.value.substring(0, display.value.length-1);
}

const btnDiv = document.querySelector('.div');
btnDiv.addEventListener('click', divByZero);

function divByZero() {

    if (display.value === display.value + '/0') {
        alert('Ділити на нуль не можна')
    }
}