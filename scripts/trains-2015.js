//forget about 'var'
//it's all about 'let' now
//'let' is block scoped
let hiThere;

//'const' is a final declaration
//block scoped like 'let'
//must always be assigned a value
//can't change its value afterwards
const OH_HI_THERE = 3;

//----------------------

//we can set default values for parameters!
function loadNames(names = []) {
    //this way, if no parameter was passed,
    //we will set 'names' as an empty array
}

//named parameters!
//how it was
function loadProfileOld(profile, options) {//options is an object
    var rank = options.rank;
    var itBe = option.itBe;
    console.log(rank);
}
//how it is
function loadProfile(profile, { rank, itBe } = {}) {
    console.log(rank);
}
//much easier to access the values and 
//see what the options are

loadProfile('hi', { rank: 1, itBe: 'b' });

//no need to pass all the options
loadProfile('hi', { itBe: 'b' });
//'rank' here will be undefined

//no need to pass the options object either
//since we've set a default value to it
loadProfile('hi');

//----------------------

//variadic parameters
//args is an array
function zeroOrMany(...args) { //this is called a rest parameter
    for (let i in args) {
        console.log(args[ i ]);
    }
}
//you can invoke it like this
zeroOrMany(1);
zeroOrMany(1, 2, 3);

//or like this
let list = [ 1, 2, 3 ];
zeroOrMany(...list); //and this is called a spread operator
//and yes, they look the same

//----------------------

//arrow functions!

//a 'normal' _anonymous_ function _expression_ looks like this
let normal = function(param) { };

//an arrow function looks like this
let arrow = (param) => { };

//the 'normal' function binds to the scope of where they are invoked/used
//the arrow function binds to the scope of where they are defined

//they are useful in situations like these, for example
function Example(desc) {
    this.desc = desc;
}

function callThis(showDesc) {
    showDesc(1);
}

Example.prototype.render = function() {
    console.log(this.desc);//no issue anyways here
    callThis((param) => {
        if (param != 1)
            return;
        console.log(this.desc);
        //here, if we didn't use an arrow function, 
        //the desc property wouldn't be readable since
        //it is set in another scope.
        //since we used an arrow function instead, we will get the scope
        //of where it is defined, thus making desc readable
    });
};

//----------------------

//Object Initializer Shorthand

//how it was
var oldJS = function(first, last) {
    var obj = {
        first: first,
        last: last
    };
    return obj;
}

//how it is
let newJS = function(first, last) {
    let obj = { first, last };
    //when the property name and the property value are the same, 
    //you can initialize the object like this
    return obj;
};

let anExample = () => {
    let first = 'Tom';
    let last = 'Hanks';
    let hanksObj = { first, last };
}    

//Object destructuring 

//how it was
anExample = () => {
    var user = oldJS('Tom', 'Hanks');
    var first = user.first;
    var last = user.last;
};

//how it is
anExample = () => {
    let { first, last } = newJS('Tom', 'Hanks');
};
//you don't need to get everything
anExample = () => {
    let { last } = newJS('Tom', 'Hanks');
};

//there's also a shorthand for methods/functions

//we're gonna use these soon
let first = 'Tom'; 
let last = 'Hanks';

//how it was
var past = {
    first: first,
    isActive: function () {
        //something
    }
};

//how it is
let present = {
    first,
    isActive() {
        //something
    }
};

//----------------------

//String interpolation
//just use backticks and ${}
//like this

let fullName = `${first} ${last}`;

let longText = `Hello ${first}, 

Here is a message for you:

With string interpolation, the new lines are also preserved!

Bye bye`;

//----------------------

//Merging objects

//well, you could do something like this
function _1(name, options = {}) {
    let speed = options.speed || 100;
    let unit = options.distance || 'km/h';
    //and so on...
}

//or, you could try this
function _2(name, options = {}) {
    let defaults = {
        speed: 50,
        unit: 'mph'
    };
    let settings = Object.assign({}, defaults, options);
    //{} = target object - it will me modified
    ////we're using an empty object here just so keep our objects intact
    //defaults, options = source objects
    ////the last object will override the other values
    //return = the merged object
}

