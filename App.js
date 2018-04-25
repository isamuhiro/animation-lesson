import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Scene, Router, Tabs, Drawer, Stack } from "react-native-router-flux";
import Home from "./src/components/Home/Home";
import Login from "./src/components/Auth/Login";
import Register from "./src/components/Auth/Register";
import ForgotPassword from "./src/components/Auth/ForgotPassword";

const getSceneStyle = () => ({
  backgroundColor: "#F5FCFF",
  shadowOpacity: 1,
  shadowRadius: 3
});

const Header = () => (
  <View>
    <Text>Meu header lindão</Text>
  </View>
);

const App = () => {
  return (
    <Router>
      <Stack hideNavBar key="root" titleStyle={{ alignSelf: "center" }}>
        <Stack key="auth" titleStyle={{ alignSelf: "center" }} navBar={Header}>
          <Scene hideNavBar key="login" component={Login}/>
          <Scene hideNavBar key="register" component={Register}/>
          <Scene hideNavBar key="forgotPassword" component={ForgotPassword}/>
        </Stack>
        <Scene key="home" hideTabBar component={Home} />
      </Stack>
    </Router>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  tabBarStyle: {
    backgroundColor: "#eee"
  },
  tabBarSelectedItemStyle: {
    backgroundColor: "#ddd"
  }
});
