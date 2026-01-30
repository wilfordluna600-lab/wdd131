document.getElementById("lastModified").innerHTML = document.lastModified;

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();

const computeWindChill = function(windSpeed, temperature) {
  // Fahrenheit Only
  return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
};

const windchill = document.querySelector("#windchill");

let firstResult = computeWindChill(4,46)
let lastResult = firstResult.toFixed(1)
windchill.innerHTML = lastResult