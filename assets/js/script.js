var startButton = document.querySelector('.start-button');
var timerEl = document.querySelector('.timer-count');
var won = document.querySelector('.win');
var lost = document.querySelector('.lose'); //need both the current state and stored value this is for the current game
var wordBlanks = document.querySelector('.word-blanks');

var secondsLeft = 10;
var wordOptions = ['JavaScript', 'Fantastic', 'Breakthrough', 'Winner'];

//timer function
var startTimer = function(){
    
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = secondsLeft;
    }, 1000)
}

var startGame = function(){

}

startButton.addEventListener('click', function(){
    
    startTimer();

});