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

    weatherId = function (id) {
        console.log(id);

        if (id >= 600 && id <= 622) {
            console.log("Śnieg");
            this.createSnow(200);
            this.generateData('data1', "Śnieg");
        } else if (id == 800) {
            console.log("Czyste niebo");
            this.createSun(0);
            this.generateData('data1', "Czyste niebo");
        } else if (id >= 801 && id <= 805) {
            console.log("Lekkie zachmurzenie");
            this.createClouds(3);
            this.generateData('data1', "Lekkie zachmurzenie");
        } else if (id >= 701 && id < 782) {
            console.log("Możliwa mgła");
            this.createClouds(9);
            this.generateData('data1', "Możliwa mgła");
        } else if (id >= 500 && id < 532) {
            console.log("Deszcz");
            this.createRain(500);
            this.generateData('data1', "Deszcz");
        } else if (id >= 300 && id < 322) {
            console.log("Mżawka");
            this.createClouds(3);
            this.createRain(50);
            this.generateData('data1', "Mżawka");
        } else if (id >= 200 && id < 233) {
            console.log("Burza");
            this.createRain(800);
            this.generateData('data1', "Burza");
        } else {
            console.log("Something went wrong.....");
            this.generateData('data1', "Something went wrong.....");
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
                this.weatherId(response.data.weather[0].id);
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
        let tempDesc = (data.list[0].main.temp - 273.15).toFixed(2);
        let iconDesc = data.list[0].weather[0].icon;
        let weatherIcon = document.getElementById("in5daysIconImg");
        weatherIcon.src = "http://openweathermap.org/img/w/" + iconDesc + ".png";
        this.generateData5days('data7', tempDesc);
        let data7 = document.getElementById('data7');
        data7.innerHTML = "Temperatura:  " + data7.innerHTML + " °C";
    }

    generateList0days = function (data) {
        let tempDesc = (data.main.temp - 273.15).toFixed(2);
        let iconDesc = data.weather[0].icon;
        let weatherIcon = document.getElementById("in0daysIconImg");
        weatherIcon.src = "http://openweathermap.org/img/w/" + iconDesc + ".png";
        this.generateData0days('data8', tempDesc);
        let data8 = document.getElementById('data8');
        data8.innerHTML = "Temperatura:  " + data8.innerHTML + " °C";
    }

    generateList = function (data) {
        let tempDesc = (data.main.temp - 273.15).toFixed(2);
        this.generateData('data2', tempDesc);
        let data2 = document.getElementById('data2');
        data2.innerHTML = "Temperatura:  " + data2.innerHTML + " °C";

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
        let container5days = document.getElementById('in5daysTemperature');
        let container0days = document.getElementById('in0daysTemperature');
        if (!$('.dropItems').empty()) $('.dropItems').remove();
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        while (container5days.firstChild) {
            container5days.removeChild(container5days.firstChild);
        }
        while (container0days.firstChild) {
            container0days.removeChild(container0days.firstChild);
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