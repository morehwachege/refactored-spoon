fetch("https://goweather.herokuapp.com/weather/Abuja")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })