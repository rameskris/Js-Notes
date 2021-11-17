/*Data Types
There are seven Data types in javascript
1.Number    =>1,2,3...integers, decimal..
2.String    =>'hello',"hi@" anything inside single or double quotes
3.Boolean   => true/false
4.Null      => use to set a variable with no value(we explicitly defined it)
5.Undefined =>used to say not yet been defined (this one is automatically given 
                                                 to variable when they're not defined)
6.Object    =>Complex datastucters-Arrays,Dates,literals..

7.Symbol    =>used with objects

*/

//2.Strings

//use single or double qutoes but dont start with one and end with another like 'hi" or "hi'
//the correct one is "hi" or 'hi' anything inside single or double quotes considerd as strings
console.log("hi")
let email="example@gmail.com"
console.log(email)

//2.1 Stirng Concatenation 
//joining strings together
let firstName="raam";
let lastName="krishnan"
let fullName=firstName+lastName
console.log(fullName)

//2.2 Getting Character from String

console.log(fullName[0]) // js is zero based means start counts from zero
//each letter used to form a string is charachter we can get using [] brackets
console.log("pop"[3]) //undefined -> if its out of length its undefind 

//2.3 String Properties

//strings have separate properties for eg
//thisn't a function just a property of a string,its not actually performing some kind of code
//to do something
console.log(fullName.length);


//2.4 string methods or Functions

//here it runs some snippets of code to do turn to not just get some property
//stringName.functionName() 
//these methods dont alter original variable some methods do
console.log(fullName.toUpperCase());
let loName=fullName.toLowerCase()
console.log(loName)

let index=email.indexOf('@')//inside methods named arguments here @
console.log(index)

//common string methods
/*
lastIndexOf() searches the string from the end to the beginning,
 but returns the index from the beginning (from position 0).
lastIndexOf() returns -1 if the value is not found.
*/ 
let eresult=email.lastIndexOf('r')
console.log(eresult)//-1
let text = "Hello planet earth, you are a great planet.";
let fre=text.lastIndexOf("planet");//36
let re=text.lastIndexOf("Planet");//-1
console.log(fre)

/*The slice() method extracts parts of a string 
and returns the extracted parts in a new string.
Use the start and end parameters to specify the part of the string
 you want to extract. */
//Use a negative number to select from the end of the string.

let slre=text.slice(0,30)  //from start to end(0to30)//if you only give start it takes to the end

console.log(slre)  //Hello planet earth, you are a 

//here substr starts position from 6th from that 4 characters 4th one is included
let text1 = "Hello world!";
console.log(text1.substr(6, 4));//worl

//replace
//its replace first finded h and replace it with 4
let text2 = "Hello world!";
console.log(text2.replace('H', 4));

let text3 = "Visit, Microsoft! Microsoft";
//only return first replaced value 
//use regular expression for complete replace
console.log(text3.replace("Microsoft", "W3Schools"));//Visit W3Schools! Microsoft

/* 
The split() method splits a string into an array of substrings, and returns the array
The split() method does not change the original string.
*/
console.log(text3.split(","))
let text4 = "How are you doing today?";
const myArray = text4.split(" ");
console.log(myArray)

// Boolean searching functions
let text5 = "How are you doing today?";
const mybool = text4.startsWith('how')
console.log(mybool)//false bcoz its case sensitive

let text6 = "Hello world, welcome to the universe.";
console.log(text6.includes("world"));//true
//
//padding if u want certain length but you got less just add padding to fill
let text7 = "Hello."
console.log(text7.padStart(10,"*")); //****Hello. add * on the left to a length of 10

// Space trimming functions
console.log(" raam ".trim()) //remove spaces at start and end

//string Escape characters
console.log("hi\n world")
console.log("hi\\ world")
console.log("hi ani\'t world")

//string literals

console.log(`you owe me ${100+2}`) //you owe me 102
console.log(`here is the use case ${text6.toUpperCase()}`) //here is the use case HELLO 
                                                           //WORLD, WELCOME TO THE UNIVERSE
/*
***************************************
1.Numbers
*************************************** 
*/
