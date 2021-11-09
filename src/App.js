import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mapa from './views/mapa';

import { _100vh, _100vw } from './utils/var/css'
import Home from './views/home';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              "Inicio":"home",
              "Mapa":"ios-map",
              "default":"info"
            }
            let iconName;
            iconName = icons[route.name] || icons['default'] 
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#9EC1A3',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Mapa" component={Mapa} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

