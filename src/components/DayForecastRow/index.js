import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Fontisto from 'react-native-vector-icons/Fontisto'


const DayForecastRow = ({day, icon, max, min}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.day}>Tuesday</Text>
            <Fontisto name='day-sunny' size={20} color='#fff' />
            <Text style={styles.max}>23&deg;C</Text>
            <Text style={styles.min}>12&deg;C</Text>
        </TouchableOpacity>
    )
}

export default DayForecastRow

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:15,
        paddingHorizontal:10,
        color:'#fff'
    },
    day:{
        color:'#fff',
        fontSize:16,
        fontWeight:'700'
    },
    min:{
        color:'#fff',
    },
    max:{
        color:'#fff',
        fontWeight:'700'
    },
})
