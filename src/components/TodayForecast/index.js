import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TimeSummary from '../TimeSummary'

import { TodayForecastContext } from '../../contexts/TodayForecastContext'

const TodayForecast = () => {

    const todayForecast = useContext(TodayForecastContext)
    // console.log('today', todayForecast)
    return (
        <View style={styles.container}>
            {todayForecast.map((hour, i)=>{
                return <TimeSummary 
                    key={'time'+i} 
                    time={hour.time} 
                    temp={hour.temp_c}
                />
            })}
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
