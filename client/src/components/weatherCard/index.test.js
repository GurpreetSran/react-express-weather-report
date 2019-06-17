import React from 'react';
import { shallow } from 'enzyme';

import WeatherCard from './index';

const props = [  
    {  
       "nextFiveDays":[  
          {  
             "date":"Today",
             "tempMax":15.05,
             "tempMin":13.85
          },
          {  
             "date":"Tue",
             "tempMax":21.02,
             "tempMin":11.11
          },
          {  
             "date":"Wed",
             "tempMax":17.48,
             "tempMin":13.25
          },
          {  
             "date":"Thu",
             "tempMax":18.27,
             "tempMin":9.85
          },
          {  
             "date":"Fri",
             "tempMax":18.75,
             "tempMin":10.15
          },
          {  
             "date":"Sat",
             "tempMax":19.81,
             "tempMin":11.47
          }
       ],
       "name":"London",
       "current":[  
          {  
             "description":"few clouds",
          }
       ]
    }
 ];


describe('WeatherCard', () => {
    it('should render with data', () => {
        const wrapper = shallow(<WeatherCard {...props[0]} />);
        expect(wrapper.find('div').first().hasClass('weatherCard')).toEqual(true);
    });
});