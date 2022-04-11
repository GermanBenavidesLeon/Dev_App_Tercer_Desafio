import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = (props) => {
  return (
    <View style={{...styles.cardContainer, ...props.style}}>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#F6ED0E',
        width: 300,
        height: 420,
        marginTop: 10,
        borderRadius: 10,
        padding: 20,
    },
  });
  

export default Card