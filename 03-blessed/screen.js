'use strict';
const React = require('react');
const blessed = require('blessed');
const ReactBlessed = require('react-blessed');

/**
 * Rendering the screen.
 */
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'react-blessed dashboard'
});

screen.key(['escape', 'q', 'C-c'], (ch, key) => process.exit(0));
module.exports = {
  render(App, props) {
    return ReactBlessed.render(React.createElement(App, props), screen);
  }
};

