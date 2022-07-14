import { FlatList, TouchableOpacity, StyleSheet, Text,View, Button } from 'react-native'


const List = ({ ejercicios, handleModal,handleOnPressFinish }) => {
    return (
        <FlatList 
            data={ejercicios}
            renderItem={data => (
                <View style={styles.rutinaContainer}>
                  <View style={[styles.ejercicioContainer, data.item.complete ? styles.finishEjercicio : '']}>
                    <Text style={[styles.textoEjercicio, data.item.complete ? styles.finishTextoEjercicio : '']}>{data.item.name}</Text>
                    {
                      data.item.complete ? <Text style={{color:'white'}}>Completado💪!</Text>
                      : <View style={styles.actionsContainer}>
                          <View>
                            <Button title='✔' color={'green'} onPress={() => handleOnPressFinish(data.item.id)}/>
                          </View>
                          <View style={{marginLeft:10}}>
                            <Button title='✖' color={'red'} onPress={() => handleModal(data.item.id)}/>
                          </View>
                        </View>
                    }
                  </View>
                </View>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
  rutinaContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ejercicioContainer: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginBottom: 10,
      padding: 15,
      borderRadius : 5,
      borderWidth: 1
    },
    textoEjercicio: {
      width: '70%'
    },
    actionsContainer: {
      width: '30%',
      flexDirection:'row',
      justifyContent: 'space-around'
    },
    finishEjercicio: {
      backgroundColor: 'green',
      textDecorationColor: 'white'
    },
    finishTextoEjercicio: {
      color: 'white',
      textDecorationLine: 'line-through'
    },
})

export default List