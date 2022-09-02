

function handleSubmit(e) {
    e.preventDefault();
    const cityName = e.target.city.value;
    form.reset();
    fetchData(cityName);
}



document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    form.addEventListener("submit", handleSubmit)
})

async function fetchData(city) {
    await fetch(`https://goweather.herokuapp.com/weather/${city}`)
        .then(res => res.json())
        .then(data => {
            renderItems(data, city)
            console.log(data);
        })
}

function renderItems(data, city) {
    const descTitle = document.getElementById("desc-title");
    const descTemp = document.getElementById("desc-temp-span");
    const forecast = document.getElementById("other-forecasts");
    const descCity = document.getElementById("city");
    descTitle.innerHTML = data.description;
    descTemp.innerHTML = data.temperature;
    descCity.innerHTML = city.toUpperCase();
    switchImages(data.description);
    // clear screen before new append
    forecast.innerHTML = '';
    data.forecast.map(day => {
        const divFore = document.createElement("div");
        const lastP = `
            <h3 class="day2"><u>Day ${day.day}</u></h3>
            <p class="temp">Temperature: <span class="span-temp">${day.temperature}</span></p>
            <p class="wind">Wind: <span class="span-wind">${day.wind}</span></p>
        `
        divFore.className = "day";
        divFore.innerHTML = lastP
        forecast.append(divFore);
        console.log(day)
    })
}

function switchImages(dataDescription){
    // images
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    if(dataDescription === "Sunny"){
        image1.src = "./src/images/sun.png";
        image2.remove();
    }
    else if(dataDescription === "Clear"){
        image1.src = "./src/images/cloud.png";
        // image2.style.display ="flex"
        const image2 = document.createElement("img");
        image2.src = "./src/images/cloud.png";
    }
    else if(dataDescription === "Light rain, light rain with thunderstorm"){
        image1.src = "./src/images/lightRain.png";
        const image2 = document.createElement("img");
        image2.src = "./src/images/storm.png";
    }
    else if(dataDescription === "Patchy rain possible"){
        image1.src = "./src/images/darkclouds.png";
        image2.remove()

    }
    else if(dataDescription === "Partially Cloudy"){
        image1.src = "./src/images/partialCloud.png";
        image2.remove()

    }
    return {}
}