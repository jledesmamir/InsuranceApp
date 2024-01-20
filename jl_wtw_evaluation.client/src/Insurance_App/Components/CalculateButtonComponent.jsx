import React, { useState } from 'react';

function CalculateButtonComponent() {
    const [showDelayedText, setShowDelayedText] = useState(false);
            console.log(event);

    const delay = async (ms) => {
        return new Promise((resolve) =>
            setTimeout(resolve, ms));
    };

    const handleOnClick = async () => {
        setShowDelayedText(true)
        await delay(3000);
        setShowDelayedText(false);
        console.log(showDelayedText);
    };

    return (
        <div>
            <button onClick={handleOnClick}>Calculate</button>

            <label id="loadingLabel" style={showDelayedText ? { visibility: "visible" } : { visibility: "collapse" }}>Loading...</label>
        </div>
    );
}

export default CalculateButtonComponent;