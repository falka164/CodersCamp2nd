import axios from 'axios';

const apiLink = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apiLink2 = 'http://api.openweathermap.org/data/2.5/forecast?q='

export default class Background {
    constructor(city, countryShortcut, apiKey) {
        this.city = city;
        this.countryShotcut = countryShortcut;
        this.apiKey = apiKey;
    }

    createLink0() {
        let link = `${apiLink}${this.city},${this.countryShotcut}&APPID=${this.apiKey}&units=metric`;
        return link;
    }

    createLink5() {
        let link = `${apiLink2}${this.city},${this.countryShotcut}&APPID=${this.apiKey}&units=metric`;
        return link;
    }

    getJSONfromAPI0() {
        return axios.get(this.createLink0());
    }

    getJSONfromAPI5() {
        return axios.get(this.createLink5());
    }

    setBackground() {
    this.getJSONfromAPI0().then(function (response) {
        let weatherIcon = document.getElementById("documentIconImg");
        weatherIcon.src = "http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png";
        });
    }

    set5Background() {
        this.getJSONfromAPI5().then(function (response) {
            let weatherIcon = document.getElementById("in5daysIconImg");
            weatherIcon.src = "http://openweathermap.org/img/w/" + response.data.list[0].weather[0].icon + ".png";
        });
    }

    set0Background() {
        this.getJSONfromAPI0().then(function (response) {
            let weatherIcon = document.getElementById("in0daysIconImg");
            weatherIcon.src = "http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png";
        });
    }

    set5Temp() {
        this.getJSONfromAPI5().then(function (response) {
            let forecastsTempIn3Days = document.getElementById("in5daysTemperature");
            forecastsTempIn3Days.innerHTML = Math.floor(response.data.list[0].main.temp) + '&#176' + 'C';
        });
    }

    set0Temp() {
        this.getJSONfromAPI0().then(function (response) {
            let forecastsTempIn0Days = document.getElementById("in0daysTemperature");
            forecastsTempIn0Days.innerHTML = Math.floor(response.data.main.temp) + '&#176' + 'C';
        });
    }
};

