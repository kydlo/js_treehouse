// objects - treehouse
/*
var kyle = {
  "name": "Kyle", 
  "skills": ["photography", "web stuff"],
  "something" : "agh",
  "favorite color": "rorange",
  greet: function (name, mood) {
    name = name || "You";
    mood = mood || "good";
    
    console.log("Hello, " + name +
    " I am " + this.name + " and I am in a " + mood + " mood!");
  }
  /*greet: function(){
    console.log("Hello I am " + this.name)
  }
  };
  */
 /* 
var ryan = {
  "name": "Ryan", 
  greet: kyle.greet
  };
kyle.greet();
kyle.name = "KYdlo";

kyle.greet();
ryan.greet();
kyle["greet"]("stevie", "the best");
// this doesn't work b/c we have lost context
var kyleGreet = kyle.greet;
*/
/*
kyleGreet.call({})
kyleGreet.call(kyle)
kyleGreet.call(ryan)
kyleGreet.call({name: "AMit"}, "Matt", "stellary")
kyle.greet.call(ryan)

kyle.greet.apply(kyle, ["Matt2", "bad"])

var args = ["Mike", "happy2"];
kyle.greet.apply(kyle, args)
*/
/*
console.log(kyle.name);

kyle["favorite color"] = "brg";

console.log(kyle["name"]);
console.log(kyle["favorite color"]);
*/

/*
var me = {
  first_name: "Kyle",
  last_name: "Louis",
  "Employee Number": 20,
  employer: "DoubleDutch",
  "Place of Origin": [home_town, home_state, home_country]
  
  */
  
  
var personPrototype = {
    name: "Anon",
    greet: function (name, mood) {
      name = name || "You";
      mood = mood || "good";
      
      console.log("Hello, " + name +
      " I am " + this.name + " and I am in a " + mood + " mood!");
    },
    species: "Homo Sapien"
  }
  
  function Person (name) {
    this.name = name;    
  }
  
  Person.prototype = personPrototype
  
  kyle = new Person("Kyle")
 // kyle.name = "Kyle";
  //kyle.greet()
  brett = new Person("Brett")
  
  // capital letter function is a constructor function and should be used with 'new'