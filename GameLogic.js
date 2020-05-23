var compChoices = ["rock", "paper", "scissors"];
var shoot = ["r", "p", "s"];
var wins = 0;
var loses = 0;
var draws = 0;
// setTimeout(myFunction, 3000)
    //rocked played function
        function playRock() {
            var ourGuess = "rock"
            console.log(ourGuess);
            $('.alert').alert("you just picked rock!!!")
            playTheGame(ourGuess,compChoices, wins,loses, draws)
        }
    // paper played function
        function playPaper() {
            var ourGuess = "paper"
            console.log(ourGuess);
            playTheGame(ourGuess,compChoices, wins,loses, draws)
        }
    //scissors played fucntion
        function playScissors() {
            var ourGuess = "scissors"
            console.log(ourGuess);
            playTheGame(ourGuess,compChoices, wins,loses, draws)
        }


    