//----------------------

//Arrays

let anArray = [ 0, 1, 2, 3 ];

//Classic way
let a1 = anArray[ 0 ];
let a2 = anArray[ 1 ];
let a3 = anArray[ 2 ];

//ES2015 way
let [ b1, b2, b3 ] = anArray;
//also, no need to get everything
let [ c1, , c3 ] = anArray;
//or you get what you want, and assign the rest to
//one single variable using rest parameters
let [ d1, ...dRest ] = anArray;
//...dRest will be an array containing all the other elements
console.log(`dRest: ${dRest}`);

//easier way to iterate
for (let value of anArray) {
    console.log(`value: ${value}`);
}
//does not work for objects

//finding something
let firstGreaterThanZero = anArray.find(function (value) {
    return value > 0; //first to evaluate to 'true' gets returned by the find method
});
console.log(`firstGreaterThanZero: ${firstGreaterThanZero}`);

//exact same thing below
firstGreaterThanZero = anArray.find( (value) => {
    return value > 0; //first to evaluate to 'true' gets returned by the find method
});
console.log(`firstGreaterThanZero: ${firstGreaterThanZero}`);

//again exact same thing below
firstGreaterThanZero = anArray.find(value => value > 0); //first to evaluate to 'true' gets returned by the find method
console.log(`firstGreaterThanZero: ${firstGreaterThanZero}`);

//----------------------

//Maps

let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');
let value = map.get('key1');

for (let [ key, value ] of map) {
    console.log(`${key} = ${value}`);
}

//Weak Maps
//does not stop the garbage collector from erasing data
//good on memory

let weak = new WeakMap();
//set and get are the same
//however, only objects can be used as keys
//and for..of does not work with it

//also, it has 2 more methods: has(<key>) and delete(<key>)

//Set 
//unique set of values 
//that is, no duplicate values 

let set = new Set();
set.add(1);
//for..of

let weakSet = new WeakSet();

//----------------------

//Classes

class MyClass {
    constructor() {

    }

    someMethod() {

    }
}

//Extending

class MySubClass extends MyClass {
    constructor() {
        super();//always called first

    }

    someMethod() {
        super.someMethod();//invokes parent's method (optional)
    }
}

//----------------------

//Modules

//You can export functions, consts and even classes 
//There are some examples in app.js, module1.js and constants.js 

//----------------------

//Promises
//Asynchronous execution!

let promise = new Promise(function (resolve, reject) {
    let number = Math.random() * 10;
    console.log(`Random number = ${number}`);
    if (number >= 5) {
        resolve(number);
    } else {
        reject(Error('Number < 5 :('));
    }
});

promise
    .then(function (result) {
        console.log(`Promised fulfilled with a result of: ${result}`); 
    })
    .catch(function (error) {
        console.log(`Promised rejected with the following error message: ${error.message}`);
    });

console.log('Promises are asynchronous.');

//----------------------

//Iterators

//Can't iterate through your object? Well, you can create your own iterator 
//This way, you can make use of the for..of loop, as well as the 
//spread operator and the destructuring assignment 

let someObject = {};

someObject[ Symbol.iterator ] = function () {
    let properties = Object.keys(this);
    let count = 0;
    let done = false;

    let next = () => {
        if (count >= properties.length) {
            done = true;
        }
        return {
            done: done,
            value: this[ properties[ count++ ] ]
        };
        /* or
        return {
            done,
            value: this[ properties[ count++ ] ]
        }
        */
    }

    return { next };
};

//----------------------

//Generators

//Easier way to create an iterator
//Use the * 

someObject[ Symbol.iterator ] = function *() { //notice the * !!!
    let properties = Object.keys(this);
    
    for (let property of properties) {
        yield this[ property ]; //yield!
        //this will automatically return an object with the 'done' and
        //'value' properties 
        //that is, an iterator object 
    }
};

//You can also use it like this

function *topicList() {
    yield "ES2015";
    yield "Semi-colons: good or bad?";
    yield "TypeScript";
}

for (let topic of topicList()) {
    console.log(topic);
}

