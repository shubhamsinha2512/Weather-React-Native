import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Header = ({location}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <MaterialIcons name='location-on' size={24} color='#fff' />
            <Text style={styles.location}>{location ? location : 'location'}</Text>
        </TouchableOpacity>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20
    },
    location:{
        color:'#fff',
        fontSize:22,
        fontWeight:'600',
        marginLeft:10,
    }
})
