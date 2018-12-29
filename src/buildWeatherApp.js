import { getWeather } from './GetWeather/getWeather'
import arrayDataFormat from './utils/arrayDataFormat'
import buildChart from './buildChart'
import mainWeatherInformations from './mainWeatherInformations'


export default async () => {
    const weatherData = await getWeather()
    const forecastDates = arrayDataFormat(weatherData.forecast.data.list, 'date')
    const forecastTempData = arrayDataFormat(weatherData.forecast.data.list, 'temp')
    
    mainWeatherInformations(weatherData.actual.data)
    buildChart(forecastDates, forecastTempData)
}