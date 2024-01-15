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
    // 可以用 async+await [写在try-catch里]
    // 或者用 Promise .then .catch

    // when need query from http request
    // fetch vs axios
    // fetch is faster
    // 有时候要指定用一种，两种写法都要背下来
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
        weatherDataEl.querySelector(".icon").querySelector("img").src = `https://openweathermap.org/img/wn/${icon}.png`;
        // weatherDataEl.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon"/>`;


        // 1.
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`,
        ];
        weatherDataEl.querySelector(".details").innerHTML = details.map((d) => `<div>${d}</div>`).join("");

        // 2.
        // const details = [
        //     {
        //         key: "Feels like",
        //         val: Math.round(data.main.feels_like),
        //     },
        //     {
        //         key: "Humidity",
        //         val: data.main.humidity,
        //     },
        //     {
        //         key: "Wind speed",
        //         val: data.wind.speed,
        //     },
        // ];
        // weatherDataEl.querySelector(".details").innerHTML = details.map((d) => {
        //     const title = d.key;
        //     const content = d.val;
        //     return `<div><h4>${title}</h4><p>${content}</p></div>`
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


 