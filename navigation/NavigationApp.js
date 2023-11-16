import React, { useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '../screens/DetailScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginScreen2 from '../screens/LoginScreen2';
import PrimaryScreen from '../screens/PrimaryScreen';
import EditTextScreen from '../screens/EditTextScreen';
import OnlyEditScreen from '../screens/OnlyEditScreen';
import NotesScreen from '../screens/NotesScreen';
import TrashFiles from '../screens/TrashFile';


const Stack = createStackNavigator();
export default function NavigationApp() {
  const [categories, setCategories] = useState([]);
  const [notes, setNotes] = useState([]);
  return (
    <NavigationContainer backgroundColor="#202326">
  <Stack.Navigator>
    <Stack.Screen
      name="Detail"
      component={DetailScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Primary"
      options={{ headerShown: false }}
    >
      {(props) => (
        <PrimaryScreen
          {...props}
          notes={notes}
          setNotes={setNotes}
        />
      )}
    </Stack.Screen>
    <Stack.Screen
      name="OnlyEdit"
      options={{ headerShown: false }}
    >
      {(props) => (
        <OnlyEditScreen
          {...props}
          notes={notes}
          setNotes={setNotes}
        />
      )}
    </Stack.Screen>
    <Stack.Screen
      name="EditText"
      options={{ headerShown: false }}
    >
      {(props) => (
        <EditTextScreen
          {...props}
          notes={notes}
          setNotes={setNotes}
        />
      )}
    </Stack.Screen>
    <Stack.Screen
      name="Login2"
      component={LoginScreen2}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Notes"
      options={{ headerShown: false }}
    >
      {(props) => (
        <NotesScreen
          {...props}
          notes={notes}
          setNotes={setNotes}
        />
      )}
    </Stack.Screen>
    <Stack.Screen
      name="TrashFile"
      component={TrashFiles}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
</NavigationContainer>
  );
}