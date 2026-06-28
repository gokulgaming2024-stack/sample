# 🌤️ Weather App

A modern weather application built with vanilla JavaScript, Webpack, and the free Open-Meteo API.

## Features

✅ **Real-time Weather Data** - Get current weather conditions for any location
✅ **Location Search** - Search by city name or coordinates (latitude, longitude)
✅ **Comprehensive Data** - Temperature, humidity, wind speed, pressure, visibility, UV index
✅ **Beautiful UI** - Modern, responsive design with weather emoji indicators
✅ **Loading State** - Visual feedback while fetching data
✅ **Error Handling** - Graceful error messages for invalid locations
✅ **No API Key Required** - Uses free Open-Meteo API
✅ **Timezone Support** - Automatically detects and displays local timezone

## Project Structure

```
weather-app/
├── src/
│   ├── index.js           # Main entry point
│   ├── template.html      # HTML structure
│   ├── styles.css         # All styles
│   ├── weather-api.js     # API integration
│   └── ui.js              # DOM management (IIFE)
├── webpack.config.js      # Webpack configuration
├── package.json           # Dependencies and scripts
└── .gitignore            # Git ignore rules
```

## Getting Started

### Prerequisites

Node.js and npm must be installed. Download from [nodejs.org](https://nodejs.org/)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run serve
   ```
   Open [http://localhost:8080](http://localhost:8080/) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

## Usage

### Search for Weather

1. **By City Name:**
   - Type a city name (e.g., "London", "New York", "Tokyo")
   - Click "Search"

2. **By Coordinates:**
   - Enter latitude and longitude separated by comma (e.g., "40.7128,-74.0060")
   - Click "Search"

### View Weather Information

Once you search, the app displays:
- **Current Temperature** - Large, easy-to-read display
- **Weather Condition** - Descriptive text with emoji
- **Feels Like Temperature** - Perceived temperature
- **Humidity** - Percentage moisture in air
- **Wind Speed** - In km/h
- **Pressure** - Atmospheric pressure in hPa
- **Visibility** - In kilometers
- **UV Index** - Sun exposure indicator
- **Sunrise/Sunset** - Local times
- **Timezone** - Location's timezone

## API Details

### Open-Meteo API

**Endpoints Used:**
1. **Geocoding API** - Converts location names to coordinates
   - Endpoint: `https://geocoding-api.open-meteo.com/v1/search`
   - Returns: Latitude, longitude, city name, country

2. **Weather Forecast API** - Gets current weather data
   - Endpoint: `https://api.open-meteo.com/v1/forecast`
   - Returns: Temperature, humidity, weather codes, wind speed, pressure, visibility, UV index

### Data Processing

The `weather-api.js` module:
1. **Geocodes** location input (handles both city names and coordinates)
2. **Fetches** real-time weather data
3. **Processes** raw API data into user-friendly format
4. **Interprets** weather codes into readable descriptions
5. **Returns** clean object with all necessary data

### Weather Codes

Uses WMO Weather Interpretation Codes:
- `0` - Clear sky
- `1-3` - Cloudy conditions
- `45, 48` - Foggy
- `51-67` - Precipitation
- `71-86` - Snow
- `95-99` - Thunderstorms

## Technical Implementation

### Modular Architecture

**UI Module (IIFE)**
- Handles all DOM manipulation
- Manages loading/error states
- Displays weather data
- Encapsulates all UI logic

**Weather API Module**
- Separates API calls from UI
- Handles errors gracefully
- Processes raw API responses
- Returns clean data objects

**Main Index File**
- Orchestrates module initialization
- Connects form submission to API calls
- Handles async operations

### Error Handling

- **Invalid Location** - Shows user-friendly error message
- **Network Errors** - Caught and displayed
- **Missing Data** - Graceful fallbacks provided
- **Invalid Coordinates** - Validated with regex

### Loading States

- Spinner animation while fetching
- "Fetching weather data..." message
- Prevents duplicate submissions
- Smooth transitions between states

## Browser DevTools Tips

### Inspect localStorage
Open DevTools (F12) → Application → Local Storage

### Simulate Network Speed
1. Open DevTools
2. Go to Network tab
3. Click the speed dropdown (top left)
4. Select "Slow 3G" or "Fast 3G" to simulate slowness

### View Console Logs
1. Open DevTools (F12)
2. Go to Console tab
3. Search for weather data being logged

## Deployment to GitHub Pages

1. **Create deployment branch (first time only):**
   ```bash
   git branch gh-pages
   ```

2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Your message"
   ```

3. **Deploy:**
   ```bash
   git checkout gh-pages
   git merge main --no-edit
   npm run build
   git add dist -f
   git commit -m "Deployment commit"
   git subtree push --prefix dist origin gh-pages
   git checkout main
   ```

4. **Enable GitHub Pages:**
   - Go to repository settings
   - Set source to `gh-pages` branch

## Supported Locations

The app works with any city that exists in the geocoding database:
- **Cities**: London, Paris, Tokyo, Sydney
- **Towns**: Any named municipality
- **Coordinates**: Latitude and longitude pairs
- **Countries**: Most world locations supported

## Example Searches

```
London
New York
40.7128,-74.0060 (New York coordinates)
Paris
Tokyo
Sydney
Los Angeles
```

## Troubleshooting

### "Location not found"
- Check spelling of city name
- Try using coordinates instead
- Ensure proper formatting: `latitude,longitude`

### No data displaying
- Check browser console (F12) for errors
- Verify internet connection
- Try a different location
- Clear browser cache

### Slow loading
- Use DevTools Network tab to check API response time
- Open-Meteo API is free and may be slower during peak times
- Try again in a few moments

## Dependencies

- **webpack** - Module bundler
- **webpack-cli** - CLI for webpack
- **webpack-dev-server** - Development server
- **html-webpack-plugin** - HTML generation
- **style-loader & css-loader** - CSS bundling

## License

This project is open source and available under the MIT License.

## Attribution

Weather data provided by [Open-Meteo](https://open-meteo.com/) - Free weather API with no authentication required.

## Future Enhancements

- 5-day weather forecast
- Historical weather data
- Weather alerts
- Saved favorite locations
- Dark mode
- Multiple language support
- Weather comparison between cities
- Air quality data
