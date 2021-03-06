export default `class Counter extends React.Component {
  state = {
    count: this.props.initialCount || 0
  };

  increment = () => this.setState({
    count: state.count + 1
  });

  render() {
    return (
      <div onClick={this.increment}>
        Click counter:
        {this.state.count}
      </div>
    );
  }
}`;

