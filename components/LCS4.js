import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

const handleLinkPress = (url) => {
  Linking.openURL(url);
};
export default function Subject1(props) {

  return (

    <View >

      <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.header}>
        <Text style={styles.headertext}>   Lectures</Text>
      </LinearGradient>
      <ScrollView style={{ marginBottom: 120 }}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => handleLinkPress('https://facebook.com')}>
            <Text style={styles.btntext}>Cloud Computing</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => handleLinkPress('https://drive.google.com/file/d/1Nbj_NeOWUMS2His_jzLkV23VzpvErFnJ/view?usp=share_link')}>
            <Text style={styles.btntext}>Distributed System</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => handleLinkPress('https://facebook.com')}>
            <Text style={styles.btntext}>Data warehousing and Data mining</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => handleLinkPress('https://facebook.com')}>
            <Text style={styles.btntext}>Entrepreneurship Development</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => handleLinkPress('https://facebook.com')}>
            <Text style={styles.btntext}>PME </Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={() => handleLinkPress('https://facebook.com')}>
            <Text style={styles.btntext}>Web Designing</Text>
          </TouchableOpacity>
        </LinearGradient>




      </ScrollView>

    </View>
  )

}


const styles = StyleSheet.create({

  header: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: responsiveHeight(13),
    color: 'white',
    height: responsiveHeight(7),



  },
  headertext: {
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(14),
    color: 'white',
    fontWeight: 'bold',
  },

  btntext: {

    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    color: 'white',
    fontWeight: 'bold',

  },
  linearGradient: {
    flex: 1,
    borderRadius: 10,
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(3),
    borderBottomWidth: 2,
    borderEndColor: 'black',
  }


})

