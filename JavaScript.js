function rollDice() {
  return Math.floor(Math.random() * (7 - 1) ) + 1;
}
function output() {
  document.getElementById("out").innerHTML = rollDice();
}
