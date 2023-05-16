import React, { useRef, useEffect } from "react";
import { Text, View,  Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import LinearGradient from 'react-native-linear-gradient';

export default function AboutPage() {

    const slideAnim = useRef(new Animated.Value(-100)).current;

    useEffect(() => {
        Animated.stagger(300, [
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }),
        ]).start();
    }, [slideAnim]);


    return (
        <View>

            <Text style={styles.subtitle1}>
               About Us
            </Text>
            <Text style={styles.para2}>Student Ambition is an Android Application that generally helps students to get information about right course, knowledge and placement related guidance. </Text>
            

            <Text style={styles.subtitle3}>
               Developer's :
            </Text>

            <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
            <TouchableOpacity style={styles.container1}>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#848AF2', '#3b5998',] } style={styles.linearGradient}>
                <Image style={styles.wpic} source={require('../assets/member1.png')} />
                <Text style={styles.subtitle2}>
                    Salim Raza
                </Text>

                <Text style={styles.para1}>B-Tech ( Computer Science Engineering )
                </Text>
                </LinearGradient>
            </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
            <TouchableOpacity style={styles.container1}>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#848AF2', '#3b5998',] } style={styles.linearGradient}>
                <Image style={styles.wpic} source={require('../assets/member2.png')} />
                <Text style={styles.subtitle2}>
                    Abhishek Gupta
                </Text>

                <Text style={styles.para1}>B-Tech ( Computer Science Engineering )
                </Text>
                </LinearGradient>
                </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
            <TouchableOpacity style={styles.container1}>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#848AF2', '#3b5998',] } style={styles.linearGradient}>
                <Image style={styles.wpic} source={require('../assets/member3.png')} />
                <Text style={styles.subtitle2}>
                    Anshika Chaudhary
                </Text>

                <Text style={styles.para1}>B-Tech ( Computer Science Engineering )
                </Text>
                </LinearGradient>
                </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
            <TouchableOpacity style={styles.container1}>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#848AF2', '#3b5998',] } style={styles.linearGradient}>
                <Image style={styles.wpic} source={require('../assets/member4.png')} />
                <Text style={styles.subtitle2}>
                    Satyendra Kumar
               </Text>
                <Text style={styles.para1}>B-Tech ( Computer Science Engineering )
                </Text>
                </LinearGradient>
                </TouchableOpacity>
                </Animated.View>
          
                <Text style={styles.para3}>Version 1.0.0
                </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    subtitle1: {
         
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: '#3b5995',
        marginTop: responsiveHeight(9),
        marginLeft: responsiveWidth(10),
    },
    subtitle3: {
         
        fontSize: responsiveFontSize(2.4),
        fontWeight: 'bold',
        color: '#3b5995',
        marginTop: responsiveHeight(6),
        marginLeft: responsiveWidth(10),
    },
    linearGradient: {
        flex: 1,
        borderRadius: 15
      },
    container1: {
        // position: 'absolute',
        marginTop: responsiveHeight(2.5),
        marginLeft: responsiveWidth(7),
        width: responsiveWidth(86),
        height: responsiveHeight(10),
        borderRadius: 10,
        justifyContent: "center",
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 100,
        shadowRadius: 10,
        elevation: 7
    },
    wpic: {
        position: 'absolute',
        height: responsiveHeight(6.3),
        width: responsiveWidth(12),
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(1.5),

    },
    para1: {
        // position: 'absolute',
        fontSize: responsiveFontSize(1.3),
        color: 'white',
        marginLeft: responsiveWidth(20),
        marginTop: responsiveHeight(0.4)
    },
    para2: {
        // position: 'absolute',
        fontSize: responsiveFontSize(1.3),
        color: 'grey',
        textAlign:'justify',
        marginLeft: responsiveWidth(10),
        marginRight: responsiveWidth(9),
        marginTop: responsiveHeight(2)
    },
    para3: {
        // position: 'absolute',
        fontSize: responsiveFontSize(1.3),
        color: 'grey',
        justifyContent:'center',
        textAlign:'center',
        marginTop: responsiveHeight(12)
    },
    subtitle2: {
        // position: 'absolute',
        fontSize: responsiveFontSize(1.8),
        color: 'white',
        marginLeft: responsiveWidth(20),
        marginTop: responsiveHeight(2),
        fontFamily: 'poppins',
        fontWeight: 'bold'
    },
})