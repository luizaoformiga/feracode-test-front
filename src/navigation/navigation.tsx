import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Wallet } from '../screens';
import colors from './styles/colors';
import icons from './icons';

const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: colors.backgroundColor,
          borderTopColor: colors.borderTopColor,
        },
        activeTintColor: colors.activeTintColor,
        inactiveTintColor: colors.inactiveTintColor
      }}
    >
      <Tab.Screen
        name="Home"
        component={ Home }
        options={{ title: 'Home' }}
      />
      
      <Tab.Screen
        name="Wallet"
        component={ Wallet }
        options={{ title: 'Leagues' }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;