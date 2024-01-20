import React from "react";
import ReactDom from "react-dom";
import CalculateButtonComponent from "./Components/CalculateButtonComponent.jsx";
import InputNumberComponent from "./Components/InputNumberComponent.jsx";
import TypeExecutionComponent from "./Components/TypeExecutionComponent.jsx";
import TableComponent from "./Components/TableComponent.jsx";

import "./Style/IsuranceStyle.css";

function FormC() {
    return (<div className="container">
        <h1>Welcome</h1>
        <InputNumberComponent labelText={"Main Limit: "} />
        <InputNumberComponent labelText={"Main Retention: "} />
        <TypeExecutionComponent labelText={"Type of Execution: "} />
        <CalculateButtonComponent />
        <TableComponent />

    </div>);
}


ReactDom.render(
    <div className="container">
        <FormC>
        </FormC>
    </div>, document.getElementById("root")
);