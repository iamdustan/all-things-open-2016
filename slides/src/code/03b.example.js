export default `class Counter extends React.Component {
  state = {count: 0};

  increment = () => this.setState({
    count: state.count + 1
  });

  render() {
    return (
      <div>
        <h2>React.js Counter</h2>
        <div onClick={this.increment}>
          Click counter:
          {this.state.count}
        </div>
      </div>
    );
  }
}`;
