import React, { useState } from 'react';
function Dropdown(props) {
    const [executionState, setExecutionState] = useState(false);
    const options = ['Select an Option', 'Simple', 'Complex'];

    function handleInputChange(event) {
        const { value } = event.target;
        setExecutionState(value);
    }
    return (
        <div>
            <label>{props.labelText}</label>
            <select name="cars" id="cars" value={executionState} onChange={handleInputChange}>
                <option value={options[0]} >{options[0]}</option>
                <option value={options[1]} >{options[1]}</option>
                <option value={options[2]} >{options[2]}</option>
            </select>
        </div>
    );
}


export default Dropdown;