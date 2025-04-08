from flask import Flask, render_template, request, jsonify
import requests
import os
from datetime import datetime
from dotenv import load_dotenv

#load variables from env file
load_dotenv()

app = Flask(__name__)

API_KEY = os.gotenv("OPENWEATHER_API_KEY")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather', methods=['POST'])
def get_weather():
    city = request.form.get('city')

    if not city:
        return jsonify({"error": "Please enter a city name"}), 400
    
    if not API_KEY:
        return jsonify({"error": "API key is missing. Please add it to the .env file"}), 500
    
#    API endpoint
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"

    try:
        response = requests.get(url)
        data = response.json()

        if response.status_code == 200:
            # Extract weather information
            weather_data = {
                "city": f"{data['name']}, {data['sys']['country']}",
                "temperature": f"{data['main']['temp']:.1f}",
                "description": data['weather'][0]['description'].capitalize(),
                "feels_like": f"{data['main']['feels_like']:.1f}",
                "humidity": data['main']['humidity'],
                "wind_speed": data['wind']['speed'],
                "pressure": data['main']['pressure'],
                "updated_at": datetime.now().strftime("%H:%M:%S, %d-%m-%Y"),
                "temp_class": get_temperature_class(data['main']['temp'])
            }

            return jsonify(weather_data)
        else:
            error_message = data.get('message', 'Unkown error')
            return jsonify({'error': f"Failed to get weatehr data: {error_message}"}), 404

    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"Network error: {str(e)}"}), 500
    except  Exception as e:
        return jsonify({"error": f"An error occured: {str(e)}"}), 500
    
def get_temperature_class(temperature):

    if temperature < 0:
        return "Cold"
    elif temperature < 10:
        return "cool"
    elif temperature < 20:
        return "mild"
    elif temperature < 30:
        return "warm"
    else:
        return "hot"
    
if __name__ == '__main__':
    app.run(debug=True)