import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';

// Screens
import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';

// context
import {TaskProvider} from './contexts/TaskContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <TaskProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="TaskList">
            <Stack.Screen
              name="TaskList"
              component={HomeScreen}
              options={{
                title: 'Task List',
                headerStyle: {
                  backgroundColor: '#212121',
                },
                headerTitleStyle: {
                  color: '#fff',
                },
              }}
            />
            <Stack.Screen
              name="TaskForm"
              component={TaskFormScreen}
              title="Add TAsk"
              options={{
                title: 'Create Task',
                headerStyle: {
                  backgroundColor: '#212121',
                },
                headerTitleStyle: {
                  color: '#fff',
                },
                headerTintColor: '#fff',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TaskProvider>
    </NativeBaseProvider>
  );
};

export default App;
