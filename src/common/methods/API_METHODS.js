import {API_BASE, API_KEY, ALERTS_STATUS, AQI_STATUS, FORECAST_FOR_DAYS} from '../../Config/Config'


function getNextHours(arr){
    const nowHour = new Date().getHours();
    //change day after 00
    switch(nowHour){
        case 19: return [...arr.slice(20,24), ...arr.slice(0,1)];break;
        case 20: return [...arr.slice(21,24), ...arr.slice(0,2)];break;
        case 21: return [...arr.slice(22,24), ...arr.slice(0,3)];break;
        case 22: return [...arr.slice(23,24), ...arr.slice(0,4)];break;
        case 23: return [...arr.slice(0,5)];break;
        default: return [...arr.splice(nowHour, nowHour+5)] 
    }
}

export default async function getWeatherData(location){
    return await fetch(`${API_BASE}/forecast.json?key=${API_KEY}&q=${location}&days=${FORECAST_FOR_DAYS}&aqi=${AQI_STATUS}&alerts=${ALERTS_STATUS}`)
    .then(res => res.json())
    .then(res => {
        let data = {
            current : {
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
                        precipitation:res.forecast.forecastday[0].day.daily_chance_of_rain,
                        humidity: res.current.humidity,
                        windspeed:res.current.wind_kph,
                        pressure:res.current.pressure_mb
                    }
                },
            
            forecast:[
                {
                date: res.forecast.forecastday[1].date,
                temp : res.forecast.forecastday[1].day.avgtemp_c,
                temp_max : res.forecast.forecastday[1].day.maxtemp_c,
                temp_min : res.forecast.forecastday[1].day.mintemp_c,
                condition_code : res.forecast.forecastday[1].day.condition.code,
                sunrise : res.forecast.forecastday[1].astro.sunrise, 
                sunset : res.forecast.forecastday[1].astro.sunset,
                precipitation : res.forecast.forecastday[1].day.daily_chance_of_rain,
                windspeed : res.forecast.forecastday[1].day.avgvis_km,
                humidity : res.forecast.forecastday[1].day.avghumidity
                },
                {
                date: res.forecast.forecastday[2].date,
                temp : res.forecast.forecastday[2].day.avgtemp_c,
                temp_max : res.forecast.forecastday[2].day.maxtemp_c,
                temp_min : res.forecast.forecastday[2].day.mintemp_c,
                condition_code : res.forecast.forecastday[2].day.condition.code,
                sunrise : res.forecast.forecastday[2].astro.sunrise, 
                sunset : res.forecast.forecastday[2].astro.sunset,
                precipitation : res.forecast.forecastday[2].day.daily_chance_of_rain,
                windspeed : res.forecast.forecastday[2].day.avgvis_km,
                humidity : res.forecast.forecastday[2].day.avghumidity
                },
            ],
            dayForecast:getNextHours(res.forecast.forecastday[0].hour)
        }
        // console.log(current_default)
        return data
    })
    .catch(err => err)
}
