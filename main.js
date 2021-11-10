'use strict'; 
/*
console.log(document.querySelector('#message').textContent);
document.querySelector('#message').textContent = 'Correct Number!'
console.log(document.querySelector('#message').textContent);



console.log(document.querySelector('.question').textContent = 13)
console.log(document.querySelector('#score').textContent = 10)

console.log(document.querySelector('.check-num').value)
document.querySelector('.check-num').value = 23;
console.log(document.querySelector('.check-num').value)
*/
document.querySelector('.check').addEventListener('click', function() {
    console.log(document.querySelector('.check-num').value);
});