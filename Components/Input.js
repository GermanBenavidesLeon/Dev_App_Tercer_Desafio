import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const Input = (props) => {
  return (
    <View>
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginVertical: 10,
        height: 24,
        width: 250,
       
    },
});

export default Input