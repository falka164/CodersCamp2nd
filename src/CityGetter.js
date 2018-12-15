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
        switch (desc) {
            case "clear sky":
                console.log("czyste niebo");
                this.generateData('data1', "czyste niebo");
                break;
            case "few clouds":
                console.log("lekkie zachmurzenie");
                this.generateData('data1', "lekkie zachmurzenie");
                break;
            case "scattered clouds":
                console.log("rozproszone");
                this.generateData('data1', "rozproszone");
                break;
            case "broken clouds":
                console.log("zachmurzenie");
                this.generateData('data1', "zachmurzenie");
                break;
            case "shower rain":
                console.log("mrzawka");
                this.generateData('data1', "mrzawka");
                break;
            case "rain":
                console.log("pada");
                this.generateData('data1', "pada");
                break;
            case  "thunderstorm":
                console.log("burza");
                this.generateData('data1', "burza");
                break;
            case "light snow":
                console.log("pada śnieg ");
                this.generateData('data1', "śnieg pada");
            default :
                console.log("hgfhg");
        }
    };
    
    weatherId = function(id) {
        console.log(id);
      switch (id) {
          case 600:
              console.log("yeyeyeyeyeyeyeyeyeye");
              break;
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
                this.weatherId(response.data.weather[0].id);
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
       // this.getDataListAndShowMagic();

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
///------------------------------------ poniżej kod dla Michała -------------------------------------

  /*  doMagic() {
        let m = document.getElementById("data2");
        m.firstChild.nodeValue = "Wow wow wow so much wow";
    }
    getDataListAndShowMagic() {
        let magic = document.getElementById('data1');
        magic.addEventListener('click', this.doMagic)
    }*/

};