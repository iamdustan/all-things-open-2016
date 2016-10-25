import React, {Component} from 'react';
import '../containers.css';

class App extends Component {
  state = {count: 0};

  increment = () => this.setState(state => ({
    count: state.count + 1
  }));

  render() {
    return (
      <div className={'Container'} onClick={this.increment}>
        <h2 className={'Header'}>React.js Counter</h2>
        <p>
          Click counter: {this.state.count}
        </p>
      </div>
    );
  }
}

export default App;

