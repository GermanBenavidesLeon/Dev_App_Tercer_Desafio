import React from 'react';
import { View, Text, StyleSheet } from "react-native";

function Header(props){
    const { titulo } = props
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.textHeader}>{titulo}</Text>
        </View>       
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#F6ED0E',
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        fontSize: 30,
        fontFamily: 'RobotoCondensed'
    }
});

export default Header;