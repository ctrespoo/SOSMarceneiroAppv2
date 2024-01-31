import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar } from 'react-native-paper'
import { Colors } from '../theme/color'
import style from '../theme/style'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'react-native-linear-gradient'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Search() {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary, paddingTop: 10, }]}>
            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.secondary} barStyle={'dark-content'} translucent={false}></StatusBar>
                <View style={{ flex: 1, marginHorizontal: 20 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 15 }}>
                        <Image source={require('../../assets/image/s2.png')} style={{ height: height / 34, width: width / 16, resizeMode: 'stretch' }} />
                        <View style={[style.verticaldivider, { backgroundColor: Colors.disable, marginHorizontal: 5, height: '40%' }]}></View>
                        <View style={{ flex: 1 }}>
                            <TextInput placeholder='What would you like to eat?' placeholderTextColor={Colors.disable}
                                selectionColor={Colors.primary}
                                style={[style.r14, { color: Colors.active }]} />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                            <Text style={[style.b14, { color: Colors.primary }]}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                <TouchableOpacity onPress={() => navigation.navigate('SLocation')}
                                    style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: Colors.bord, borderRadius: 15, paddingVertical: 4, paddingHorizontal: 10 }}>
                                    <Icon name='location' size={20} color={Colors.disable}></Icon>
                                    <Text style={[style.s12, { color: Colors.disable, marginLeft: 5 }]}>Nearby</Text>
                                </TouchableOpacity>
                                <View style={{ alignItems: 'center', borderWidth: 1, borderColor: Colors.bord, borderRadius: 15, paddingVertical: 4, paddingHorizontal: 15, backgroundColor: Colors.primary, marginLeft: 8 }}>
                                    <Text style={[style.s12, { color: Colors.secondary, }]}>All</Text>
                                </View>
                                <View style={{ alignItems: 'center', borderWidth: 1, borderColor: Colors.bord, borderRadius: 15, paddingVertical: 4, paddingHorizontal: 10, marginLeft: 8 }}>
                                    <Text style={[style.s12, { color: Colors.disable, }]}>Main Course</Text>
                                </View>
                                <View style={{ alignItems: 'center', borderWidth: 1, borderColor: Colors.bord, borderRadius: 15, paddingVertical: 4, paddingHorizontal: 10, marginLeft: 8 }}>
                                    <Text style={[style.s12, { color: Colors.disable, }]}>Dessert</Text>
                                </View>
                                <View style={{ alignItems: 'center', borderWidth: 1, borderColor: Colors.bord, borderRadius: 15, paddingVertical: 4, paddingHorizontal: 10, marginLeft: 8 }}>
                                    <Text style={[style.s12, { color: Colors.disable, }]}>Drinks</Text>
                                </View>
                            </ScrollView>
                        </View>

                        <Text style={[style.b18, { color: Colors.active, marginTop: 25 }]}>Top Searches</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Image source={require('../../assets/image/a5.png')} resizeMode='stretch' style={{ height: 80, width: 80 }}></Image>
                            <View style={{ flex: 1, marginLeft: 8 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Pasta spaghetti with shrimps</Text>
                                <Text style={[style.s12, { color: Colors.active, marginTop: 5 }]}>$ 9.1</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
                                    <Text style={[style.r12, { color: Colors.disable }]}>by Dapur Umami</Text>
                                    <Text style={[style.r12, { color: Colors.disable }]}>⭐ 4.9</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[style.divider, { backgroundColor: Colors.div, marginTop: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Image source={require('../../assets/image/a6.png')} resizeMode='stretch' style={{ height: 80, width: 80 }}></Image>
                            <View style={{ flex: 1, marginLeft: 8 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Baked chicken wings with sauce</Text>
                                <Text style={[style.s12, { color: Colors.active, marginTop: 5 }]}>$ 6.9</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
                                    <Text style={[style.r12, { color: Colors.disable }]}>by Eco Kitchen</Text>
                                    <Text style={[style.r12, { color: Colors.disable }]}>⭐ 4.9</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[style.divider, { backgroundColor: Colors.div, marginTop: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Image source={require('../../assets/image/a7.png',)} resizeMode='stretch' style={{ height: 80, width: 80 }}></Image>
                            <View style={{ flex: 1, marginLeft: 8 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Chicken steak with salad</Text>
                                <Text style={[style.s12, { color: Colors.active, marginTop: 5 }]}>$ 8.4</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
                                    <Text style={[style.r12, { color: Colors.disable }]}>by Joglo Manis</Text>
                                    <Text style={[style.r12, { color: Colors.disable }]}>⭐ 4.9</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[style.divider, { backgroundColor: Colors.div, marginTop: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Image source={require('../../assets/image/a8.png')} resizeMode='stretch' style={{ height: 80, width: 80 }}></Image>
                            <View style={{ flex: 1, marginLeft: 8 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Tom yum kung or river prawn </Text>
                                <Text style={[style.s12, { color: Colors.active, marginTop: 5 }]}>$ 8.0</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
                                    <Text style={[style.r12, { color: Colors.disable }]}>by RM Citra Alam</Text>
                                    <Text style={[style.r12, { color: Colors.disable }]}>⭐ 4.9</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[style.divider, { backgroundColor: Colors.div, marginTop: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Image source={require('../../assets/image/a9.png')} resizeMode='stretch' style={{ height: 80, width: 80 }}></Image>
                            <View style={{ flex: 1, marginLeft: 8 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Bakso Malang Ciamik</Text>
                                <Text style={[style.s12, { color: Colors.active, marginTop: 5 }]}>$ 6.9</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
                                    <Text style={[style.r12, { color: Colors.disable }]}>by Mbok Mangap</Text>
                                    <Text style={[style.r12, { color: Colors.disable }]}>⭐ 4.9</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}