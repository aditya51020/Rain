<!DOCTYPE html>
<html>
<head>
    <title>Weather Forecast</title>
</head>
<body>
    <h1>Weather Forecast</h1>

    <div id="weather-info"></div>

    <script>
        // Sample weather data for a few days
        const weatherData = [
            { day: 'Monday', temperature: 75, conditions: 'Sunny' },
            { day: 'Tuesday', temperature: 68, conditions: 'Partly Cloudy' },
            { day: 'Wednesday', temperature: 72, conditions: 'Showers' },
            { day: 'Thursday', temperature: 80, conditions: 'Sunny' },
            { day: 'Friday', temperature: 62, conditions: 'Rain' }
        ];

        // Function to display weather data
        function displayWeatherForecast() {
            const weatherInfoElement = document.getElementById('weather-info');
            weatherInfoElement.innerHTML = '';

            for (const day of weatherData) {
                const weatherInfo = document.createElement('div');
                weatherInfo.innerHTML = `
                    <h2>${day.day}</h2>
                    <p>Temperature: ${day.temperature}°F</p>
                    <p>Conditions: ${day.conditions}</p>
                `;
                weatherInfoElement.appendChild(weatherInfo);
            }
        }

        // Call the function to display the weather forecast
        displayWeatherForecast();
    </script>
</body>
</html>
