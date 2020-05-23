import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {FormScreen, ListScreen} from './src';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Navigator initialRouteName="List">
          <Screen
            name="Form"
            component={FormScreen}
            options={{title: 'Nueva Tarea'}}
          />
          <Screen
            name="List"
            component={ListScreen}
            options={{title: 'Lista de Tareas'}}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
