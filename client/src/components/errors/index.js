import React from 'react';
import uuid from 'uuid';
import './index.scss';

const Errors = ({errors}) => (
    <div className="errors"> 
        {
            errors.map(error => 
                <span key={uuid()}>{error}</span>
            )
        }
    </div>
);

export default Errors;