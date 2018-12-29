import temperatureFormat from './temperatureFormat'

export default (data, field) => {
    const array = []
   
    for(let i=0; i<data.length; i++) {
        if(field === 'date') {
            array.push(data[i].dt_txt.slice(0,-3))
        } else if (field === 'temp') {
            array.push(temperatureFormat(data[i].main.temp))
        }
    }
    return array
}