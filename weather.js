const API_KEY = '88b38985502a5cd4e55297d3bfe8dcee',
    bodyContainer = document.querySelector('body'),
    weatherDiv = document.querySelector('.weather-div'),
    mainWeather = weatherDiv.querySelector('.main-weather'),
    temp = weatherDiv.querySelector(".temp"),
    minMaxTemp = weatherDiv.querySelector('.min-max-temp'),
    humidity = weatherDiv.querySelector('.humidity');

let currentWeather = '';

function getWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mokdong&appid=${API_KEY}&units=metric`
    )
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            console.log(json);
            mainWeather.innerHTML = `${json.weather[0].main}`;
            temp.innerHTML = `${json.main.temp}.C`;
            minMaxTemp.innerHTML = `Min.${json.main.temp_min}     Max.${json.main.temp_max}`;
            humidity.innerHTML = `Humidity.${json.main.humidity}%`;
            figureWeather(json);
        });
}

function figureWeather(json){
    currentWeather = `${json.weather[0].main}`
    console.log(currentWeather);
    bodyContainer.classList = '';
    bodyContainer.classList.add(currentWeather);
}

function init(){
    getWeather();
}

init()