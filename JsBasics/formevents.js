const form=document.querySelector('.signup')
const feedback=document.querySelector('.feedback')
const param=/^[a-zA-z0-9]{6,}$/
//const username=document.querySelector("#username")
//if we have separate id or name inside iinput we can use dot notation to grap/
//we dont need separate query gap username just use form query to grab
form.addEventListener('submit',e=>{
    e.preventDefault()
    //console.log(username.value)
    //console.log(form.username.value)
    let result=form.username.value
    
    if(param.test(result)===true){
        feedback.textContent="Valid form"
    }else{
        feedback.textContent="inavalid form"
    }


})

//testing regex
// const name='raam1234'
// const param=/^[a-z]{4,}$/
// let res=param.test(name)

// if(res===true){
//     console.log("passed")
// }else{
//     console.log("Nope")
// }

form.username.addEventListener('keyup',e=>{
    if(param.test(e.target.value)===true){
        console.log("passed")
    }else{
        console.log("failed")
    }





})