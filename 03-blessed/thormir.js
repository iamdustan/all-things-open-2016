'use strict';

const React = require('react');
const blessed = require('blessed');
const ReactBlessed = require('react-blessed');
const {Component} = React;

const commands = {
  "encounters": {
    keys: ['e'],
    callback: function () {
      console.log("You pressed: encounters");
    }
  },
  "npc": {
    keys: ['n'],
    callback: function () {
      console.log("You pressed: npcs");
    }
  },
  "monsters": {
    keys: ['m'],
    callback: function () {
      console.log("You pressed: monsters");
    }
  },
  "loot": {
    keys: ['l'],
    callback: function () {
      console.log("You pressed: loot");
    }
  }
};

const stylesheet = {
  bordered: {
    border: {
      type: "line"
    },
    style: {
      border: {
        fg: "blue"
      }
    }
  },
  listbar: {
    mouse: true,
    vi: true,
    style: {
      item: {
        hover: {
          bg: 'blue'
        }
      },
      selected: {
        bg: 'black',
        fg: 'blue'
      }
    }
  }
};

class Encounter extends Component {
  render() {
    return React.createElement('box', { 'class': stylesheet.bordered,
      label: 'Encounter',
      width: '60%',
      height: '97%' });
  }
}

class NPCs extends Component {
  constructor(props) {
    super(props);

    this.state = { npcs: [] };
  }

  render() {
    return React.createElement('box', { 'class': stylesheet.bordered,
      label: 'NPCs',
      left: '60%',
      width: '40%',
      height: '35%' });
  }
}

class Monsters extends Component {
  render() {
    return React.createElement('box', { 'class': stylesheet.bordered,
      label: 'Monsters',
      left: '60%',
      top: '35%',
      width: '40%',
      height: '35%' });
  }
}

class Loot extends Component {
  render() {
    return React.createElement('box', { 'class': stylesheet.bordered,
      label: 'Loot',
      left: '60%',
      top: '67%',
      width: '40%',
      height: '29%' });
  }
}

class NavigationBar extends Component {
  render() {
    return React.createElement('listbar', { 'class': stylesheet.listbar,
      commands: commands,
      top: '97%' });
  }
}

// Rendering a simple centered box
class App extends Component {
  render() {
    return React.createElement(
      'element',
      null,
      React.createElement(Encounter, null),
      React.createElement(NPCs, null),
      React.createElement(Monsters, null),
      React.createElement(Loot, null),
      React.createElement(NavigationBar, null)
    );
  }
}

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'thormir'
});

// Adding a way to quit the program
screen.key(['escape', 'C-c'], function (ch, key) {
  return process.exit(0);
});

// Rendering the React app using our screen
ReactBlessed.render(React.createElement(App, null), screen);
