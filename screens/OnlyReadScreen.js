import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, TextInput, ScrollView} from 'react-native';


export default function OnlyReadScreen({navigation, route}) {
    const [text, setText] = useState('');
    const [textjudul, setTextjudul] = useState('');
    const { initialNoteData } = route.params;

    useEffect(() => {
        if (initialNoteData) {
          setTextjudul(initialNoteData.title || '');
          setText(initialNoteData.notes || '');
        }
      }, [initialNoteData]);
    
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#202326', paddingTop:50 }}>
        <View
        style={{flex: 1, flexDirection: 'row', width: 370, justifyContent: 'space-between' , marginBottom: 50}}
        >
        <Pressable onPress={() => navigation.navigate('Notes')}>
            <Image
          style={{width: 20, height: 20, marginLeft: 20, justifyContent: 'flex-start'}}
          source={require('./../assets/images/back.png')}
        /></Pressable>
          </View>
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
