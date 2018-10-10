var tot = 0
function rollDice() {
  return Math.floor(Math.random() * (7 - 1) ) + 1;
}
function output() {
  var x = rollDice();
  tot = tot + x
  document.getElementById("out").innerHTML = x;
  document.getElementById("addsup").innerHTML = tot;
}
