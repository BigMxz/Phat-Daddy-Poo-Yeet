var pTot = 0
var cTot = 0
var rolled = false


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
    rolled = true
}
}


function reset() {
  rolled = false
}
