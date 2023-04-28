require("dotenv").config();
const axios = require("axios");

const NEWS_LINK = process.env.NEWS_LINK;
const NEWS_API_KEY = process.env.NEWS_API_KEY;

const get_news = async(req, res) => {
    console.log("Request received");
    let country_code = req.originalUrl.split("/")[3];
    console.log(country_code);
    // send a response json
    const newsData = await axios.get(`${NEWS_LINK}${country_code}&apiKey=${NEWS_API_KEY}`)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return error;
        });
    res.json(newsData);
}

module.exports = {
    get_news
}