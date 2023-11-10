import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

  const data = [
    { title: 'Menyelesaikan Design Mockup', paragraph: 'Deadline: Monday' },
    { title: 'Menyelesaikan app nya', paragraph: 'Deadline: Monday' },
    { title: 'Membuat Laporan Aplikasi', paragraph: 'Deadline: Monday' },
    // Tambahkan data lainnya di sini jika diperlukan
  ];
// Buat komponen halaman pertama
function HomeScreen({ navigation }) {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Detail');
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#202326', '#1C9DBE']}
      style={styles.container}
    >
      <Pressable
    onPress={() => navigation.navigate('Detail')}>
      <Text style={styles.judulTengah}>NOTEin</Text>
      </Pressable>
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
    navigation.navigate('Login2');
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

function LoginScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202326' }}>
      <Text style={styles.judulKiri}>Login</Text>
      <Text style={styles.textKiri}>Email</Text>
      <TextInput style={styles.input} placeholder="Masukkan Email" placeholderTextColor="grey"/>
      <Text style={styles.textKiri}>Kata Sandi</Text>
      <TextInput style={styles.input} placeholder="Masukkan Kata Sandi" secureTextEntry={true} placeholderTextColor="grey" marginBottom= {150} />
      <Pressable
        style={styles.button}
        marginTop={-100}
        onPress={() => navigation.navigate('Primary')}>
        <Text style={styles.text}>  Login  </Text>
        </Pressable>
    </View>
  );
}

function PrimaryScreen({navigation}) {
  return (
    <ScrollView backgroundColor= '#202326'>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202326', paddingTop:80 }}>
      <Text style={styles.judul2Kiri}>Hello User</Text>
      <Pressable
        style={styles.cardPanjang} flexDirection= 'row' gap={20}
        onPress={() => navigation.navigate('EditText')}>
        <View style={{justifyContent:'flex-start'}}>
        <Text style={styles.textCP}>Progress Hari ini</Text>
        <Text style={styles.paragraphCP}>Kamu telah menyelesaikan tugas sebanyak 75% Teruskan!</Text>
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
        onPress={() => navigation.navigate('EditText')}>
        <Image
        style={styles.imageKecil}
        source={require('./assets/notego.png')}
      />
        <Text style={styles.textCD}>Notes</Text>
        <Text style={styles.paragraphCD}>10 Notes</Text>
        </Pressable>
        <Pressable
        style={styles.cardPendek}
        onPress={() => navigation.navigate('EditText')}>
        <Image
        style={styles.imageKecil}
        source={require('./assets/notegoo.png')}
      />
        <Text style={styles.textCD}>To do List</Text>
        <Text style={styles.paragraphCD}>10 List</Text>
        </Pressable>
        </View>

        <Text style={styles.judul2Kiri}>Terbaru</Text>

        {data.map((item, index) => (
        <Pressable
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate('EditText')}
        >
          <Text style={styles.textCP}>{item.title}</Text>
          <Text style={styles.paragraphCP}>{item.paragraph}</Text>
        </Pressable>
      ))}
    </View>
    </ScrollView>
  );
}

function EditTextScreen({navigation}) {
  const [text, setText] = useState('');
  const [textjudul, setTextjudul] = useState('');

  const calculateNumberOfLinesjudul = () => {
    const lines = textjudul.split('\n');
    return lines.length;
  }
  const calculateNumberOfLines = () => {
    const lines = text.split('\n');
    return lines.length;
  };
  return (
    <ScrollView backgroundColor= '#202326'>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202326', paddingTop:80 }}>
      <Pressable
        style={{flex: 1, flexDirection: 'row', width: 370, justifyContent: 'space-between' , marginBottom: 50}}
        onPress={() => navigation.navigate('Primary')}>
          <Image
        style={{width: 20, height: 20, marginLeft: 20, justifyContent: 'flex-start'}}
        source={require('./assets/back.png')}
      />
      <Image
        style={{width: 20, height: 20, marginRight: 30 , justifyContent: 'flex-end'}}
        source={require('./assets/save.png')}
      />
        </Pressable>
      </View>
      <TextInput
        style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'left', marginBottom: 20, marginLeft: 30, color: 'white', width: 300,
        height: 20 + (calculateNumberOfLinesjudul()*35) }}
        placeholder="Tambahkan Judul"
        multiline={true}
        value={textjudul}
        onChangeText={setTextjudul}
        placeholderTextColor="grey"
      />
      <TextInput
        style={{
          fontSize: 16,
          fontWeight: 'medium',
          textAlignVertical: 'top',
          marginBottom: 20,
          marginLeft: 32,
          color: 'white',
          width: 300,
          height: 50 + (calculateNumberOfLines()*20),
          paddingTop: 10,
        }}
        placeholder="Tambahkan Teks"
        placeholderTextColor="grey"
        multiline={true}
        value={text}
        onChangeText={setText}
      />
    
    </ScrollView>
  )}

const Stack = createStackNavigator();

function NoteCategories({ navigation }) {
  const categories = [
    { title: "Study", notes: 10 },
    { title: "Personal", notes: 5 },
    { title: "UI/UX Design", notes: 10 },
    { title: "Blog Post", notes: 5 },
    // Tambahkan lebih banyak kategori jika diperlukan
  ];

  return (
    <ScrollView style={{ backgroundColor: '#202326' }}>
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#202326', paddingTop: 80 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 20 }}>Notes</Text>
        
        {categories.map((category, index) => (
          <Pressable
            key={index}
            style={{ flexDirection: 'row', width: 370, justifyContent: 'space-between', marginBottom: 10 }}
            onPress={() => navigation.navigate('Primary')}>
            <Text style={{ color: 'white' }}>{category.title}</Text>
            <Text style={{ color: 'white' }}>{category.notes} notes</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  )
}


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
        <Stack.Screen name="EditText" component={EditTextScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login2" component={LoginScreen2} options={{ headerShown: false }}/>
        <Stack.Screen name="NoteC" component={NoteCategories} options={{ headerShown: false }}/>
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
    backgroundColor: '#2F3235',
  },
  card: {
    paddingVertical: 15,
    gap: 5,
    paddingHorizontal: 20,
    marginBottom: 30,
    borderRadius: 15,
    width: 340,
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
    marginBottom: 10,
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
