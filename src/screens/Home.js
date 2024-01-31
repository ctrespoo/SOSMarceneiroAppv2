import { View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, ImageBackground, StatusBar, FlatList, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../theme/color'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar, } from 'react-native-paper'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Home() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar translucent={true} backgroundColor='transparent' barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
                <ImageBackground source={require('../../assets/image/home.png')} resizeMode='stretch' style={{ flex: 1 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, marginHorizontal: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={[style.b14, { color: Colors.active }]}>Delivery</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={[style.r14, { color: Colors.active, marginRight: 5 }]}>Bacangan, Sambit</Text>
                                <Icon name='chevron-down' color={Colors.active} size={16} />
                            </View>
                        </View>
                        <Avatar.Image source={require('../../assets/image/s1.png')} size={48} style={{ backgroundColor: Colors.bg }} />
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} >
                        <View style={{ marginHorizontal: 20, }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                                    <Image source={require('../../assets/image/s2.png')} style={{ height: height / 36, width: width / 16, resizeMode: 'stretch' }} />
                                </TouchableOpacity>
                                <View style={[style.verticaldivider, { backgroundColor: Colors.disable, marginHorizontal: 5, height: '40%' }]}></View>
                                <View style={{ flex: 1 }}>
                                    <TextInput placeholder='What would you like to eat?' placeholderTextColor={Colors.disable}
                                        selectionColor={Colors.primary}
                                        style={[style.r14, { color: Colors.active }]} />
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                                <ImageBackground source={require('../../assets/image/s3.png')} resizeMode='stretch' style={{ height: height / 12, width: width - 40, marginTop: 10, paddingHorizontal: 12, justifyContent: 'center', }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon name='location' color='#F9B34C' size={24} />
                                        <View style={{ marginLeft: 10, flex: 1 }}>
                                            <Text style={[style.r12, { color: Colors.disable }]}>Your delivery address</Text>
                                            <Text style={[style.s12, { color: Colors.active }]}>Jl. Jendral Sudirman no. 80 A, Ponorogo</Text>
                                        </View>
                                        <Icon name='chevron-forward' color={Colors.disable} size={24} />
                                    </View>

                                </ImageBackground>
                            </TouchableOpacity>

                            <Text style={[style.b18, { color: Colors.active, marginTop: 15 }]}>Choose Category</Text>

                            <View style={{ marginTop: 15 }}>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                    <View style={{ alignItems: 'center' }}>
                                        <ImageBackground source={require('../../assets/image/s4bg.png')} resizeMode='stretch' style={{ height: height / 14.5, width: width / 6.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('../../assets/image/1.png')} style={{ height: height / 22, width: width / 10, resizeMode: 'stretch' }} />
                                        </ImageBackground>
                                        <Text style={[style.r12, { color: Colors.active, marginTop: 2 }]}>Main</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                        <View style={{ height: 56, width: 56, justifyContent: 'center', alignItems: 'center', borderRadius: 28, borderColor: Colors.border, borderWidth: 1 }}>
                                            <Image source={require('../../assets/image/s5.png')} style={{ height: height / 22, width: width / 10, resizeMode: 'stretch' }} />
                                        </View>
                                        <Text style={[style.r12, { color: Colors.active, marginTop: 2 }]}>Appetizer</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', }}>
                                        <View style={{ height: 56, width: 56, justifyContent: 'center', alignItems: 'center', borderRadius: 28, borderColor: Colors.border, borderWidth: 1 }}>
                                            <Image source={require('../../assets/image/s7.png')} style={{ height: height / 22, width: width / 10, resizeMode: 'stretch' }} />
                                        </View>
                                        <Text style={[style.r12, { color: Colors.active, marginTop: 2 }]}>Drinks</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                        <View style={{ height: 56, width: 56, justifyContent: 'center', alignItems: 'center', borderRadius: 28, borderColor: Colors.border, borderWidth: 1 }}>
                                            <Image source={require('../../assets/image/s6.png')} style={{ height: height / 22, width: width / 10, resizeMode: 'stretch' }} />
                                        </View>
                                        <Text style={[style.r12, { color: Colors.active, marginTop: 2 }]}>Dessert</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', }}>
                                        <Avatar.Image source={require('../../assets/image/s8.png')} size={56} style={{ backgroundColor: Colors.bg }} />
                                        <Text style={[style.r12, { color: '#FD451C', marginTop: 2 }]}>Main</Text>
                                    </View>
                                </ScrollView>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={[style.b18, { color: Colors.active, }]}>Category</Text>
                                <TouchableOpacity>
                                    <Text style={[style.b14, { color: Colors.primary, }]}>See All</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 15 }}>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                    <Image source={require('../../assets/image/s13.png')} style={{ height: height / 10, width: width / 3, resizeMode: 'stretch' }} />
                                    <Image source={require('../../assets/image/s14.png')} style={{ height: height / 10, width: width / 3, resizeMode: 'stretch', marginHorizontal: 10 }} />
                                    <Image source={require('../../assets/image/s15.png')} style={{ height: height / 10, width: width / 3, resizeMode: 'stretch' }} />
                                </ScrollView>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={[style.b18, { color: Colors.active, }]}>Main Course</Text>
                                <TouchableOpacity>
                                    <Text style={[style.b14, { color: Colors.primary, }]}>See All</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('FD1')}>
                                        <ImageBackground source={require('../../assets/image/s9.png')} resizeMode='stretch' style={{ height: height / 5, }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginHorizontal: 5 }}></View>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('FD3')}>
                                        <ImageBackground source={require('../../assets/image/s10.png')} resizeMode='stretch' style={{ height: height / 5 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('FD1')}>
                                        <ImageBackground source={require('../../assets/image/s11.png')} resizeMode='stretch' style={{ height: height / 5, }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginHorizontal: 5 }}></View>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('FD3')}>
                                        <ImageBackground source={require('../../assets/image/s12.png')} resizeMode='stretch' style={{ height: height / 5 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('FD1')}>
                                <Image source={require('../../assets/image/s18.png')} style={{ height: height / 5, width: width - 40, resizeMode: 'stretch', marginTop: 15 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('FD3')}>
                                <Image source={require('../../assets/image/s19.png')} style={{ height: height / 5, width: width - 40, resizeMode: 'stretch', marginTop: 15 }} />
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={[style.b18, { color: Colors.active, }]}>Nearby Food</Text>
                                <TouchableOpacity>
                                    <Text style={[style.b14, { color: Colors.primary, }]}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name='location' color={Colors.disable} size={12} />
                                <Text style={[style.r14, { color: Colors.disable, marginLeft: 5 }]}>Bancangan, Sambit</Text>
                            </View>

                            <View style={{ marginTop: 15, marginBottom: 80 }}>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>

                                    <View style={{ width: width / 2 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('FD1')}>
                                            <ImageBackground source={require('../../assets/image/s16.png')} resizeMode='stretch' style={{ height: height / 5, width: width / 2 }}>
                                                <View style={{ padding: 10 }}>
                                                    <View style={{ width: width / 6, paddingVertical: 8, borderRadius: 10, backgroundColor: '#00000040', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                        <Icon name='star' color='#F9B34C' size={12} />
                                                        <Text style={[style.s12, { color: Colors.secondary, marginLeft: 5 }]}>4.9</Text>
                                                    </View>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <Text style={[style.b14, { color: Colors.active, marginTop: 10, marginHorizontal: 10 }]}>Spaghetti with Spicy Mixed Seafood</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginHorizontal: 10 }}>
                                            <Text style={[style.r14, { color: Colors.primary, }]}>$</Text>
                                            <Text style={[style.b14, { color: Colors.active, marginLeft: 5, flex: 1 }]}>8.00</Text>
                                            <Icon name='heart-outline' color={Colors.disable} size={24} />
                                        </View>
                                    </View>

                                    <View style={{ marginHorizontal: 5 }}></View>

                                    <View style={{ width: width / 2 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('FD3')}>
                                            <ImageBackground source={require('../../assets/image/s17.png')} resizeMode='stretch' style={{ height: height / 5, width: width / 2 }}>
                                                <View style={{ padding: 10 }}>
                                                    <View style={{ width: width / 6, paddingVertical: 8, borderRadius: 10, backgroundColor: '#00000040', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                        <Icon name='star' color='#F9B34C' size={12} />
                                                        <Text style={[style.s12, { color: Colors.secondary, marginLeft: 5 }]}>4.9</Text>
                                                    </View>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <Text style={[style.b14, { color: Colors.active, marginTop: 10, marginHorizontal: 10 }]}>Delicious Pad Thai Fresh Shrimp Yahut</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginHorizontal: 10 }}>
                                            <Text style={[style.r14, { color: Colors.primary, }]}>$</Text>
                                            <Text style={[style.b14, { color: Colors.active, marginLeft: 5, flex: 1 }]}>11.00</Text>
                                            <Icon name='heart-outline' color={Colors.disable} size={24} />
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}