import React from 'react';
import { Text, View, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

const handleLinkPress = (url) => {
  Linking.openURL(url);
};
export default function Coding(props) {

  return (

    <View >

      <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.header}>
        <Text style={styles.headertext}>Coding</Text>

      </LinearGradient>

      <TouchableOpacity style={styles.container}
        onPress={() => handleLinkPress('https://www.codility.com/')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Codility</Text>
        </LinearGradient>
      </TouchableOpacity>



      <TouchableOpacity style={styles.container2}
        onPress={() => handleLinkPress('https://www.hackerrank.com/')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>HackerRank</Text>
        </LinearGradient>
      </TouchableOpacity>



      <TouchableOpacity style={styles.container}
        onPress={() => handleLinkPress('https://www.codingninjas.com/landing/cnsat/?utm_source=google&utm_medium=[search]&utm_campaign=20131922872_149942135238_e_coding%20ninjas__658412799015_m____9040188&gad=1&gclid=CjwKCAjwvJyjBhApEiwAWz2nLbUrJAlhLIe4Y8tOge06Zggv1j4QGH_RT8hpCah7ibLPSmEDDflUixoCbjMQAvD_BwE')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Coding        Ninja</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2}
        onPress={() => handleLinkPress('https://www.codechef.com/')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>CodeChief</Text>
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity style={styles.container}
        onPress={() => handleLinkPress('https://www.hubspot.com/products/crm')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>HubSpot    Academy</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2}
        onPress={() => handleLinkPress('https://codesignal.com/')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>CodeSignal</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}
        onPress={() => handleLinkPress('https://www.udacity.com/courses/all?utm_source=gsem_india_brand&utm_medium=ads_r&utm_campaign=18068487081_m&utm_term=140610604776_in&utm_keyword=udacity_e&gclid=CjwKCAjwvJyjBhApEiwAWz2nLeGPNMCTCOrB21ruN4VKbKUEYXcGH8akDL-AeWsW8CP19OF9qFzYuBoCYgwQAvD_BwE')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Udacity</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container2}
        onPress={() => handleLinkPress('https://www.infosecinstitute.com/')}>
        <LinearGradient colors={['#848AF28C', '#5A61C9FF']} style={styles.linearGradient}>
          <Text style={styles.btntext}>Infosec</Text>
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
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(12),
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

