// UI Module - Handles all DOM manipulation and display

const UI = (() => {
    // DOM Elements
    const searchForm = document.getElementById('searchForm');
    const locationInput = document.getElementById('locationInput');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const weatherDisplay = document.getElementById('weatherDisplay');

    // Show loading state
    const showLoading = () => {
        loading.classList.remove('hidden');
        error.classList.add('hidden');
        weatherDisplay.classList.add('hidden');
    };

    // Hide loading state
    const hideLoading = () => {
        loading.classList.add('hidden');
    };

    // Show error message
    const showError = (message) => {
        error.textContent = `❌ ${message}`;
        error.classList.remove('hidden');
        weatherDisplay.classList.add('hidden');
        loading.classList.add('hidden');
    };

    // Display weather data
    const displayWeather = (weatherData) => {
        // Update location info
        document.getElementById('locationName').textContent = weatherData.location;
        document.getElementById('coordinates').textContent = 
            `${weatherData.latitude.toFixed(2)}°, ${weatherData.longitude.toFixed(2)}°`;

        // Update weather icon
        document.getElementById('weatherIcon').textContent = weatherData.emoji;

        // Update temperature and description
        document.getElementById('temperature').textContent = weatherData.temperature;
        document.getElementById('weatherDescription').textContent = weatherData.description;

        // Update details
        document.getElementById('feelsLike').textContent = `${weatherData.feelsLike}°C`;
        document.getElementById('humidity').textContent = `${weatherData.humidity}%`;
        document.getElementById('windSpeed').textContent = `${weatherData.windSpeed} km/h`;
        document.getElementById('pressure').textContent = `${weatherData.pressure} hPa`;
        document.getElementById('visibility').textContent = `${weatherData.visibility} km`;
        document.getElementById('uvIndex').textContent = weatherData.uvIndex;

        // Update extra info
        document.getElementById('sunrise').textContent = weatherData.sunrise;
        document.getElementById('sunset').textContent = weatherData.sunset;
        document.getElementById('timezone').textContent = weatherData.timezone;

        // Update last updated time
        document.getElementById('lastUpdated').textContent = 
            `Last updated: ${weatherData.timestamp}`;

        // Show weather display
        weatherDisplay.classList.remove('hidden');
        loading.classList.add('hidden');
        error.classList.add('hidden');
    };

    // Get search form handler
    const getFormHandler = () => {
        return (callback) => {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const location = locationInput.value.trim();
                if (location) {
                    callback(location);
                }
            });
        };
    };

    // Initialize UI
    const init = () => {
        // Initial state
        weatherDisplay.classList.add('hidden');
        error.classList.add('hidden');
        loading.classList.add('hidden');
    };

    return {
        showLoading,
        hideLoading,
        showError,
        displayWeather,
        getFormHandler,
        init
    };
})();

export default UI;
