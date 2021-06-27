import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import DayForecastRow from '../DayForecastRow'

const FiveDayForecast = () => {
    return (
        <View style={styles.container}>
            <DayForecastRow />
            <DayForecastRow />
            <DayForecastRow />
            <DayForecastRow />
            <DayForecastRow />
        </View>
    )
}

export default FiveDayForecast

const styles = StyleSheet.create({
    container:{
        // borderWidth:1,
        marginHorizontal:20
    }
})
