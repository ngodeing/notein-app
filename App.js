import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Buat komponen halaman pertama
function HomeScreen({ navigation }) {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Detail');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#202326', '#1C9DBE']}
      style={styles.container}
    >
      <Text style={styles.text}>NOTEin</Text>
    </LinearGradient>
  );
}

// Buat komponen halaman kedua
function DetailScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Halaman Detail</Text>
    </View>
  );
}

const Stack = createStackNavigator();

// Buat navigator
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
  },
});

export default App;
