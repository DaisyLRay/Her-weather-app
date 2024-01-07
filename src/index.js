function refreshWeather(response) {
   let temperatureElement = document.querySelector("#temperature");
   let temperature = response.data.temperature.current;
 let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed");
let timeElement = document. querySelector("#day-time");
let date = new Date(response.data.time *1000);
let iconElement = document.querySelector("#icon");

iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class = "weather-app-icon"/>`;

 cityElement.innerHTML = response.data.city;

 timeElement.innerHTML = formatDate(date);
 descriptionElement.innerHTML = response.data.condition.description;
 humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
 windSpeedElement.innerHTML =`${Math.round(response.data.wind.speed)}km/h` 
 temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = ["Sunday", 
"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
]
let day = days[date.getDay()];

if (minutes<10) {
  minutes = `0${minutes}`;
}

return `${day} ${hours}:${minutes}`
}

function searchCity(city) {
    let apiKey = "eb3cob03f4tb0a9096af3cf9de7ce5d9";
 
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);


}



function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-bar");


   searchCity(searchInput.value);

}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let days = ["Tue", "Weds", "Thurs", "Fri", "Sat", "Sun"];
let forecastHtml = "";
 
days.forEach (function (day) {
  
  forecastHtml = 
  forecastHtml +
   `  
  <div class="weather-forecast-day">
   
      <div class="weather-forecast-date">${day}</div>
      <div class="weather-forecast-icon">
      <img src="https://openweathermap.org/img/wn/50d@2x.png" 
      alt="" 
      width="48"> </div>
    
    <div class="weather-forecast-temperatures">
      <span class="weather-forecast-temp-max">18°</span>
      <span class="weather-forecast-temp-min">12°</span>
    </div> 
    </div>
  </div>
  `;
});
forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");

displayForecast();