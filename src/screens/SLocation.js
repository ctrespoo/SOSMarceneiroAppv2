import { View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, ImageBackground, StatusBar, FlatList, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../theme/color'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar, } from 'react-native-paper'
import Icon1 from 'react-native-vector-icons/Feather'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function SLocation() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar translucent={true} backgroundColor='transparent' barStyle='dark-content' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
                <ImageBackground source={require('../../assets/image/s24.png')} resizeMode='stretch' style={{ flex: 1 }}>

                    <View style={{ marginHorizontal: 20 }}>
                        <AppBar
                            elevation={0}
                            centerTitle={true}
                            title='Select Your Location'
                            titleStyle={[style.b18, { color: Colors.active }]}
                            style={{ backgroundColor: 'transparent', marginTop: 20 }}
                            leading={<TouchableOpacity onPress={() => navigation.navigate('Search')}>
                                <Icon name="chevron-back" color={Colors.active} size={24} />
                            </TouchableOpacity>
                            }
                            trailing={<TouchableOpacity >
                                <Text style={[style.b14, { color: Colors.primary }]}>On Map</Text>
                            </TouchableOpacity>}
                        />

                        <View style={[style.txtinput, { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }]}>
                            <TouchableOpacity >
                                <Image source={require('../../assets/image/s2.png')} style={{ height: height / 34, width: width / 16, resizeMode: 'stretch' }} />
                            </TouchableOpacity>
                            <View style={[style.verticaldivider, { backgroundColor: Colors.disable, marginHorizontal: 5, height: '40%' }]}></View>
                            <TextInput placeholder='Banca' placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.r14, { color: Colors.active, flex: 1 }]} />
                            <Icon name="close" color={Colors.active} size={24} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={[style.shadow, { backgroundColor: Colors.bg, shadowColor: Colors.active, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 20, flexDirection: 'row', alignItems: 'center' }]}>
                                <Icon name="home-outline" color={Colors.primary} size={16} />
                                <Text style={[style.r14, { color: Colors.active, marginLeft: 5 }]}>At Home</Text>
                            </View>
                            <View style={[style.shadow, { marginLeft: 10, backgroundColor: Colors.bg, shadowColor: Colors.active, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 20, flexDirection: 'row', alignItems: 'center' }]}>
                                <Icon1 name="briefcase" color={Colors.primary} size={16} />
                                <Text style={[style.r14, { color: Colors.active, marginLeft: 5 }]}>At Work</Text>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Tracking')}
                            style={{ flexDirection: 'row', marginTop: 25 }}>
                            <Avatar.Image source={require('../../assets/image/s25.png')} size={16} style={{ backgroundColor: 'transparent' }} />
                            <View style={{ marginLeft: 15, flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active, }]}>Bancangan, Sambit</Text>
                                <Text style={[style.r12, { color: Colors.disable, }]}>Etan Telkom Mbibis</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Tracking')}
                            style={{ flexDirection: 'row', marginTop: 25 }}>
                            <Avatar.Image source={require('../../assets/image/s25.png')} size={16} style={{ backgroundColor: 'transparent' }} />
                            <View style={{ marginLeft: 15, flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active, }]}>Bancar, Bungkal</Text>
                                <Text style={[style.r12, { color: Colors.disable, }]}>St. Louis, MO, USA</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}