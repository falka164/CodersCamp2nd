import CityGetter from "./CityGetter";

let newCityLink = new CityGetter();

let show = document.querySelector('#citySearch').value;
console.log(show);

document.getElementById('click').onclick = searchBtn;

function searchBtn() {

    if(document.getElementById("err").firstChild)
    {
        console.log("Error was here");
        let errorBox = document.getElementById("err").firstChild;
        errorBox.remove();
    }

    console.log("Search btn clicked");

    let show = document.querySelector('#citySearch').value;

    console.log(show);
    newCityLink = new CityGetter(show, 'pl', '0b72f178992e5ddc7fa93b511b4a5dff');
    newCityLink.getJSONfromAPI()
        .then(function (response) {
            console.log(response);

        })
        .catch(function (error) {
            console.log(error);
            let errMsg = document.createElement("div");
            errMsg.textContent = "Podano złą nazwę miasta...";
            document.getElementById('err').appendChild(errMsg);
        });

}
