export default `import GenericCounter from './GenericCounter'

const HardwareCounter = (baseProps) => (
  <GenericCounter
    {...baseProps}
    render={(props, state) => (
      <Container>
        <BlinkingLed
          pin={baseProps.led || 13}
          count={state.count}
        />
        <Button
          pin={baseProps.button || 2}
          onUp={props.onClick}
        />
      </Container>
    )}
  />
);

export default HardwareCounter;`;
