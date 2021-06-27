import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TimeSummary from '../TimeSummary'

const TodayForecast = () => {
    return (
        <View style={styles.container}>
            <TimeSummary time='2pm' temp='29'/>
            <TimeSummary time='2pm' temp='29'/>
            <TimeSummary time='2pm' temp='29'/>
            <TimeSummary time='2pm' temp='29'/>
            <TimeSummary time='2pm' temp='29'/>
        </View>
    )
}

export default TodayForecast

const styles = StyleSheet.create({
    container:{
        // borderWidth:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginHorizontal:20,
        marginVertical:20
    }
})
