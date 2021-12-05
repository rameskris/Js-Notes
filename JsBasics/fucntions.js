//function declaration
function greet(){
    console.log("hell")
}

greet()
greet()
greet()

//function expression
//use semi colon at end of function expression
const speak=function(){
    console.log('good day')

};

speak()

//hoisting
//function declaration
tell()                //it works even it decraled below
function tell(){
    console.log("what tell")
}
//hoisting not works in fucntion expression
// yell()                            //Uncaught ReferenceError: 
//                                 //Cannot access 'yell' before initialization
// const yell=function(){
//     console.log('shut up')
// }

//arguments & parameters
const dospeak=function(name,time){
    console.log(name,time)
}

dospeak('raam',12)//raam 12

dospeak()//undefind undefin

//argument default parameters

const yourname=function(name='KRISH '){
    console.log(`my name is ${name}`)
};
yourname() //my name is KRISH 

yourname('jk') //my name is jk

//Return fuctions
const calarea=function(radius){
    let area=3.14*radius**2
    return area
};
const area=calarea(5)
console.log(area)

//arrow functions
// const caarea=(radius)=>{
//     return 3.14*radius**2
// };

// const area1=caarea(5)
// console.log(area1)

//simplifying arrow func
//if we have only one parameter we dont need paranthesis
//two parameters need paranthesis and for empty too
/*
const caarea=radius=>{
    return 3.14*radius**2
};

const area1=caarea(7)
console.log(area1)
*/
///if one line return means wedont need ret keyword and paranthesis
const caarea=radius=>3.14*radius**2;

const area1=caarea(7)
console.log(area1)

const doospeak=(name,time)=>{
    console.log(name,time)
}
//
doospeak('raam',12)//raam 12

const speeak=()=>{
    console.log('good day')

};

speeak()
//
const speeeak=()=>'good day'

speeeak()

//
const bill=(products,tax)=>{
    let total=0
    for(let i=0;i<products.length;i++){
        total+=products[i]+products[i]*tax
    }
    return total
}
console.log(bill([1,2,3],0.2))

///

//CALL BACK FUNCTIONS
const myFucn=(callbackf)=>{
    let val=50
    callbackf(val)
};

myFucn(function(val){
    console.log(50)
});
//
myFucn(val=>{
    console.log(50)
});

//foreach
let people =['raam' ,'hare','krishna']

people.forEach(a=>{
    console.log(a.toUpperCase())
})

people.forEach(function(ppl,ind){       //first parameter is each data
                                    //second is index of each person
    console.log(ppl.toUpperCase(),ind)
})

const logFunc=(ind,per)=>{
    console.log(`${ind} - hello - ${per}`)

}
people.forEach(logFunc)