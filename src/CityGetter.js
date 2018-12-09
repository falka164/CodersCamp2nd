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
};