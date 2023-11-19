let randomNum = Math.floor(Math.random() * 100);
let clickCount = 0;

function feedback(){
    var userInput = document.getElementById('num').value;
    var tooHigh = document.createElement('p');
    tooHigh.textContent = 'This number is too high!'
    var tooLow = document.createElement('p');
    tooLow.textContent = 'This number is too low!'
    var youWon = document.createElement('p');
    youWon.textContent = 'Yay! That is the correct number!'

    if(userInput > randomNum){
        document.getElementById('feedback-container').append(tooHigh)
    }
    else if(userInput < randomNum){
        document.getElementById('feedback-container').append(tooLow)
    }
    else if(userInput == randomNum){
        document.getElementById('feedback-container').append(youWon)
    }
}

function countClicks(){
    clickCount++;
    document.getElementById("counter").textContent = clickCount
}

function lose(){
    var youLose = document.createElement('p');
    youLose.textContent = 'Too many guesses! You lose :('
    if(clickCount >= 16){
        document.getElementById('feedback-container').append(youLose)
    }
    else{
        pass
    }
}

function resetGame() {
    randomNum = Math.floor(Math.random() * 100); 
    clickCount = 0;

    document.getElementById("num").value = ""; 
    document.getElementById("counter").textContent = "0";

    var feedbackContainer = document.getElementById('feedback-container');
    while (feedbackContainer.firstChild) {
        feedbackContainer.removeChild(feedbackContainer.firstChild);
    }
}

/*function feedback(){
    var userInput = document.getElementById('num').value;
    var tooHigh = document.createElement('p');
    tooHigh.textContent = 'This number is too high!'
    var tooLow = document.createElement('p');
    tooLow.textContent = 'This number is too low!'
    var youWon = document.createElement('p');
    youWon.textContent = 'Yay! That is the correct number!'

    if(userInput > randomNum){
        feedback-container.append(tooHigh)
    }
    else if(userInput < randomNum){
        feedback-container.append(tooLow)
    }
    else if(userInput == randomNum){
        feedback-container.append(youWon)
    }
}
function countClicks(){
    clickCount++;
    document.getElementById("counter").textContent = clickCount;
}
function lose(){
    var youLose = document.createElement('p');
    youLose.textContent = 'Too many guesses! You lose :('
    if(clickCount >= 16){
        feedback-container.append(youLose)
    }
    else{
        pass
    }
} */