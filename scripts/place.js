
// WEATHER DATA

const temperature = 28;
const windSpeed = 8;

// WIND CHILL FUNCTION

function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// DISPLAY WIND CHILL

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
}

document.querySelector("#wind-chill").textContent = windChill;

// FOOTER INFO

const currentYear = new Date().getFullYear();

document.querySelector("#current-year").textContent = currentYear;

const lastModified = document.lastModified;

document.querySelector("#last-modified").textContent = lastModified;
