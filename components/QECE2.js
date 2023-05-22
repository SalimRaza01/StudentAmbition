import React from 'react';
import { Text, View, StyleSheet, ScrollView,Linking, Image, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';
const handleLinkPress = (url) => {
  Linking.openURL(url);
  };
export default function SubjectCS3(props) {

  return (

    <View >

<LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.header}>
        <Text style={styles.headertext  }>  Question Papers</Text>
      </LinearGradient>
      <ScrollView style={{ marginBottom: 100 }}>
        <LinearGradient colors={['#848AF28C','#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1hc1HPOIjJGclqo8mMvCdk5OIu2E0sGBn?usp=share_link')}>
            <Text style={styles.btntext}>ADEC</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1hc1HPOIjJGclqo8mMvCdk5OIu2E0sGBn?usp=share_link')}>
            <Text style={styles.btntext}>Electromagnetic Feild Theory</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            oonPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1hc1HPOIjJGclqo8mMvCdk5OIu2E0sGBn?usp=share_link')}>
            <Text style={styles.btntext}>basic Signals & Systems</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1hc1HPOIjJGclqo8mMvCdk5OIu2E0sGBn?usp=share_link')}>
            <Text style={styles.btntext}>Python</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1hc1HPOIjJGclqo8mMvCdk5OIu2E0sGBn?usp=share_link')}>
            <Text style={styles.btntext}>Cyber System Security</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1hc1HPOIjJGclqo8mMvCdk5OIu2E0sGBn?usp=share_link')}>
            <Text style={styles.btntext}>Math IV</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1hc1HPOIjJGclqo8mMvCdk5OIu2E0sGBn?usp=share_link')}>
            <Text style={styles.btntext}>Universal Human Values</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1hc1HPOIjJGclqo8mMvCdk5OIu2E0sGBn?usp=share_link')}>
            <Text style={styles.btntext}>Digital Electronics</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
           onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1hc1HPOIjJGclqo8mMvCdk5OIu2E0sGBn?usp=share_link')}>
            <Text style={styles.btntext}>NAS</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1hc1HPOIjJGclqo8mMvCdk5OIu2E0sGBn?usp=share_link')}>
            <Text style={styles.btntext}>Circuit Simulation</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1hc1HPOIjJGclqo8mMvCdk5OIu2E0sGBn?usp=share_link')}>
            <Text style={styles.btntext}>Computer Graphics</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://drive.google.com/drive/folders/1hc1HPOIjJGclqo8mMvCdk5OIu2E0sGBn?usp=share_link')}>
            <Text style={styles.btntext}>Software Engineering</Text>
          </TouchableOpacity>
        </LinearGradient>
        


      </ScrollView>
        
    </View>
  )

}


const styles = StyleSheet.create({

  header: {
    textAlign: 'center',
    fontSize: 36,
    marginBottom: responsiveHeight(2),
    color: 'black',
    height:responsiveHeight(7),

  },
  headertext: {
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(12),
    color: 'white',
    fontWeight: 'bold',
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
    borderRadius: 10,
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(3),
    borderBottomWidth:2,
    borderEndColor:'black',
  }


})

