import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Fontisto from 'react-native-vector-icons/Fontisto'


const DayForecastRow = ({date, condition_code, max, min}) => {

    function getDay(date){
        let day = new Date(date).getDay();

        switch(day){
            case 0 : return 'Sunday';break;
            case 1 : return 'Monday';break;
            case 2 : return 'Tuesday';break;
            case 3 : return 'Wednesday';break;
            case 4 : return 'Thursday';break;
            case 5 : return 'Friday';break;
            case 6 : return 'Saturday';break;
            default: return 'Day Here'
        }
    }

    function formatTemp(temp){
        return Math.round(temp).toFixed()
    }

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.day}>{getDay(date)}</Text>
            <Fontisto name='day-sunny' size={20} color='#fff' />
            <Text style={styles.max}>{max ? formatTemp(max) : 28}&deg;C</Text>
            <Text style={styles.min}>{min ? formatTemp(min) : 14}&deg;C</Text>
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
