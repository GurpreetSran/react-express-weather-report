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
            placeholder="Any city in UK and hit return"
        />
            
    </form>
);

export default Form;