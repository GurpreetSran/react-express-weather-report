import React from 'react';
import { shallow } from 'enzyme';

import WeatherCard from './index';
import { findByTestAtrr, checkProps } from '../../../utils/testUtils';

const setUp = (props ={}) => {
   const wrapper = shallow(<WeatherCard {...props} />);
   return wrapper;
}

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
   describe('with props', () => {
      it('should render', () => {
         const component  = setUp({...props[0]});
         const weatherCard = findByTestAtrr(component, 'weatherCard'); 
         expect(weatherCard.length).toBe(1);
     });
   });

   describe('without props', () => {
      it('should not render', () => {
         const component  = setUp();
         const weatherCard = findByTestAtrr(component, 'weatherCard'); 
         expect(weatherCard.length).toBe(0);
      });
   });

   describe('Prop types', () => {
      
      it('should not throw a warning', () => {
         
         const exptectedProps = {

            nextFiveDays: [{
                     date: 'Mon',
                     tempMax: 12,
                     tempMin: 5,
                  }],
            name: 'London',
            current: [{
               description: 'cloudy'
            }]
         };

         const propsErr = checkProps(WeatherCard, exptectedProps);
         expect(propsErr).toBeUndefined();
      });
   });
});