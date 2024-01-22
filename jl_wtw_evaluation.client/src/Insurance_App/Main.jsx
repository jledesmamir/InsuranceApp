import React, { useState } from "react";
import ReactDom from "react-dom";
//import CalculateButtonComponent from "./Components/CalculateButtonComponent.jsx";
//import InputNumberComponent from "./Components/InputNumberComponent.jsx";
//import TypeExecutionComponent from "./Components/TypeExecutionComponent.jsx";
//import TableComponent from "./Components/TableComponent.jsx";

import "./Style/IsuranceStyle.css";

function FormC() {
    const [inputsCollection, setInputsCollection] = useState({
        mainLimit: 0,
        mainRetention: 0,
        fecha: getDate()
    });
    const [typeInput, setTypeInput] = useState("")
    const options = [
        { opt: 'Select an Option', value: 0 },
        { opt: 'Simple', value: 1 },
        { opt: 'Complex', value: 2 }];

    const [items, setItems] = useState([]);

    const [currentDate, setCurrentDate] = useState(getDate());
    const [showDelayedText, setShowDelayedText] = useState(false);

    const delay = async (ms) => {
        return new Promise((resolve) =>
            setTimeout(resolve, ms));
    };

    const handleOnClick = async () => {
        setShowDelayedText(true)
        await delay(3000);
        setShowDelayedText(false);
        console.log(showDelayedText);
        addItem();
    };
    function getDate() {
        const today = new Date();
        var month = "";
        const year = today.getFullYear();
        const date = today.getDate();
        if ((today.getMonth() + 1) === 1) {
            month = "Jan";
        } else if ((today.getMonth() + 1) === 2) {
            month = "Feb";
        } else if ((today.getMonth() + 1) === 3) {
            month = "Mar";
        } else if ((today.getMonth() + 1) === 4) {
            month = "Apr";
        } else if ((today.getMonth() + 1) === 5) {
            month = "May";
        } else if ((today.getMonth() + 1) === 6) {
            month = "Jun";
        } else if ((today.getMonth() + 1) === 7) {
            month = "Jul";
        } else if ((today.getMonth() + 1) === 8) {
            month = "Agu";
        } else if ((today.getMonth() + 1) === 9) {
            month = "Sep";
        } else if ((today.getMonth() + 1) === 10) {
            month = "Oct";
        } else if ((today.getMonth() + 1) === 11) {
            month = "Nov";
        } else if ((today.getMonth() + 1) === 12) {
            month = "Dec";
        }

        //setCurrentDate(`${date} ${month} ${year}`);
        return `${date} ${month} ${year}`;
    }

    function handelSelect(event) {
        const selectedVal = event.target.value;
        setTypeInput(selectedVal);

    }
    function handleChange(event) {
        const { name, value } = event.target;
        setInputsCollection(prevValue => {
            if (name === "mainLimit") {
                if (value <= 0) {
                    return {
                        mainLimit: 1,
                        mainRetention: prevValue.mainRetention,
                        fecha: prevValue.fecha
                    };
                }
                else {
                    return {
                        mainLimit: value,
                        mainRetention: prevValue.mainRetention,
                        fecha: prevValue.fecha
                    };
                }
            } else if (name === "mainRetention") {
                if (value <= 0) {
                    return {
                        mainLimit: prevValue.mainLimit,
                        mainRetention: 1,
                        fecha: prevValue.fecha
                    };
                } else {
                    return {
                        mainLimit: prevValue.mainLimit,
                        mainRetention: value,
                        fecha: prevValue.fecha
                    };
                }
            } else if (name === "fecha") {
                return {
                    mainLimit: prevValue.mainLimit,
                    mainRetention: prevValue.mainRetention,
                    fecha: value
                };
            }
        });
        //if ((name === "mainLimit" && inputsCollection.mainLimit < 1000) || (name === "mainRetention" && inputsCollection.mainRetention < 1000)) {
        //    setDisableState(true);
        //} else {
        //    setDisableState(false);
        //}
    }

    function addItem() {
        setItems(prevItems => {
            //return [...prevItems, inputText];
            return [...prevItems, inputsCollection];
        });
        setInputsCollection({ mainLimit: 0, mainRetention: 0 });
        setTypeInput(`${options[0]}`);
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>Welcome</h1>
            </div>
            <div className="form">
                <label>Main Limit:</label>
                <input name="mainLimit" onChange={handleChange} type="number" value={inputsCollection.mainLimit} />
                <label>Retain Limit:</label>
                <input name="mainRetention" onChange={handleChange} type="number" value={inputsCollection.mainRetention} />
                <label>Type:</label>
                <select name="fecha" onChange={handelSelect} value={typeInput}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value} >{option.opt}</option>
                    ))}
                </select>
                <button onClick={handleOnClick} disabled={(inputsCollection.mainLimit < 1000 || inputsCollection.mainRetention < 1000) ? true : false} style={(inputsCollection.mainLimit < 1000 || inputsCollection.mainRetention < 1000) ? { opacity: "0.4" } : { opacity: null }}>
                    <span>Calculate</span>
                </button>
                <label id="loadingLabel" style={showDelayedText ? { visibility: "visible" } : { visibility: "collapse" }}>Loading...</label>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Reference Date</th>
                        <th>Benchmark 1</th>
                        <th>Benchmark 2</th>
                    </tr>
                    {items.map((element, index) => (
                        <tr key={index}>
                            <td>{currentDate}</td>
                            <td>{`${(element.mainRetention / element.mainLimit) * 100}` + '%'}</td>
                            <td>${element.mainRetention}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}


ReactDom.render(
    <div className="container">
        <FormC>
        </FormC>
    </div>, document.getElementById("root")
);