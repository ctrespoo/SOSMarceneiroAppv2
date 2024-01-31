import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import { Colors } from '../theme/color';
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../screens/Home';
import FavouriteTab from '../screens/FavouriteTab';
import Promo from '../screens/Promo';
import Profile from '../screens/Profile';
import FD1 from '../screens/FD1';
import Cart from '../screens/Cart';
import FD2 from '../screens/FD2';


const Tab = createBottomTabNavigator();

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function MyTabs() {

  const [darkMode, setDarkMode] = useState('false')

  return (
    <Tab.Navigator
      screenOptions={{
        // BottomTabBarHeight:30,
        tabBarStyle: { position: 'absolute', height: 70, paddingBottom: 5, backgroundColor: Colors.bg },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}>

      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Icons name={focused ? 'home' : 'home-outline'} size={30}
              color={focused ? Colors.primary : Colors.disable} />
          },
          headerShown: false,
        }}
      />

      <Tab.Screen name="FavouriteTab" component={FavouriteTab}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({ focused, color }) => {
            return <Icons name={focused ? 'heart' : 'heart-outline'} size={28}
              color={focused ? Colors.primary : Colors.disable} />
          },
          headerShown: false,
        }} />

      <Tab.Screen name="FD2" component={FD2}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({ focused, color }) => {
            return <Image source={ require('../../assets/image/Cart.png')} style={{ height: height / 18, width: width / 8, resizeMode: 'stretch' }} />
          },
          headerShown: false,
        }} />

      <Tab.Screen name="Promo" component={Promo}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({ focused, color }) => {
            return <Image source={focused ? require('../../assets/image/s31.png') : require('../../assets/image/s31d.png')} style={{ height: height / 32, width: width / 14, resizeMode: 'stretch' }} />
          },
          headerShown: false,
        }} />

      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({ focused, color }) => {
            return <Ionicons name={focused ? 'person' : 'person-outline'} size={25}
              color={focused ? Colors.primary : Colors.disable} />
          },
          headerShown: false,
        }} />

    </Tab.Navigator>
  );
}

