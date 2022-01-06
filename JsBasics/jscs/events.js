// const btn =document.querySelector('button')
// btn.addEventListener('click',function(){
//     alert("tou clicked me!!")
// })

// btn.addEventListener('mouseover',()=>{
//     btn.innerText='Stop Touching me!'
// })

// btn.addEventListener('mouseout',()=>{
//     btn.innerText='click me'
// })
// btn.addEventListener('mouseover',function(){
//     const height=Math.floor(Math.random()*window.innerHeight)
//     const width=Math.floor(Math.random()*window.innerWidth)
    
//     btn.style.top=`${height}px`
//     btn.style.left=`${width}py`

// })
const rainbow=['red','green','blue','orange','violet','indigo','purple']
const boxes=document.querySelector('#boxes')
const changeColor=function(){
    const h1=document.querySelector('h1')
     h1.style.color=this.style.backgroundColor
    
}

for(let cr of rainbow){
    const box=document.createElement('div')
    box.style.backgroundColor=cr
    box.classList.add('box')
    boxes.appendChild(box)
    box.addEventListener('click',changeColor)

}
const inp=document.querySelector('#inp')
inp.addEventListener('keypress',e=>{
   if(e.key==='Enter'){
       console.log(inp.value)
   }
})