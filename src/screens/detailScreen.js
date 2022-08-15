import React, { Component, useState, useRef, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    SectionList,
    Image,
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome'
const placeholder = require('../../assets/news-placeholder.png')

const DetailScreen = ({ route, navigation }) => {
    const { item } = route.params
    console.log(item)
    return (
        <View>
            <View>
                <Image
                    style={{ width: '100%', height: 300, borderBottomRightRadius: 35, borderBottomLeftRadius: 35 }}
                    resizeMode={'cover'}
                    defaultSource={require("../../assets/news-placeholder.png")}
                    source={{
                        uri: item.urlToImage,
                    }} />
                <View style={{
                    width: '95%',
                    paddingVertical: 10,
                    alignSelf: 'center',
                    position: 'absolute',
                    top: 0,
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack(null)
                        }}
                    >
                        <Icon
                            name='arrow-left'
                            size={30}
                            style={{ color: 'white', }} />
                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        width: '90%',
                        paddingVertical: 10,
                        padding: 10,
                        alignSelf: 'center',
                        position: 'absolute',
                        bottom: 10,
                        borderRadius: 35,
                        backgroundColor:"rgba(173, 172, 172, 0.7)"
                    }}
                >
                    <Text style={styles.title} numberOfLines={3}>
                        {item.title}
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
                    }}
                        numberOfLines={1}
                    >
                        {item.author == null ? "-" : item.author}
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
                        style={{ color: 'grey', paddingLeft: 10 }} />
                    <Text style={{
                        color: 'black',
                        fontSize: 15,
                        // alignSelf: 'center',
                        width: '95%',
                        fontWeight: 'bold',
                        paddingLeft: 5
                        // textAlign: 'center'
                    }}>
                        {item.publishedAt == null ? "-" : moment(new Date(item.publishedAt)).format('YYYY-MM-DD')}
                    </Text>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <Text
                    style={{ padding: 10, fontSize: 16, color: 'grey' }}
                >
                    {item.description}
                </Text>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        // padding: 10,
        // paddingTop: 100,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },

});

export default DetailScreen;