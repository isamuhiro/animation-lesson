import React, { Component } from "react";
import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(1)
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -1,
      duration: 500
    }).start(()=>{
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500
      }).start()
    });
  };

  render() {
    const animatedStyle = {
      transform: [
        {
          scaleY: this.state.animation
        }
      ]
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]}>
            <Text>Não fique tonto</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato"
  }
});

export default Login;
