import axios from 'axios';

const apiLink = 'http://api.openweathermap.org/data/2.5/weather?q=';

export default class ExampleClass {
    constructor(city, countryShortcut, apiKey) {
        this.city = city;
        this.countryShotcut = countryShortcut;
        this.apiKey = apiKey;
    }
    // http://api.openweathermap.org/data/2.5/weather?q=Wroclaw,pl&APPID=0b72f178992e5ddc7fa93b511b4a5dff
    createLink() {
        let link = `${apiLink}${this.city},${this.countryShotcut}&APPID=${this.apiKey}`;
        return link;
    }

    getJSONfromAPI() {
        return axios.get(this.createLink());
    }
};

let example = new ExampleClass('Wroclaw', 'pl', '0b72f178992e5ddc7fa93b511b4a5dff');
example.createLink();
example.getJSONfromAPI().then(function (response) {
    let weatherIcon = document.getElementById("documentIconImg");
    weatherIcon.src = "http: //openweathermap.org/img/w/" + response.data.weather[0].icon + "png";
});

// let weatherMain = response.data.weather[0].main;
// switch (weatherMain) {
//     case 'Rain':
//         document.body.style.backgroundImage = response.data.weather[0].icon;
//         break;
//     case 'Thunderstorm':
//         document.body.style.backgroundImage = response.data.weather[0].icon;
//         break;
//     case 'Drizzle':
//         document.body.style.backgroundImage = response.data.weather[0].icon;
//         break;
//     case 'Snow':
//         document.body.style.backgroundImage = response.data.weather[0].icon;
//         break;
//     case 'Atmosphere':
//         document.body.style.backgroundImage = response.data.weather[0].icon;
//         break;
//     case 'Clear':
//         document.body.style.backgroundImage = response.data.weather[0].icon;
//         break;
//     case 'Clouds':
//         document.body.style.backgroundImage = response.data.weather[0].icon;
//         break;
// }