const apikey = "5d50cb77a4d850371ce5a430e31c9b24";
const formEl = document.querySelector("form");
const cityInputEl = document.getElementById("city-input");
const weatherDataEl = document.getElementById("weather-data");
const weather_url = `https://api.openweathermap.org/data/2.5/weather`;

const getWeatherData = async (city) => {
    console.log("city", city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    // https://openweathermap.org/current
    // const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${apikey}`;
    // https://openweathermap.org/api/one-call-3
    // const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apikey}&mode=json`;
    // https://openweathermap.org/api/hourly-forecast

    
    // when need fetch data
    // #option1# async+await [in try-catch structure]
    // #option2# Promise .then .catch

    // when need query from http request
    // fetch vs axios
    // fetch is faster
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("Response is not ok.");
        }
        const data = await response.json();  // convert raw data from fetch() to json
        console.log("response data", data);


        const temperature = Math.round(data.main.temp);
        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;


        const description = data.weather[0].description;
        weatherDataEl.querySelector(".description").textContent = description;


        const icon = data.weather[0].icon;
        weatherDataEl.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon"/>`;


        // 1. all in one div
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`,
        ];
        weatherDataEl.querySelector(".details").innerHTML = details.map((d) => `<div>${d}</div>`).join("");

        // 2. separate title and value
        // const details = [
        //     {
        //         key: "Feels like",
        //         val: Math.round(data.main.feels_like),
        //         unit: "",
        //     },
        //     {
        //         key: "Humidity",
        //         val: data.main.humidity,
        //         unit: "%",
        //     },
        //     {
        //         key: "Wind speed",
        //         val: data.wind.speed,
        //         unit: " m/s",
        //     },
        // ];
        // weatherDataEl.querySelector(".details").innerHTML = details.map((d) => {
        //     const title = d.key;
        //     const content = d.val;
        //     const unit = d.unit;
        //     return `<div><h4>${title}</h4><p>${content}${unit}</p></div>`;
        // }).join("");


    } catch (error) {
        console.log(error);
        weatherDataEl.querySelector(".icon").innerHTML = `<img src="" alt="weather icon"/>`;
        weatherDataEl.querySelector(".temperature").textContent = "";
        weatherDataEl.querySelector(".description").textContent = "Error";
        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}


formEl.addEventListener("submit", (event) => {
    event.preventDefault();  // Prevents the default form submit action, typically needed in AJAX forms
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
});


 