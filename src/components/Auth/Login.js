import React, { Component } from 'react'
import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons'
import { Input, Button } from 'react-native-elements'
import axios from 'axios'
import { Font } from 'expo'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false,
      user: {}
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'lobster-regular': require('../../assets/Lobster-Regular.ttf')
    })
    this.setState({ fontLoaded: true })
  }
  _emailHandler = username => {
    this.setState(prevState => {
      return { user: { ...prevState.user, username } }
    })
  }

  _passwordHandler = password => {
    this.setState(prevState => {
      return { user: { ...prevState.user, password } }
    })
  }

  submitHandler = () => {
    axios
      .post('http://192.168.0.4:8000/oauth/token', {
        ...this.state.user,
        grant_type: 'password',
        scope: '*',
        client_id: 2,
        client_secret: 'qzyUD8VfPbyI3zAoKNChQhG2Rw5Edn3Ueuu2KUHc'
      })
      .then(res => {
        this.setState({ user: { username: '', email: '', password: '' } })
        let bearer = `Bearer ${res.data.access_token}`
        console.log(bearer)
        axios
          .get(`http://192.168.0.4:8000/api/user`, {
            headers: { Authorization: bearer }
          })
          .then(res =>
            AsyncStorage.setItem('user_auth', JSON.stringify(res.data)).then(
              res => Actions.app()
            )
          )
      })
      .catch(error => {
        switch (error.response.data.hint) {
          case 'Check the `username` parameter':
            alert('Email inválido')
            break
          default:
            alert('Dados invalidos')
        }
      })
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
          <Icon.MaterialCommunityIcons name="cat" size={150} color="#fff" />
          {this.state.fontLoaded ? (
            <Text style={[h1, { fontFamily: 'lobster-regular' }]}>Catfy</Text>
          ) : null}
        </View>
        <Input
          placeholder="Email"
          leftIcon={<Icon.Foundation name="mail" size={24} color="#fff" />}
          containerStyle={inputContainer}
          inputStyle={{ color: '#FFF' }}
          inputContainerStyle={input}
          keyboardType="email-address"
          autoCapitalize={'none'}
          onChangeText={text => this._emailHandler(text)}
          value={this.state.user.username}
        />
        <Input
          placeholder="Password"
          leftIcon={<Icon.Foundation name="unlock" size={24} color="#fff" />}
          containerStyle={inputContainer}
          inputStyle={{ color: '#FFF' }}
          autoCapitalize={'none'}
          inputContainerStyle={input}
          color="#fff"
          secureTextEntry
          onChangeText={text => this._passwordHandler(text)}
          value={this.state.user.password}
        />

        <Button
          title="Get Started 🐱"
          titleStyle={buttonTitleStyle}
          buttonStyle={buttonStyle}
          containerStyle={{ width: '100%' }}
          onPress={() => this.submitHandler()}
        />
        <View style={box}>
          <TouchableOpacity
            onPress={() => {
              Actions.register()
            }}>
            <Text style={textStyle}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Actions.forgotPassword()
            }}>
            <Text style={textStyle}>Forgot Password?</Text>
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

export default Login
