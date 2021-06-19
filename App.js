/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'

import icon1 from './src/common/icons/day/113.png'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from 'react-native-vector-icons/Fontisto'

import {DayIcons, NightIcons} from './src/common/icons'
import Gradients, {Sunny} from './src/common/gradients'
const App = () => {
    return (

      <SafeAreaView>
        <ScrollView style={styles.container}>
        <LinearGradient
        start={Sunny.start} 
        end={Sunny.end}
        // locations={[0,0.6]}
        colors={Sunny.colors} 
        style={styles.linearGradient}
      >
 
        <Image style={{width:64, height:64}} source={NightIcons.n_icon113} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon116} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon119} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon122} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon143} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon176} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon179} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon182} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon185} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon200} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon227} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon230} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon248} />
        {/* <Image style={{width:64, height:64}} source={NightIcons.n_icon260} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon263} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon266} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon281} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon284} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon293} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon296} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon299} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon302} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon305} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon308} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon311} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon314} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon317} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon320} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon323} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon326} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon329} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon332} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon335} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon338} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon350} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon353} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon356} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon359} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon362} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon365} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon368} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon371} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon374} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon377} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon386} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon389} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon392} />
        <Image style={{width:64, height:64}} source={NightIcons.n_icon395} />
  
        <Image style={{width:64, height:64}} source={DayIcons.d_icon113} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon116} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon119} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon122} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon143} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon176} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon179} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon182} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon185} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon200} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon227} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon230} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon248} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon260} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon263} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon266} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon281} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon284} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon293} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon296} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon299} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon302} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon305} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon308} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon311} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon314} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon317} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon320} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon323} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon326} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon329} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon332} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon335} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon338} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon350} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon353} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon356} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon359} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon362} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon365} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon368} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon371} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon374} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon377} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon386} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon389} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon392} />
        <Image style={{width:64, height:64}} source={DayIcons.d_icon395} /> 

        {/* <MaterialIcons name={'wb-sunny'} size={18} color={'#000'} />
        <MaterialIcons name={'bolt'} size={18} color={'#000'} />
        <Feather name='sunrise' size={24} color='#000' />
        <Fontisto name='day-sunny' size={128} color='#fff' /> */}
      </LinearGradient>

        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    display:'flex',
    height:'100%',
    backgroundColor:'#fff'
  },
  linearGradient:{
    color:'#fff',
    height:'100%'
  },
  text: {
    color:'#fff',
    fontSize:48
  }
});

export default App;
