function rollDice() {
  return Math.floor(Math.random() * (7 - 1) ) + 1;
}
function output() {
  var x = rollDice();
  document.getElementById("out").innerHTML = x;
}
function outTot() {
  var tot = 0
  tot = tot + x
}
