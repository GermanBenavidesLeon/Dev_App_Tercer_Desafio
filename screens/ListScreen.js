import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Buttons } from "../Components/Buttons";
import Card from '../Components/Card';


const ListScreen = (props) => {
  
  return (
    <View style={styles.startContainer}>
        <View style={styles.textTitulo}>
            <Text style={styles.tituloTexto}>Lista de Entregas</Text>
        </View>
        <Card>
            <Text style={styles.closeText}>X</Text>
                
                <Buttons text='Paquetes Entregados'/>
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    startContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 10,
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        padding: 10,
        textAlign: 'center',
        marginBottom: 20,
    },
    inputTexts:{
        fontSize: 18,
        marginVertical: 10,
    },
    cardButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    textTitulo: {
        backgroundColor: 'black',
        marginVertical: 20,
        height: 70,
        width: 260,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
      tituloTexto: {
        color: '#F6ED0E',
        fontSize: 22,
        
      }
  });
  
export default ListScreen