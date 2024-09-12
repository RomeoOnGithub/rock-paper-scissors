> Rock, Paper, Scissors from The Odin Project

# understand 
- 3 variables
    - rock, paper, scissors
- 2 methods of input
    - computer input = random generated
    - human input = typed and entered
- computer vs player (logic behind the game / comparison between inputs)
    - the player can only **win** when *(player | computer)*:
        - rock | scissors
        - paper | rock
        - scissors | paper
    - the player **ties** when inputs match
    - the player **loses** when none of the above 
- first to five

# plan & pseudo-code
*🔑 = ✅ Complete* || *❌ not*

**1.1 computer input script for randomly returning one of the options**

- function: *getComputerChoice*

    - [✅] variable that selects a number between 1-3 at random
    - [✅] returning the variable, **translated** into strings

- [✅] global log variable capturing the result
- [✅] print this variable 

**2.1 script for recording human input**

- function: *getHumanChoice*
    - [✅] variable that captures player input from a prompt
    - [✅] variable that handles case insensitivity
    - [✅] declare valid options, the rest is invalid

- [✅] global log variable capturing the result
- [✅] print this variable

**3.1 script for keeping score**

- [✅] variable that records humanScore
- [✅] variable that records computerScore
- [✅] increment score based on round winner

**4.1 script for game logic**

- function: playRound

    - [✅] compare the inputs and have a prompt for the results

- [✅] global log variable capturing the result
- [✅] print the variable

**4.2 script for making a max round**

- [ ] function: playGame
    - when playRound is called 5 times

---
> problems / todo