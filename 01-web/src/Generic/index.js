import React from 'react';
import GenericCounter from '../GenericCounter';

const Counter = (rootProps) => (
  <GenericCounter
    {...rootProps}
    render={(props, state) => (
      <div className={'Container'} onClick={props.onClick}>
        <h2 className={'Header'}>React.js Counter</h2>
        <p>
          Click counter: {state.count}
        </p>
      </div>
    )}
  />
);

export default Counter;
