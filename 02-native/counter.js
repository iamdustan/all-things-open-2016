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
import GenericCounter from './GenericCounter';

type Props = {initialValue?: number};

export default function Counter (baseProps:Props) {
  return (
    <GenericCounter
      {...baseProps}
      render={(props, state) => (
        <TouchableHighlight onPress={props.onClick} underlayColor={'transparent'}>
          <View style={styles.container}>
            <Text style={baseProps.style}>
              Counter:
            </Text>
            <Text style={baseProps.style}>{state.count}</Text>
          </View>
        </TouchableHighlight>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
