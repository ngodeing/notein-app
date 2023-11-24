import {Modal, View, Text, StyleSheet, Image, Pressable, ScrollView} from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';
import React, { useState} from 'react';


export default function TrashFiles({ navigation, trash, setTrash}) {
  const [trashToDelete, setTrashToDelete] = useState(null);
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);
  
  const deleteTrash = () => {
    const updatedTrash = trash.filter((trash) => trash !== trashToDelete);
    setTrash(updatedTrash);
  
    setTrashToDelete(null);
    setConfirmationModalVisible(false);
  };
  
  const showDeleteConfirmation = (trash) => {
    setTrashToDelete(trash);
    setConfirmationModalVisible(true);
  };
    return (
      <View style={{ backgroundColor: '#202326', flex:1, }}>
      <ScrollView>
              <Pressable
          style={{flex: 1, flexDirection: 'row', width: 370, justifyContent: 'space-between' , marginTop:50, marginBottom:50}}
          onPress={() => navigation.navigate('Primary')}>
            <Image
          style={{width: 20, height: 20, marginLeft: 20, justifyContent: 'flex-start'}}
          source={require('./../assets/images/back.png')}
        />
          </Pressable>
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#202326', paddingTop: 0 }}>
          <Text style={styles.judulKiri}>Sampah</Text>
          <View style={{flexDirection:'row', gap:20, flexWrap:"wrap", justifyContent:"center"}}>
          {trash.map((trash, index) => (
            <LongPressGestureHandler
            key={index}
            onHandlerStateChange={({ nativeEvent }) => {
              if (nativeEvent.state === 4) {
                showDeleteConfirmation(trash);
              }
            }}
          >
            <View
              key={index}
              style={styles.card}
              marginBottom = {0}
              >
              <Text style={styles.textKiri}>{trash.title}</Text>
              <Text style={styles.paragraph}>{trash.notes}</Text>
            </View>
            </LongPressGestureHandler>
          ))}
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
                Apakah catatan ini ingin dihapus secara permanen?
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row-reverse',
                  justifyContent: 'center',
                  gap: 20,
                }}
              >
                <Pressable onPress={deleteTrash} style={styles.addButtonY}>
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
          </View>
        </View>
      </ScrollView>
      </View>
    )
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
    addButtonY: {
      width: 100,
      height: 50,
      borderRadius: 15,
      backgroundColor: '#FE0000',
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