import * as React from 'react';
import uuid from 'uuid';
import './index.scss';

const WeatherCard = (props) => {
    const {nextFiveDays, name, current } = props; 
    const description = current[0].description;

    // filter out bad data
    const filteredData = nextFiveDays.filter(day => day.date);

    return (
        <div className="weatherCard">
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
                                <span>{day.tempMax}</span>
                            </div>
                            <div>
                                <span>Min: </span>
                                <span>{day.tempMin}</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
} 

export default WeatherCard;