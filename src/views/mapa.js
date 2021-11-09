import MapView, { Callout, Marker } from 'react-native-maps';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Mapa() {
    const [location, setLocation] = useState({
        latitude: -23.685876412,
        longitude: -46.611621932,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })
    //https://aqicn.org/scale/
    const scale = {
        "Good": {
            values: [0, 50],
            bg_color: "#009966",
            text_color: "#ffffff"
        },
        "Moderate": {
            values: [50, 100],
            bg_color: "#ffde33",
            text_color: "#000000"
        },
        "Unhealthy for Sensitive Groups": {
            values: [100, 150],
            bg_color: "#ff9933",
            text_color: "#000000"
        },
        "Unhealthy": {
            values: [150, 200],
            bg_color: "#cc0033",
            text_color: "#ffffff"
        },
        "Very Unhealthy": {
            values: [200, 300],
            bg_color: "#660099",
            text_color: "#ffffff"
        },
        "Hazardous": {
            values: [300, 500],
            bg_color: "#7e0023",
            text_color: "#ffffff"
        }
    }
    const getColorAccordingToValue = (value) => {
        let color = {
            bg_color: "red",
            text_color: "white"
        }
        Object.keys(scale).forEach(key => {
            if (value >= scale[key].values[0] && value <= scale[key].values[1]) {
                const { bg_color, text_color } = scale[key]
                color = { bg_color, text_color }
            }
        })
        return color;
    }
    const [markers, setMarkers] = useState([])
    useEffect(() => {
        async function get_stations() {
            await axios.get('http://api.waqi.info/mapq2/nearest').then(({ data: result }) => {
                const { data } = result
                let stations = []
                if (data.stations != undefined) {
                    data.stations.map((station) => {
                        if(station.aqi == "-") station.aqi = "?";station.name = "Sem dados dessa estação"
                        stations.push({
                            aqi: station.aqi,
                            geo: station.geo,
                            name: station.name
                        })
                    })
                }
                setMarkers(stations)
            }).catch(error => { return "Ocorreu um eror ao tentar buscar as estações" })
        }
        get_stations()
    }, [])
    return (
        <MapView
            style={styles.map}
            initialRegion={location}>
            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    coordinate={{
                        latitude: marker.geo[0],
                        longitude: marker.geo[1]
                    }}>
                    <View style={{
                        width: 30,
                        height: 30,
                        borderRadius: 100,
                        backgroundColor: getColorAccordingToValue(marker.aqi).bg_color,
                    }}>
                        <Text style={{
                            color: getColorAccordingToValue(marker.aqi).text_color,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 14,
                            lineHeight: 35
                        }}>{marker.aqi}</Text>
                    </View>
                    <Callout tooltip>
                        <View style={{ width: Dimensions.get('window').width }}>
                            <View style={{ alignSelf: 'center', backgroundColor: '#fff', padding: 10, borderRadius: 8 }}>
                                <Text style={{ alignSelf: 'center' }}>{marker.name}</Text>
                            </View>
                        </View>
                    </Callout>
                </Marker>
            ))}
        </MapView>
    )
}
const _100vw = Dimensions.get('window').width
const _100vh = Dimensions.get('window').height + 30
const styles = StyleSheet.create({
    map: {
        width: _100vw,
        height: _100vh
    },
})