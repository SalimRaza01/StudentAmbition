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
        <Text style={styles.headertext  }>   Lectures</Text>
      </LinearGradient>
      <ScrollView style={{ marginBottom: 120 }}>
        <LinearGradient colors={['#848AF28C','#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn} 
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PL-vEH_IPWrhBQCII4ZoFQFGFzBxbxVhkW')}>
            <Text style={styles.btntext}>Math IV</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLKYdDa9oq0_wjQk4_aim3RBD2RpkW68PV')}>
            <Text style={styles.btntext}>TAFL</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PL7PZHgCHCYC7o2MlBKYXrduHf_UlvP0t3')}>
            <Text style={styles.btntext}>Microprocesser</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLL13-1PjGvanUxa4XI5qGaGdrHSORZ-n-')}>
            <Text style={styles.btntext}>Electronic and Engineering</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLysZquKdjuWSv87TaE7pByn5TE_e46O2C')}>
            <Text style={styles.btntext}>Universal Human Values</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLV8vIYTIdSnar4uzz-4TIlgyFJ2m18NE3')}>
            <Text style={styles.btntext}>COA</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLDt-fuLi9lO8SFMFaK7tabCxowLsEuWoy')}>
            <Text style={styles.btntext}>Python</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PL23dd-8zssJDbCZI4Rle3vuQokIAdiDdB')}>
            <Text style={styles.btntext}>Operating System</Text>
          </TouchableOpacity>
          </LinearGradient>
          <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtu.be/UZCvy-qBtQw')}>
            <Text style={styles.btntext}>Cyber System Security</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtu.be/w4LkuBGzPzs')}>
            <Text style={styles.btntext}>Data Structures</Text>
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

