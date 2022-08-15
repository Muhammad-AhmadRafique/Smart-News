import React, { Component, useState, useRef, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    SectionList,
    Image,
    Alert,
    RefreshControl,
    Modal,
    Pressable,
    ScrollView,
    Platform,
    Dimensions,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome'

const DetailScreen = () => {
    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={{ width: '100%', height: 300, borderRadius: 35 }}
                    resizeMode={'cover'}
                    source={{
                        uri: 'https://i.wfcdn.de/teaser/1920/38553.jpg',
                    }} />
                <View
                    style={{
                        width: '90%',
                        paddingVertical: 10,
                        padding: 10,
                        alignSelf: 'center',
                        position: 'absolute',
                        bottom: 0,
                        // backgroundColor: 'white',
                        // borderWidth: 1,
                        borderRadius: 0,
                    }}
                >
                    <Text style={styles.title}>
                        Tesla Supercharger und andere sind in Deutschland eigentlich illegal
                    </Text>
                </View>
            </View>
            <View style={{ padding: 10, flexDirection: 'row', alignItem: 'center' }}>
                <View style={{
                    width: '45%',
                    padding: 10,
                    borderRadius: 51,
                    backgroundColor: 'black',
                    marginRight: 10
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold',
                        // alignSelf: 'flex-end',
                        width: '95%',
                        textAlign: 'center'
                    }}>
                        Witold Pryjda
                    </Text>
                </View>
                <View style={{
                    width: '40%',
                    borderRadius: 51,
                    backgroundColor: '#E9E6E6',
                    flexDirection: 'row',
                    padding: 10,
                }}>
                    <Icon
                        name='clock-o'
                        size={16}
                        style={{ color: 'grey',paddingLeft:10 }} />
                    <Text style={{
                        color: 'black',
                        fontSize: 15,
                        // alignSelf: 'center',
                        width: '95%',
                        fontWeight: 'bold',
                        paddingLeft: 5
                        // textAlign: 'center'
                    }}>
                        {moment(new Date('2022-08-12T07:15:00Z')).format('YYYY-MM-DD')}
                    </Text>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <Text
                    style={{ padding: 10, fontSize: 16, color: 'grey' }}
                >
                    Die Fahrzeuge von Tesla werden auch in Deutschland immer populärer,
                    ein Grund dafür ist das Netzwerk an Tesla-eigenen Ladesäulen, also den sogenannten Superchargern.
                    Doch laut deutschem Recht sind diese eigentlich illegal, da sie gegen Eichrecht verstoßen.(We…
                </Text>
            </View>

            {/* <Text style={styles.title}>Hello</Text> */}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 100,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },

});

export default DetailScreen;