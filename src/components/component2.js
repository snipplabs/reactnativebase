import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class component2 extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <View>
        <Text> component2 </Text>
      </View>
    );
  }
}
