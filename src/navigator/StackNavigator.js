import { View, Text, StatusBar } from "react-native"
import React, { useState, useEffect } from "react"
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { EventRegister } from "react-native-event-listeners"
import { Colors } from "../theme/color"

import Login from "../screens/Login"
import Signup from "../screens/Signup"
import Forgot from "../screens/Forgot"
import Email from "../screens/Email"
import Phone from "../screens/Phone"
import NewPass from "../screens/NewPass"
import Success from "../screens/Success"
import FD1 from "../screens/FD1"
import Search from "../screens/Search"
import FavouriteTab from "../screens/FavouriteTab"
import Splash from "../screens/Splash"
import Introduction from "../screens/Introduction"
import Otp from "../screens/Otp"
import Otp2 from "../screens/Otp2"
import Home from "../screens/Home"
import FD2 from "../screens/FD2"
import FD3 from "../screens/FD3"
import SLocation from "../screens/SLocation"
import Cart from "../screens/Cart"
import Payment from "../screens/Payment"
import PaymentSetting from "../screens/PaymentSetting"
import Tracking from "../screens/Tracking"
import Promo from "../screens/Promo"
import Profile from "../screens/Profile"
import Notification from "../screens/Notification"
import DLocation from "../screens/DLocation"
import EditProfile from "../screens/EditProfile"
import MyTabs from "./BottomNavigator"

const Stack = createNativeStackNavigator()

export default function StackNavigator() {
  const [showSplashScreen, setshowSplashScreen] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false)
    }, 4000)
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          showSplashScreen ?

            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }} />
            : null
        }
        <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="FavouriteTab"
          component={FavouriteTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="DLocation"
          component={DLocation}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Promo"
          component={Promo}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="SLocation"
          component={SLocation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tracking"
          component={Tracking}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="PaymentSetting"
          component={PaymentSetting}
          options={{ headerShown: false }} />




        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FD1"
          component={FD1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FD3"
          component={FD3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FD2"
          component={FD2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Otp2"
          component={Otp2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Success"
          component={Success}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPass"
          component={NewPass}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Phone"
          component={Phone}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Email"
          component={Email}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
