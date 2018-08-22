
console.log("i am linked!")

var gameStarted = false;
var possibleWords = ["cat", "dog"];
var guessesLeft = 6;
var currentWord = "";
var Win = 0;
var Losses = 0;
var numBlacks = 0;
var guesses = [];
var wordInProgress = []


// // listen for key to start

// once MediaStreamTrackAudioSourceNode
// array of words to choose from
// Set guesses to number
// Set wins
// pick rand word
// once word chosem, enter infinate loop for use guesses   
// On guess, check to see if right or not
// 


document.onkeyup = function(event){
    if(gameStarted){
        document.getElementById("gameinfo").textContent = "The game is already underway"



    }

    else {
        beginGame();
    }


}


function beginGame() {
    console.log("The game is underway")
    console.log("the word is " + currentWord)
    document.getElementById("gameinfo").textContent = "The game has Started"
    gameStarted = true;
    // pick a random word and store in current word
    currentWord = possibleWords[0]; // To Do word rando

    // Display hashes on screen
    numBlacks = currentWord.length;
    wordInProgress = currentWord.split('');

    for(var i = 0; i < wordInProgress.length; i++){
        wordInProgress[i] = "_"
    }

        console.log(wordInProgress)
    document.getElementById("currentword").textContent = wordInProgress.join("");

    document.getElementById("guessesleft").textContent = guessesLeft;







}




