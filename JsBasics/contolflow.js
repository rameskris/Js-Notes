//loops and conditions
//for loops
let names=['ram','keasav','pichai']

// for(let i=0;i<names.length;i++){
//     console.log(`<div>${names[i]}</div>`)
// }

//whileloop

let i=0;
// while(i<names.length){
//     console.log(`<div>${names[i]}</div>`)
//     i++
// }
//do while
// i=;

// do{
//     console.log(`<div>${names[i]}</div>`)
//     i++

// }while(i<5);

let password='fff9'
if(password.length >=8 && password.includes('&')){
    console.log('Yep!!!!!!!!!!')
}else if(password.length===8 || password.includes('@')){
    console.log('Nppe!!!!!!!!!!')
    
}else{
    console.log('Anyway!!!!!!!!!!')
}

let user=false
if(!user){
    console.log('login first')
}


const scores=[12,3,4,5,6,]

for(let i=0;i<scores.length;i++){
    if(scores[i]===4){
        continue;          //here 4 not printed
                            //when score is 4 its not print yourscore 
                            //it just continue with loop
    }
    console.log('your score :', scores[i])
}
//switch

let grade='a'
switch(grade){
    case 'b':
        console.log("Nope")
    case 'b':
        console.log("Nope")
    case 'a':
        console.log("yep")
        break;
    default:
        console.log('yea')

}
// code blocks

let age=30
if(true){  //inside you redifded age it pints 50 but in global u cant redifiend its err
           //inside local scope only access inside this block
    var test='hello'       
    let age=50
    console.log(`inside code block age is ${age}`)
}
console.log(`outside code block age is ${age} ${test}`)//here local scope hello is printed 
                                                       //it can be accesd when using var

//remembe think of it local scope even its nested

if(true){
    let age=70
    console.log('1st block',age)
    if(true){
        let age =80
        console.log('2nd block ',age)
    }
}