import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image,Linking, TouchableOpacity } from 'react-native';
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
        <Text style={styles.headertext  }>   Notes</Text>
      </LinearGradient>
      <ScrollView style={{ marginBottom: 120 }}>
        <LinearGradient colors={['#848AF28C','#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://facebook.com')}>
            <Text style={styles.btntext}>Water Resources Engg.</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/file/d/1Nbj_NeOWUMS2His_jzLkV23VzpvErFnJ/view?usp=share_link')}>
            <Text style={styles.btntext}>DSS</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://facebook.com')}>
            <Text style={styles.btntext}>Bridge Engg.</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://facebook.com')}>
            <Text style={styles.btntext}>Finite Element methods</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://facebook.com')}>
            <Text style={styles.btntext}>Engineering  Hydrology</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://facebook.com')}>
            <Text style={styles.btntext}>PAS</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://facebook.com')}>
            <Text style={styles.btntext}>Open Channel Flow</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://facebook.com')}>
            <Text style={styles.btntext}>PMCP</Text>
          </TouchableOpacity>
          </LinearGradient>
          <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://facebook.com')}>
            <Text style={styles.btntext}>Environmental Geo-technology</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://facebook.com')}>
            <Text style={styles.btntext}>Tunnel Engg.</Text>
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
    marginBottom: responsiveHeight(6),
    color: 'white',
    height:responsiveHeight(7),
   
    

  },
  headertext: {
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(12),
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
    flex:1,
    borderRadius: 10,
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(3),
    borderBottomWidth:2,
    borderEndColor:'black',
  }


})

