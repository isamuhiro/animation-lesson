import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
  Text,
  AsyncStorage
} from 'react-native'
import LottieView from 'lottie-react-native'
import PlaceInput from '../PlaceInput/PlaceInput'
import PlaceList from '../PlaceList/PlaceList'
import PlaceDetail from '../PlaceDetail/PlaceDetail'
import axios from 'axios'

export default class Home extends Component {
  state = {
    places: [],
    selectedPlace: null,
    progress: new Animated.Value(0),
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

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: new Date().toString(),
          name: placeName,
          image: {
            uri:
              'https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg'
          }
        })
      }
    })
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key
        }),
        selectedPlace: null
      }
    })
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{`${this.state.user.name}`}</Text>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
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
