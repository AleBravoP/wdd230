const apiURL = "//api.openweathermap.org/data/2.5/weather?id=3520914&appid=ec0583b433b1ae15d290f99d91af7edb&units=imperial"

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
    const icon_path = "//openweathermap.org/img/w/" + iconCode + ".png";

    document.getElementById('weather-icon').src =icon_path;
    document.getElementById('weather-icon').alt = weatherInfo.weather[0].description;

 }); //end of "then" fat arrow function