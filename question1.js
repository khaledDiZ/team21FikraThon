// populate the array for 100 people
var team = new Array();
for (var i = 1; i <= 666; i++) {
  team[i - 1] = i;
}

var current;
var next;

var j = 0;
while (team.length > 1) {
  // loop until only 1 exists
  current = team[j];
  team.push(team[j]); // move current to the end
  team.shift(); // remove from existing
  next = team[j];
  team.shift(); // delete next
  //document.writeln("Number " + current + " kills number " + next + "<br />");
}
document.writeln("The last one is number " + team[0]);
