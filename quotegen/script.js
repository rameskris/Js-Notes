// method=getQuote — method name to invoke
// format=<format> — one of the server supported response formats
// key=<integer> — numeric key, which influences the choice of quotation, the maximum length is 6 characters
// lang=<string> — response language ("ru" or "en")
// jsonp=<string> — callback function name, used for jsonp format only (usage example)
const author=document.getElementById('author')
const new_quote=document.getElementById('new-quote')
const quote=document.getElementById('quote')
const twitter=document.getElementById('twitter')
async function getQuote(){
    const proxyUrl='https://cors-anywhere.herokuapp.com/'
    const apiUrl='https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
    try{
        const response=await fetch('https://api.chucknorris.io/jokes/random')
        const data=await response.json()
        if(data.value.length>120){
            quote.classList.add('long-quote')
        }
        quote.innerText=data.value
        author.hidden=false

    }catch(error){
        console.log('whoops, no quote',error)

    }
    
    
}
new_quote.addEventListener('click',()=>{
    getQuote()
})
twitter.addEventListener('click',tweetQuote)
function tweetQuote(){
    const quot=quote.innerText;
    const authr=author.innerText
    const tweetUrl=`https://twitter.com/intent/tweet?text=${quot} - ${authr}`
    window.open(tweetUrl,'_blank')
}
// twitter.addEventListener('click',()=>{
//     tweetQuote()
// })
///shorter way


getQuote()
.then(data=>{console.log(data)})
.catch(err=>{console.log(err)})