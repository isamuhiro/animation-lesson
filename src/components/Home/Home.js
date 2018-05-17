import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Text,
  AsyncStorage,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { Tile } from 'react-native-elements'
import ProductList from '../Product/ProductList'
import axios from 'axios'

export default class Home extends Component {
  state = {
    todos: [],
    user: {},
    products: []
  }

  componentDidMount() {
    AsyncStorage.getItem('user_auth')
      .then(res => JSON.parse(res))
      .then(user => {
        axios
          .get('http://192.168.0.4:8000/api/products')
          .then(res => this.setState({ products: res.data, user }))
          .catch(e => console.log('nao buscou'))
      })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.user != {} ? (
          <Text>{`Welcome, ${this.state.user.name}`}</Text>
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
        {this.state.products !== [] ? (
          <ProductList data={this.state.products} />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
