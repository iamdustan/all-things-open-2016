export default `import Counter from './Counter';
const DOMCounter = (baseProps) => (
  <Counter
    {...baseProps}
    render={(props, state) => (
      <div onClick={props.onClick}>
        Click counter:
        {state.count}
      </div>
    )}
  />
);`;
