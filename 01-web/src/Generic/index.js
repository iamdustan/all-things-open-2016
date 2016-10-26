import React from 'react';
import GenericCounter from '../GenericCounter';

const Counter = (rootProps) => (
  <GenericCounter
    {...rootProps}
    render={(props, state) => (
      <div className={'Container'}>
        <h2 className={'Header'}>React.js Counter</h2>
        <div onClick={props.onClick}>
          Click counter: {state.count}
        </div>
      </div>
    )}
  />
);

export default Counter;
