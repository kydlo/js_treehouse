
var name = "Kyle";
console.log(name)

var name2 = 'Kyle';
console.log(name2)

var statement = "This is my string's with a single quote";
console.log(statement)

var part1 = "1";
var part2 = "4";
var whole = part1 + part2;
console.log(whole)

var length = whole.length
console.log(length)



var lengthof = function (thinger){
  var lengthofinner = (thinger).length
  console.log(lengthofinner)
}

var part3 = "This is a longer line."

lengthof(part3)

// indexOf if -1 it does not exist
// charAt - character at, take an index

console.log(part3.indexOf("is"))
console.log(part3.charAt(6))

 var quick = "The quick brown fox jumps over the lazy dog";
 
 var quickLength	 = quick.length;
 var indexOfBrown = quick.indexOf("brown");
 var tenthCharacter = quick.charAt(9);
 var wordBrown = quick.substr(10,5);
 var quickUpper = quick.toUpperCase();
 var quickLower = quick.toLowerCase();