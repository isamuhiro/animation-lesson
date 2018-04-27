import React from 'react'
import { StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'

import Icon from 'react-native-vector-icons/Entypo'

export default props => {
  return (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff', size: 30 }}
      centerComponent={{ text: 'Catfy', style: { color: '#fff', fontSize:30 }  }}
      rightComponent={{ icon: 'home', color: '#fff', size: 30 }}
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
