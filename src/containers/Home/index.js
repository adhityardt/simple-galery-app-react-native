import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import GalleryScreen from '../Gallery';
import FavouriteScreen from '../Favourite';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Gallery"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => {
            return <Icon name="home" type="antdesign" color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({color}) => (
            <Icon name="heart" type="antdesign" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
