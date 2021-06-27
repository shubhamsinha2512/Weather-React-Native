import React, {useContext} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { CurrentConext } from '../../contexts/CurrentContext'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'

import {weather} from '../../common/Strings/weather'
import {DayIcons, NightIcons} from '../../common/icons/index'

const CurrentSummary = () => {

    const {current} = useContext(CurrentConext)
    // console.log(current)

    function formatTemp(temp){
        return Math.round(temp).toFixed();
    }

    function getConditionText(condition_code, string_array, dayOrNight){
        // console.log('code', condition_code)
        const Condition_Obj =  string_array.find((obj)=>{
            // console.log(obj.code)
            if(obj.code == condition_code) return obj
        })

        const dn = dayOrNight == 'day' ? Condition_Obj.day : Condition_Obj.night;
        const icon = Condition_Obj.icon;

        return [dn, icon]
    }   

    const code_var = getConditionText(current.condition_code, weather, 'day');

    return (
        <View style={styles.container}>
            <View style={styles.left}>

                <Text style={styles.day}>Today</Text>

                <View style={styles.tempAll}>
                    <Text style={styles.tempNow}>{current.temp_now}&deg;C</Text>

                    <View style={styles.tempMinMax}>
                        <Text style={styles.max}>
                            <SimpleLineIcons name='arrow-up' size={12} color='#fff' /> {current.temp_max && formatTemp(current.temp_max)}&deg;C
                        </Text>

                        <Text style={styles.min}>
                            <SimpleLineIcons name='arrow-down' size={12} color='#fff' /> {current.temp_min && formatTemp(current.temp_min)}&deg;C
                        </Text>
                    </View>
                </View>

                <View style={styles.condition}>
                    <Text style={styles.conditionText}>{code_var[0]}</Text>
                    <Text style={styles.feelsLike}>Feels like {current.feelslike && formatTemp(current.feelslike)}&deg;</Text>
                </View>
            </View>

            <View style={styles.right}>
                <View style={styles.iconBG}>
                </View>
                    <Fontisto name='day-sunny' size={200} color='#fff' />
                    <Image source={DayIcons.d_icon + code_var[1]} />
            </View>
        </View>
    )
}

export default CurrentSummary

const styles = StyleSheet.create({
    container: {
        color:'#fff',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20,
        marginVertical:25,
        // borderWidth:1
    },
    left:{
        display:'flex',
    },
    day:{
        color:'#fff',
        fontSize:24,
        fontWeight:'bold'
    },
    tempAll:{
        display:'flex',
        marginVertical:10
    },
    tempNow:{
        color:'#fff',
        fontSize:56,
        fontWeight:'bold',
        marginVertical:10
    },
    tempMinMax:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    min:{
        color:'#fff',
        fontWeight:'bold'
    },
    max:{
        color:'#fff',
        fontWeight:'bold'
    },
    condition:{
        marginVertical:20
    },
    conditionText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    },
    feelsLike:{
        color:'#fff',
    },
    right:{
        position:'absolute',
        right:-130,
        backgroundColor:'#ffffff40',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        padding:30,
        borderRadius:200
    },
    iconBG:{
        color:'red',
    },


})
