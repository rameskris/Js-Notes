// const people=[
//     {name:'ram',job:'developer'},
//     {name:'kris',job:'musician'},
//     {name:'bujo',job:'rapper'},

// ]
import {random,people} from './data.js'
import showPeople/* in default name(show ppl) isnot important u can use any name */ from './default_module.js'

const btn=document.querySelector('.btn')
const container=document.querySelector('.conatainer')


btn.addEventListener('click',()=>{
  container.innerHTML= showPeople(people)
})