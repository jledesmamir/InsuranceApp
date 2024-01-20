import React, { useState } from 'react';

function InputNumberComponent(props) {

    const [retantionState, setRetantionState] = useState(0);
    const [showDelayedText, setShowDelayedText] = useState(false);
    function handleInputChange(event) {
        const { value } = event.target;
        setRetantionState(value);
    }

    return (
        <div>
            <label>{props.labelText}</label>
            <input type="number" onChange={handleInputChange} value={retantionState}></input>
        </div>
    );
}

export default InputNumberComponent;