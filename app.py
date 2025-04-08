from flask import Flask, render_template, request, jsonify
import requests
import os
from datetime import datetime
from dotenv import load_dotenv

#load variables from env file
load_dotenv()

app = Flask(__name__)