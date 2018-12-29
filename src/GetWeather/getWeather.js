import axios from 'axios'

export const getWeather = async () => {
    document.getElementById('searchErrorMessage').textContent = ''
    const city = document.getElementById('citySearch').value || 'Wroclaw'
    const weather = {}

    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0b72f178992e5ddc7fa93b511b4a5dff`)
        .then(actualWeather => {
            weather.actual = actualWeather
        }).catch((e) => {
            document.getElementById('searchErrorMessage').textContent = 'Wrong name of the city was typed'
            console.log(e)
        })
            
    await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=0b72f178992e5ddc7fa93b511b4a5dff`)
        .then(forecastWeather => {
            weather.forecast = forecastWeather
        }).catch((e) => {
            console.log(e)
        })

    return await weather
} 