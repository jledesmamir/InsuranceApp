import React from 'react';
import TdComponent from './TdComponent.jsx';

function TrComponent(props) {
  return (
      <tr>
          <TdComponent dataTransfer={props}></TdComponent>
          <TdComponent dataTransfer={props}></TdComponent>
          <TdComponent dataTransfer={props}></TdComponent>
      </tr>
  );
}

export default TrComponent;