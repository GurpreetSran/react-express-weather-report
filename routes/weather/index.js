const express = require('express');
const axios = require('axios');

const router = express.Router();

const { mapRequiredProps } = require('../../utils');

router.post('/', (req, res) => {

    const nextFiveDaysURL = `http://api.openweathermap.org/data/2.5/forecast?appid=ff1141e0aa9793e044284531e2da7550&q=${req.body.city},uk&units=metric`;
    const currentWeatherURL = `https://openweathermap.org/data/2.5/weather?q=${req.body.city},uk&appid=b6907d289e10d714a6e88b30761fae22`;
  
    function getNextFiveDays() {
      return axios.get(nextFiveDaysURL);
    }
    
    function getCurrentData() {
      return axios.get(currentWeatherURL);
    }
  
    // two concurrent calls here to combine data together 
    axios.all([getNextFiveDays(), getCurrentData()])
      .then(axios.spread(function (nextFiveDaysWeather, currentWeather) {
        res.json(mapRequiredProps(nextFiveDaysWeather, currentWeather));
      }))
      .catch(error => res.status(500).send(error));
});


module.exports = router;