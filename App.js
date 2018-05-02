import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  Scene,
  Router,
  Tabs,
  Drawer,
  Stack,
} from 'react-native-router-flux'
import Home from './src/components/Home/Home'
import About from './src/components/Home/About'
import Login from './src/components/Auth/Login'
import Register from './src/components/Auth/Register'
import ForgotPassword from './src/components/Auth/ForgotPassword'
import Header from './src/components/Header/Header'
import TabIcon from './src/components/Tabbar/TabIcon'
import DrawerContent from './src/components/Drawer/DrawerContent'
const App = () => {
  return (
    <Router>
      <Stack hideNavBar key="root" titleStyle={{ alignSelf: 'center' }}>
        <Stack key="auth" titleStyle={{ alignSelf: 'center' }} navBar={Header}>
          <Scene hideNavBar key="login" component={Login} />
          <Scene hideNavBar key="register" component={Register} />
          <Scene hideNavBar key="forgotPassword" component={ForgotPassword} />
        </Stack>
        <Drawer
          hideNavBar
          key="drawer"
          contentComponent={DrawerContent}
          drawerWidth={300}>
          <Stack key="app" titleStyle={{ alignSelf: 'center' }} navBar={Header}>
            <Tabs
              key="tabbar"
              swipeEnabled
              tabBarPosition="bottom"
              inactiveBackgroundColor="#FFFFFF"
              activeBackgroundColor="#77b4b0"
              inactiveTintColor="#77b4b0"
              activeTintColor="#FFFFFF"
              showLabel={false}>
              <Scene
                key="home"
                component={Home}
                title="home"
                hideNavBar
                initial
                icon={TabIcon}
              />
              <Scene
                key="about"
                component={About}
                title="favorite"
                hideNavBar
                icon={TabIcon}
              />
            </Tabs>
          </Stack>
        </Drawer>
      </Stack>
    </Router>
  )
}

export default App
