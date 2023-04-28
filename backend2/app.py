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
    return {'message': 'API work pannudhu da!'}

@app.route('/getLocationNews', methods=['GET'])
def getLocationThenNews():
    link= os.getenv('IP_LINK')
    # send a get request to the link
    response = requests.get(link)
    print(response)
    # return the response in json format
    return response.json()

# Run Server in port 3000
if __name__ == '__main__':
    app.run(debug=True, port=3001)
    print('Server running in port 3001')