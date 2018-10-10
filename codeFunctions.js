var pTot = 0
var cTot = 0
var rolled = false

//setTimeout(function rollAgain() {
//  rolled = false  
//}, 3000);

function rollDice() {
  return Math.floor(Math.random() * (7 - 1) ) + 1;
}


function output() {
  if (rolled == false) {
    var cRoll = rollDice();
    var pRoll = rollDice();
    pTot = pTot + pRoll
    cTot = cTot + cRoll
    document.getElementById("pOut").innerHTML = pRoll;
    document.getElementById("cOut").innerHTML = cRoll;
    document.getElementById("pTot").innerHTML = pTot;
    window.alert("Computers total is ${cTot}")
    //rolled = true
    //rollAgain();
}
}


function reset() {
  pTot = 0
  cTot = 0
  document.getElementById("pOut").innerHTML = 0;
  document.getElementById("cOut").innerHTML = 0;
  document.getElementById("pTot").innerHTML = 0;
  rolled = false
}
