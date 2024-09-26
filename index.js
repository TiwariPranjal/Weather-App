const apiKey=""

const weatherDataEle=document.querySelector(".weather-data")
const cityNameEle=document.querySelector("#city-name")
const formEle=document.querySelector("form")
const imgIcon=document.querySelector(".icon")


formEle.addEventListener("submit",(e)=>{
    e.preventDefault();
    const cityValue=cityNameEle.value;
    getweatherData(cityValue)
})
async function getweatherData(cityValue ){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error("City not found!");
        }

        const data=await response.json();
        displayWeatherData(data)

        cityNameEle.value = '';
    }catch(err){
        weatherDataEle.innerHTML = `<p>Error: ${err.message}</p>`;
    }
   
}
function displayWeatherData(data) {
    const {main: { temp, humidity, feels_like }, weather: [{ icon, description }], wind: { speed } } = data;

    weatherDataEle.innerHTML = `
        <div class="icon">
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
        </div>
        <div class="temp">${Math.floor(temp)} °C</div>
        <div class="desc">${description}</div>
        <div class="details">
            <div>Humidity: ${humidity}%</div>
            <div>Feels like: ${Math.floor(feels_like)} °C</div>
            <div class="wind">Wind Speed: ${speed} m/s</div>
        </div>
    `;
}






