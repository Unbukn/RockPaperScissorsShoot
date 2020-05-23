function playTheGame(ourGuess) {
        //wait time to allow gif to animate
        setTimeout(determineTheWinner, 2000);
        // set hands
        document.getElementById("playerHand").src = "Assets/Shake.gif";
        document.getElementById("compHand").src = "Assets/PCShake.gif";
        
        // computer make random guess
        var randomNumber= Math.floor(Math.random() * 3); 
        var compGuess = compChoices[randomNumber];
        // log guesses
        console.log(compGuess);
        console.log(ourGuess);

        // change hands to reflect each guess
        if (ourGuess === "paper") {
            document.getElementById("playerHand").src = "Assets/paper.gif";
            console.log("you picked paper")
            // alert("you picked paper")
        }
        if (ourGuess == "rock") {
            document.getElementById("playerHand").src = "Assets/Rock.gif";
            console.log("you picked rock")
            // alert("you picked rock")
        }
        if (ourGuess === "scissors") {
            document.getElementById("playerHand").src = "Assets/scissors.gif";
            console.log("you picked scissors")
            // alert("you picked scissors")
        }

        if (compGuess == "paper") {
            document.getElementById("compHand").src = "Assets/PCpaper.gif";
            console.log("the computer picked paper")
            // alert("the computer picked paper")
        }
        if (compGuess == "rock") {
            document.getElementById("compHand").src = "Assets/PCRock.gif";
            console.log("the computer picked rock")
            // alert("the computer picked rock")
        }
        if (compGuess == "scissors") {
            document.getElementById("compHand").src = "Assets/PCscissors.gif";
            console.log("the computer picked scissors")
            // alert("the computer picked scissors")
        } 
        function determineTheWinner() {
        // determine the winner
        if (ourGuess === "rock" && compGuess === "rock" || ourGuess === "scissors" && compGuess === "scissors" || ourGuess === "paper" && compGuess === "paper") {   
            draws++;     
            window.alert("The computer choose " + compGuess + " so you tie...");
            // alert("#Draws: " + draws)
            // update scoreboard
            document.getElementById("draws").innerHTML = draws
        }  
        if (ourGuess === "rock" && compGuess === "paper" || ourGuess === "paper" && compGuess === "scissors" || ourGuess === "scissors" && compGuess === "rock") {
            loses++
            window.alert("The computer choose " + compGuess + " so you lose...");
            // alert("#Lost: " + loses)
            // update scoreboard
            document.getElementById("loses").innerHTML = loses
        }
        if (ourGuess === "rock" && compGuess === "scissors" || ourGuess === "paper" && compGuess === "rock" || ourGuess === "scissors" && compGuess === "paper") {
            wins++
            window.alert("The computer choose " + compGuess + " you won!...");
            // alert("#Wins: " + wins)
            // update scoreboard
            document.getElementById("wins").innerHTML = wins
        }      
    }
}
