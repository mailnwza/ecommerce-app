import React from 'react';
import { View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';

import HomeScreen from '../screens/Home';
import CartScreen from '../screens/Cart';
import OrderScreen from '../screens/Category';
import WalletScreen from '../screens/Wallet';
import AccountScreen from '../screens/Account';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#222222' : '#828282' }}>Home</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={{ paddingTop: 5 }}>
              <Svg
                width={25}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="m22.243 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.997.997 0 0 0 .743-1.669Z"
                  fill={`${focused ? '#222222' : '#828282'}`}
                  fillOpacity={focused ? 1 : 0.7}
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={OrderScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#222222' : '#828282' }}>
              Category
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={{ paddingTop: 5 }}>
              <Svg
                width={25}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M5.5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7.5 7v1h-3a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2Zm12-12v2h-2v-2h2Zm-8-3c0-1.654 1.346-3 3-3s3 1.346 3 3v1h-6V7Zm-2 3h2v2h-2v-2Z"
                  fill={`${focused ? '#222222' : '#828282'}`}
                  fillOpacity={focused ? 1 : 0.7}
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarBadge: 3,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#222222' : '#828282' }}>Cart</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={{ paddingTop: 5 }}>
              <Svg
                width={25}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M22.322 7.431A1 1 0 0 0 21.5 7H7.833L6.679 4.23A1.994 1.994 0 0 0 4.833 3H2.5v2h2.333l4.744 11.385A1 1 0 0 0 10.5 17h8c.417 0 .79-.259.937-.648l3-8a.999.999 0 0 0-.115-.921ZM17.807 15h-6.64l-2.5-6h11.39l-2.25 6ZM11 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                  fill={`${focused ? '#222222' : '#828282'}`}
                  fillOpacity={focused ? 1 : 0.7}
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#222222' : '#828282' }}>
              Wallet
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={{ paddingTop: 5 }}>
              <Svg
                width={25}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M20.5 7V5c0-1.103-.897-2-2-2h-13c-1.654 0-3 1.346-3 3v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2Zm-2 9h-2v-4h2v4Zm-13-9a1.001 1.001 0 0 1 0-2h13v2h-13Z"
                  fill={`${focused ? '#222222' : '#828282'}`}
                  fillOpacity={focused ? 1 : 0.7}
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#222222' : '#828282' }}>
              Account
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={{ paddingTop: 5 }}>
              <Svg
                width={25}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <Path
                  d="M8 6.5c0 2.481 2.019 4.5 4.5 4.5S17 8.981 17 6.5 14.981 2 12.5 2A4.505 4.505 0 0 0 8 6.5ZM20.5 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17Z"
                  fill={`${focused ? '#222222' : '#828282'}`}
                  fillOpacity={focused ? 1 : 0.7}
                />
              </Svg>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
