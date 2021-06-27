import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {DayForecastContext} from '../../contexts/DayForecastContext'


import DayForecastRow from '../DayForecastRow'

const FiveDayForecast = () => {

    const forecast = useContext(DayForecastContext)
    console.log("day",forecast)

    return (
        <View style={styles.container}>
            {forecast && forecast.map((day, i)=>{

                return <DayForecastRow 
                    key={'day'+i} 
                    date={day.date}
                    condition_code={day.condition_code}
                    min={day.temp_min}
                    max={day.temp_max}
                />
            })}
        </View>
    )
}

export default FiveDayForecast

const styles = StyleSheet.create({
    container:{
        // borderWidth:1,
        marginHorizontal:20,
        marginVertical:20
    }
})
