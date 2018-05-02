import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Avatar, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  }
})

const list = [
  {
    title: 'Home',
    icon: 'home',
    route: 'home'
  },
  {
    title: 'Likes',
    icon: 'favorite',
    route: 'about'
  }
]

class DrawerContent extends React.Component {
  onPressHandler = i => {
    Actions[i.route].call()
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={{ padding: 10, backgroundColor: '#77b4b0' }}>
            <Avatar
              large
              rounded
              title="IH"
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
            />
            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 22 }}>
              @isamuhiro
            </Text>
            <Text style={{ color: '#fff', fontSize: 20 }}>
              isamuhirahata@gmail.com
            </Text>
          </View>
          <View>
            {list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                chevron
                onPress={() => this.onPressHandler(item)}
              />
            ))}
          </View>
        </View>
        <View>
          <View style={{ padding: 10, borderTopWidth: 1, borderColor: '#ccc' }}>
            <ListItem
              key="logout"
              title="Logout"
              leftIcon={{ name: "exit-to-app" }}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default DrawerContent
