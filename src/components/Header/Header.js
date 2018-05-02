import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Header } from 'react-native-elements'
import Title from './Title'
import Icon from 'react-native-vector-icons/Entypo'
import Logout from './Logout'
import Hamburguer from './Hamburguer'

export default props => {
  return (
    <Header
      leftComponent={<Hamburguer />}
      centerComponent={<Title title={'Catfy'} />}
      rightComponent={<Logout />}
      innerContainerStyles={styles.innerContainer}
      outerContainerStyles={styles.outerContainer}
    />
  )
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  outerContainer: {
    backgroundColor: '#77b4b0',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    padding: 15,
    height: 70
  }
})
