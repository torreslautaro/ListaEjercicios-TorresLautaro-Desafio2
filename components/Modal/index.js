import { Modal, View, Text, StyleSheet, Button } from 'react-native'


const CustomModal = ({ modalVisible, ejercicioSelected, handleOnPressAceptDelete, setModalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.modal}>
                <View style={styles.modalView}>
                    <View style={styles.modalMessage}>
                        <Text style={styles.modalTitle}>Estas seguro de borrar el ejercicio?</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text style={styles.modalItem}>{ejercicioSelected.name}</Text>
                    </View>
                    <View style={styles.modalButton}>
                        <View>
                          <Button color='green' onPress={() => handleOnPressAceptDelete(ejercicioSelected.id)} title='Aceptar' />
                        </View>
                        <View style={{marginLeft:10}}>
                          <Button color='red' onPress={() => setModalVisible(false)} title='Cancelar' />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
        },  
        modalView: {
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
        },
        modalMessage: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
        },
        modalButton: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
        },
        modalTitle: {
          fontSize: 16,
          fontWeight: 'bold'
        },
        modalItem: {
        fontSize: 24
        }
})

export default CustomModal