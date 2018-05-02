import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'

const Hamburguer = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => Actions.drawerOpen()}>
        <Icon name="menu" color="#fff" size={30} />
      </TouchableOpacity>
    </View>
  )
}
export default Hamburguer
