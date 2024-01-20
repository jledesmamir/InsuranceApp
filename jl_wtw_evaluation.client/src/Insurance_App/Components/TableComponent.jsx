import React from 'react';

import TrComponent from "./TrComponent.jsx";

function TableComponent() {

    const [arrayState, setArrayState] = React.useState([]);

    return (
        <div>
            <table>
                <tr>
                    <th>
                        Reference Date
                    </th>
                    <th>
                        Benchmark 1
                    </th>
                    <th>
                        Benchmark 2
                    </th>
                </tr>
                {arrayState.map((todoItem, index) => {
                    return <TrComponent key={index} itemProps={todoItem}></TrComponent>;
                })}
            </table>
        </div>
    );
}

export default TableComponent;