import React, { useState } from 'react';

function InputNumberComponent(props) {

    const [retantionState, setRetantionState] = useState(props.value);

    function handleInputChange(event) {
        const { value } = event.target;


        if (value < 1000) {
            setRetantionState(1000);
        } else {
            setRetantionState(value * 1000);
        }
    }

    return (
        <div>
            <label>{props.labaelText}</label>
            <input type="number" onChange={handleInputChange} value={retantionState}></input>
        </div>
    );
}

export default InputNumberComponent;