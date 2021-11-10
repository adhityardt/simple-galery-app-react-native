import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/containers/Home';
import GalleryScreen from './src/containers/Gallery';
import PhotoDetailScreen from './src/containers/PhotoDetail';
import FavouriteScreen from './src/containers/Favourite';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
          // options={{title: null}}
        />
        {/* <Stack.Screen
          name="Favourite"
          component={FavouriteScreen}
          // options={{title: 'Favourite'}}
        /> */}
        {/* <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
          // options={{title: 'Gallery'}}
        /> */}
        <Stack.Screen
          name="Detail"
          component={PhotoDetailScreen}
          // options={{headerShown: false}}
          options={{title: 'Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
