import React, {Component} from 'react';
import '../containers.css';

class App extends Component {
  state = {count: 0};

  increment = () => this.setState(state => ({
    count: state.count + 1
  }));

  render() {
    return (
      <div className={'Container'}>
        <h2 className={'Header'}>React.js Counter</h2>
        <div onClick={this.increment}>
          Click counter: {this.state.count}
        </div>
      </div>
    );
  }
}

export default App;

