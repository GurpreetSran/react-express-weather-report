import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const ToggleButton = ({isChecked, onChange, label}) => {
    
    const [checked, setChecked] = React.useState(isChecked);

    const onChangeFunc = () => {
        setChecked(!checked);
        onChange();
    }
    
    return(
        <div className="toggleButton" data-test="toggleButton">
            <label className="switch">
                <input type="checkbox" 
                    checked={checked} 
                    onChange={onChangeFunc}
                />
                <span className="slider"></span>
            </label>
            <span className="label">{label}</span>
        </div>
    )
}

ToggleButton.prototype = {
    isChecked: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string
};

export default ToggleButton;