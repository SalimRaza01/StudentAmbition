import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
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
        <Text style={styles.header}>Student Ambition</Text>
 
      </LinearGradient>
      <ScrollView style={{ marginBottom: 100 }}>
        <LinearGradient colors={['#848AF28C','#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity 
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>Scope</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity 
            onPress={() => props.navigation.navigate('SelectPrefer')}>
            <Text style={styles.btntext}>Notes</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity 
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>Practise Sets</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity 
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>Internships</Text>
          </TouchableOpacity>
        </LinearGradient>
        
        
       
        


      </ScrollView>
       
    </View>
  )

}


const styles = StyleSheet.create({

  header: {
    textAlign: 'center',
    fontSize: responsiveFontSize(4),
    marginBottom: responsiveHeight(6),
    color: 'white',
    paddingTop:responsiveHeight(1)

  },
  
  btntext: {
  
    fontSize: responsiveFontSize(4),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    color: 'white',
    fontWeight: 'bold',

  },
  linearGradient: {
    flex:1,
    borderRadius: 30,
    width: responsiveWidth(90),
    height: responsiveHeight(15),
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(3),
    borderBottomWidth:2,
    borderEndColor:'black',
    paddingTop:responsiveHeight(1)
  },
  


})

