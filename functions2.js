// Javascript Functions

/*function sayHello (name, greeting) {
   if (typeof name === 'undefined' ){
     return "no name provided";
   }
   
   if (typeof greeting !== 'array'){
     greeting = "Hello"
   }
      console.log(greeting, name);
      return name.length;
      console.log("end of file"); // this doesn't do anything right now
}

sayHello("kyle", [1,2,3,4]);
sayHello("Kyle")

//scope

var color = 'black'

function showcolor () {
  var color = 'green'
  console.log('showColor color', color);
}

showcolor();
console.log('showColor color', color);
*/
var myFun = function () { // could also be just $ function myFun (){
  console.log("my function was called");
  //undeclaredvariable;
}

var callTwice = function (targetFunction) {
  targetFunction();
  targetFunction();
}

//myFun();
callTwice(function (){
 console.log("Hello from anon func") 
});


(function() {
alert("Hello via closure!");
})(); //------------>Those extra parentheses is the same as....

function sayHello() {
alert("hello");
}

sayHello(); //----------------> ...calling a named function

//this is some gibberish shit
//(callTwice(myFun){
  
//});
/*
// this is some weird stuff from treehouse anonymous function stuff
var anonymousFunction = function (){
  };
  (function () {
    window.didExecute = true;
  })();
  
*/ 