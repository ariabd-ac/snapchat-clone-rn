import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Card, Gap } from '../../components';
import { colors } from '../../utils';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Text>Home</Text>
      </View>
      <ScrollView style={styles.content}>
        <Gap height={10} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.secondary,
    height: 60,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: -10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 12,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  }
});

export default Home
