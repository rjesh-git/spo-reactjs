class Hello extends React.Component {
  render()
  {
    return (
      <h1>Hi {this.props.name}!</h1>
    );
  }
}
ReactDOM.render(<Hello name="RajeshS"/>, document.getElementById("app"));