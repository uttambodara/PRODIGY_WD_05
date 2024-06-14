const apiKey = "5ea21b928222857c87ec586d08ee446c"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchInput = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')

async function checkWeather(city){
    const response = await fetch(apiURL+ city + `&appid=${apiKey}`);
    const data = await response.json();

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML =parseInt( data.main.temp) + "°c"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h"

    

    if(data.weather[0].main == 'clouds'){
        document.querySelector('.weather-icon').src = "images/clouds.png"
    }
    else if(data.weather[0].main == 'clear'){
        document.querySelector('.weather-icon').src = "images/clear.png"
    }
    else if(data.weather[0].main == 'rain'){
        document.querySelector('.weather-icon').src = "images/rain.png"
    }
    else if(data.weather[0].main == 'drizzle'){
        document.querySelector('.weather-icon').src = "images/drizzle.png"
    }
    else{
        document.querySelector('.weather-icon').src = "images/mist.png"
    }

    document.querySelector('.weather').style.display='block'
}


searchBtn.addEventListener('click',()=>{
    checkWeather(searchInput.value)    
})

