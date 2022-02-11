console.log("from dom")
 const body=document.body
 export const styleBody=()=>{
    
    body.style.background='peachpuff'

}


export const oneFuntion=(text)=>{
    const title=document.createElement('h1')
    title.textContent=text
    body.appendChild(title)
}

styleBody()
oneFuntion("hi form dom")
export const contact="one sport"

//export individualy you export all in one go
//export {styleBody,oneFuntion,contact}