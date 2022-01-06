const myImg=document.createElement('img')
myImg.src="https://images.unsplash.com/photo-1640985065166-117f0d0dc201?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"

document.body.append(myImg)

// setInterval(()=>{
//     const rWidth=Math.floor(document.body.clientWidth*Math.random())
//     const rHeight=Math.floor(document.body.clientHeight*Math.random())
//     myImg.style.transform=`translate(${rWidth}px,${rHeight}px)`

// },2000)

const ul=document.querySelector('ul')

const todo=document.querySelector('.todo')
todo.setAttribute('class','done')
