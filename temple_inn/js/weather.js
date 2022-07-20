const apiURL = "//api.openweathermap.org/data/2.5/weather?id=3390760&appid=ec0583b433b1ae15d290f99d91af7edb&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('temperature').innerHTML = weatherInfo.main.temp;

    // Get condition
    const condition = weatherInfo.weather[0].description;
    // Capitalize each word in condition
    var conditionCap = condition.split(' ');
    for (let i = 0; i < conditionCap.length; i++) {
        conditionCap[i] = conditionCap[i][0].toUpperCase() + conditionCap[i].substr(1);
    }

    document.getElementById('condition').innerHTML = conditionCap.join(' ');

    document.getElementById('wind-speed').innerHTML = weatherInfo.wind.speed;

    const iconCode = weatherInfo.weather[0].icon;
    const icon_path = "//openweathermap.org/img/wn/" + iconCode + "@4x.png";

    document.getElementById('weather-icon').src =icon_path;
    document.getElementById('weather-icon').alt = weatherInfo.weather[0].description;

 }); //end of "then" fat arrow function

var temperature = parseInt(document.querySelector("#temperature").textContent)
var windSpeed = parseInt(document.querySelector("#wind-speed").textContent)

let windChill = Math.round(35.74 + 0.6215 * (temperature) - 35.75 * ((windSpeed)**0.16) + 0.4275 * (temperature) * (windSpeed**0.16))

if (temperature >= 50) {
    document.querySelector("#wind-chill").textContent = `${windChill} F°`;
} else {
    document.querySelector("#wind-chill").textContent = "N/A";
};