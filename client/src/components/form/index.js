import React from 'react';
import './index.scss';

const Form = ({onSubmit, onChange, fieldValue}) => (
    <form 
        onSubmit={onSubmit}
        className="formElement"
    > 
        <input 
            type="text" 
            value={fieldValue} 
            onChange={onChange}
            placeholder="City Name in UK"
        />
            
    </form>
);

export default Form;