"use strict";

var str = '';
var operand = '';
var percent;
let screen = document.querySelector('#screen-span');
let operator = document.querySelector('#operator');

let equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    console.log(str);
    var display;
    
    if(operand=='0' && operator.innerText=='/'){//Special case - division by zero
        display = 'Invalid Operation';
    }else if(operator.innerText=='/'){// rounding off to 1 decimal place for divide
        display = eval(str).toFixed(1);
    }else if(operator.innerText=='%'){// calculating percentage.
        var op1 = parseInt(percent);
        var op2 = parseInt(operand);
        var percentResult = op1*(100/op2);
        display = percentResult.toFixed(1); //to round off the floating no. to q decimal place.
        percent = undefined;
    }else{
        display = eval(str);
    }
    screen.innerText = display;
    str = '';
    operand = '';
    operator.innerText = '';
})

let add = document.querySelector('#add');
add.addEventListener('click', () => {
    operator.innerText = '+';
    str = str + '+';
    operand = '';
});

let subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => {
    operator.innerText = '-';
    str = str + '-';
    operand = '';
});

let multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    operator.innerText = '*';
    str = str + '*';
    operand = '';
});

let divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    operator.innerText = '/';
    str = str + '/';
    operand = '';
});

let percentage = document.querySelector('#percentage');
percentage.addEventListener('click', () => {
    operator.innerText = '%';
    //str = str + '*';
    percent = operand;
    operand = '';
});

let ac = document.querySelector('#ac');
ac.addEventListener('click', () => {
    str = '';
    operator.innerText = '';
    screen.innerText = '';
});

let zero = document.querySelector('#zero-button');
zero.addEventListener('click', () => {
    str = str + 0;
    operand = operand + 0;
    screen.innerText = operand;
});

let period = document.querySelector('#period');
period.addEventListener('click', () => {
    str = str + '.';
    operand = operand + '.';
    screen.innerText = operand;
});

let one = document.querySelector('#one');
one.addEventListener('click', () => {
    str = str + 1;
    operand = operand + 1;
    screen.innerText = operand;
});

let two = document.querySelector('#two');
two.addEventListener('click', () => {
    //screen.innerText = 2;
    str = str + 2;
    operand = operand + 2;
    screen.innerText = operand;
});

let three = document.querySelector('#three');
three.addEventListener('click', () => {
    str = str + 3;
    operand = operand + 3;
    screen.innerText = operand;
});

let four = document.querySelector('#four');
four.addEventListener('click', () => {
    str = str + 4;
    operand = operand + 4;
    screen.innerText = operand;
});

let five = document.querySelector('#five');
five.addEventListener('click', () => {
    str = str + 5;
    operand = operand + 5;
    screen.innerText = operand;
});

let six = document.querySelector('#six');
six.addEventListener('click', () => {
    str = str + 6;
    operand = operand + 6;
    screen.innerText = operand;
});

let seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    str = str + 7;
    operand = operand + 7;
    screen.innerText = operand;
});

let eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    str = str + 8;
    operand = operand + 8;
    screen.innerText = operand;
});

let nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    str = str + 9;
    operand = operand + 9;
    screen.innerText = operand;
});




//Addition
function sum(){

}