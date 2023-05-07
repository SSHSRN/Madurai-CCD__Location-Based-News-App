from flask import Flask, request, send_file
from flask_cors import CORS
from dotenv import load_dotenv
import os
import requests

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def apiTest():
    return ("<h1>Python Backend is working!😀</h1>")

@app.route('/getLocationNews', methods=['GET'])
def getLocationThenNews():
    link= os.getenv('IP_LINK')
    # send a get request to the link
    response = requests.get(link)
    print(response)
    country_code = (response.json()['country_code']).lower()
    print("your country code is: ", country_code)
    # send a get request to the news api
    # news = requests.get('https://newsapi.org/v2/top-headlines?country='+country_code+'&apiKey='+os.getenv('NEWS_API_KEY'))
    newsLink = os.getenv('NEWS_LINK')
    # send a get request to the newsLink with country_code as parameter
    news = requests.get(newsLink+"/"+country_code)
    # news = requests.get(newsLink, json=json_data)
    # print("news: ", news.json())
    # return the response in json format
    return news.json()

# Run Server in port 5000
if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000)
    print('Server running in port 5000')