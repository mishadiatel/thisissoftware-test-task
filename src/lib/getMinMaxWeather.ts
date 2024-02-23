import {IWeatherData} from '@/model/iWeatherData';

export const  getMinMaxWeather = (weather: IWeatherData) => {
    const hourly = weather.hourly.temperature_2m.slice(0, 24);
    const min = Math.min(...hourly);
    const max = Math.max(...hourly);
    return {min, max};
}
