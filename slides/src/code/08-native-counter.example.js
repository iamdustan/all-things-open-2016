export default `import Counter from './Counter';
const NativeCounter = (baseProps) => (
  <Counter
    {...baseProps}
    render={(props, state) => (
      <TouchableHighlight
        onPress={props.onClick}>
        <View>
          <Text>Counter: </Text>
          <Text>{state.count}</Text>
        </View>
      </TouchableHighlight>
    )}
  />
);

export default NativeCounter;`;
