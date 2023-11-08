import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput} from 'react-native';
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
      <Text style={styles.judulTengah}>NOTEin</Text>
    </LinearGradient>
  );
}

// Buat komponen halaman kedua
function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#202326'}}>
      <Image
        style={styles.image}
        source={require('./assets/first.png')}
      />
      <Text style={styles.judulKiri}>Jadikan Semua Rencanamu Terlaksana</Text>
      <Text style={styles.paragraph}>Tulis semua catatanmu dengan mudah dan sederhana hanya disini!</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Ayo Mulai</Text>
        </Pressable>
    </View>
  );
}

function LoginScreen({ navigation }) {
  const handleNavigation = () => {
    navigation.navigate('Detail');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202326' }}>
      <Text style={styles.judulKiri}>Siap Menjadi Produktif? Daftar</Text>
      <Text style={styles.textKiri} marginTop={30}>Nama</Text>
      <TextInput style={styles.input} placeholder="Masukkan Nama" placeholderTextColor="grey"/>
      <Text style={styles.textKiri}>Email</Text>
      <TextInput style={styles.input} placeholder="Masukkan Email" placeholderTextColor="grey"/>
      <Text style={styles.textKiri}>Kata Sandi</Text>
      <TextInput style={styles.input} placeholder="Masukkan Kata Sandi" secureTextEntry={true} placeholderTextColor="grey" marginBottom= {150} />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>  Daftar  </Text>
        </Pressable>
      <Text style={styles.text} marginTop={20} marginBottom={-50}>Sudah punya akun?
        <Text style={styles.masuk} onPress={handleNavigation}>Masuk</Text>
      </Text>
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
        <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
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
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    width: 320,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 30,
  },
  judulTengah: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    width: 320,
    textAlign: 'center',
    marginBottom: 20,
  },
  judulKiri: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    width: 320,
    textAlign: 'left',
    marginBottom: 30,
  },
  paragraph: {
    fontWeight: 'medium',
    fontSize: 16,
    color: 'gray',
    width: 320,
    marginBottom: 50,
  },
  image:{
    marginTop: 0,
    marginBottom: 70,
    width: 300,
    height: 300,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: '#007DFF',
  },
  text:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 100,
    paddingVertical: 8,
  },
  masuk:{
    color: '#007DFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  textKiri:{
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    width: 320,
    marginBottom: 10,
  }
  }
  
);

export default App;
