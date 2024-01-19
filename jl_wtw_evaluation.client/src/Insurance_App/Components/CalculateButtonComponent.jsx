import React, {useState} from 'react';

function CalculateButtonComponent() {
    const [arrayState, setArrayState] = useState([]);
    const [enableState, setEnableState] = useState(false);
    const [showDelayedText, setShowDelayedText] = useState(false);


    const delay = async (ms) => {
        return new Promise((resolve) =>
            setTimeout(resolve, ms));
    };

    const handleOnClick = async () => {
        await delay(2000);
        setShowDelayedText(true);
    };

    return (
        <div>
            <button onClick={handleOnClick}>Calculate</button>
            <label visible={false}>{props.labaelText}</label>
            </div>
  );
}

export default CalculateButtonComponent;