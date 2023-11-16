import React, { useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();
export default function NavigationApp() {
  useEffect(() => {
    // Load notes from AsyncStorage when the app starts
    const loadNotes = async () => {
      try {
        const storedNotes = await AsyncStorage.getItem('notes');
        if (storedNotes) {
          setNotes(JSON.parse(storedNotes));
        }
      } catch (error) {
        console.error('Error loading notes from AsyncStorage:', error);
      }
    };

    loadNotes();
  }, []);

  const saveNotesToStorage = async (updatedNotes) => {
    try {
      // Save the updated notes array to AsyncStorage
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    } catch (error) {
      console.error('Error saving notes to AsyncStorage:', error);
    }
  };

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
          onNoteSaved={saveNotesToStorage}
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
          setNotes={(updatedNotes) => {
            setNotes(updatedNotes);
            saveNotesToStorage(updatedNotes);
          }}
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