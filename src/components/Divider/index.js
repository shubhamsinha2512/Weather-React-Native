import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Divider = () => {
    return (
        <View style={styles.divider} />
    )
}

export default Divider

const styles = StyleSheet.create({
    divider:{
        borderBottomColor:'#ffffff40',
        borderBottomWidth:1,
    }
})
