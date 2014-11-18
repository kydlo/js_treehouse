var x = ["some", "words", "here"]
console.log(x.length)
console.log(x[1])

var y = ["this", "that", ["dumb", "shit", "stuff"], "gone", "yet", 3]

var a = new Array(4) // empty with 4 values
y[3] = 144 // add to existing array at position []
y[8] = "far away"
y[y.length] = "added at the end"

// Methods
// push and pop

var b = [2,3,4]
console.log(b.toString());

b.push(5)
console.log(b);

// push adds to end of array, pop takes off last element
var value = b.pop()

  b.unshift(1)
// add to front of array

var front = b.shift()

var c = [10, 44, 1233, 345, 34555, 123, 69]
var csort = c.sort();
var csort2 = c.sort(function(a, b) {
  return a - b;
});
var csortrandom = c.sort(function(a, b) {
  return Math.random() -0.5;
});


var d = [1,2,3,4,5]
var backwardsd = d.reverse()

var saying2 = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog's", "back"]
var answer = saying2.sort(function(a, b) {
  a.length - b.length;
  });
  
  // split creates an array from string
  // join creates a string out of array
  
//slice
// 
var e = [0,1,3,5,6,9]
//delete e[2];
e.splice(2, 1)
console.log(e.toString())
e.splice(4, 0, "fourth", "something else")

console.log(e);
