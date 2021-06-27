import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AstroContainer from '../AstroContainer'

const TodayAstro = () => {
    return (
        <View style={styles.container}>
            <AstroContainer />
            <AstroContainer />
            <AstroContainer />
            <AstroContainer />
            <AstroContainer />
            <AstroContainer />
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
