import CityGetter from "./CityGetter";
// let apiKey = '0b72f178992e5ddc7fa93b511b4a5dff';
// let apiLang = 'uk';
// let apiCity = 'London';

// let current = new CityGetter(apiCity, apiLang, apiKey);
// current.set0Background();
// current.set5Background();
// current.set0Temp();
// current.set5Temp();

document.getElementById('click').addEventListener("click", searchBtn);

function searchBtn() {
    let show = document.querySelector('#citySearch').value;
    let newCityLink = new CityGetter(show, 'pl', '0b72f178992e5ddc7fa93b511b4a5dff');
    newCityLink.searchBtn();

}