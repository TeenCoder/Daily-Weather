const API_KEY = '88b38985502a5cd4e55297d3bfe8dcee',
    bodyContainer = document.querySelector('body'),
    weatherDiv = document.querySelector('.weather-div'),
    mainWeather = weatherDiv.querySelector('.main-weather'),
    temp = weatherDiv.querySelector(".temp"),
    minMaxTemp = weatherDiv.querySelector('.min-max-temp'),
    humidity = weatherDiv.querySelector('.humidity'),
    errorCont = weatherDiv.querySelector('.error-message');

const KoreanPatch = [
    {
        weather: 'Haze',
        description: '안개'
    },
    {
        weather: 'Mist',
        description: '적은 안개'
    },
    {
        weather: 'Clouds',
        description: '흐림'
    },
    {
        weather: 'Rain',
        description: '비'
    },
    {
        weather: 'Clear',
        description: '맑음'
    }
];

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
    const koreanDes = KoreanPatch.filter(koreanDes => koreanDes.weather === currentWeather);
    console.log(koreanDes);
    if (koreanDes[0].description !== null){
        console.log(koreanDes[0].description);
        mainWeather.innerHTML = `${koreanDes[0].description}`
    } else {
        errorCont.innerHTML = `undefined weather - ${json.weather[0].main} - 카페에 제보해 주세요^^`
    }
}

function init(){
    getWeather();
}

init()