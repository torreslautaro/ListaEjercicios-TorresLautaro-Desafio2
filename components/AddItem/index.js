import { View, TextInput, Button, StyleSheet } from 'react-native'

const AddItem = ({ text, onHandlerChangeItem, handleOnPress }) => {

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Escribe el ejercicio a realizar' 
                style={styles.input} 
                value={text}
                onChangeText={onHandlerChangeItem}  
            />
            <Button title='Add' onPress={handleOnPress} disabled={text.length < 1 ? true : false}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 25,
    width: '80%'
  },
})

export default AddItem