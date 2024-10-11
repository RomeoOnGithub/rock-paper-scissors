//result logging logic
    function logResult(message) {
        const resultDiv = document.getElementById('results');
        const newResult = document.createElement('div');
        newResult.textContent = message;
        resultDiv.appendChild(newResult);
    }

//computer choice logic
    function getComputerChoice() {
       let randomNumber = Math.floor(Math.random() * 3 + 1);
       return randomNumber === 1 ? "Rock" : randomNumber === 2 ? "Paper" : "Scissors";
    }
       
//declare scores 
   let humanScore = 0;
   let computerScore = 0;
   
//game logic
   function playGame(humanChoice) {
        logResult(`You chose: ${humanChoice}`);
       let computerChoice = getComputerChoice();
            logResult(`Computer chose: ${computerChoice}`);
       
       function playRound(humanChoice, computerChoice) {
           if (humanChoice === computerChoice) {
           return "Tie!";
           
           } else if  (
           (humanChoice === "Rock" && computerChoice === "Scissors") ||
           (humanChoice === "Paper" && computerChoice === "Rock") ||
           (humanChoice === "Scissors" && computerChoice === "Paper")
           )  {
           humanScore++;
           if (humanScore === 5 ) {
           return "You won!"
           }  
           return "You win the round!";
           }
           
           else { 
           computerScore++;
           if (computerScore === 5 ) {
           return "You lose!"
           }  
           return "Computer wins the round!";
           }
       }
         
    let roundResult = playRound(humanChoice, computerChoice);
    
    logResult(roundResult);
    logResult(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    } 

//human choice logic
document.getElementById('rock').addEventListener("click", function() {
    playGame('Rock');
    });
document.getElementById('paper').addEventListener("click", function() {
    playGame('Paper');
});
document.getElementById('scissors').addEventListener("click", function() {
    playGame('Scissors');
});