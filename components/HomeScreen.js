import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen(props) {

  return (

    <View >

      <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.header}>
        <Text style={styles.headertext}>Student Ambition</Text>

      </LinearGradient>

      <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('SplashScreen')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Scope</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2} onPress={() => props.navigation.navigate('SplashScreen')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Lecture's</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('SplashScreen')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Notes</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2} onPress={() => props.navigation.navigate('SplashScreen')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Question    Paper</Text>
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('SplashScreen')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Gain Skills</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2} onPress={() => props.navigation.navigate('SplashScreen')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Coding Language</Text>
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('SplashScreen')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>DSA       Question</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2} onPress={() => props.navigation.navigate('SplashScreen')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Intership</Text>
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('SplashScreen')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Additional Skills</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2} onPress={() => props.navigation.navigate('SplashScreen')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Coding Sets</Text>
        </LinearGradient>
      </TouchableOpacity>
      

    </View>
  )

}


const styles = StyleSheet.create({

  header: {
    fontSize: responsiveFontSize(4),
    height: responsiveHeight(7),
    marginBottom: responsiveHeight(6)
  },

  headertext: {
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(14),
    color: 'white',
    fontWeight: 'bold',
  },

  btntext: {
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',

  },
  linearGradient: {
    flex: 1,
    borderRadius: 15,
    justifyContent: "center",
  },
  container: {
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(14),
    width: responsiveWidth(30),
    height: responsiveHeight(13),
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 100,
    shadowRadius: 10,
  },
  container2: {
    marginTop: responsiveHeight(-13),
    marginLeft: responsiveWidth(55),
    width: responsiveWidth(30),
    height: responsiveHeight(13),
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 100,
    shadowRadius: 10,
  },


})

