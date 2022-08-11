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

const DetailScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: '100%', height: 250 }}
                resizeMode={'cover'}
                source={{
                    uri: 'https://www.thaipbsworld.com/wp-content/uploads/2022/08/AE0EC342-2958-49B7-9CEA-0EB33150C2DA-600x400.jpeg',
                }} />
            <View
                style={{
                    width: '90%',
                    paddingVertical: 10,
                    padding: 10,
                    alignSelf: 'center',
                    position: 'absolute',
                    bottom: -35,
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderRadius: 0,
                }}
            >
                <Text style={styles.title}>
                    Musk sells Tesla shares worth $6.9 billion, cites chance of forced Twitter deal
                </Text>
                <Text style={{
                    color: 'grey',
                    fontSize: 15,
                    alignSelf: 'flex-end',
                    // fontWeight:'bold'
                }}>
                    Nad Bunnag   ({moment(new Date('2022-08-10T05:23:34Z')).format('YYYY-MM-DD')})
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
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },

});

export default DetailScreen;