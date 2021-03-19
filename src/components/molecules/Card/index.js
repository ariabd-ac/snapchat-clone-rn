import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser } from '../../../assets'
import { colors } from '../../../utils'

const Card = () => {
  return (
    <>
      <View style={styles.page}>
        <Image source={DummyUser} style={styles.avatar} />
        <View style={styles.desc}>
          <Text>Ari Abd.</Text>
          <Text>Tap to view - 12 Februari 2010</Text>
        </View>
        <View style={styles.iconNotif}></View>
      </View>
      <View style={styles.borderBottom}></View>
    </>
  )
}

export default Card

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 10,

  },
  iconNotif: {
    height: 20,
    width: 20,
    backgroundColor: colors.icon1,
  },
  avatar: {
    width: 78,
    height: 78,
    borderRadius: 78 / 2,
  },
  borderBottom: {
    backgroundColor: colors.border,
    height: 2,
  }

})
