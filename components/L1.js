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
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLtxdcwCcWWQ3O1VE8t6KFAFvxMg4GgzNx')}>
            <Text style={styles.btntext}>Chemistry</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLg2LVpcRrOF6EAoFZ4MmDomiopmH1gpEs')}>
            <Text style={styles.btntext}>Math I</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLTYLC3XcJGZ5D3ohTYfOIR39L-H69f9Ca')}>
            <Text style={styles.btntext}>Physics</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLg2LVpcRrOF6EAoFZ4MmDomiopmH1gpEs')}>
            <Text style={styles.btntext}>Math II</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc')}>
            <Text style={styles.btntext}>Basic Electrical Engineering</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6')}>
            <Text style={styles.btntext}>Professional English</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PLHEcKKWWhXy-VzbdOTxEtxai6Hcf6hEXl')}>
            <Text style={styles.btntext}>PPS</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.mybtn}
            onPress={ () =>handleLinkPress('https://youtube.com/playlist?list=PL_QZS3L94wpcEn7WLbT1hk-uvsXV7rhDV')}>
            <Text style={styles.btntext}>Artificial Intelligence</Text>
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
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(2),
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

