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

const numberToGuess = Math.trunc(Math.random() * 20) +1; 
document.querySelector('.question').textContent = numberToGuess;

let score = 20;
let highscore = 0; 


document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    console.log(guess)
    
    

    if (!guess){
        document.querySelector('#message').textContent = 'No number picked!'
    }else if (guess == numberToGuess){
        document.querySelector('#message').textContent = 'Correct number!'

    }else if (guess > numberToGuess){
        if(score > 1){
            document.querySelector('#message').textContent = 'Guess is too high'
            score--;
            document.querySelector('#score').textContent = score;
    
            
        }else{
            document.querySelector('#message').textContent = 'Game Over!'
            document.querySelector('#score').textContent = 0;
        }
    }else if(guess < numberToGuess){
        if(score > 1){
        document.querySelector('#message').textContent = 'Guess is too low'
        score--;
        document.querySelector('#score').textContent = score;
        }else{
            document.querySelector('#message').textContent = 'Game Over!'
            document.querySelector('#score').textContent = 0;
        }
    }
}); 

