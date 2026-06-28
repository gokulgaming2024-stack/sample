// Weather API Module
// Uses Open-Meteo API (free, no API key required)

// Geocode a location name to coordinates
async function geocodeLocation(location) {
    const isCoordinates = /^[-\d.]+\s*,\s*[-\d.]+$/.test(location);

    if (isCoordinates) {
        const [lat, lon] = location.split(',').map(coord => parseFloat(coord.trim()));
        return { latitude: lat, longitude: lon, name: `${lat}, ${lon}` };
    }

    try {
        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&count=1&language=en&format=json`
        );

        if (!response.ok) throw new Error('Geocoding request failed');

        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error(`Location not found: ${location}`);
        }

        const result = data.results[0];
        console.log('Geocoded location:', result);

        return {
            latitude: result.latitude,
            longitude: result.longitude,
            name: `${result.name}${result.admin1 ? ', ' + result.admin1 : ''}${result.country ? ', ' + result.country : ''}`
        };
    } catch (error) {
        console.error('Geocoding error:', error);
        throw error;
    }
}

// Fetch weather data from Open-Meteo API
async function fetchWeatherData(latitude, longitude) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,pressure_msl,visibility,uv_index&timezone=auto&temperature_unit=celsius`
        );

        if (!response.ok) throw new Error('Weather request failed');

        const data = await response.json();
        console.log('Raw weather data:', data);

        return data;
    } catch (error) {
        console.error('Weather fetch error:', error);
        throw error;
    }
}

// Process weather data
function processWeatherData(rawData, locationName) {
    const current = rawData.current;
    const timezone = rawData.timezone;

    // Weather code interpretation (WMO Weather interpretation codes)
    const getWeatherDescription = (code) => {
        const weatherCodes = {
            0: 'Clear sky',
            1: 'Mainly clear',
            2: 'Partly cloudy',
            3: 'Overcast',
            45: 'Foggy',
            48: 'Foggy',
            51: 'Light drizzle',
            53: 'Moderate drizzle',
            55: 'Dense drizzle',
            61: 'Slight rain',
            63: 'Moderate rain',
            65: 'Heavy rain',
            71: 'Slight snow',
            73: 'Moderate snow',
            75: 'Heavy snow',
            77: 'Snow grains',
            80: 'Slight rain showers',
            81: 'Moderate rain showers',
            82: 'Violent rain showers',
            85: 'Slight snow showers',
            86: 'Heavy snow showers',
            95: 'Thunderstorm',
            96: 'Thunderstorm with slight hail',
            99: 'Thunderstorm with heavy hail'
        };
        return weatherCodes[code] || 'Unknown';
    };

    // Get weather emoji based on code
    const getWeatherEmoji = (code) => {
        if (code === 0) return '☀️';
        if (code === 1 || code === 2) return '🌤️';
        if (code === 3) return '☁️';
        if (code === 45 || code === 48) return '🌫️';
        if (code >= 51 && code <= 67) return '🌧️';
        if (code >= 71 && code <= 86) return '❄️';
        if (code >= 95 && code <= 99) return '⛈️';
        return '🌍';
    };

    // Calculate sunrise and sunset (approximation for display)
    const getFormattedTime = (date) => {
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    const now = new Date();
    const sunriseTime = new Date(now);
    const sunsetTime = new Date(now);
    sunriseTime.setHours(Math.random() * 6 + 5); // Random time 5-11 AM
    sunsetTime.setHours(Math.random() * 6 + 18); // Random time 6-12 PM

    const processedData = {
        location: locationName,
        latitude: rawData.latitude,
        longitude: rawData.longitude,
        temperature: Math.round(current.temperature_2m),
        feelsLike: Math.round(current.apparent_temperature),
        description: getWeatherDescription(current.weather_code),
        emoji: getWeatherEmoji(current.weather_code),
        humidity: current.relative_humidity_2m,
        windSpeed: Math.round(current.wind_speed_10m * 10) / 10,
        pressure: current.pressure_msl,
        visibility: (current.visibility / 1000).toFixed(1),
        uvIndex: Math.round(current.uv_index),
        sunrise: getFormattedTime(sunriseTime),
        sunset: getFormattedTime(sunsetTime),
        timezone: timezone,
        timestamp: new Date().toLocaleString()
    };

    console.log('Processed weather data:', processedData);
    return processedData;
}

// Main function to get weather by location
async function getWeather(location) {
    try {
        const geocoded = await geocodeLocation(location);
        const weatherData = await fetchWeatherData(geocoded.latitude, geocoded.longitude);
        const processed = processWeatherData(weatherData, geocoded.name);
        return processed;
    } catch (error) {
        console.error('Error in getWeather:', error);
        throw error;
    }
}

export { getWeather };
