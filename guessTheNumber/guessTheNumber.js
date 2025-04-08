/* generate a random number in javascript */
/* choose a random nr between 0 and 1 */
let randomNumber = Math.floor(Math.random()*100)+1;

console.log(randomNumber);

/* Saving the guesses */

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

//to save inputs and activate button

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess(){
    let userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = "Previous Guesses ";
    }
    guesses.textContent += userGuess + " ";
    
    if(userGuess === randomNumber){
        lastResult.textContent = "Good job! You found the number. o(*￣▽￣*)o";
        lastResult.style.backgroundColor = "purple";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else if(guessCount === 10)
    {
        lastResult.textContent = "GAME OVER...(┬┬﹏┬┬)";
        setGameOver();
    }
    else
    {
        lastResult.textContent = "Incorrect!";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber)
        {
            lowOrHi.textContent = "The number is greater than that";
        } else if(userGuess > randomNumber)
        {
            lowOrHi.textContent = "The number is lesser than that";
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

/* creation of the gameover function */

function setGameOver(){
    guessField.disabled = true; //disable the input
    guessSubmit.disabled = true; //disable the button submit

    resetButton = document.createElement('button');
    resetButton.className = 'resetButton';
    resetButton.textContent = 'Restart';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = "";
        resetParas[i].style.backgroundColor = 'black' ;
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = 'black';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}