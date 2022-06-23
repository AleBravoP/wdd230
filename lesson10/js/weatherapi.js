const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5861900&appid=ec0583b433b1ae15d290f99d91af7edb&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    document.getElementById('current-temp').innerHTML=weatherInfo.main.temp;

    const iconCode = weatherInfo.weather[0].icon;
    const icon_path = "//openweathermap.org/img/w/" + iconCode + ".png";

    document.getElementById('weather-icon').src =icon_path;
    document.getElementById('weather-icon').alt = weatherInfo.weather[0].description;

 }); //end of "then" fat arrow function