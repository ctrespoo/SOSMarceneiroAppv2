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

export default function Tracking() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar translucent={true} backgroundColor='transparent' barStyle='dark-content' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
                <ImageBackground source={require('../../assets/image/Tracking.png')} resizeMode='stretch' style={{ flex: 1 }}>

                    <View style={{ marginHorizontal: 20, flex: 1 }}>
                        <AppBar
                            elevation={0}
                            style={{ backgroundColor: 'transparent', marginTop: 30 }}
                            leading={<TouchableOpacity onPress={() => navigation.navigate('SLocation')}>
                                <Avatar.Icon icon="chevron-left" color={Colors.active} size={48} style={{ backgroundColor: '#FFFFFF60' }} />
                            </TouchableOpacity>
                            }
                        />
                    </View>
                    <View style={{ flex: 0.65, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: Colors.bg }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 20 }}>
                            <Avatar.Image source={require('../../assets/image/s37.png')} size={36} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.disable, }]}>Restaurant</Text>
                                <Text style={[style.s16, { color: Colors.active, }]}>Resto Parmato Bapo</Text>
                            </View>
                        </View>
                        <View style={{ width: 2, height: 20, backgroundColor: '#EDF1F8', marginLeft: 37 }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, }}>
                            <Avatar.Image source={require('../../assets/image/s38.png')} size={36} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.disable, }]}>Delivery</Text>
                                <Text style={[style.s16, { color: Colors.active, }]}>10 minutes</Text>
                            </View>
                        </View>
                        <View style={{ width: 2, height: 20, backgroundColor: '#EDF1F8', marginLeft: 37 }}></View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, }}>
                            <Avatar.Image source={require('../../assets/image/s39.png')} size={36} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.disable, }]}>Yor Delivery Address</Text>
                                <Text style={[style.s16, { color: Colors.active, }]}>Jl. Ponorogo-Trenggalek, Sambit</Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 10, paddingVertical: 20, backgroundColor: Colors.active, marginTop: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30, flexDirection: 'row', alignItems: 'center', bottom: 0, position: 'absolute' }}>
                            <Avatar.Image source={require('../../assets/image/s48.png')} size={60} style={{ backgroundColor: Colors.active }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: Colors.secondary, }]}>Yoel Hartono</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r14, { color: Colors.disable, }]}>Courier</Text>
                                    <Icon name="star" color='#FFB950' size={12} style={{ marginLeft: 15, marginRight: 2 }} />
                                    <Text style={[style.r14, { color: Colors.disable, }]}>(4,6)</Text>
                                </View>
                            </View>
                            <Avatar.Image source={require('../../assets/image/s40.png')} size={50} style={{ backgroundColor: Colors.primary }} />
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}