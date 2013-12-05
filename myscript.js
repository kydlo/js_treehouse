//variable lesson

/*
var color = "red";

var myDiv = document.getElementByID('myDiv')
myDiv.style.background = "black";
myDiv.style.color = "#ffffff";
*/

//null and undefined lesson
//var myVar;

//undefined = true;
/*
console.log(typeof myVar === "undefined");
console.log(myVar === "undefined");

if(myVar == null){
	console.log("If");
} else {
	console.log("Else");
}
*/
// Scope of variables - keep going up/out

/*var world = "World!";

 function sayHello () {
 	var hello = "Hello ";

 	function inner (){
 		var extra = " There is more!"
 		console.log(hello + world + extra);
 	}

 	inner();
 	
 }

 sayHello();

 console.log("world outside sayHello(): ", world);
 // erroneous due to scope of hello variabled - console.log("world outside sayHello(): ", hello);
*/
 //Shadowing a variable

 /*var myColor = "blue";
 console.log("myColor before myFunc()", myColor)

 function myFunc () {
 	var myColor = "yellow"
 	var myNumber = 42;
 	console.log("myColor inside myFunc()", myColor)
 }

 myFunc();
 console.log("myColor after myFunc()", myColor)
 console.log("myNumber after myFunc()", myNumber)
*/
 // Hoisting

 function doSomething (doit) {
 	var color = "blue", 
	 	number, 
	 	name = "Jim";
 	var number
 	if(doit) {
 		color = "red";
 		number = 10;
 		console.log("Color in if(){}", color)
 	}
 	console.log("Color after if(){}", color)
 }

 doSomething(false);
 doSomething(true);