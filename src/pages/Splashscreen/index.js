import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import { Logo } from '../../assets';
import { colors } from '../../utils';

const Splashscreen = () => (
  <View style={styles.Wraper}>
    <Image source={Logo} style={styles.Logo} />
  </View>
);

const styles = StyleSheet.create({
  Wraper: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    height: 100,
    width: 100,
  }
});

export default Splashscreen;
