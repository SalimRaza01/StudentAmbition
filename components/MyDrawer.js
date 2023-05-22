
import React from 'react';
import { Text, View, StyleSheet,Linking, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';


export default function MyDrawer(props) {

  return (

      <View>
      <LinearGradient colors={['#FFFF', '#FFFF']}  style={styles.header}>
        <Text style={styles.headertext}>Student Ambition</Text>
      </LinearGradient>

      <TouchableOpacity style={styles.container}
       onPress={() => props.navigation.navigate('Home')}>
        <LinearGradient colors={['#5A61C9FF', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Home</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container2}
        onPress={() => props.navigation.navigate('Coding')}>
        <LinearGradient colors={['#5A61C9FF', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Coding</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container3}
        onPress={() => props.navigation.navigate('Placement')}>
        <LinearGradient colors={['#5A61C9FF', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Placement</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container4}
         onPress={() => props.navigation.navigate('Internship')}>
        <LinearGradient colors={['#5A61C9FF', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Internship</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container7}
         onPress={() => props.navigation.navigate('AS')}>
        <LinearGradient colors={['#5A61C9FF', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Additional Skills</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container5}
        onPress={ () =>handleLinkPress('https://www.youtube.com/live/86sCMfOK4xA?feature=share')}>
        <LinearGradient colors={['#5A61C9FF', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Logout</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container6}
       onPress={() => props.navigation.navigate('AboutPage')}>
        <LinearGradient colors={['#5A61C9FF', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>AboutUs</Text>
        </LinearGradient>
      </TouchableOpacity>
      </View>
    // <View style={styles.header2}>



    // </View>
  )

}


const styles = StyleSheet.create({

  header: {
    width: responsiveWidth(50),
    fontSize: responsiveFontSize(4),
    height: responsiveHeight(100),


  },
  header2: {
    backgroundColor:'transparent',
    // width: responsiveWidth(50),
    height: responsiveHeight(100),
  },

  headertext: {
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(6),
    marginLeft: responsiveWidth(6),
    color: '#5A61C9FF',
    fontWeight: 'bold',
  
  },

  btntext: {
    fontSize: responsiveFontSize(1.5),
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
    marginLeft: responsiveWidth(7),

  },
  linearGradient: {
    flex: 1,
    borderRadius: 0,
    justifyContent: "center",
  },
  container: {
    position:'absolute',
    marginTop: responsiveHeight(15),
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    opacity:0.8,
  },
  container2: {
    position:'absolute',
    marginTop: responsiveHeight(22),
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    opacity:0.8,
  },
  container3: {
    position:'absolute',
    marginTop: responsiveHeight(29),
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    opacity:0.8,
  },
  container4: {
    position:'absolute',
    marginTop: responsiveHeight(36),
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    opacity:0.8,

  },  container5: {
    position:'absolute',
    marginTop: responsiveHeight(90),
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    opacity:0.8,
  },
  container6: {
    position:'absolute',
    marginTop: responsiveHeight(83),
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    opacity:0.8,
  },
  container7: {
    position:'absolute',
    marginTop: responsiveHeight(43),
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    opacity:0.8,
  },




})

