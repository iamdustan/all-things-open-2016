export default `import GenericCounter from './GenericCounter'

const AframeCounter = ({
  initialValue, ...other
}) => (
  <GenericCounter
    initialValue={initialValue}
    render={(props, state) => (
      <Text
        onClick={props.onClick}
        text={\`Count: \${state.count}\`}
        color='#DADADA'
        position={'-1.75 1 -1'}
        {...other}
      />
    )}
  />
);

export default AframeCounter`;
