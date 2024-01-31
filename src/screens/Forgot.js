import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar } from 'react-native-paper'
import { Colors } from '../theme/color'
import style from '../theme/style'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Forgot() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary, paddingTop: 10, }]}>
            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.secondary} barStyle={'dark-content'} translucent={false}></StatusBar>
                <View style={{ flex: 1, marginHorizontal: 20 }}>

                    <AppBar
                        color={Colors.secondary}
                        // title='Forgot Password'
                        // titleStyle={[style.b18,{color:Colors.active}]}
                        // centerTitle={true}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Icon name="chevron-back" color={Colors.active} size={25} />
                        </TouchableOpacity>
                        } />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={[style.title, { marginTop: 10, color: Colors.active }]}>Forgot Password</Text>
                        <Text style={[style.r16, { color: Colors.active }]}>Select with contact details should we use to reset yout password</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Email')}
                            style={{ flexDirection: 'row', alignItems: 'center', padding: 15, marginTop: 30, }}>
                            <View style={{ height: 50, width: 50, borderRadius: 30, backgroundColor: Colors.iconbg, alignItems: 'center', justifyContent: 'center' }}>
                                <Icons name='email-outline' size={20} color={Colors.primary}></Icons>
                            </View>
                            <View style={{ marginHorizontal: 20 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Email</Text>
                                <Text style={[style.r14, { color: Colors.disable }]}>********@mail.com</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Phone')}
                            style={{ flexDirection: 'row', alignItems: 'center', padding: 15, marginTop: 10, }}>
                            <View style={{ height: 50, width: 50, borderRadius: 30, backgroundColor: Colors.iconbg, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='call-outline' size={20} color={Colors.primary}></Icon>
                            </View>
                            <View style={{ marginHorizontal: 20 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Phone Number</Text>
                                <Text style={[style.r14, { color: Colors.disable }]}>**** **** **** 2345</Text>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}