import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackView from "./auth/StackView";

export default function App() {

  return (
      <NavigationContainer>
          <StackView />
      </NavigationContainer>
  )
}