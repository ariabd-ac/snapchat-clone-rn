import React from 'react';
import {
  ScrollView, StyleSheet, Text, View,
} from 'react-native';
import { Home, Splashscreen } from './pages';

const App = () => (
  <View style={styles.Wraper}>
    <Home />
  </View>
);

const styles = StyleSheet.create({
  Wraper: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
