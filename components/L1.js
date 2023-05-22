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
// const MyDrawer=()=> {

//     return (
  
//         <View  style={{flex:0.5}}>
//         <LinearGradient colors={['#FFFF', '#FFFF']}  style={styles.header}>
//           <Text style={styles.headertext}>Student Ambition</Text>
//         </LinearGradient>
  
//         <TouchableOpacity style={styles.container}
//          onPress={() => props.navigation.navigate('Home')}>
//           <LinearGradient colors={['#5A61C9FF', '#5A61C9FF']} style={styles.linearGradient}>
//             <Text style={styles.btntext}>Home</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.container2}
//           onPress={() => props.navigation.navigate('Coding')}>
//           <LinearGradient colors={['#5A61C9FF', '#5A61C9FF']} style={styles.linearGradient}>
//             <Text style={styles.btntext}>Coding</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.container3}
//           onPress={() => props.navigation.navigate('Placement')}>
//           <LinearGradient colors={['#5A61C9FF', '#5A61C9FF']} style={styles.linearGradient}>
//             <Text style={styles.btntext}>Placement</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.container4}
//            onPress={() => props.navigation.navigate('Internship')}>
//           <LinearGradient colors={['#5A61C9FF', '#5A61C9FF']} style={styles.linearGradient}>
//             <Text style={styles.btntext}>Internship</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.container7}
//            onPress={() => props.navigation.navigate('Internship')}>
//           <LinearGradient colors={['#5A61C9FF', '#5A61C9FF']} style={styles.linearGradient}>
//             <Text style={styles.btntext}>Additional Skills</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.container5}
//           onPress={ () =>handleLinkPress('https://www.youtube.com/live/86sCMfOK4xA?feature=share')}>
//           <LinearGradient colors={['#5A61C9FF', '#5A61C9FF']} style={styles.linearGradient}>
//             <Text style={styles.btntext}>Logout</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.container6}
//          onPress={() => props.navigation.navigate('AboutPage')}>
//           <LinearGradient colors={['#5A61C9FF', '#5A61C9FF']} style={styles.linearGradient}>
//             <Text style={styles.btntext}>AboutUs</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//         </View>
//       // <View style={styles.header2}>
  
  
  
//       // </View>
//     )
  
//   }

  
  
export default function L1(props) {

  return (

    <View >
      <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('MyDrawer')}>
          <Image style={styles.wpic} source={require('../assets/menu.png')} />
        <Text style={styles.headertext}>Lectures</Text>
      </TouchableOpacity>

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
  
    // header: {
    //   width: responsiveWidth(50),
    //   fontSize: responsiveFontSize(4),
    //   height: responsiveHeight(100),
  
  
    // },
    // header2: {
    //   backgroundColor:'transparent',
    //   width: responsiveWidth(50),
    //   height: responsiveHeight(100),
    // },
  
    // headertext: {
    //   fontSize: responsiveFontSize(2.2),
    //   marginTop: responsiveHeight(6),
    //   marginLeft: responsiveWidth(6),
    //   color: '#5A61C9FF',
    //   fontWeight: 'bold',
    
    // },
  
    // btntext: {
    //   fontSize: responsiveFontSize(1.5),
    //   textAlign: 'left',
    //   color: 'white',
    //   fontWeight: 'bold',
    //   marginLeft: responsiveWidth(7),
  
    // },
    // linearGradient: {
    //   flex: 1,
    //   borderRadius: 0,
    //   justifyContent: "center",
    // },
    // container: {
    //   position:'absolute',
    //   marginTop: responsiveHeight(15),
    //   width: responsiveWidth(50),
    //   height: responsiveHeight(6),
    //   opacity:0.8,
    // },
    // container2: {
    //   position:'absolute',
    //   marginTop: responsiveHeight(22),
    //   width: responsiveWidth(50),
    //   height: responsiveHeight(6),
    //   opacity:0.8,
    // },
    // container3: {
    //   position:'absolute',
    //   marginTop: responsiveHeight(29),
    //   width: responsiveWidth(50),
    //   height: responsiveHeight(6),
    //   opacity:0.8,
    // },
    // container4: {
    //   position:'absolute',
    //   marginTop: responsiveHeight(36),
    //   width: responsiveWidth(50),
    //   height: responsiveHeight(6),
    //   opacity:0.8,
  
    // },  container5: {
    //   position:'absolute',
    //   marginTop: responsiveHeight(90),
    //   width: responsiveWidth(50),
    //   height: responsiveHeight(6),
    //   opacity:0.8,
    // },
    // container6: {
    //   position:'absolute',
    //   marginTop: responsiveHeight(83),
    //   width: responsiveWidth(50),
    //   height: responsiveHeight(6),
    //   opacity:0.8,
    // },
    // container7: {
    //   position:'absolute',
    //   marginTop: responsiveHeight(43),
    //   width: responsiveWidth(50),
    //   height: responsiveHeight(6),
    //   opacity:0.8,
    // },
  
  
  
  


  // header: {
  //   textAlign: 'center',
  //   fontSize: 20,
  //   marginBottom: responsiveHeight(6),
  //   marginLeft: responsiveWidth(14),
  //   color: 'white',
  //   height:responsiveHeight(7),

  // },

    wpic: {
    position: 'absolute',
    height: responsiveHeight(3),
    width: responsiveWidth(6),
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(1.2),

},
container: {
  // position: 'absolute',
  backgroundColor: '#5A61C9FF',
  width: responsiveWidth(100),
  height: responsiveHeight(6),
},

  headertext: {
    fontSize: responsiveFontSize(2.2),
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(11),
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

