'use client';
import {MouseEvent, useEffect, useState} from 'react';
import {getWeatherCondition, getWeatherIcon} from '@/lib/weatherCondition';
import {IWeatherData} from '@/model/iWeatherData';
import {getMinMaxWeather} from '@/lib/getMinMaxWeather';
import ModalOverlay from '@/components/ModalOverlay';
import dayjs from 'dayjs';


type WeatherModalProps = Readonly<{
    latitude: string;
    longitude: string;
    onClose: () => void;
    addressInfo: { country: string, state: string, city: string };
}>

export default function WeatherModal({latitude, longitude, onClose, addressInfo}: WeatherModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [weather, setWeather] = useState<IWeatherData | null>(null);
    const [minMax, setMinMax] = useState({min: 0, max: 0});

    useEffect(() => {
        const fetchWeather = async () => {
            setError('');
            setIsLoading(true);
            try {
                const url = new URL('https://api.open-meteo.com/v1/forecast');
                url.searchParams.append('latitude', latitude);
                url.searchParams.append('longitude', longitude);
                url.searchParams.append('current_weather', 'true');
                url.searchParams.append('hourly', 'temperature_2m');
                const res = await fetch(url.toString());
                const data = await res.json();
                setWeather(data);
                setMinMax(getMinMaxWeather(data));
            } catch (e) {
                setError('Failed to fetch weather data');
            }
            setIsLoading(false);

        };
        fetchWeather();
        const intervalId = setInterval(fetchWeather, 5 * 60 * 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };


    return (
        <ModalOverlay onClose={onClose} handleModalClick={handleModalClick}>
            <h3 className={'text-center font-bold text-xl mb-6'}>
                {`Weather in ${addressInfo.country} state ${addressInfo.state} city ${addressInfo.city}`}
            </h3>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {weather && (
                <div>
                    <div className={'text-center mb-6'}>
                        <span className={'text-5xl'}>{getWeatherIcon(weather.current_weather.weathercode)}</span>
                        <p>{getWeatherCondition(weather.current_weather.weathercode)}</p>
                    </div>

                    <p>Current
                        temperature: {weather.current_weather.temperature}{weather.current_weather_units.temperature}</p>
                    <p>Max temperature: {minMax.max}{weather.current_weather_units.temperature}</p>
                    <p>Min temperature: {minMax.min}{weather.current_weather_units.temperature}</p>
                    <div>
                        <h3 className={'font-semibold text-lg text-center mb-6 mt-4'}>Hourly weather for 24 hours</h3>
                        <div className={'grid grid-cols-4 gap-2 max-[454px]:grid-cols-3 max-[340px]:grid-cols-2'}>
                            {weather.hourly.temperature_2m.slice(0, 24).map((temp, index) => (
                                <div key={index} className={'flex flex-col gap-2 items-center bg-gray-100 p-4 text-center'}>
                                    <span>{temp}{weather.current_weather_units.temperature}</span>
                                    <span>{dayjs(new Date(weather.hourly.time[index])).format('HH:mm DD.MM')}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </ModalOverlay>
    );
}
