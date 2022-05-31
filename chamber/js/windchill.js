var temperature = parseInt(document.querySelector("#temperature").textContent)
var windSpeed = parseInt(document.querySelector("#wind-speed").textContent)

let windChill = Math.round(35.74 + 0.6215 * (temperature) - 35.75 * ((windSpeed)**0.16) + 0.4275 * (temperature) * (windSpeed**0.16))

document.querySelector("#wind-chill").textContent = windChill