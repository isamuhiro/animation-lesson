import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'

const Logout = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => Actions.login()}>
        <Icon name="exit-to-app" color="#fff" size={30} />
      </TouchableOpacity>
    </View>
  )
}
export default Logout
