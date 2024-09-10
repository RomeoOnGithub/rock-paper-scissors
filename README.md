# rock-paper-scissors

---

# instruction 1 - write the logic to get the computer choice
"Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”."

"Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices."

## 1. understand
The instruction asks for the 'logic'. Logic 

- return a random value between 1-3 (because rock, paper, scissors provides three choices)
- allocate names for the values between 1-3
    - 1 returns rock
    - 2 returns paper
    - 3 returns scissors

## 2. plan
- Create a function for randomised number
- Create a function for naming the randomised number

## 3. pseudocode
function for the random choice made by the computer to return a value between 1 & 3 
- (could be 0-2 since 0 is inclusive but that doesn't render readable code imo)

if the returned value is 1, then return 'Rock'
if the returned value is 2, then return 'Paper'
if the returned value is 3, then return 'Scissors'

---
# instruction 2 - write the logic to get the human choice