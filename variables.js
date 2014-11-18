var color = "red";
var divuno = document.getElementById('uno')
divuno.style.background = "black"
divuno.style.color = "white"

// myvar;
//console.log(typeof myvar === "undefined");

// Scope

var world = "world";

function sayHello () {
  var hello = "Hello "
  console.log(hello) 
  function inner () {
   var extra = " There is more!"
   console.log(hello + world + extra);

 }
 
}

//console.log (inner());

//console.log("world outside sayHello(): ", world)
console.log (sayHello)


//console.log(hello)

var part1 = "Team ";

function bam() {
  var part2 = "Treehouse";
  console.log(part1);
}

bam();

var part1 = "Team ";

function bam() {
  var part2 = "Treehouse";
  function boom() {
    var part3 = "Go ";
    console.log(part3 + part1 + part2);

  }

  boom();
}

bam();