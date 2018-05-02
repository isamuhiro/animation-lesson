import React, { Component } from 'react'
import { Font } from 'expo'
import { View, Text, StyleSheet } from 'react-native'

export default class Title extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'lobster-regular': require('../../assets/Lobster-Regular.ttf')
    })
    this.setState({ fontLoaded: true })
  }
  render() {
    return (
      <View style={{flex:1}}>
        {this.state.fontLoaded ? (
          <Text
            style={[
              { color: '#fff', fontSize: 30 },
              { fontFamily: 'lobster-regular' }
            ]}>
            {this.props.title}
          </Text>
        ) : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  h1: { color: '#fff', fontSize: 30 }
})
