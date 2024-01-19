import React from "react";
import ReactDom from "react-dom";
import CalculateButtonComponent from "./Components/CalculateButtonComponent.jsx";
import InputNumberComponent from "./Components/InputNumberComponent.jsx";
import TypeExecutionComponent from "./Components/TypeExecutionComponent.jsx";

import "./Style/IsuranceStyle.css";

function FormC() {


    const [formContent] = React.useState({
        retantionState:1000,
        staMainLimit: 1000
    });

    return (<div className="container">
        <h1>Welcome</h1>
        <InputNumberComponent value={formContent.staMainLimit} labaelText={"Main Limit: "} />
        <InputNumberComponent value={formContent.retantionState} labaelText={"Main Main Retention: "} />
        <TypeExecutionComponent labaelText={"Type of Execution: "} />
        <CalculateButtonComponent value={formContent.retantionState} />

    </div>);
}


ReactDom.render(
    <div className="container">
        <FormC>
        </FormC>
    </div>, document.getElementById("root")
);