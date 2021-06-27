import {API_BASE, API_KEY, ALERTS_STATUS, AQI_STATUS, FORECAST_FOR_DAYS} from '../../Config/Config'

let error = {};

export default async function getWeatherData(location){
    return await fetch(`${API_BASE}/forecast.json?key=${API_KEY}&q=${location}&days=${FORECAST_FOR_DAYS}&aqi=${AQI_STATUS}&alerts=${ALERTS_STATUS}`)
    .then(res => res.json())
    .then(res => {
        let data = {
            location : {
                name: res.location.name,
                region:res.location.region,
                country: res.location.country,
                localtime: res.location.localtime
            },
            current : {
                temp_now : res.current.temp_c,
                temp_min : res.forecast.forecastday[0].day.mintemp_c,
                temp_max : res.forecast.forecastday[0].day.maxtemp_c,
                condition_code: res.current.condition.code,
                feelslike : res.current.feelslike_c,
                sunrise: res.forecast.forecastday[0].astro.sunrise,
                sunset : res.forecast.forecastday[0].astro.sunset,
                precipitation:res.forecast.forecastday[0].day.totalprecip_mm,
                humidity: res.current.humidity,
                windspeed:res.current.wind_kph,
                pressure:res.current.pressure_mb
            }
        }
        // console.log(current_default)
        return data
    })
    .catch(err => err)
}
