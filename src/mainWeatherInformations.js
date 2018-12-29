import temperatureFormat from './utils/temperatureFormat'

export default (weatherData) => {
    document.getElementById('cityName').textContent = weatherData.name
    document.getElementById('cityWeather').textContent = weatherData.weather[0].main
    document.getElementById('cityDescription').textContent = weatherData.weather[0].description
    document.getElementById('cityHumidity').textContent = weatherData.main.humidity
    document.getElementById('cityPressure').textContent = weatherData.main.pressure
    document.getElementById('cityTemp').textContent = temperatureFormat(weatherData.main.temp)
    document.getElementById('cityTempMax').textContent = temperatureFormat(weatherData.main.temp_max)
    document.getElementById('cityTempMin').textContent = temperatureFormat(weatherData.main.temp_min)
}