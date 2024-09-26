//  we can also use this instead of index.js

// const apiKey =" ";
// const weatherDataEle = document.querySelector(".weather-data");
// const cityNameEle = document.querySelector("#city-name");
// const formEle = document.querySelector("form");
// const imgIcon=document.querySelector(".icon")

// formEle.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const cityValue = cityNameEle.value;
//   if (cityValue) {
//     getWeatherData(cityValue);
//   }
// });

// async function getWeatherData(cityValue) {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
//     );
//     if (!response.ok) {
//       throw new Error("City not found!");
//     }

//     const data = await response.json();

//     const temperature = Math.floor(data.main.temp);
//     const description = data.weather[0].description;
//     const icon = data.weather[0].icon;

//     const details = [
//       `Feels Like:${Math.floor(data.main.feels_like)}`,
//       `Humidity:${data.main.humidity}%`,
//       `Wind:${data.wind.speed}m/s`,
//     ];

//     weatherDataEle.querySelector(".temp").textContent = `${temperature}°C`;
//     weatherDataEle.querySelector(".desc").textContent = `${description}`;
//     imgIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">`;

//     weatherDataEle.querySelector(".details").innerHTML = details.map(
//       (detail) => {
//         return `<div>${detail}</div>`;
//       }
//     ).join("");

//     cityNameEle.value = '';
//   } catch (err) {
//     weatherDataEle.innerHTML = `<p>Error: ${err.message}</p>`;
//   }
// }


// or


// const apiKey = "0b04155f82b70bf84d39fcb2c7e36bf6";

// const weatherDataEle = document.querySelector(".weather-data");
// const cityNameEle = document.querySelector("#city-name");
// const formEle = document.querySelector("form");
// const imgIcon = document.querySelector(".icon");

// formEle.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const cityValue = cityNameEle.value.trim(); // Trim whitespace
//     if (cityValue) {
//         getWeatherData(cityValue);
//     }
// });

// async function getWeatherData(cityValue) {
//     try {
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
//         );
//         if (!response.ok) {
//             throw new Error("City not found!");
//         }

//         const data = await response.json();

//         const temperature = Math.floor(data.main.temp);
//         const description = data.weather[0].description;
//         const icon = data.weather[0].icon;

//         const details = [
//             `Feels Like: ${Math.floor(data.main.feels_like)}°C`,
//             `Humidity: ${data.main.humidity}%`,
//             `Wind: ${data.wind.speed} m/s`,
//         ];

//         // Update weather data elements
//         weatherDataEle.innerHTML = `
//             <div class="icon">
//                 <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
//             </div>
//             <div class="temp">${temperature}°C</div>
//             <div class="desc">${description.charAt(0).toUpperCase() + description.slice(1)}</div>
//             <div class="details">
//                 ${details.map(detail => `<div>${detail}</div>`).join('')}
//             </div>
//         `;

//         // Clear input field after fetching data
//         cityNameEle.value = '';
//     } catch (err) {
//         weatherDataEle.innerHTML = `<p>Error: ${err.message}</p>`;
//     }
// }

