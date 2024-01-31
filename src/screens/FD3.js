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

export default function FD3() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar translucent={true} backgroundColor='transparent' barStyle='dark-content' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
                <ImageBackground source={require('../../assets/image/s23.png')} resizeMode='stretch' style={{ flex: 1 }}>

                    <View style={{ flex: 0.9 }}>
                        <AppBar
                            elevation={0}
                            style={{ marginHorizontal: 20, backgroundColor: 'transparent', marginTop: 20 }}
                            leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                                <Icon name="chevron-back" color={Colors.secondary} size={24} />
                            </TouchableOpacity>
                            }
                            trailing={<TouchableOpacity >
                                <Icon name="heart-outline" color={Colors.secondary} size={24} />
                            </TouchableOpacity>}
                        />
                    </View>
                    <View style={{ backgroundColor: Colors.bg, flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingHorizontal: 20 }}>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                            <Text style={[style.subtitle, { color: Colors.active, textAlign: 'center', marginTop: 15 }]}>Sliced Grilled Beef Steak with Green Salad</Text>

                            <Text style={[style.r14, { color: Colors.disable, textAlign: 'center', marginTop: 10 }]}>By Resto Parmato Bapo</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                                <View style={{ paddingVertical: 5, paddingHorizontal: 12, borderRadius: 15, borderColor: Colors.border, borderWidth: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name='star' color='#F9B34C' size={12} />
                                    <Text style={[style.r14, { color: Colors.active, marginLeft: 5 }]}>4,9</Text>
                                </View>
                                <View style={{ marginLeft: 5, paddingVertical: 5, paddingHorizontal: 12, borderRadius: 15, borderColor: Colors.border, borderWidth: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../assets/image/s20.png')} style={{ height: height / 40, width: width / 20, resizeMode: 'stretch' }} />
                                    <Text style={[style.r14, { color: Colors.active, marginLeft: 5 }]}>20 min</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>

                                <View style={{ height: 54, width: width / 3.5, backgroundColor: Colors.active, borderRadius: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Icon name='remove' color={Colors.secondary} size={25} style={{ marginLeft: 10 }} />
                                    <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#707070', margin: 2, justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon name='add' color={Colors.secondary} size={25} />
                                    </View>
                                </View>

                                <View style={{ marginLeft: 5, flex: 1 }}>
                                    <View style={{ height: 48, width: 48, borderRadius: 24, backgroundColor: '#F7F7FA', justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={[style.s16, { color: Colors.active }]}>1</Text>
                                    </View>
                                </View>

                                <Text style={[style.r14, { color: Colors.primary, }]}>$</Text>
                                <Text style={[style.subtitle, { color: Colors.active, marginLeft: 5, }]}>9.67</Text>

                            </View>

                            <Text style={[style.b18, { color: Colors.active, marginTop: 15 }]}>Description</Text>

                            <Text style={[style.r14, { color: Colors.active, marginTop: 10 }]}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consat du veniam consequat coseqtures adipsing content...<Text style={{ color: Colors.star }}>Read more</Text></Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>

                                <TouchableOpacity onPress={() => navigation.navigate('Cart')}
                                    style={[style.btn, { flex: 1 }]}>
                                    <Text style={[style.btntxt]}>Add to Cart</Text>
                                </TouchableOpacity>
                                <Avatar.Image source={require('../../assets/image/s22.png')} size={56} style={{ backgroundColor: Colors.bg, marginLeft: 10 }} />
                            </View>

                        </ScrollView>
                    </View>

                </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}