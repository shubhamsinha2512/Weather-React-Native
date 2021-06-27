import React, { useContext} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet, ScrollView} from 'react-native'

import Gradient from '../common/gradients/index'
import {CurrentConext} from '../contexts/CurrentContext'
import {DayForecastContext} from '../contexts/DayForecastContext'
import {TodayForecastContext} from '../contexts/TodayForecastContext'

import CurrentSummary from '../components/CurrentSummary'
import Divider from '../components/Divider'
import TodayForecast from '../components/TodayForecast'
import FiveDayForecast from '../components/FiveDayForecast'
import TodayAstro from '../components/TodayAstro'
import Header from '../components/Header'

const HomeScreen = ({navigation}) => {

    const {location} = useContext(CurrentConext)  
    const todayForecast = useContext(TodayForecastContext)
    // const forecast = useContext(DayForecastContext)  
    // console.log(todayForecast)
    return (
            <LinearGradient style={styles.gradient}
                colors={Gradient.Cloudy}
                start={Gradient.start}
                end={Gradient.end}
            >
                <ScrollView style={styles.container}>
                    <Header location={location.name} />
                    <Divider />
                    <CurrentSummary />
                    <Divider />
                    <TodayForecast />
                    <Divider />
                    <FiveDayForecast />
                    <Divider />
                    <TodayAstro />
                </ScrollView>
            </LinearGradient>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    gradient:{
        flex:1,
    },
    container:{
        flex:1,
        backgroundColor:'#ffffff1f'
    }
})
