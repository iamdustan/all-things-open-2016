'use strict';

import React from 'react';
import {render} from './screen';
import GenericCounter from './GenericCounter';

const stylesheet = {
  bordered: {
    border: {type: 'line'},
    style: {
      border: {fg: 'blue'}
    }
  }
};

const Counter = (baseProps) => (
  <GenericCounter
    {...baseProps}
    render={(props, state) => (
      <element
        top={baseProps.top}
        left={baseProps.left}
        right={baseProps.right}
        width={baseProps.width}
        height={5}
      >
        <box
          label={'Count'}
          class={stylesheet.bordered}
        >
          <button
            align='center'
            valign='middle'
            height={3}
            left={0}
            right={0}
            style={{fg: 'white', bg:'#db4886'}}
            mouse
            onClick={props.onClick}
          >{state.count}</button>
        </box>
      </element>
    )}
  />
);

const App = (baseProps) => (
  <element>
    <box
      label={'Blessed Counter App'}
      class={stylesheet.bordered}
      top={'0%'}
      width={'100%'}
    >
      <Counter top={'20%'} left={'0%'} right={'50%'} width={'40%'} initialValue={5} />
      <Counter top={'20%'} left={'50%'} right={'0%'} width={'40%'} />
    </box>
  </element>
);

render(App);

