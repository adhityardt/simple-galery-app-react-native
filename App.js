import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/containers/Home';
import PhotoDetailScreen from './src/containers/PhotoDetail';
import FavouriteScreen from './src/containers/Favourite';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Favourite"
          component={FavouriteScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={PhotoDetailScreen}
          options={{title: 'Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
