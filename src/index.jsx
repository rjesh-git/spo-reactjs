import React from 'react';
import { render } from 'react-dom';
class Hello extends React.Component {
  render()
  {
    return (
      <h1>Hi {this.props.name}!</h1>
    );
  }
}
ReactDOM.render(<Hello name="RajeshK"/>, document.getElementById("app"));