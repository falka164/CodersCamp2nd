import axios from 'axios';
import BackgroundGenerator from './BackgroundGenerator';

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiLink5days = 'https://api.openweathermap.org/data/2.5/forecast?q=';

export default class CityGetter {
    constructor(city, countryShortcut, apiKey) {
        this.city = city;
        this.countryShotcut = countryShortcut;
        this.apiKey = apiKey;
    }

    createLink() {
        let link = `${apiLink}${this.city},${this.countryShotcut}&APPID=${this.apiKey}`;
        return link;
    }

    createLink5days() {
        let link = `${apiLink5days}${this.city},${this.countryShotcut}&APPID=${this.apiKey}`;
        return link;
    }

    getJSONfromAPI5days() {
        return axios.get(this.createLink5days());
    }

    getJSONfromAPI() {
        return axios.get(this.createLink());
    }

    weather = function (desc) {
        console.log("showWeatherDesc");
        switch (desc) {
            case "clear sky":
                console.log("czyste niebo");
                this.generateData('data1', "czyste niebo");
                this.createSun(0);
                break;
            case "few clouds":
                console.log("lekkie zachmurzenie");
                this.generateData('data1', "lekkie zachmurzenie");
                this.createClouds(3);
                break;
            case "scattered clouds":
                console.log("rozproszone");
                this.generateData('data1', "rozproszone");
                this.createClouds(6);
                break;
            case "broken clouds":
                console.log("zachmurzenie");
                this.generateData('data1', "zachmurzenie");
                this.createClouds(9);
                break;
            case "shower rain":
                console.log("mrzawka");
                this.generateData('data1', "mrzawka");
                this.createRain(50);
                break;
            case "rain":
                console.log("pada");
                this.generateData('data1', "pada");
                this.createRain(500);
                break;
            case "thunderstorm":
                console.log("burza");
                this.generateData('data1', "burza");
                this.createRain(800);
            default:
                console.log("hgfhg");
        }
    };

    searchBtn() {
        this.clearContainer();
        if (document.getElementById("err").firstChild) {
            console.log("Error was here");
            let errorBox = document.getElementById("err").firstChild;
            errorBox.remove();
        }

        console.log("Search btn clicked");

        let show = document.querySelector('#citySearch').value;

        console.log(show);

        this.getJSONfromAPI()
            .then((response) => {
                console.log(response);
                this.weather(response.data.weather[0].description);
                this.generateList(response.data);
                this.generateList0days(response.data);
            })
            .catch(function (error) {
                console.log(error);
                let errMsg = document.createElement("div");
                errMsg.textContent = "Podano złą nazwę miasta...";
                document.getElementById('err').appendChild(errMsg);
            });

            this.getJSONfromAPI5days()
                .then((response) => {
                    console.log(response);
                    this.generateList5days(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                    let errMsg = document.createElement("div");
                    errMsg.textContent = "Podano złą nazwę miasta...";
                    document.getElementById('err').appendChild(errMsg);
                });

    }

    generateData(x, content) {
        let data = document.createElement('p');
        data.id = x;
        data.innerHTML = content.toString();
        document.getElementById("dataBox").appendChild(data);
    }

    generateData5days(x, content) {
        let data = document.createElement('p');
        data.id = x;
        data.innerHTML = content.toString();
        document.getElementById("in5daysTemperature").appendChild(data);
    }

    generateData0days(x, content) {
        let data = document.createElement('p');
        data.id = x;
        data.innerHTML = content.toString();
        document.getElementById("in0daysTemperature").appendChild(data);
    }

    generateList5days = function (data) {
        let tempDesc = (data.list[0].main.temp - 273.15);
        this.generateData5days('data7', tempDesc);
        let data7 = document.getElementById('data7');
        data7.innerHTML = "Temperatura:  " + data7.innerHTML + "°C";
    }

    generateList0days = function (data) {
        let tempDesc = (data.main.temp - 273.15);
        this.generateData0days('data8', tempDesc);
        let data8 = document.getElementById('data8');
        data8.innerHTML = "Temperatura:  " + data8.innerHTML + "°C";
    }

    generateList = function (data) {
        let tempDesc = (data.main.temp - 273.15);
        this.generateData('data2', tempDesc);
        let data2 = document.getElementById('data2');
        data2.innerHTML = "Tempereatura:  " + data2.innerHTML + "°C";

        let pressureDesc = data.main.pressure;
        this.generateData('data3', pressureDesc);
        let data3 = document.getElementById('data3');
        data3.innerHTML = 'Ciśnienie: ' + data3.innerHTML + " hPa";

        let humidityDesc = data.main.humidity;
        this.generateData('data4', humidityDesc);
        let data4 = document.getElementById('data4');
        data4.innerHTML = 'Wilgotność: ' + data4.innerHTML + " %";

        let cloudsDesc = data.clouds.all;
        this.generateData('data5', cloudsDesc);
        let data5 = document.getElementById('data5');
        data5.innerHTML = 'Zachmurzenie nieba: ' + data5.innerHTML + " %";

        let windDesc = data.wind.speed;
        this.generateData('data6', windDesc);
        let data6 = document.getElementById('data6');
        data6.innerHTML = 'Prędkość wiatru: ' + data6.innerHTML + " m/s";

    };

    clearContainer() {
        let container = document.getElementById('dataBox');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    createRain(number) {
        let backG = new BackgroundGenerator(number);
        backG.createRain();
    }
    createSnow(number) {
        let backG = new BackgroundGenerator(number);
        backG.createSnow();
    }
    createClouds(number) {
        let backG = new BackgroundGenerator(number);
        backG.createClouds();
    }
    createSun(number) {
        let backG = new BackgroundGenerator(number);
        backG.createSun();
    }

};