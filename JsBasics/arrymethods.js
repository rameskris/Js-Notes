const scores=[20,10,30,40,50,12]
//filter method callback is boolean or test function
//original unchanged
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

const filBooks = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
}]

const goodBooks=filBooks.filter(book=>book.rating>4)
console.log(goodBooks)

const fantasyBooks=filBooks.filter(book=>book.genres.includes('fantasy'))
console.log(fantasyBooks)

const userQuery="The"
const userQUeryRes=filBooks.filter(book=>{
  const title=book.title.toLowerCase()
  return title.includes(userQuery.toLowerCase())
})

console.log(userQUeryRes)


//map
//creates new array
//map them in to new array
//difference is for each doesnt provide you a new arry map does

const prices=[10,20,30,12,33]
const salesPrices=prices.map(price=>price/2)


console.log(`mapped prices ${salesPrices}`)

const isEven=prices.map((price)=>{
  // if(price%2==0){
  //   return {num:price,isEven:true}
  // }return {num:price,isEven:false}
  return{
    value:price,
    isEven:price%2==0
  }
  
})
console.log(isEven)




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

const redPrac=[1,12,4,5,9,11]

const addeach=redPrac.reduce((acc,curr)=>acc+curr)
console.log(`Redadd  ${addeach}`)

const bigger=redPrac.reduce((acc,curr)=>acc>curr? acc:curr,10)

console.log(bigger)
//count no. of y and n using reduce
const votes=['y','n','n','y','y','y','y','y','n','y','y','y','n']

const totyn=votes.reduce((tally,val)=>{
    if(tally[val]){
        tally[val]++
    }else{
        tally[val]=1
    }
    return tally

},{})

console.log(totyn)


const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]
const gBooks=books.reduce((groupedBooks,book)=>{
const key=Math.floor(book.rating)
if(!groupedBooks[key]){
    groupedBooks[key]=[]
}
 groupedBooks[key].push(book)

return groupedBooks         //{2:[{}]}
},{})

console.log(gBooks)

//find method
const sc=[70,50,20,90]
const highScore=sc.find(score=>{
  return score>50
})
console.log(highScore)

const highRate=books.find(book=>{
  return book.rating>4
})
console.log(highRate)

//sort method //here callbak funtion is compare function
              //less than 0 sort a before b
              //greater than 0 sort b before a
              //0 unchanged
              //its modified original array
              //so use slice() slice brakets should be empty hich means it make copy

// const sortHigh=sc.sort((a,b)=>{
//   if(a>b){
//     return -1
//   }else if(a<b){
//     return 1
//   }else{
//     return 0
//   }
// })

const sortHigh=sc.sort((a,b)=>a-b)
console.log(sortHigh)

const pricess=[400.5,2000,5000,9.99,20]

const ascSort=pricess.slice().sort((a,b)=>a-b)
const dscSort=pricess.slice().sort((a,b)=>b-a)
console.log(pricess)