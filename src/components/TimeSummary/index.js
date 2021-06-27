import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TimeSummary = ({time, temp}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.time}>{time}</Text>
            <Text style={styles.temp}>{temp}&deg;C</Text>
        </View>
    )
}

export default TimeSummary

const styles = StyleSheet.create({
    container:{
        margin:5,    
        backgroundColor:'#ffffff20',
        padding:8,
        borderRadius:5
    },
    time:{
        color:'#fff',
        fontSize:12,
        textAlign:'center',
    },
    temp:{
        color:'#fff',
        fontSize:16,
        textAlign:'center',
        fontWeight:'700',
        marginTop:10
    },
})
