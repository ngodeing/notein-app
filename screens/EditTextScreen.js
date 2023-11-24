import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, TextInput, ScrollView} from 'react-native';


export default function EditTextScreen({navigation, route,notes}) {
    const [text, setText] = useState('');
    const [textjudul, setTextjudul] = useState('');
    const { onNoteSaved, initialNoteData } = route.params;
  
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
      
      </ScrollView>
    )}
