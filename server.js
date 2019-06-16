const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/weather', (req, res) => {

  // City will be coming from FE 
  const nextFiveDaysURL = `http://api.openweathermap.org/data/2.5/forecast?appid=ff1141e0aa9793e044284531e2da7550&q=${req.body.city},uk&units=metric`;
  const currentWeatherURL = `https://samples.openweathermap.org/data/2.5/weather?q=${req.body.city},uk&appid=b6907d289e10d714a6e88b30761fae22`;

  function getNextFiveDays() {
    return axios.get(nextFiveDaysURL);
  }
  
  function getCurrentData() {
    return axios.get(currentWeatherURL);
  }

  // We are making two concurrent calls here to combine data together 
  axios.all([getNextFiveDays(), getCurrentData()])
    .then(axios.spread(function (result, currentWeather) {
      res.json(mapRequiredProps(result, currentWeather));
    }));
});


// Group by date 
const groupByDate = (xs, key) => {
  return xs.reduce(function(rv, x) {
    (rv[x[key].slice(0, 10)] = rv[x[key].slice(0, 10)] || []).push(x);
    return rv;
  }, {});
};


// Massage data as needed by FE application and return it to send back to FE
const mapRequiredProps = (array, currentWeather) => {
  var reduced = groupByDate(array.data.list, 'dt_txt');
  const data = Object.keys(reduced).map(day => reduced[day]);

  const daysData = data.map(array => { 
    return array.reduce((acc, currentVal) => {
      return {
        date: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(currentVal.dt * 1000).getDay()],
        tempMax: Math.max((acc && acc.tempMax) || -1000, (currentVal && currentVal.main && currentVal.main.temp_max) || -1000),
        tempMin: Math.min((acc && acc.tempMin) || 1000, (currentVal && currentVal.main && currentVal.main.temp_min) || 1000),
      };
    })
  });

  return [{
    nextFiveDays: daysData,
    lat: array.data.city.coord.lat,
    lon: array.data.city.coord.lon,
    name: array.data.city.name,
    current: currentWeather.data.weather
  }]
}


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));