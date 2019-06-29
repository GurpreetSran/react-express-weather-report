// Group by date 
const groupByDate = (xs, key) => {
    return xs.reduce(function(rv, x) {
       //  remove time from date key
      (rv[x[key].slice(0, 10)] = rv[x[key].slice(0, 10)] || []).push(x);
      return rv;
    }, {});
};
  
const mapRequiredProps = (array, currentWeather) => {
    var reduced = groupByDate(array.data.list, 'dt_txt');
    const data = Object.keys(reduced).map(day => reduced[day]);
  
    const getDay = (dateVal) => {
      let day; 
      
      if(new Date(dateVal * 1000).getDay() === new Date().getDay()) {
        day = 'Today';
      } else {
        day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date(dateVal * 1000).getDay()];
      }
  
      return day; 
    }
  
    const daysData = data.map(array => { 
      return array.reduce((acc, currentVal) => {
        return {
          day: getDay(currentVal.dt),
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
    }];
}

module.exports = {
    mapRequiredProps
}
  
  