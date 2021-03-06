import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AstroContainer = ({title, value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export default AstroContainer

const styles = StyleSheet.create({
    container:{
        padding:20,
        width:'50%'
    },
    title:{
        color:'#fff',
        fontSize:14
    },
    value:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        marginTop:10
    }
})
