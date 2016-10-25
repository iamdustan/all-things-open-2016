import React, {Component} from 'react';
import '../containers.css';

class Counter extends Component {
  static defaultProps = {component: 'p'};
  state = {count: this.props.initialValue || 0};

  increment = (event) => {
    event.preventDefault();
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  render () {
    return (
      <this.props.component onClick={this.increment}>
        Click counter: {this.state.count}
      </this.props.component>
    );
  }

}

class App extends Component {
  render() {
    return (
      <div className={'Container'} onClick={this.increment}>
        <h2 className={'Header'}>React.js Counter</h2>
        <div>
          <Counter />
          <Counter initialValue={5} />
        </div>
      </div>
    );
  }
}

export default App;


