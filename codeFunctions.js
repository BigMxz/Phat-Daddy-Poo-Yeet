var tot = 0
var rolled = false
function rollDice() {
  return Math.floor(Math.random() * (7 - 1) ) + 1;
}
function output() {
  if (rolled == false) {
    var x = rollDice();
    tot = tot + x
    document.getElementById("out").innerHTML = x;
    document.getElementById("addsup").innerHTML = tot;
    rolled = true
}
}
//function reset() {
//  rolled = false
//}
