import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Buat komponen halaman pertama
function HomeScreen({ navigation }) {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Primary');
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
    navigation.navigate('Primary');
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
        onPress={() => navigation.navigate('Primary')}>
        <Text style={styles.text}>  Daftar  </Text>
        </Pressable>
      <Text style={styles.text2} marginTop={20} marginBottom={-50}>Sudah punya akun?
        <Text style={styles.masuk} onPress={handleNavigation}> Masuk</Text>
      </Text>
    </View>
  );
}

function PrimaryScreen({navigation}) {
  const data = [
    { title: 'Title 1', paragraph: 'Paragraph 1' },
    { title: 'Title 2', paragraph: 'Paragraph 2' },
    { title: 'Title 3', paragraph: 'Paragraph 3' },
    // Tambahkan data lainnya di sini jika diperlukan
  ];

  return (
    <ScrollView backgroundColor= '#202326'>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202326', paddingTop:80 }}>
      <Text style={styles.judul2Kiri}>Hello User</Text>
      <Pressable
        style={styles.cardPanjang} flexDirection= 'row'
        onPress={() => navigation.navigate('Login')}>
        <View style={{justifyContent:'flex-start'}}>
        <Text style={styles.textCP}>Today's Progress</Text>
        <Text style={styles.paragraphCP}>You have completed 5 of the 8 task, keep up the progress!!</Text>
        </View>
        <View style={styles.progressContainer}>
          <LinearGradient
            colors={['#00C2FF', '#0047FF']}
            style={styles.circle}
          >
            <Text style={styles.circleText}>75%</Text>
          </LinearGradient>
        </View>
        </Pressable>

        <View style={{flexDirection:'row', gap:20}}>
        <Pressable
        style={styles.cardPendek}
        onPress={() => navigation.navigate('Login')}>
        <Image
        style={styles.imageKecil}
        source={require('./assets/notego.png')}
      />
        <Text style={styles.textCD}>Notes</Text>
        <Text style={styles.paragraphCD}>10 Notes</Text>
        </Pressable>
        <Pressable
        style={styles.cardPendek}
        onPress={() => navigation.navigate('Login')}>
        <Image
        style={styles.imageKecil}
        source={require('./assets/notego.png')}
      />
        <Text style={styles.textCD}>To do List</Text>
        <Text style={styles.paragraphCD}>10 List</Text>
        </Pressable>
        </View>

        <Text style={styles.judul2Kiri}>Pending Task</Text>

        {data.map((item, index) => (
        <Pressable
          key={index}
          style={styles.cardPanjang}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textCP}>{item.title}</Text>
          <Text style={styles.paragraphCP}>{item.paragraph}</Text>
        </Pressable>
      ))}
    </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

// Buat navigator
function App() {
  return (
    <NavigationContainer backgroundColor= '#202326'>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Primary" component={PrimaryScreen} options={{ headerShown: false }}/>
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
  imageKecil:{
    width: 70,
    height: 80,
    marginBottom: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
    alignItems: 'center',
  },
  circle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    color: 'white',
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
  judul2Kiri: {
    fontWeight: 'bold',
    fontSize: 20,
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
  paragraphCP: {
    fontWeight: 'medium',
    fontSize: 16,
    color: 'gray',
    width: 170,
  },
  paragraphCD: {
    fontWeight: 'medium',
    fontSize: 15,
    color: 'gray',
    width: 80,
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
  cardPanjang: {
    paddingVertical: 25,
    paddingHorizontal: 25,
    marginBottom: 30,
    borderRadius: 25,
    width: 340,
    gap: 20,
    backgroundColor: '#2F3235',
  },
  cardPendek: {
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 30,
    width: 160,
    backgroundColor: '#2F3235',
  },
  text:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 100,
    paddingVertical: 8,
  },
  text2:{
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 320,
  },
  textCP:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: 170,
    marginBottom: 15,
  },
  textCD:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: 80,
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
