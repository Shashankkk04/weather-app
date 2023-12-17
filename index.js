const apiKey="b617e247f405c5387960414836fbacba"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric"
async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}
checkWeather()