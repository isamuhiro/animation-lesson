import React, { Component } from 'react'
import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons'
import { Input, Button } from 'react-native-elements'
import { Font } from 'expo'

class ForgotPassword extends Component {
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
    const {
      inputContainer,
      input,
      box,
      textStyle,
      buttonStyle,
      buttonTitleStyle,
      h1
    } = styles
    return (
      <ImageBackground
        style={styles.container}
        source={require('../../assets/background.jpg')}>
        <View>
          {this.state.fontLoaded ? (
            <Text style={[h1, { fontFamily: 'lobster-regular' }]}>
              Forgot your Password?
            </Text>
          ) : null}
        </View>
        <Input
          placeholder="Email"
          leftIcon={<Icon.Foundation name="mail" size={24} color="#fff" />}
          containerStyle={inputContainer}
          inputStyle={{ color: '#FFF' }}
          inputContainerStyle={input}
          keyboardType="email-address"
        />
        <Button
          title="Send me an e-mail"
          titleStyle={buttonTitleStyle}
          buttonStyle={buttonStyle}
          containerStyle={{ width: '100%' }}
        />
        <View>
          <TouchableOpacity onPress={() => Actions.login()}>
            <Text style={textStyle}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    marginVertical: 40
  },

  buttonStyle: {
    backgroundColor: '#55efc4',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 50,
    padding: 10,
    margin: 10
  },
  h1: { color: '#fff', fontSize: 50, textAlign: 'center' },
  buttonTitleStyle: {
    fontWeight: '700',
    fontSize: 18
  },
  inputContainer: {
    width: '95%',
    backgroundColor: 'rgba(68,68,68,.8)',
    borderColor: 'rgba(0,0,0,0)',
    borderRadius: 50,
    marginVertical: 10
  },
  textStyle: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 18
  },
  input: {
    borderBottomColor: 'rgba(0,0,0,0)',
    padding: 10
  }
})

export default ForgotPassword
