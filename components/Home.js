import React from 'react';
import { Text, View, StyleSheet,Linking, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

const handleLinkPress = (url) => {
  Linking.openURL(url);
  };
export default function HomeScreen(props) {

  return (

    <View >

      <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.header}>
        <Text style={styles.headertext}>Home</Text>

      </LinearGradient>

      <TouchableOpacity style={styles.container}
        onPress={ () =>handleLinkPress('https://www.youtube.com/live/86sCMfOK4xA?feature=share')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Scope</Text>
        </LinearGradient>
      </TouchableOpacity>

      

      <TouchableOpacity style={styles.container2} onPress={() => props.navigation.navigate('SelectPrefer')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Notes</Text>
        </LinearGradient>
      </TouchableOpacity>

      

      <TouchableOpacity style={styles.container}
       onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLWc1yfTYfqNFfeyUbhfUXY1LJrBGiPeGL')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Gain            Skills</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2} 
       onPress={ () =>handleLinkPress('https://youtu.be/QLqTYtka2Vg')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Practise        Sets</Text>
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('Coding')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Coding</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2} onPress={() => props.navigation.navigate('Internship')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Intership</Text>
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('AS')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Additional Skills</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2} onPress={() => props.navigation.navigate('Placement')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Placement</Text>
        </LinearGradient>
      </TouchableOpacity>
      

    </View>
  )

}


const styles = StyleSheet.create({

  header: {
    fontSize: responsiveFontSize(4),
    height: responsiveHeight(7),
    marginBottom: responsiveHeight(12)
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

