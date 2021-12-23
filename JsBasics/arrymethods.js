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