import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './index.style';
import PropsType from 'prop-types';

const Loader = ({visible}) => {
  if (!visible) {
    return null;
  }
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" />
    </View>
  );
};

Loader.propTypes = {
  visible: PropsType.bool,
};

Loader.defaultProps = {
  visible: true,
};

export default Loader;
