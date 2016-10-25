import React from 'react';
import GenericCounter from './GenericCounter';

export default function Counter(baseProps) {
  return (
    <GenericCounter
      {...baseProps}
      render={(props, state) => (
        <element>
        </element>
      )}
    />
  );
}

