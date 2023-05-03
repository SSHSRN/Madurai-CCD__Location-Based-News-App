# Madurai-CCD__Location-Based-News-App

The main objective of this website is to provide location-based news to the users. The location of the users is fetched by using their IP address and the news are fetched accordingly.

## Setting up
To set up this project in your local machine, run the following commands in the terminal after cloning the project.
* Set up nodejs backend:
```bash
cd backend1
npm install
```
* Set up flask backend:
```bash
cd backend2
pip install -r requirements.txt
```
* Set up react frontend:
```bash
cd frontend
npm install
```
## Set up environment variables
* Create a .env file in the backend1 folder and add the following variables:
```bash
NEWS_LINK='https://newsapi.org/v2/top-headlines?country='
NEWS_API_KEY=<your_news_api_key>
```
* Create a .env file in the backend2 folder and add the following variables:
```bash
IP_LINK='http://ip-api.com/json/'
NEWS_LINK='localhost:3000/application/news/'
```
## Running the project
* To run the nodejs backend:
```bash
cd backend1
npm start
```
* To run the flask backend:
```bash
cd backend2
python app.py
```
* To run the react frontend:
```bash
cd frontend
npm start
```