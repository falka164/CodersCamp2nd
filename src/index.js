import buildWeatherApp from './buildWeatherApp'
import { openWeatherModal, closeWeatherModal} from './changeBackground'

document.getElementById('citySearchButton').addEventListener('click', buildWeatherApp)
document.getElementById('checkWeatherButton').addEventListener('click', openWeatherModal)
document.getElementById('closeWeatherButton').addEventListener('click', closeWeatherModal)