import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonsCancelar, ButtonsIngresar, ButtonsVer } from "../Components/Buttons";
import Card from '../Components/Card';
import Input from '../Components/Input';


const StartScreen = (props) => {
  
  return (
    <View style={styles.startContainer}>
        <View style={styles.textTitulo}>
            <Text style={styles.tituloTexto}>Entrega de Paquetes</Text>
        </View>
        <Card>
            <Text style={styles.inputText}>Ingresar Datos</Text>
                <Text style={styles.inputTexts}>Domicilio:</Text>
                <Input
                blurOnSubmit
                keyboardType='default'
                autoCorrect={false}
                autoCapitalization='none'
                maxLength={100}
                />
                <Text style={styles.inputTexts}>Nombre y apellido</Text>
                <Input
                blurOnSubmit
                keyboardType='default'
                autoCorrect={false}
                autoCapitalization='none'
                maxLength={100}
                />
                <View style={styles.cardButton}>
                    <ButtonsCancelar text="Cancelar" />
                    <ButtonsIngresar text="Ingresar" />
                </View>
                <ButtonsVer text='Ver Entregas'/>
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
        fontWeight: '600',
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
  
export default StartScreen