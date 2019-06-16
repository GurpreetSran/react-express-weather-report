import React from 'react';

const ToggleButton = ({isChecked, onChange, label}) => {
    
    const [checked, setChecked] = React.useState(isChecked);

    const onChangeFunc = () => {
        setChecked(!checked);
        onChange();
    }
    
    return(
        <div className="toggleButton">
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

export default ToggleButton;