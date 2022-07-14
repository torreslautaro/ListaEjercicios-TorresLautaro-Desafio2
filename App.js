import { StyleSheet, View, TextInput, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react'
import CustomModal from './components/Modal'
import AddItem from './components/AddItem'
import List from './components/List'

export default function App( ) {
    
  const [text, setText] = useState('')
  const [ejercicios, setEjercicios] = useState([])
  const [ejercicioSelected, setEjercicioSelected] = useState([])
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerChangeItem = (text) => setText(text)

  const handleOnPress = () => {
    const ejercicio = {
      id: Math.random()*10,
      name: text,
      complete: false
    }
    
    setEjercicios([...ejercicios, ejercicio])

    setText('')
  }


  
  const handleOnPressFinish = (ejercicioId) => {
    const newStateEjercicios = ejercicios.map(ejercicio => {
      if(ejercicio.id === ejercicioId) {
        ejercicio.complete = true
      }
      return ejercicio
    })
    //console.log(newStateEjercicios)
    setEjercicios(newStateEjercicios)
  }

  const handleModal= (ejercicioId) => {
    const ejercicio = ejercicios.find(ejercicio => ejercicio.id === ejercicioId)

    setEjercicioSelected(ejercicio)
    
    setModalVisible(!modalVisible)
    
  }

  const handleOnPressAceptDelete = (ejercicioId) => {
    const newStateEjercicios = ejercicios.filter(ejercicio => ejercicio.id !== ejercicioId)

    setEjercicios(newStateEjercicios)
    setModalVisible(!modalVisible)
  }
   
  return (
    <View style={styles.screen}>
      <CustomModal 
        modalVisible={modalVisible}
        handleOnPressAceptDelete={handleOnPressAceptDelete}
        ejercicioSelected={ejercicioSelected}
        handleOnPressFinish={handleOnPressFinish}
        setModalVisible={setModalVisible}
      /> 
      <AddItem 
        text={text}
        handleOnPress={handleOnPress}
        onHandlerChangeItem={onHandlerChangeItem}
      />
      <List 
        ejercicios={ejercicios}
        handleModal={handleModal}
        handleOnPressFinish={handleOnPressFinish}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
})