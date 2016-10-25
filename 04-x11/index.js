import React from 'react';
import ReactX11 from 'react-x11';

class App extends React.Component {
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({l: 'hello ' + new Date(), w: this.state.w + 1 });
    }, 1000);
  }

  render() {
    return (
      <window
        width={this.state.w}
        height={800}
        title={this.state.l}>
        <box>test text</box>
      </window>
    );
  }
}

ReactX11.AppRegistry('CounterX11', () => <App />);

