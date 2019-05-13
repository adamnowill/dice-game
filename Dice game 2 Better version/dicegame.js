let rollCount = 0;
let randomNumber = 0;

function rollDice() {  
  randomNumber = (Math.floor(Math.random()*6)+1);
  document.getElementById("numberz").innerHTML = ("Your score = " + Number.parseInt(rollCount += randomNumber));
    
  if (randomNumber == 1) {
    location.reload();
    document.getElementById("score1").innerHTML = "You lose."
    restart()
  }
  else if (rollCount >= 20) {
    document.getElementById("score2").innerHTML = "well done you win!!"
  }
}



Button.onclick = function showNumberRolled () {
 
  diceRoll = rollDice();
  document.getElementById("dice").src = `dice${randomNumber}.png`
  console.log('I have changed.')
  
}


button.onclick = function restart () {
location.reload();

 

}










    