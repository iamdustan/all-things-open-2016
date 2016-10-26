import {Component} from 'react';

class Counter extends Component {
  static defaultProps = {component: 'p'};
  state = {count: this.props.initialValue || 0};

  increment = (event) => {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  render () {
    console.log('render');
    return this.props.render({onClick: this.increment}, this.state);
  }
}

export default Counter;

