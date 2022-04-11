import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export function Buttons(props) {
    const { onPress, text } = props

    return(
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: 'black'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#F6ED0E',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export function ButtonsIngresar(props) {
    const { onPress, text } = props

    return(
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: 'black'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#F6ED0E',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export function ButtonsCancelar(props) {
    const { onPress, text } = props

    return(
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#f44336'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: 'black',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export function ButtonsVer(props) {
    const { onPress, text } = props

    return(
        <TouchableOpacity
            style = {{
                ...styles.buttonStart,
                backgroundColor: 'black'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: '#F6ED0E',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        width: 100,
        height: 40,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    buttonText: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,
    },
    buttonStart: {
        height: 45,
        marginVertical: 20,
        borderRadius: 10,


    }
})