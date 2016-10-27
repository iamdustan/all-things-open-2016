export default `import Counter from './Counter';
const BlessedCounter = (baseProps) => (
  <Counter
    {...baseProps}
    render={(props, state) => (
      <element {...containerLayout}>
        <box label={'Count'}>
          <button {...buttonLayout}
            mouse onClick={props.onClick}>
            {state.count}
          </button>
        </box>
      </element>
    )}
  />
);

export default BlessedCounter;`;
