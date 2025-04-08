document.addEventListener('DOMContentLoaded', function() {
    const weatherForm = document.getElementById('weather-form');
    const cityInput = document.getElementById('city-input');
    const weatherContainer = document.getElementById('weather-container');
    const errorMessage = document.getElementById('error-message');
    const loadingIndicator = document.getElementById('loading');
    
    // DOM elements for weather data
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('weather-description');
    const feelsLike = document.getElementById('feels-like');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');
    const pressure = document.getElementById('pressure');
    const updatedAt = document.getElementById('updated-at');
    
    weatherForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const city = cityInput.value.trim();
        if (!city) {
            showError('Please enter a city name');
            return;
        }
        
        // Show loading indicator
        showLoading();
        
        // Fetch weather data
        fetch('/weather', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'city': city
            })
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error(data.error || 'Failed to fetch weather data');
                });
            }
            return response.json();
        })
        .then(data => {
            hideLoading();
            displayWeatherData(data);
        })
        .catch(error => {
            hideLoading();
            showError(error.message);
        });
    });
    
    function displayWeatherData(data) {
        // Update DOM elements with weather data
        cityName.textContent = data.city;
        temperature.textContent = data.temperature;
        weatherDescription.textContent = data.description;
        feelsLike.textContent = data.feels_like;
        humidity.textContent = data.humidity;
        windSpeed.textContent = data.wind_speed;
        pressure.textContent = data.pressure;
        updatedAt.textContent = data.updated_at;
        
        // Set background color based on temperature class
        weatherContainer.className = data.temp_class;
        weatherContainer.classList.add('weather-container');
        
        // Show weather container
        errorMessage.classList.add('hidden');
        weatherContainer.classList.remove('hidden');
    }
    
    function showError(message) {
        weatherContainer.classList.add('hidden');
        loadingIndicator.classList.add('hidden');
        errorMessage.textContent = message;
        errorMessage.classList.remove('hidden');
    }
    
    function showLoading() {
        weatherContainer.classList.add('hidden');
        errorMessage.classList.add('hidden');
        loadingIndicator.classList.remove('hidden');
    }
    
    function hideLoading() {
        loadingIndicator.classList.add('hidden');
    }
});