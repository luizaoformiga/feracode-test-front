import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Navigation from './navigation/navigation';

const Home: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#F57005" />

      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
};

export default Home;
