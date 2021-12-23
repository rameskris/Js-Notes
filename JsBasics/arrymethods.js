const scores=[20,10,30,40,50,12]

const nScores=scores.filter(score=>score>20)
console.log(nScores)

const users=[
    {name:'raam',isPremium:true},
    {name:'elil',isPremium:false},
    {name:'shiva',isPremium:true},
    {name:'shine',isPremium:false}
]

const preUser=users.filter(user=>user.isPremium)
console.log(preUser)

const prices=[10,20,30,12,34]
const salesPrices=prices.map(price=>price/2)

console.log(`mapped prices ${salesPrices}`)

const products=[
    {name:'gold',price:20},
    {name:'diamond',price:50},
    {name:'platinum',price:60},
    {name:'iron',price:10},
    {name:'silver',price:40},
]

const saleProduct=products.map(product=>{
    if(product.price>20){
        return {name:product.name,price:product.price/2}
    }else{
        return product
    }
})

console.log(saleProduct)
                                 
//reduce 
const values=[10,20,60,40,70,90,30]
const nValues=values.reduce((acc,cur)=>{
    if(cur>50){
        acc++
    }
    return acc
},100)
console.log(` reduce ${nValues}`)
//acc cur return
//100  10   100
//20 60    101
//21 40    101
//21  70   102
//22 90    103
//23 30    103

const elements=[
    {name:'gold',price:20},
    {name:'diamond',price:50},
    {name:'platinum',price:60},
    {name:'gold',price:10},
    {name:'silver',price:40},
]
const tot=elements.reduce((acc,cur)=>{
     if(cur.name==='gold'){
         acc+=cur.price
     }
     console.log(acc)
     return acc;
},0)
console.log(tot)