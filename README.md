# Weather App

A beautiful, responsive web application built with Flask that displays real-time weather information for any city using the OpenWeatherMap API.

## Features

- Search for any city's weather worldwide
- View current temperature with visual temperature indicators
- Display wind speed, humidity, and atmospheric pressure
- Responsive design that works on desktop and mobile devices
- Temperature-based color themes for visual feedback

## Demo

You can try the live demo at: [https://my-weather-fxec.onrender.com](https://my-weather-fxec.onrender.com)

## Technology Stack

- **Backend**: Python with Flask framework
- **Frontend**: HTML5, CSS3, JavaScript
- **API**: OpenWeatherMap
- **Deployment**: Render/Heroku/Railway

## Installation and Setup

### Prerequisites

- Python 3.6 or higher
- OpenWeatherMap API key ([Get one here](https://openweathermap.org/api))

### Local Development

1. **Clone the repository**

git clone https://github.com/your-username/weather_app.git
cd weather_app

2. **Set up a virtual environment**

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

3. **Install dependencies**

pip install -r requirements.txt

4. **Create a .env file for your API key**

OPENWEATHER_API_KEY=your_api_key_here

5. **Run the application**

python app.py

6. **Access the application**

Open your browser and navigate to `http://localhost:5000`

## Deployment

### Deploying to Render

1. Create a new account or log in to [Render](https://render.com/)
2. Connect your GitHub repository
3. Create a new Web Service
4. Configure environment variables:
   - Add `OPENWEATHER_API_KEY` with your API key
6. Deploy


## API Usage

This application uses the OpenWeatherMap API to fetch weather data. The free tier allows:
- 60 calls per minute
- 1,000,000 calls per month


## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [Flask](https://flask.palletsprojects.com/) for the web framework
- [Font Awesome](https://fontawesome.com/) for the icons

---

Created by Solomon Shasanmi