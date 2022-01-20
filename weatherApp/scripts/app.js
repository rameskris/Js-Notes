//for dom manipulation
const cityForm=document.querySelector('form')
const card=document.querySelector('.card')
const details=document.querySelector('.details')
const time=document.querySelector('img.time')
const icon=document.querySelector('.icon img')
const updateUi=(data)=>{
    // const cityDets=data.cityDets
    // const weather=data.weather

    //destructring the above code 
    const {cityDets,weather}=data


    //update templates
    details.innerHTML=`<h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;</span>`

    //update the night and day
    const iconImg=`img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src',iconImg)
    

    let timeSrc=null
    // if(weather.IsDayTime){
    //     timeSrc='img/day.svg'
    // }else{
    //     timeSrc='img/night.svg'
    // }
    timeSrc=weather.IsDayTime?'img/day.svg':'img/night.svg'

    time.setAttribute('src',timeSrc)


    //remove the d-none class
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }

}

const updateCity=async (city)=>{
    const cityDets=await getCity(city)
    const weather=await getWeather(cityDets.Key)
    // return {
    //     cityDets:cityDets,
    //     weather:weather
    // }
    // if key and value has same name use short hand
    return {
        cityDets,
        weather
    }

    

}

cityForm.addEventListener("submit",e=>{
    e.preventDefault()
    //get city value
    const city=cityForm.city.value.trim()
    cityForm.reset()

    //update ui with new city value
    updateCity(city)
    .then(data=>updateUi(data))
    .catch(err=>console.log(err))




})