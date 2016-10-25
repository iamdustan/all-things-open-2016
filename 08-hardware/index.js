import React, {Component} from 'react';
import ReactHardware from 'react-hardware';
const {
  Container,
  Button,
} = ReactHardware;

import Counter from './Counter';

class App extends Component {
  render () {
    return (
      <Counter led={12} />
    );
  }
}

ReactHardware.render(<App />);

