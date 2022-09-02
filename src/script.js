
const form = document.getElementsByClassName("form");




document.addEventListener("DOMContentLoaded", () => {
    fetch("https://goweather.herokuapp.com/weather/abuja")
        .then(res => res.json())
        .then(data => {
            renderItems(data)
            console.log(data);

        })

})



function renderItems(data) {
    const descTitle = document.getElementById("desc-title");
    const descTemp = document.getElementById("desc-temp-span");
    const forecast = document.getElementById("other-forecasts");
    descTitle.innerHTML = data.description;
    descTemp.innerHTML = data.temperature;
    data.forecast.map(day => {
        const divFore = document.createElement("div");
        const lastP = `
            <h3 class="day2"><u>Day ${day.day}</u></h3>
            <p class="temp">Temperature: <span class="span-temp">${day.temperature}</span></p>
            <p class="wind">Wind: <span class="span-wind">${day.wind}</span></p>
        `

        divFore.className = "day";

        divFore.innerHTML += lastP
        forecast.appendChild(divFore)
        console.log(day)
    })
}