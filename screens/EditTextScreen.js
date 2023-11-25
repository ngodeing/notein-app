import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, TextInput, ScrollView, Modal, Text, StyleSheet} from 'react-native';
import { addToAndroidCal } from './addToAndroidCal';


export default function EditTextScreen({navigation, route,notes}) {
    const [text, setText] = useState('');
    const [textjudul, setTextjudul] = useState('');
    const { onNoteSaved, initialNoteData } = route.params;
    const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);
  
    useEffect(() => {
      // Set initial values when the component mounts
      if (initialNoteData) {
        setTextjudul(initialNoteData.title || '');
        setText(initialNoteData.notes || '');
      }
    }, [initialNoteData]);
  
    const handleSave = () => {
      // Your logic to save the new note
      const newNote = { title: textjudul, notes: text };
  
      // Assume you have a newNote object with a title property
      const updatedNotes = [...notes, newNote];
  
      // Call the onNoteSaved function to update notes in NotesScreen
      onNoteSaved(updatedNotes);
  
      navigation.goBack();
    };

    const showDateReminder = () => {
      setConfirmationModalVisible(true);
    };
  
    return (
      <ScrollView backgroundColor= '#202326'>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202326', paddingTop:50 }}>
        <View
        style={{flex: 1, flexDirection: 'row', width: 370, justifyContent: 'space-between' , marginBottom: 50}}
        >
        <Pressable onPress={() => navigation.navigate('Notes')}>
            <Image
          style={{width: 20, height: 20, marginLeft: 20, justifyContent: 'flex-start'}}
          source={require('./../assets/images/back.png')}
        /></Pressable>
        <Pressable onPress={showDateReminder}>
            <Image
          style={{width: 20, height: 20, marginLeft: 10, justifyContent: 'flex-center'}}
          source={require('./../assets/images/calendar.png')}
        /></Pressable>
        <Pressable onPress={handleSave}>
        <Image
          style={{width: 20, height: 20, marginRight: 30 , justifyContent: 'flex-end'}}
          source={require('./../assets/images/save.png')}
        />
        </Pressable>
          </View>
        </View>
        <TextInput
          style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'left', marginBottom: 20, marginLeft: 30, color: 'white', width: 300,
          height: 70}}
          maxLength={35}
          placeholder="Tambahkan Judul"
          multiline={true}
          value={textjudul}
          onChangeText={(text) => {
            // Menghilangkan karakter khusus seperti \n
            const sanitizedText = text.replace(/\n/g, '');
            setTextjudul(sanitizedText);
          }}
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
            width: 335,
            height: 600,
            paddingTop: 10,
          }}
          placeholder="Tambahkan Teks"
          placeholderTextColor="grey"
          multiline={true}
          value={text}
          onChangeText={setText}
        />
    <Modal
      animationType="slide"
      transparent={true}
      visible={confirmationModalVisible}
      onRequestClose={() => setConfirmationModalVisible(false)}
    >
      <View
            style={{
              flex: 1,
              justifyContent: 'center',
              padding: 20,
              paddingTop: 250,
              backgroundColor: '#202326',
              alignItems: 'center',
            }}
          >
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 20,
                  textAlign: 'center',
                }}
              >
                Ingin Menambahkan Reminder?
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row-reverse',
                  justifyContent: 'center',
                  gap: 20,
                }}
              >
                <Pressable style={styles.addButtonY}
                onPress={() => {
                  const shareUrl = "https://www.youtube.com/watch?v=YysKbNk1tj0&ab_channel=Indently";
                
                  // Assuming you want to set the start date to the 26th of the current month
                  const startDate = new Date();
                  startDate.setDate(26);
                
                  // Assuming you want to set the end date to the 27th of the current month
                  const endDate = new Date();
                  endDate.setDate(27);
                
                  addToAndroidCal(
                    "Membuat Aplikasi Mobile",
                    startDate,
                    endDate,
                    "Indonesia",
                    shareUrl
                  );
                }}
                >
                  <Text style={{ color: 'white' }}>Ya</Text>
                </Pressable>
                <Pressable
                  onPress={() => setConfirmationModalVisible(false)}
                  style={styles.addButtonS}
                >
                  <Text style={{ color: 'white' }}>Tidak</Text>
                </Pressable>
              </View>
            </View>
          </View>
    </Modal>
      </ScrollView>
    )}

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
      addButtonY: {
        width: 100,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#FE0000',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
      },
      }
      
    );
