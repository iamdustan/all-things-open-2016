/**
 * @flow
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

type Props = {
  initialCount: number
};

type DefaultProps = {
  initialCount: number
};

type State = {
  count: number
};

export default class Counter extends Component {
  props:Props;
  state:State = {count: this.props.initialCount};
  static defaultProps = {
    initialCount: 0
  };

  _onPress = (event) => {
    this.setState(state => ({count: state.count +1}));
  };

  render() {
    return (
      <TouchableHighlight onPress={this._onPress} underlayColor={'transparent'}>
        <View style={styles.container}>
          <Text>
            Counter:
          </Text>
          <Text>{this.state.count}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
