import * as React from 'react';
import WeatherCard from './components/weatherCard/index';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, addCity } from './redux/actions';
import ToggleButton from './components/toggleButton/index';
import Form from './components/form/index';
import { toggleTheme as toggleThemeAction } from './redux/actions/index';
import uuid from 'uuid';

const App = () => {
  const theme = useSelector(state => state.theme.current);
  const weather = useSelector(state => state.weather.weather);
  const [cityName, setCityName ] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setTheme());
    dispatch(addCity('London'));
  }, [dispatch]);

  if (weather.length === 0){
    return null
  }

  const onFormSubmit = (e) => {
      e.preventDefault();
      setCityName('');
      dispatch(addCity(cityName));
  }

  const toggleTheme = () => {
    dispatch(toggleThemeAction(theme));
  }

  return(
    <div className={`app ${theme}`}>
        <div className="row">
          <div className="column">
            <Form 
            onSubmit={onFormSubmit} 
            onChange={(e) => setCityName(e.target.value)} 
            fieldValue={cityName} 
          />
            {
                weather.map(city => <WeatherCard key={uuid()} {...city} />)
            }
          </div>
          <div className="column">
            <ToggleButton 
              isChecked={(theme === 'day' ? true : false)} 
              label="Theme"
              onChange={toggleTheme}
            />
            <div className="appDescription">
              <p>Enter any city name in UK and get weather status. </p>
              <p>Current status with next five days forecast is displayed.</p>
            </div>
          </div>
        </div>
    </div>
  );
} 

export default App;