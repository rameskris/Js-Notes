const p=document.querySelector('p')
console.log(p)
const er=document.querySelector('.er')
console.log(er)

const ps=document.querySelectorAll('p')

const fili=document.querySelectorAll('ul')
console.log(fili)

//we can use foreach on nodelist
// ps.forEach(p=>{
//     console.log(p)
// })
// console.log(ps.item(2))
// ab=ps.entries() 

/* A NodeList object is a list (collection) of nodes extracted from a document        
The elements in the NodeList can be accessed by an index number
 The length property is useful when you want to loop through the nodes in a node list                                               
  An HTMLCollection (previous chapter) is a collection of HTML elements.

A NodeList is a collection of document nodes.

A NodeList and an HTML collection is very much the same thing.

Both an HTMLCollection object and a NodeList object is an array-like list (collection) of objects.

Both have a length property defining the number of items in the list (collection).

Both provide an index (0, 1, 2, 3, 4, ...) to access each item like an array.

HTMLCollection items can be accessed by their name, id, or index number.

NodeList items can only be accessed by their index number.

Only the NodeList object can contain attribute nodes and text nodes.         


A node list is not an array!

A node list may look like an array, but it is not.

You can loop through the node list and refer to its nodes like an array.

However, you cannot use Array Methods, like valueOf(), push(), pop(), or join() on a node list.
*/

// for(let ppp of ps){
//     console.log(ppp)
// }

ab=ps.keys()

 for(const p in ab){
     console.log(p)
 } 
// query selector are nodelist collection



//html collection method
//get an element by Id 

const title=document.getElementById('page-tit')
console.log(title)

//get elements by their class name

const errors=document.getElementsByClassName('er')
console.log(errors.length) //u can use [0] and lenght but other methods wont work

//get elements by their tagname
const para=document.getElementsByTagName('p')
console.log(para[2])


//NExt step after querying and get we can change the text inside

const parag =document.querySelector('p')
parag.innerText="FUck you"
 //if you want append
 parag.innerText+="FUck you"

const allpara=document.querySelectorAll('p')
allpara.forEach(para=>{
  para.innerText+=' New Text'
})

//if we want to cahnge the html of the element
const content=document.querySelector('#page-tit')
content.innerHTML='<h1>you are not welcome</h1>'

//if you want append
content.innerHTML+='<h1> not welcome</h1>'
const ppl=['kala','rma']
const cone=document.querySelector('.con')
console.log('eeee',cone)
ppl.forEach(c=>{
  cone.innerHTML+= `<p>${c} </p>`
})

//getting and setting attribute
const link =document.querySelector('a')

//get attribute method
//we need to pass arguments as string

console.log(link.getAttribute('href'))

//set attribute
link.setAttribute('href','https://wwww.bing.com')
link.innerHTML='bing'

const lo=document.querySelector('.al')
lo.getAttribute('class')
lo.setAttribute('class','MayBE')
lo.setAttribute('style','color:red;')
//if we use set attribute it rewrite pre exist one
//so use style property
const h3obj=document.querySelector('h3')
h3obj.style.margin='50px'
h3obj.style.color='red'
h3obj.style.color=""
//in js font-size become fontSize here js minus means subtract so use camelCase

h3obj.style.fontSize='50px'
