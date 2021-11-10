'use strict'; 


const numberToGuess = Math.trunc(Math.random() * 20) +1; 
console.log(numberToGuess)

function getMessage(input){
    document.querySelector('#message').textContent = input
}

let score = 20;
let highscore = 0; 


    document.querySelector('.check').addEventListener('click', function() {
        const guess = document.querySelector('.guess').value;
        console.log(guess)
    
    
    // When no user input
    if (!guess){
        getMessage('No number picked!')
    // When guess is correct
    }else if (guess == numberToGuess){
        getMessage('Correct number!')
        document.body.style.backgroundColor = "green";
        document.querySelector('#highscore').textContent = score;
        document.querySelector('.question').textContent = numberToGuess;
    // When guess is too high
    }else if (guess > numberToGuess){
        if(score > 1){
            getMessage('Guess is too high')
            score--;
            document.querySelector('#score').textContent = score;          
        }else{
            getMessage('Game Over!')
            document.querySelector('#score').textContent = 0;
            document.body.style.backgroundColor = "red";
        }
    // When guess is too low
    }else if(guess < numberToGuess){
        if(score > 1){
        getMessage('Guess is too low')
        score--;
        document.querySelector('#score').textContent = score;
        }else{
            getMessage('Game Over!')
            document.querySelector('#score').textContent = 0;
            document.body.style.backgroundColor = "red";
        }
    }
}); 


let playAgain = document.querySelector('.again')
    playAgain.addEventListener('click', function(){
    document.querySelector('#score').textContent = 20;
    const numberToGuess = Math.trunc(Math.random() * 20) +1; 
    console.log(numberToGuess)
    getMessage('Start guessing')
    document.body.style.backgroundColor = "black";
    document.querySelector('.guess').value = ''
    document.querySelector('.question').textContent = '?';

})
