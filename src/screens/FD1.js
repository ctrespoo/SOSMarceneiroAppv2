import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar } from 'react-native-paper'
import { Colors } from '../theme/color'
import style from '../theme/style'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function FD1() {

    const navigation = useNavigation()

    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F99145', '#F74B70',]} style={{ flex: 1 }} >

            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.secondary} barStyle={'dark-content'} translucent={false}></StatusBar>
                <View style={{ flex: 1, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: Colors.secondary, paddingTop: Platform.OS === 'ios' ? 15 : 0 }}>

                    <AppBar
                        color={Colors.secondary}
                        elevation={0}
                        style={{ paddingHorizontal: 20, }}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                            <Icon name="chevron-back" color={Colors.active} size={25} />
                        </TouchableOpacity>
                        }
                        trailing={<TouchableOpacity >
                            <Icon name="heart-outline" color={Colors.active} size={25} />
                        </TouchableOpacity>
                        } />

                    <ScrollView showsVerticalScrollIndicator={false} >

                        <Text style={[style.subtitle, { color: Colors.active, paddingHorizontal: 20, }]}>Grilled Beef Steak with  Sauce ABC</Text>
                        <Text style={[style.r14, { color: '#8D93A1', marginTop: 20, paddingHorizontal: 20, }]}>By Resto Parmato Bapo</Text>

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ justifyContent: 'space-between', paddingHorizontal: 20, }}>
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: Colors.bord, borderRadius: 15, paddingHorizontal: 8, width: width / 6.5, paddingVertical: 1 }}>
                                        <Icon name='star' size={15} color={'#FFB950'}></Icon>
                                        <Text style={[style.r14, { color: Colors.active, }]}>4.9</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: Colors.bord, borderRadius: 15, paddingHorizontal: 8, width: width / 4, paddingVertical: 3, marginTop: 20 }}>
                                        <Image source={require('../../assets/image/a3.png')} resizeMode='stretch' style={{ height: 18, width: 18, }}></Image>
                                        <Text style={[style.r14, { color: Colors.active, }]}>20 min</Text>
                                    </View>
                                </View>

                                <View style={{ height: height / 7, width: 54, backgroundColor: Colors.active, borderRadius: 30, justifyContent: 'space-between', alignItems: 'center', paddingVertical: 2, marginBottom: 20 }}>
                                    <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#707070', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon name='add' color={Colors.secondary} size={25} />
                                    </View>
                                    <Text style={[style.b16, { color: Colors.secondary, marginBottom: 15 }]}>|</Text>
                                </View>

                            </View>
                            <View>
                                <Image source={require('../../assets/image/a2.png')} resizeMode='stretch' style={{ height: height / 2.8, width: width / 1.25, marginLeft: 20 }}></Image>
                            </View>
                        </View>

                        <Text style={[style.b18, { color: Colors.active, marginHorizontal: 20 }]}>Description</Text>
                        <Text style={[style.r14, { color: Colors.disable, marginTop: 5, marginHorizontal: 20 }]}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consat du veniam consequat coseqtures adipsing content...<Text style={{ color: Colors.y }}>Read more</Text></Text>

                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 15, }}>
                    <Text style={[style.s16, { color: Colors.secondary }]}>2 Items</Text>
                    <Text style={[style.title, { color: Colors.secondary }]}>$19.24</Text>
                    <TouchableOpacity>
                        <Image source={require('../../assets/image/a4.png')} resizeMode='stretch' style={{ height: 56, width: 56 }}></Image>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}