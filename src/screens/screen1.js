import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Component1 } from '../components';

export class screen1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        {this.props.log === "yes" ? 'logged' : 'not logged'}
        <Component1 />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  log: state.user.log
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(screen1);
