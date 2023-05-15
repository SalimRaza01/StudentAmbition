import React from "react";
import { Text, View,  Image, StyleSheet } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

export default function AboutPage() {
    return (
        <View>

            <Text style={styles.subtitle5}>
               Activity Tracker
            </Text>
            
            <View style={styles.container1}>
                <Image style={styles.wpic} source={require('../assets/tick.png')} />
                <Image style={styles.wbtn} source={require('../assets/tick.png')} />
                <Text style={styles.subtitle1}>
                    Drinking 300ml Water
                </Text>

                <Text style={styles.para1}>About 3 minutes ago
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    subtitle5: {
        position: 'absolute',
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(3),
        marginLeft: responsiveWidth(28),
    },
    container1: {
        // position: 'absolute',
        marginTop: responsiveHeight(2.5),
        marginLeft: responsiveWidth(7),
        width: responsiveWidth(86),
        height: responsiveHeight(10),
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    },
    wpic: {
        position: 'absolute',
        height: responsiveHeight(6.3),
        width: responsiveWidth(12),
        marginLeft: responsiveWidth(2.2),
        marginTop: responsiveHeight(12),

    },
    wbtn: {
        position: 'absolute',
        marginLeft: responsiveWidth(76),
        marginTop: responsiveHeight(1),
    },
    para1: {
        // position: 'absolute',
        fontSize: responsiveFontSize(1.2),
        color: 'grey',
        marginLeft: responsiveWidth(17.4),
        marginTop: responsiveHeight(0.5)
    },
    subtitle1: {
        // position: 'absolute',
        fontSize: responsiveFontSize(1.3),
        color: 'black',
        marginLeft: responsiveWidth(17.4),
        marginTop: responsiveHeight(0.1),
        fontFamily: 'poppins',
        fontWeight: 'bold'
    },
})