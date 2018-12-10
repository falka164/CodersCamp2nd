import axios from 'axios';

const apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=';

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

    getJSONfromAPI() {
        return axios.get(this.createLink());
    }

    weather = function (desc) {
        console.log("showWeaherDesc");
        let weatherIcon = document.getElementById("documentIconImg");
        switch (desc) {
            case "clear sky":
                console.log("czyste niebo");
                this.generateData('data1', "czyste niebo");
                var i = document.createElement('i');
                div.setAttribute('class', 'fas fa-sun');
                document.body.section.div.appendChild(i);
                break;
            case "few clouds":
                console.log("lekkie zachmurzenie");
                this.generateData('data1', "lekkie zachmurzenie");
                var i = document.createElement('i');
                div.setAttribute('class', 'fas fa-cloud-sun');
                document.body.section.div.appendChild(i);
                break;
            case "scattered clouds":
                console.log("rozproszone");
                this.generateData('data1', "rozproszone");
                var i = document.createElement('i');
                div.setAttribute('class', 'fas fa-cloud');
                document.body.section.div.appendChild(i);
                break;
            case "broken clouds":
                console.log("zachmurzenie");
                this.generateData('data1', "zachmurzenie");
                var i = document.createElement('i');
                div.setAttribute('class', 'fas fa-cloud');
                document.body.section.div.appendChild(i);
                break;
            case "shower rain":
                console.log("mrzawka");
                this.generateData('data1', "mrzawka");
                var i = document.createElement('i');
                div.setAttribute('class', 'fas fa-cloud-sun-rain');
                document.body.section.div.appendChild(i);
                break;
            case "rain":
                console.log("pada");
                this.generateData('data1', "pada");
                var i = document.createElement('i');
                div.setAttribute('class', 'fas fa-cloud-showers-heavy');
                document.body.section.div.appendChild(i);
                break;
            case  "thunderstorm":
                console.log("burza");
                this.generateData('data1', "burza");
                var i = document.createElement('i');
                div.setAttribute('class', 'fas fa-cloud-meatball');
                document.body.section.div.appendChild(i);
            default :
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

    generateList = function (data) {
        let tempDesc = (data.main.temp - 273.15);
        this.generateData('data2', tempDesc);
        let data2 = document.getElementById('data2');
        data2.innerHTML = "Tempereatura:  " + data2.innerHTML + " °C";

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

};