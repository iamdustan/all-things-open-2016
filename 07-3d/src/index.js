import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Scene from './scene';

var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

var height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

ReactDOM.render(
  <Scene width={width} height={height} />,
  document.getElementById('root')
);
