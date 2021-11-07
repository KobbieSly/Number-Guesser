let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  let randNum = Math.floor( Math.random() * 10 );
  return randNum;
}


function getAbsoluteDistance(num1 , num2){
return Math.abs(num1 - num2);

}

function compareGuesses(userInput, comInput, target){

  if (userInput < 0 || userInput > 9) {
    alert('Guess not within specified range!');
    return 0;
  }

  let check1 = getAbsoluteDistance(userInput , target);
  let check2 = getAbsoluteDistance(comInput , target);

  if (check1 <= check2) return true;
  else  return false;
}

function updateScore(winner){
  if(winner == 'human')  humanScore += 1;
  else if (winner == 'computer')  computerScore += 1;
}

function advanceRound(){
  currentRoundNumber += 1;
}

