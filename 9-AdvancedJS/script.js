/*
//let & const
const player = 'Mert';
let experience = 100;
let wizardLevel = false;
console.log('outside', wizardLevel);

if(experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}
console.log('again', wizardLevel);

//let scope can in if statement (like functions)
//const is a constant, that will not change valus

//But we can use const with objects and change it properties

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
};

//We cannot do this
obj = 5;

//but we can do this
obj.wizardLevel = true;


//Destructuring
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
};

//this
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

//this syntax does exactly same thing of first two line above
const { player, experience } = obj;
let { wizardLevel } = obj;


//Object properties

const name = 'john snow';

const obj = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi',
    [1 + 2]: 'hoho'
};


const a = "Simon";
const b = true;
const c = {};

const junk = {
    a: a,
    b: b,
    c: c
};

//If property and value same, we can write the object like this

const junk = {             //const junk = { a, b, c };
    a,
    b,
    c
};


//Template strings
const name = "Sally";
const age = "34";
const pet = "horse";

const greeting = "Hello " + name + " you seem to be doing " + "greeting" + "!";

//We can do this way
const greetingBest = `Hello ${name} you seem to be ${age-1}. What a lovely ${pet} you have.`;
console.log(greetingBest);


//Default arguments

function greet(name='', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-1}. What a lovely ${pet} you have.`;
}

//New Type = Symbol (They are completely unique type)
let sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');

sym2 === sym3 //false


//arrow functions

function add(a, b) {
    return a + b;
}

//same
const add2 = (a, b) => a + b; // => means function

//also we can write like this

const add3 = (a, b) => {
    return a + b;
}


//Advanced funtions

const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures - a function ran. the function executed. It's never going to executed again. BUT it's going remember that here are references to those variables so the child scope always has access to the parent scope.


//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4); //12
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(4); //20
*/

//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5); //7


//Avoiding Side Effects, functional purity.
//Do not change outside scope's variables (outside of the function) inside the function.












