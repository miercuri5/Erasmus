// comentarii la o singura linie //
/* comentariu la 
mai multe linii */

/*sintaxa de creare a variabilelor

var numeVariabila; //a Nu se folosi
let numeVariabila;
const PI = 3.1416; constanta

nume variabile(nume descriptive)
pot contine litere, numere si linii
let nume01_20;
nu pot incepe cu un numar
let 01nume;
nu pot avea nume ce apar in program(de ex, nu se poate numi 'alert')
let console;
let for;

let nameAlumno; (camel case);

*/

/* var name = 'Luca';
let surname = 'Stanciu';

console.log(name);
console.log(surname);

var name = 'Luna';
console.log(name); */

// tipuri de date javascript//

/*
    number --> numeric
    let number = 2;
    let number2 = 3.1489
    
    string --> string of characters
    let string = 'string of chr';
    let string2 = 'string of chr';
    let string3 = 'string of chr'; 

    boolean --> true/false
    let boolean = true;

    null --> without value

    undefined --> without definition
    let withoutDef;

    object ---> object
    let surname = {
        'name':'Luna',
        'surname':'Mesa',
        'hobby':'playing'
    }
        
*/

let number = 10;
console.log("The variable number" + " is " + typeof number);
console.log("The content is: " + number);

let boolean = true;
console.log(typeof boolean);

let stringofchr

let alumno = {
    'name':'Luna',
    'surname':'Mesa',
    'hobby':'playing'
}

console.log(typeof alumno);

/* Operatori */
/*
    *Assignables = assign a value to a variable
        = asigns a value
        += asign+ add
        -= asign+ subtract
        *= asign+ multiply
        /= asign+ divide
        %= asign+ rest
    *Arithmeticals
    *sum +
    *subtract - 
    *multiplication *
    *division /
    *module % (rest of division)

*/
let number1 = 10;
let number2 = 5;

console.log(number1 + number2);
console.log(number1 % number2);
console.log(number1 / number2);

/* Logical or Comparative operators */

/* 
    equal ==
    strictly equal ===
    different !=
    strictly different !==                 (strict ones compare TYPE & VALUE)
    greater than >
    greater or equal to >=
    lesser than <
    lesser or equal to <=
*/

console.log(number1 == number2);
number1 = 10;
stringchr = '10';
console.log(number1 == stringchr);
console.log(number1 === stringchr);

/* Concatenative 

        Unifying two strings
        syntax

        "Hello " + "World"

        "Hello World"

*/

/* Tertiary Operator 

        We need three operators
        it is a conditional operator
        syntax

        condition ? value1 : value2;

        If the condition is true it picks the FIRST value, otherwise it picks the SECOND

*/

console.log(number1 === number2 ? "They are equal." : "They are different.");

/* Conditionals

        if...else

        syntax:

        if(condition){
            block of code if TRUE
        } else {
            block of code if FALSE
        }
        
        False values:
        -false
        -undefined
        -null
        -0
        -NaN
        -'' empty string

*/

/* 

    switch ... case

    syntax:
    switch (expression){
        case value1:
            block of code for VALUE1
            break;
        case value2:
            block of code for VALUE2
            break;
        case value3:
            block of code for VALUE2
            break;
        default:
            block of code for defects if there are none of the mentioned values
    }

    if(condition1){
        code
    } else if(condition2) {
        code2 
    } else if(condition3) {
        code3 
    } else {
        default code 
    }

*/

name = 'Lun'

switch(name){
    case 'Luna':
        console.log("Hello, I am Luna.");
        break;
    case 'Antonio':
        console.log("Hello, I am Antonio.");
        break;
    default:
        console.log("Hello, I don't know who I am.");
}

/* Loops */
/* 

    for

    syntax:

    for(let i=0; i<10; i++){
        repeats the code 10 times
    }
        

*/

/* 

        while
        syntax

        while(condition){
            block of code
        }

        do ... while
        syntax

        do {
            block of code
        } while(condition)

*/

/* 

    Functions:

    syntax:
    function nameFunction (optional parameters){
        block of code
        optional return of value
    }

*/

function arithmeticalOperation (operator, value1, value2){
    if(operator === '*'){
        return value1 * value2;
    } else if(operator === '+'){
        return value1 + value2;
    } else if(operator === '-'){
        return value1 - value2;
    } else if(operator === '/'){
        return value1 / value2;
    }
}

let result = 0;
result = arithmeticalOperation('*', number1, number2);
console.log("The result is: " + result)

result = arithmeticalOperation('+', number1, number2);
console.log("The result is: " + result)

result = arithmeticalOperation('-', number1, number2);
console.log("The result is: " + result)

result = arithmeticalOperation('/', number1, number2);
console.log("The result is: " + result)

/* Arrays / Lists */

/* 

    let fruit = ['apple', 'banana', 'orange'];

*/

let fruit = ['apple', 'banana', 'orange'];
console.log(typeof fruit);

/* 
    objects you have

    properties equal attributes
    methods equal actions that can be done
    carry out(functions)
*/

// Run through the elements of a list
// 
 console.log(fruit[0]);
 fruit.forEach(element => {
     console.log(element);
 });

/*
    add an element to the list
*/
    fruit.push('kiwi');
    console.log(fruit);
/* 
    remove an element from the list(the end)
*/
    fruit.pop();
    console.log(fruit);

/* adding an element to the beginning  */

fruit.unshift('kiwi', 'melon');
console.log(fruit);

/* length of an array */

console.log(fruit.length);

/* Object - Oriented Programming (OOP) */

let person = new Object();
let car = {};

person = {
    'name': 'Luna',
    'age': 4,
    'profession': 'To be happy',
    'laugh': function(){
        console.log("I'm laughing~ ☆(￣y▽￣)╭ Ohohoho.....☆");
    }
}
console.log(person);

/* Accessing object data */

console.log(person.name);
console.log(person['age']);

/* Adding Properties */

person.country = "Spain";
console.log(person);

person.laugh();

/* Classes 
    classes are made of objects

    vehicle factory --> car, motorbike, bike, truck, ...
    syntax

    class NameClass {
        builder(parameter){
            this.parameter1 = parameter1;
            this.parameter2 = parameter2;
            ....
        }
    }

*/
/* Basic Examples */

class Robot{
    constructor(name){
        this.name = name; //property of the robot
    }
    talk() {
        console.log(`Hello! (＾Ｕ＾)ノ~ＹＯ I am ${this.name}, your robot friend. ヾ(≧▽≦*)o`)
    }
    move() {
        console.log(`${this.name} is moving (～o￣3￣)～`)
    }
}

let robot1 = new Robot('Atibot');
robot1.talk();
robot1.move();
let robot2 = new Robot('Skyner');
robot2.talk();
robot2.move();




/* callback functions
recursive functions */

function salute(name)
{
    console.log(`Hola ${name}`)
}

function startName(callback)
{
    let name = prompt("Enter your name: ");
    callback(name);
}

startName(salute);