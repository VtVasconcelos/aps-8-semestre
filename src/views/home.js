import React from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";
import { _100vw, _100vh } from '../utils/var/css'
export default function Home({ navigation }) {
    return (
        <View style={styles.firstView}>
            <Image
                style={styles.stretch}
                source={require('../assets/undraw_nature_on_screen_xkli.png')}
            />
            <Text style={styles.title}>
                Poluição Atmosférica
            </Text>
            <Text style={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit sem ipsum, sed elementum magna porta sit amet. Phasellus vel iaculis arcu.
            </Text>
            <View style={styles.ctaHome}>
                <Button
                    onPress={() => navigation.navigate('Mapa')}
                    title="MAPA DE POLUIÇÃO"
                    color="#9EC1A3"
                    accessibilityLabel="VER MAPA DE POLUIÇÃO"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    firstView: {
        width: _100vw,
        height: _100vh,
        backgroundColor: "white",
        paddingTop: 50
    },
    title: {
        fontSize: 32,
        textAlign: "center",
        marginBottom: 20,
        marginTop: 50
    },
    subtitle: {
        fontSize: 18,
        paddingRight: 30,
        paddingLeft: 30,
        textAlign: "center"
    },
    stretch: {
        width: _100vw,
        height: 300,
        resizeMode: 'stretch'
    },
    ctaHome: {
        width: 150,
        marginTop:30,
        marginLeft:_100vw/3,
    }
});