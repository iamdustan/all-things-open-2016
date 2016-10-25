import React, {Component} from 'react';
import ReactHardware from 'react-hardware';
import GenericCounter from './GenericCounter';

const {
  Container,
  Button,
  Led,
} = ReactHardware;

class BlinkingLed extends Component {
  state = {value: 0}

  shouldComponentUpdate (nextProps, nextState) {
    if (
      nextProps.count !== this.props.count ||
      nextState.value !== this.state.value
    ) {
      this.blink(nextProps.count);
      return true;
    }
    return false;
  }

  blink(count) {
    // already blinking?
    if (this.timeout) return;

    let i = 0;
    this.timeout = setInterval(() => {
      if (i++ < count * 2) {
        this.setState({value: this.state.value === 1 ? 0 : 1});
      } else {
        this.setState({value: 0});
        clearInterval(this.timeout);
        this.timeout = null;
      }
    }, 300);
  }

  render() {
    return (
      <Led
        mode="OUTPUT"
        pin={this.props.pin}
        value={this.state.value}
      />
    );
  }
}

export default function Counter(baseProps) {
  return (
    <GenericCounter
      {...baseProps}
      render={(props, state) => (
        <Container>
          <BlinkingLed
            pin={baseProps.led || 13}
            count={state.count}
          />
          <Button
            pin={baseProps.button || 2}
            onUp={props.onClick}
          />
        </Container>
      )}
    />
  );
}

