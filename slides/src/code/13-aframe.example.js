export default `import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import React, {Component} from 'react';
import {Entity, Scene} from 'aframe-react';

import Camera from './components/Camera';
import Text from './components/Text';
import Sky from './components/Sky';
import Counter from './Counter';

class VRScene extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene>
        <Camera>
          <a-cursor animation__click="..." />
        </Camera>

        <Sky src="url(...)" />

        <Text
          text='Hello World!'
          color='#DADADA'
          position='-1.75 1 -3' />

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0'/>
        <Entity light={{type: 'directional', intensity: 1}} position='1 1 0'/>

        <Entity
          animation__rot={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__sca={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          geometry='primitive: box'
          material={{color: this.state.color, opacity: 0.6}}
          position='0 -0.5 -3'
          onClick={this.changeColor.bind(this)}>
          <Entity
            animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
            geometry='primitive: box; depth: 0.2; height: 0.2; width: 0.2'
            material={{color: '#24CAFF'}}/>
        </Entity>
      </Scene>
    );
  }
}

export default VRScene`;
