import CityGetter from "./CityGetter";
import backgroundGenerator from "./backgroundGenerator";

document.getElementById('click').addEventListener("click", searchBtn);
backgroundGenerator.createRain();

function searchBtn() {
    let show = document.querySelector('#citySearch').value;
    let newCityLink = new CityGetter(show, 'pl', '0b72f178992e5ddc7fa93b511b4a5dff');
    newCityLink.searchBtn();
}