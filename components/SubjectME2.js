import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

export default function SubjectCS3(props) {

  return (

    <View >
<LinearGradient colors={['#848AF28C','#fff','#5A61C9FF']} style={styles.header}>
      <LinearGradient colors={['#848AF28C', '#fff','#5A61C9FF']} style={styles.header}>
        <Text style={styles.header}><Image style={styles.wlogo} source={require('../assets/course.png')} />   Notes</Text>
      </LinearGradient>
      <ScrollView style={{ marginBottom: 100 }}>
        <LinearGradient colors={['#848AF28C','#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>DBMS</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>DAA</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>COI</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>ITCS</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>Machine Learning</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>Web Technology</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>Computer Network</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>Object Oriented Programming</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>Image Processing</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>Compiler Design</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>Computer Graphics</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => props.navigation.navigate('SplashScreen')}>
            <Text style={styles.btntext}>Software Engineering</Text>
          </TouchableOpacity>
        </LinearGradient>
        


      </ScrollView>
        </LinearGradient>
    </View>
  )

}


const styles = StyleSheet.create({

  header: {
    textAlign: 'center',
    fontSize: 36,
    marginBottom: responsiveHeight(2),
    color: 'black',

  },
  wlogo: {
    position: 'absolute',
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(8),
  },
  btntext: {
  
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    color: 'white',
    fontWeight: 'bold',

  },
  linearGradient: {
    flex:1,
    borderRadius: 20,
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(3),
    borderBottomWidth:2,
    borderEndColor:'black',
  }


})

