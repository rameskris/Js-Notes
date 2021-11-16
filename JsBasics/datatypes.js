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