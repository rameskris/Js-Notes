// const booking=[]

// const createBooking=function(flightNum,numPas=1,price=199*5) {

//     const bookings={
//         flightNum,
//         numPas,
//         price
//     }

//     console.log(bookings)
//     booking.push(bookings)
    
// }

// createBooking("we345",2)

// const flight='lh234'
// const ram={
//     name:'ram',
//     passport:234556

// }

// const checkIn=function(flightNum,passenger){
    
//     passenger.name='me.'+passenger.name

//     if(passenger.passport===234556){
//       alert('Checkd in')
//     }
//     else{
//         alert('wrong passport')
//     }
    
//     console.log(ram)

////

// }
// checkIn(flight,ram)

// const newpassport=function(passenger){
//     passenger.passport=Math.trunc(Math.random() * 10000)
// }
// newpassport(ram)
// checkIn(flight,ram)

////////////
//const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'

//where ever space just replaced by noempty
// const oneWord=function(str){
//     return str.replace(/ /g,'').toLowerCase()

// }

// const upperFirstWord=function(str){
//     const [first,...others]=str.split(' ')
    
//     return [first.toUpperCase(),...others].join(' ')

// }

//higher order function
// const transformer=function(str,fn){
//     console.log(`Original string: ${str}`)
//     console.log(`transformed string; ${fn(str)}`)
//     console.log(`transformed by String:${fn.name}`)
// }

// transformer('Javascript is the best!',upperFirstWord)
// console.log(transformer('Javascript is the best!',oneWord))

//
const greet=greeting=>name=>console.log(`${greeting} ${name}`)
   

const greeter=greet("hi")
greeter('ram')

greet('hey')('josh')

//call and apply
const lufthansa={
    airline:'Lufthansha',
    iataCode:'lh',
    bookings:[],
    book(fn,name){
        console.log(` ${fn} book seat on ${this.airline}`)
        this.bookings.push({flight:`${this.iataCode}${fn}`,name})
    }


}
lufthansa.book(239,'jsman')
console.log(lufthansa.bookings)

const euroWings={
    airline:"Eurowings",
    iataCode:'Eh',
    bookings:[]
}

const book=lufthansa.book
book.call(euroWings,23,'heman')

//Aplly legacy use spread operator insted 
const flighData=[583,'gk']
// book.apply(euroWings,flighData)

book.call(euroWings,...flighData)

//the bind Method
//just like call bind also allows us manually asign this keyword

const euroWing=book.bind(euroWings)
const luf=book.bind(lufthansa)
euroWing(33,'rk')
//set default one her 28 is preset
const luf28=book.bind(lufthansa,28)

luf28('tejas')
luf28('poojas')
//
lufthansa.planes=300
lufthansa.buyPlane=function(){
    console.log(this)
    this.planes++
    console.log(this.planes)
}
//here this is button element (body) becoz this attacted which were it is attached so use bind
//why not call because call method calls a function not returning a function so use bind bind returns function

//document.body.addEventListener('click',lufthansa.buyPlane)
document.body.addEventListener('click',lufthansa.buyPlane.bind(lufthansa))

//if obj doesnot exit means just bind(null,value)//first argument is this here no so null

/*********** */

//function(){//error becausion no name but
    //console.log("hi")//
//}
//immeditly invoke function we call IIfe


// (function(){//error becausion no name but
//     console.log("hi")//
// })();

//closures
//access parent function properties on child function even its gone

const secureBooking=function(){
    let passengerCount=0
    return function(){
        passengerCount++
        console.log(`${passengerCount} passenger count`)
    }
}

const bookcount=secureBooking()
bookcount()



