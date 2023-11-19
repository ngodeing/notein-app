import React, { useState} from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, ScrollView} from 'react-native';

export default function LoginScreen({ navigation }) {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [kataSandi, setKataSandi] = useState('');
    const [errorText, setErrorText] = useState('');
  
    const handleNavigation = () => {
      navigation.navigate('Login2');
    };
  
    const handleDaftar = () => {
      if (nama === '' || email === '' || kataSandi === '') {
        // Set pesan kesalahan jika salah satu input kosong
        setErrorText('Jangan kosongkan bagian yang belum diisi');
      } else {
        // Lanjutkan dengan navigasi jika semua input telah diisi
        navigation.navigate('Primary', { nama: nama });
      }
    };
  
    return (
      <ScrollView style={{backgroundColor:'#202326'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202326', paddingVertical:100 }}>
        <Text style={styles.judulKiri}>Siap Menjadi Produktif? Daftar</Text>
        <Text style={styles.textKiri} marginTop={30}>Nama</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Nama"
          placeholderTextColor="grey"
          value={nama}
          onChangeText={(text) => setNama(text)}
        />
        <Text style={styles.textKiri}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Email"
          placeholderTextColor="grey"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.textKiri}>Kata Sandi</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Kata Sandi"
          secureTextEntry={true}
          placeholderTextColor="grey"
          value={kataSandi}
          onChangeText={(text) => setKataSandi(text)}
          marginBottom={150}
        />
        <Pressable style={styles.button} onPress={handleDaftar}>
          <Text style={styles.text}>  Daftar  </Text>
        </Pressable>
        {errorText && <Text style={{ color: 'red' }}>{errorText}</Text>}
        <Text style={styles.text2} marginTop={20} marginBottom={-50}>
          Sudah punya akun?
          <Text style={styles.masuk} onPress={handleNavigation}> Masuk</Text>
        </Text>
      </View>
      </ScrollView>
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
      marginBottom: 25,
      borderRadius: 15,
      width: 340,
      backgroundColor: '#2F3235',
    },
    cardPendek: {
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 15,
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
    },
    addButtonContainer: {
      position: 'absolute',
      bottom: 20,
      right: 20,
    },
    addButton: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#007DFF',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 5,
    },
    addButtonS: {
      width: 100,
      height: 50,
      borderRadius: 15,
      backgroundColor: '#007DFF',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 5,
    },
    addButtonText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    }
    
  );