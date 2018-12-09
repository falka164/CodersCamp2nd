import axios from 'axios'

export default getWeatherById = () => {
    axios
        // .get(`https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=4f0d2097fefdf36c2f72a8ba15f43a13`)
        .get(`https://samples.openweathermap.org/data/2.5/weather?id=${id}&appid=4f0d2097fefdf36c2f72a8ba15f43a13`)
        .then(data => {
            console.log(data)
        })
}