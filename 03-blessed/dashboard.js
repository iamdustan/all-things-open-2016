'use strict';

const React = require('react');
const blessed = require('blessed');
const ReactBlessed = require('react-blessed');

/**
 * Stylesheet
 */
const stylesheet = {
  bordered: {
    border: {
      type: 'line'
    },
    style: {
      border: {
        fg: 'blue'
      }
    }
  }
};

/**
 * Top level component.
 */
class Dashboard extends React.Component {
  render() {
    return React.createElement(
      'element',
      null,
      React.createElement(Log, null),
      React.createElement(Request, null),
      React.createElement(Response, null),
      React.createElement(Jobs, null),
      React.createElement(Progress, null),
      React.createElement(Stats, null)
    );
  }
}

/**
 * Log component.
 */
class Log extends React.Component {
  render() {
    return React.createElement(
      'box',
      { label: 'Log',
        'class': stylesheet.bordered,
        width: '60%',
        height: '70%',
        draggable: true
      },
      ['Hello', 0, 'World'].join(', ')
    );
  }
}

/**
 * Request component.
 */
class Request extends React.Component {
  render() {
    return React.createElement(
      'box',
      { label: 'Request',
        'class': stylesheet.bordered,
        top: '70%',
        width: '30%'
      },
      0
    );
  }
}

/**
 * Response component.
 */
class Response extends React.Component {
  render() {
    return React.createElement('box', {
      label: 'Response',
      'class': stylesheet.bordered,
      top: '70%',
      left: '30%',
      width: '30%'
    });
  }
}

/**
 * Jobs component.
 */
class Jobs extends React.Component {
  render() {
    return React.createElement('box', {
      label: 'Jobs',
      'class': stylesheet.bordered,
      left: '60%',
      width: '40%',
      height: '60%'
    });
  }
}

/**
 * Progress component.
 */
class Progress extends React.Component {
  constructor(props) {
    super(props);

    this.state = { progress: 0, color: 'blue' };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.progress >= 100) return clearInterval(interval);

      this.setState({ progress: this.state.progress + 1 });
    }, 50);
  }

  componentWillMount() {
    clearInterval(this.interval);
    this.interval = null;
  }

  render() {
    const {progress} = this.state,
          label = `Progress - ${progress}%`;

    return React.createElement('progressbar', {
      label: label,
      onComplete: () => this.setState({color: 'green'}),
      'class': stylesheet.bordered,
      filled: progress,
      top: '60%',
      left: '60%',
      width: '40%',
      height: '10%',
      style: {bar: {bg: this.state.color}}
    });
  }
}

/**
 * Stats component.
 */
class Stats extends React.Component {
  render() {
    return React.createElement(
      'box',
      { label: 'Stats',
        'class': stylesheet.bordered,
        top: '70%',
        left: '60%',
        width: '40%',
        height: '31%'
      },
      'Some stats'
    );
  }
}

/**
 * Rendering the screen.
 */
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'react-blessed dashboard'
});

screen.key(['escape', 'q', 'C-c'], (ch, key) => process.exit(0));
ReactBlessed.render(React.createElement(Dashboard, null), screen);
