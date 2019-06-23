import * as React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

import './index.scss';

const WeatherCard = (props) => {
    const {nextFiveDays, name, current } = props; 
    const description = current && current[0].description;

    if(!nextFiveDays) {
        return null;
    }

    // filter out bad data
    const filteredData = nextFiveDays.filter(day => day.date);

    return (
        <div className="weatherCard" 
            data-test="weatherCard"
        >
            <div className="description">
                <div>Currently in:</div>
                <div className="city">{name}</div>
                <div>{description}</div>
            </div>
            <div className="days">
                {
                    filteredData.map( day => 
                        <div className="eachDay" key={uuid()} >
                            <span className="dayName">{day.date}</span>
                            <div>
                                <span>Max: </span>
                                <span>{Math.round(day.tempMax)}</span>
                            </div>
                            <div>
                                <span>Min: </span>
                                <span>{Math.round(day.tempMin)}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
} 

WeatherCard.propTypes = {
    nextFiveDays: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string,
        tempMax: PropTypes.number,
        tempMin: PropTypes.number,
    })),
    name: PropTypes.string, 
    current: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string
    }))
};

export default WeatherCard;