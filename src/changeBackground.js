export const openWeatherModal = () => {
    document.getElementById('wrapper').style.display = 'block'
    document.getElementById('checkWeatherWrapper').style.display = 'none'
}

export const closeWeatherModal = () => {
    document.getElementById('wrapper').style.display = 'none'
    document.getElementById('checkWeatherWrapper').style.display = 'block'
}