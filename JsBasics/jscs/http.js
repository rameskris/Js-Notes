// const myreq=new XMLHttpRequest()
// myreq.addEventListener('load',function (){
//     const data=JSON.parse(this.responseText)
//     console.log("first err")
//     const securl=data.results[0].films[0]
//     const secreq=new XMLHttpRequest()
//     secreq.addEventListener('load',function(){
//         console.log('second worked')
//     })
//     secreq.addEventListener('error',function(){
//         console.log('second error')
//     })
//     secreq.open('GET',securl)
//     secreq.send()
    
// })
// myreq.addEventListener('error',()=>{
//     console.log("error")
// })

// myreq.open('GET','https://swapi.dev/api/planets')
// myreq.send()

//recreate using fetch

// const checkStatusandParse=(res)=>{
//     if(!res.ok){
//         throw new Error("error baby")
//     }
//     return res.json()

// }
// const printData=(data)=>{
//     for(let da of data.results){
//         console.log(da.name)
//     }
//     console.log(data.name)
//     const nextUrl= data.next
//     return fetch(nextUrl)
// }

// fetch('https://swapi.dev/api/planets')
// .then(checkStatusandParse)
// .then(printData)
// .then(checkStatusandParse)
// .then(printData)


//axios a better fetch
// axios('https://swapi.dev/api/people/1').then((data)=>{
//     console.log('axios',data.data.name)
// }).catch((err)=>{
//     console.log(err)
// })
//chaining axios


//ASYN AWAIT    
async function getPlanets(){
    const res=await axios('https://swapi.dev/api/planets')
    console.log(res.data.results[0])
}
getPlanets()