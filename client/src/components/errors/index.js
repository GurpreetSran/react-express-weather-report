import React from 'react';
import uuid from 'uuid';
import './index.scss';

const Errors = ({errors}) => (
    <div 
        className="errors"
        data-test="errorsComponent"
    > 
        {
            errors.map(error => 
                <span 
                    data-test="error"
                    key={uuid()
                }>
                    {error}
                </span>
            )
        }
    </div>
);

export default Errors;