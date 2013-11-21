/*
//arrays - treehouse
var friends = ["DB", "Jayeon", "Bacon","Other"];
console.log(friends);
console.log(friends.length);
var friendnumber = prompt("What number friend?");
//var friendnumber = 1;
console.log(friends[friendnumber]);

for (var i=0; i < friends.length; i+=1);
	console.log(friends[i]);

*/
// objects - treehouse

/*var "PlaceofOrigin" = {
	home_town: "Beavercreek"
	home_state: "Ohio"
	home_country: "USA"
}
*/


var home_town = prompt("What town are you from?");
var home_state = prompt("What state are you from?");
var home_country = prompt("What country are you from?");

var me = {
	first_name: "Kyle",
	last_name: "Louis",
	"Employee Number": 20,
	employer: "DoubleDutch",
	"Place of Origin": [home_town, home_state, home_country]
}


//me.first_name = "Kydlo"

console.log(me.first_name);
console.log(me.last_name);
console.log(me["Employee Number"]);
console["log"](me["Place of Origin"]);


var key = "last_name"
console.log(me[key])