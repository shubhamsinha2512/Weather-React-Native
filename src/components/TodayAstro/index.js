import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AstroContainer from '../AstroContainer'

import { CurrentConext } from '../../contexts/CurrentContext'

const TodayAstro = () => {

    const {current} = useContext(CurrentConext)
    // console.log('astro',current)
    return (
        <View style={styles.container}>
            <AstroContainer title={'Sunrise'} value={current.sunrise ? current.sunrise.toString().toLowerCase() : 0} />
            <AstroContainer title={'Sunset'} value={current.sunrise ? current.sunset.toString().toLowerCase() : 0} />
            <AstroContainer title={'Precipitation'} value={current.precipitation ? current.precipitation+'%' : 0} />
            <AstroContainer title={'Humidity'} value={current.humidity ? current.humidity : 0} />
            <AstroContainer title={'Wind'} value={current.windspeed ? current.windspeed+'km/h' : 0} />
            <AstroContainer title={'Pressure'} value={current.pressure ? current.pressure+' bar' : 0} />
        </View>
    )
}

export default TodayAstro

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        paddingHorizontal:20,
        paddingVertical:20,
        backgroundColor:'#ffffff2f'
    }
})
