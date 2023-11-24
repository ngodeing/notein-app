import React, { useEffect, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, Pressable, ScrollView, BackHandler, Alert} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function PrimaryScreen({ navigation, route, notes, setNotes, trash}) {

  const [nama, setNama] = useState("User");

  const handleBackPress = () => {
    Alert.alert(
      "Konfirmasi",
      "Apakah Anda ingin keluar?",
      [
        {
          text: "Tidak",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Ya",
          onPress: () => BackHandler.exitApp()
        }
      ]
    );
    return true;
  };

  useEffect(() => {
    const loadNamaFromStorage = async () => {
      try {
        const storedNama = await AsyncStorage.getItem('nama');
        if (storedNama) {
          setNama(storedNama);
        }
      } catch (error) {
        console.error('Error loading nama from AsyncStorage:', error);
      }
    };

    // Cek apakah ada nama di params
    if (route.params && route.params.nama) {
      setNama(route.params.nama);
    } else {
      // Jika tidak ada di params, coba ambil dari AsyncStorage
      loadNamaFromStorage();
    }
    
  }, [route.params]);

  useFocusEffect(
    React.useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackPress
      );

      return () => {
        backHandler.remove();
      };
    }, [])
  );

    const updateNotes = (newNotes) => {
      setNotes(newNotes);
    };

    const navigateToOnlyRead = (noteData, index) => {
      navigation.navigate('OnlyRead', {
        onNoteSaved: updateNotes,
        initialNoteData: noteData,
        selectedIndex: index, // Include the index in the navigation params
      });
    };

    const navigateToEditText = (noteData) => {
      navigation.navigate('EditText', {
        onNoteSaved: updateNotes,
        initialNoteData: noteData,
      });
    };

    return (
      <View style={{ flex: 1, backgroundColor: '#202326' }}>
        <ScrollView>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202326', paddingTop: 60 }}>
            <Text style={styles.judul2Kiri}>Hello {nama}</Text>
            <Pressable
              style={styles.cardPanjang}
              flexDirection='row'
              gap={20}
              onPress={() => navigation.navigate('Notes')}
            >
              <View style={{ justifyContent: 'flex-start' }}>
                <Text style={styles.textCP}>Progress Saat ini</Text>
                <Text style={styles.paragraphCP}>Kamu telah membuat {notes.length} Notes saat ini Teruskan!</Text>
              </View>
              <View style={styles.progressContainer}>
                <LinearGradient
                  colors={['#00C2FF', '#0047FF']}
                  style={styles.circle}
                >
                  <Text style={styles.circleText}>{notes.length}</Text>
                </LinearGradient>
              </View>
            </Pressable>
  
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <Pressable
                style={styles.cardPendek}
                marginBottom={30}
                onPress={() => navigation.navigate('Notes')}
              >
                <Image
                  style={styles.imageKecil}
                  source={require('./../assets/images/notego.png')}
                />
                <Text style={styles.textCD}>Notes</Text>
                <Text style={styles.paragraphCD}>{notes.length} Notes</Text>
              </Pressable>
              <Pressable
                style={styles.cardPendek}
                marginBottom={30}
                onPress={() => navigation.navigate('TrashFile')}
              >
                <Image
                  style={styles.imageKecil}
                  source={require('./../assets/images/t4sampahputih.png')}
                />
                <Text style={styles.textCD}>Sampah</Text>
                <Text style={styles.paragraphCD}>{trash.length} Sampah</Text>
              </Pressable>
            </View>
  
            <Text style={styles.judul2Kiri}>Terbaru</Text>
  
          {notes.slice(-3).map((item, index) => (
              <Pressable
                key={index}
                style={styles.card}
                onPress={() => navigateToOnlyRead(item, index)}
              >
                <Text style={styles.textKiri} numberOfLines={1}>{item?.title}</Text>
                <Text style={styles.paragraph} numberOfLines={2}>{item?.notes}</Text>
              </Pressable>
            )).reverse()}
      </View>
      </ScrollView>
      <View style={styles.addButtonContainer}>
          <Pressable
            style={styles.addButton}
            onPress={navigateToEditText}
          >
            <Text style={styles.addButtonText}>+</Text>
          </Pressable>
        </View>
      </View>
      
      
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
      width: 300,
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
      width: 300,
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