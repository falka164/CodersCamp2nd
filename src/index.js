import Background from "./background";
let apiKey = '0b72f178992e5ddc7fa93b511b4a5dff';
let apiLang = 'uk';
let apiCity = 'London';

let current = new Background(apiCity, apiLang, apiKey);
current.setBackground();
current.set0Background();
current.set5Background();
current.set0Temp();
current.set5Temp();