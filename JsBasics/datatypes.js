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
let ra=7;
const pi=3.14
//math operators +,-,*,/,**,%
console.log(2**2)//s s to power 2
//order of operation -BIMDAS i for indeces- power of
console.log(2*(10-4)**2)

let count=1

count=count+1
console.log(count)//2
//
count++//3
console.log(count++)//3+1 but only shows 3 if u do ++count its shows 4
console.log(count)//4
console.log()//4-1
console.log(count)///3
console.log(count+=12)//15

console.log(5/"g")//Nan not a number
//we can concate numbers with string its rusults one string

console.log("the no of post" + " "+count + " at my fb")

// a set of functions and constants defined as properties of the Math object
console.log(Math.pow(2,10)) //2 to the power of 10
console.log(Math.round(10.4)) //10
console.log(Math.ceil(10.4))//11
console.log(Math.floor(10.4))//10
console.log(Math.abs(-4))//4
console.log(Math.max(5,6,9))//9
console.log(Math.random()*10)//random between 0 to 1
console.log(Math.round(Math.random()*10))//if u want full integer between 0to 1
console.log(Math.sqrt(3))//3**0.5: the square root of 3
Math.pow(3, 1/3) //3**(1/3): the cube root of 3

//Arrays..
let names=['ram','lal','kand']
names[2]='nomore'
console.log(names[5])
//array property
console.log(names.length) 

//array methods
let renames=names.join(',')
console.log(renames) 
console.log(typeof renames)
console.log(names.concat(['aria','ravi'])) //its not alter original it ruterns new one
console.log(names.push('tr'))//4 return new lenth and add tr to array its alter the original
console.log(names.pop('tr'))//4 return poped once from arr and  its alter the original
//you can create array by using spread methods ...
let newNames=['cap',...names,'ame']
console.log(newNames.length)

let ori=[1,true,4]
let copy=[...ori]
console.log(copy)
console.log(ori[1])
let digits=[...'12345']
console.log(digits)//['1', '2', '3', '4', '5']

//create an array with array cosntructor()
let a=new Array(10)
console.log(a)//(10) [empty × 10]This technique creates an array with the specified length
             //Note that no values are stored in the array
let b= new Array(5, 4, 3, 2, 1,true)
console.log(b)//(6)length [5, 4, 3, 2, 1, true]

//
let c=new Array(1)//[empty]length: 1 //When the Array() constructor function 
                    //is invoked with one numeric argument
                    //it uses that argument as an array length we use array.of() to address it
console.log(c)

Array.of() //[]; returns empty array with no arguments
Array.of(5) // => [10]; can create arrays with a single numeric argument
let abc=Array.of(1,2,3)// => [1, 2, 3]
console.log(abc)
//
console.log(Array.from('quo'))

// mix of values
//let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
//console.log(arr[3]())

//NULL AND UNDEFINED
let age;
console.log(age,age+3,`the age is ${age}`)//undefined NaN 'the age is undefined'

let ag=null;
console.log(ag,ag+3,`the age is ${ag}`)//null 3 'the age is null' ag becomes zero with add 3 in
                                        // string its null

//booleans and comparisions
let newem="aa@Game.com"
console.log(newem.includes('@'))//true
//loose vs strict comparision
//loose == or !=
console.log(25=='25')//true becoz its converts string to number in loosly 
//strict === o !==
console.log(25==='25')//false //ther is no type conversion here

// type conversion
let co='200'
console.log(co+1)//2001

//to convert to number
co=Number(co)
console.log(co+1)//201
let nau=Number("gggg")//NaN
//to convet to string
console.log(String(50))
//to convet to boolean
console.log(Boolean(100))//true becoz its truthy valuse if zero means falsy
console.log(Boolean('0'))//truthy becoz string of any lengths are truthy
                         // but empty string falssy becoz no length


