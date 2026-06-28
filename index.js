import './styles.css';
import { getWeather } from './weather-api';
import UI from './ui';

console.log('🌤️ Weather App loaded!');

document.addEventListener('DOMContentLoaded', () => {
    UI.init();

    // Set up form handler
    UI.getFormHandler()((location) => {
        const searchWeather = async () => {
            try {
                UI.showLoading();
                console.log(`Searching for weather in: ${location}`);
                
                // Simulate network delay for demonstration
                const weatherData = await getWeather(location);
                
                console.log('Weather data retrieved:', weatherData);
                UI.displayWeather(weatherData);
            } catch (err) {
                console.error('Error fetching weather:', err);
                UI.showError(err.message || 'Failed to fetch weather data. Please try again.');
            }
        };

        searchWeather();
    });
});
