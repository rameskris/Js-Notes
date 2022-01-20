const cityForm=document.querySelector('form')
const details=document.querySelector('.details')
const card=document.querySelector('.card')
//update ui
const updateUi=async (data)=>{
    const {cityDets,weather}=data
    details.innerHTML=`<h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;</span>`
}

cityForm.addEventListener('submit',e=>{
    e.preventDefault()
    //get city fro from form
    const city=cityForm.city.value.trim()
    cityForm.reset()

    //update city in the ui
    updateCity(city).then(data=>{
        
        updateUi(data)
    }).catch(err=>console.log(err))

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
    
   

    

    
})

// updateCity().then(data=>console.log(data.cityDets,data.weather))
// const updateCity=async ()=>{
//     const cityDets=await getCity(city)
// const weather=await getWeather(cityDets.Key)

// return{
//     cityDets:cityDets,
//     weather:weather
// }
// }
const updateCity=async (city)=>{
    const cityDets=await getCity(city)
    const weather=await getWeather(cityDets.Key)
    return {cityDets,weather}
}