var parkIsOpen = false;

if (parkIsOpen)
  console.log('Welcome to the Badlands National Park! Try to enjoy your stay.');
else
  console.log('Sorry, the Badlands are particularly bad today. We\'re closed!');

//----------------------  

function something() {
  //this function will always be loaded
  //this is called a declared function
}

var smth = function () {
  //this function will only be loaded when/if the code reaches it
  // also, this is called an anonymous expression and function expression
};

//----------------------

//defines this var as being an array
//ready to invoke the array methods
var emptyArray = [];

var arrayExample = [ 1, '2', function (input) { return "bla"; } ];

console.log('arrayExample: ' + arrayExample);

var lastItemRemoved = arrayExample.pop();

var firstItemRemoved = arrayExample.shift();

var newLastItem = '3';
arrayExample.push(newLastItem);

console.log('arrayExample: ' + arrayExample);

//----------------------

var double = function (arrayItem) {
  return arrayItem * 2;
};

var numbers = [ 2, 3, 6 ];
var results = numbers.map(double);

//the map function is equal to doing this:
var res = [];
for (var i = 0; i < numbers.length; i++) {
  res[ i ] = double(numbers[ i ]);
}

console.log('numbers: ' + numbers);
console.log('results: ' + results);
console.log('res: ' + res);

//----------------------

function example() {
  return function () {
    console.log('Hi, I\'m an example function!');
  };
}

//callLater stores the function that is returned after invoking 
//the example functions
var callLater = example();
//we now invoke that returned function
callLater();

//here, we immediately invoke the returned function
var callImmediately = example()();
//same thing here
example()();

//----------------------

//Closures

function hey(smth) {
  var count = 0;
  //the function below will be a closure function
  return function (ha) {
    count++;
  }
}

var closureExample = hey('hehe');
//invoking closure function
closureExample();

//----------------------

//Hoisting
//vars are gonna have their memory space reserved
//and declared functions too
//so they will come before anything else
//function expressions won't be changed at all though

var firstVar = 'hi';
//will become
var firstVar = undefined; //hoisted up
firstVar = 'hi'; //left where it was

function someFunction() { } //hoisted

var expre = function () { }
//will become
var expre = undefined;
expre = function () { } //left where it was

//----------------------

//Objects 
var someVar = 2;

var obj = {
  desc: "this is an object property",
  variable: someVar,
  speak: function (param) {
    console.log("this is an object function aka method\n"
      + "we can use the 'this' keyword here");
  }
}
obj.desc; //accessing obj's property
obj.speak('hi'); //invoking obj's method
obj.variable = 3; //this also changes 'someVar' value

//Enumeration

//to list all properties in an obj
for (var property in obj) {
  console.log(property);
}
//The for-in is ONLY for enumerating properties!
//It should NOT be used to iterate over arrays

//----------------------

//Prototypes

//Simple Prototype 
var cloneMe = {
  x: 10,
  y: 20
};

//This will create an object which is 
//exactly like 'cloneMe'
//Object.create(<prototype>);
var cloned = Object.create(cloneMe); 

//Better Prototype

//*Think of prototype as a parent class*

//The parent/prototype of all objects is Object.prototype
//This includes the primitive types too!
//Since they all come from objects
//A number, for example, comes from the object 'Number'

//This is a constructor function
//Note that is starts with a capital letter
function Animal(weight, colour) {
  this.weight = weight;
  this.colour = colour;
  this.someFunction = function () {
    console.log('lala');
  }
}
//It can also be a function expression, like:
//var Animal = function(weight, colour) {...}

//This is where we add common functions
//To the Animal's prototype
Animal.prototype = {
  eat: function () {
    console.log('eating');
  },
  sleep: function () {
    console.log('sleeping');
  }
};

//Now we create an Animal object
//Note the 'new' keyword
var animalObj = new Animal(50, 'orange');

//This obj has access to the functions in the constructor function and
//the ones defined in the prototype

animalObj.someFunction();
animalObj.eat();
animalObj.sleep();

//You can also add functions to the built-in prototypes
String.prototype.lol = function () {
  return this.valueOf() + ' lololol';
};

var someStr = 'hi there';
console.log(someStr.lol());

var someArray = [];
console.log(Array.prototype);

var obj1 = new Animal(51, 'orange');
var obj2 = new Animal(52, 'orange');
var obj3 = new Animal(53, 'orange');
var obj4 = new Animal(54, 'orange');

someArray.push(obj1);
someArray.push(obj2);
someArray.push(obj3);
someArray.push(obj4);

for (var i = 0; i < someArray.length; i++) {
  console.log(someArray[ i ].weight);
}

