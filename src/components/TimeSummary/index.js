import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TimeSummary = ({time, temp}) => {

    
    function getHour(time){
        console.log(time.slice(11,13))
        let hour = time.slice(11,13);
        const ampm = hour >= 12 ? 'pm' : 'am';
        hour = parseInt(hour % 12) == 0 ? 12 : parseInt(hour%12);

        return hour + ampm;
    }

    function formatTemp(temp){
        return Math.round(temp).toFixed()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.time}>{getHour(time)}</Text>
            <Text style={styles.temp}>{formatTemp(temp)}&deg;C</Text>
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
