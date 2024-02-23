export const getWeatherCondition = (weatherCode: number) => {
    switch (weatherCode) {
        case 0:
            return 'Clear sky';
        case 1:
            return 'Mainly clear';
        case 2:
            return 'Partly cloudy';
        case 3:
            return 'Overcast';
        case 45:
            return 'Fog';
        case 48:
            return 'Depositing rime fog';
        case 51:
            return 'Drizzle: Light intensity';
        case 53:
            return 'Drizzle: Moderate intensity';
        case 55:
            return 'Drizzle: Dense intensity';
        case 56:
            return 'Freezing Drizzle: Light intensity';
        case 57:
            return 'Freezing Drizzle: Dense intensity';
        case 61:
            return 'Rain: Slight intensity';
        case 63:
            return 'Rain: Moderate intensity';
        case 65:
            return 'Rain: Heavy intensity';
        case 66:
            return 'Freezing Rain: Light intensity';
        case 67:
            return 'Freezing Rain: Heavy intensity';
        case 71:
            return 'Snow fall: Slight intensity';
        case 73:
            return 'Snow fall: Moderate intensity';
        case 75:
            return 'Snow fall: Heavy intensity';
        case 77:
            return 'Snow grains';
        case 80:
            return 'Rain showers: Slight intensity';
        case 81:
            return 'Rain showers: Moderate intensity';
        case 82:
            return 'Rain showers: Violent';
        case 85:
            return 'Snow showers: Slight intensity';
        case 86:
            return 'Snow showers heavy';
        case 95:
            return 'Thunderstorm: Slight or moderate';
        case 96:
            return 'Thunderstorm with slight hail';
        case 99:
            return 'Thunderstorm with  heavy hail';
        default:
            return 'Unknown';
    }
};

export const getWeatherIcon = (weatherCode: number): string => {
    const weatherIcons: { [key: number]: string } = {
        0: '☀️',   // Clear sky
        1: '🌤️',   // Mainly clear
        2: '⛅',    // Partly cloudy
        3: '☁️',    // Overcast
        45: '🌫️',  // Fog
        48: '🌫️',  // Deposit rime fog
        51: '🌧️',  // Drizzle (Light)
        53: '🌧️',  // Drizzle (Moderate)
        55: '🌧️',  // Drizzle (Heavy)
        56: '🌧️❄️',  // Freezing Drizzle (Light)
        57: '🌧️❄️',  // Freezing Drizzle (Heavy)
        61: '🌧️',  // Rain (Slight)
        63: '🌧️',  // Rain (Moderate)
        65: '🌧️',  // Rain (Heavy)
        66: '🌧️❄️',  // Freezing Rain (Light)
        67: '🌧️❄️',  // Freezing Rain (Heavy)
        71: '❄️',   // Snowfall (Slight)
        73: '❄️',   // Snowfall (Moderate)
        75: '❄️',   // Snowfall (Heavy)
        77: '❄️',   // Snow grains
        80: '🌧️',  // Rain showers (Slight)
        81: '🌧️',  // Rain showers (Moderate)
        82: '🌧️',  // Rain showers (Violent)
        85: '❄️',   // Snow showers (Slight)
        86: '❄️',   // Snow showers (Heavy)
        95: '⛈️',   // Thunderstorm (Slight or Moderate)
        96: '⛈️🌨️',  // Thunderstorm with Slight Hail
        99: '⛈️🌨️'   // Thunderstorm with Heavy Hail
    };

    return weatherIcons[weatherCode] || 'Unknown';
};
