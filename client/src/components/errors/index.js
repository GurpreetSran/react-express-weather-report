import React from 'react';
import uuid from 'uuid';

const Errors = ({errors}) => (
    <div className="erros"> 
        {
            errors.map(error => 
                <span key={uuid()}>{error}</span>
            )
        }
    </div>
);

export default Errors;