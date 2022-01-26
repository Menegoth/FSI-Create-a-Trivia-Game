// Your Code Here
let userName = window.prompt("Please enter your name: ");
let userScore = 0;
let playAgain = true;

//ask questions function
function PlayGame() {
    for (let i = 0; i < questions.length; i++) {

        let question = questions[i];
        let userAnswer = window.prompt(question.text);
    
        if (userAnswer.toUpperCase() === question.correctAnswer) {
            userScore += 10;
        }
    
    }
    
    window.alert(`Your sccore is: ${userScore}`);
}

//loop until user ends
while (playAgain === true) {

    PlayGame();
    let userChoice = window.prompt("Would you like to play the game again? Answer yes or no.");

    if (userChoice.toLowerCase() === "yes") {
        playAgain = true;
    } else {
        playAgain = false;
        window.alert("Thanks for playing the game.");
    }

}