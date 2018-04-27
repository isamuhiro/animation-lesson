import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Text,
  AsyncStorage
} from 'react-native'
import axios from 'axios'

export default class Home extends Component {
  state = {
    todos: [],
    user: {}
  }

  componentDidMount() {
    AsyncStorage.getItem('user_auth')
      .then(res => JSON.parse(res))
      .then(user =>
        axios
          .get('http://192.168.0.4:8000/api/todo')
          .then(res => this.setState({ todos: res.data, user }))
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{`${this.state.user.name}`}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})
