//result logging logic
    function logResult(message) {
        const resultDiv = document.getElementById('round-results');
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
    //capturing inputs
        logResult(`You chose: ${humanChoice}`);
       let computerChoice = getComputerChoice();
            logResult(`Computer chose: ${computerChoice}`);
    //comparing inputs
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
    //capturing results   
    let roundResult = playRound(humanChoice, computerChoice);
    
    logResult(roundResult);
    logResult(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);

    //game end logic
    if (humanScore === 5 || computerScore === 5) {
        //announce a winner & disable buttons
        const announcementDiv = document.createElement('div');
        const buttonsDiv = document.querySelector('#buttons');
        buttonsDiv.appendChild(announcementDiv);
        const announceWinner = document.createElement('p');
        announcementDiv.appendChild(announceWinner);
        announceWinner.style.fontWeight = "bold";

        
        if (humanScore === 5) {
            announceWinner.textContent = "Human Wins!";
        } else if (computerScore === 5) {
            announceWinner.textContent = "Computer Wins!";
        }
        return;
    }}

//human choice logic
document.getElementById('rock').addEventListener("click", function() {
    playGame('Rock');
    console.log('Player - Rock');
    });
document.getElementById('paper').addEventListener("click", function() {
    playGame('Paper');
    console.log('Player - Paper');
});
document.getElementById('scissors').addEventListener("click", function() {
    playGame('Scissors');
    console.log('Player - Scissors');
});

