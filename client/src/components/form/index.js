import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Form = ({onSubmit, onChange, fieldValue}) => (
    <form 
        onSubmit={onSubmit}
        className="formElement"
        data-test="formComponent"
    > 
        <input 
            data-test="inputField"
            type="text" 
            value={fieldValue} 
            onChange={onChange}
            placeholder="Any city in UK and hit return"
        />
            
    </form>
);

Form.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    fieldValue: PropTypes.string
}

export default Form;