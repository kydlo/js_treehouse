var sayHello = function () {
	var message = "Hello"
	message = message + " World"
	console.log(message)
}

var debug = function (message){
	console.log("Debug", message);
}

var doubleNumber = function (num) {
	return num * 2;
}

debug(doubleNumber(7))

sayHello();

var x = 1;
debug("x has been set")
sayHello();
console.log(x)

x+=10;
var y =100;
debug("x has been increased. y has been set")
sayHello();
console.log(y)
// this line doesn't work
//console.log("x is now" x)
console.log("x is now",x)


/*var case_extra_credit = function (var num_a = prompt("Number A?");
) {

}
*/
/*
for(var counter=100; counter; counter = counter -1){

	if (num_a%2){
		return "even";
	}
	else 
		return "odd";


var starting_number = prompt("What number shall we start with?")
	console.log ("Initial Number is")
*/