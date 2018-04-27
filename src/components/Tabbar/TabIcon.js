import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'

const TabIcon = ({ focused, title }) => {
  return <Icon name={title} color={focused ? '#FFFFFF' : '#77b4b0'} size={30} />
}

export default TabIcon
