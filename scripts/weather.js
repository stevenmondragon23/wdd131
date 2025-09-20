const temperature = 20;
const windSpeed = 12;

document.getElementById("temperature").textContent = temperature;
document.getElementById("wind-speed").textContent = windSpeed;

function calculateWindChill(tempC, windKmh) {
    const tempF = (tempC * 9) / 5 + 32;
    const windMph = windKmh / 1.609;

    if (tempC <= 10 && windKmh > 4.8) {
        const chillF =
            35.74 +
            0.6215 * tempF -
            35.75 * Math.pow(windMph, 0.16) +
            0.4275 * tempF * Math.pow(windMph, 0.16);
        const chillC = ((chillF - 32) * 5) / 9;
        return chillC.toFixed(1);
    } else {
        return "N/A";
    }
}

const windChillValue = calculateWindChill(temperature, windSpeed);
document.getElementById("wind-chill").textContent =
    windChillValue === "N/A" ? "N/A" : `${windChillValue} °C`;
