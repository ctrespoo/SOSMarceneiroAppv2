import { View, Text, Image, Dimensions, TouchableOpacity, TextInput, SafeAreaView, KeyboardAvoidingView, ImageBackground, StatusBar, FlatList } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../theme/color'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Otp() {
    const navigation = useNavigation()

    const e1 = useRef()
    const e2 = useRef()
    const e3 = useRef()
    const e4 = useRef()
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar translucent={false} backgroundColor={Colors.bg} barStyle='dark-content' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
                <View style={[style.main, { backgroundColor: Colors.bg, }]}>

                    <Text style={[style.title, { color: Colors.active, marginTop: 50 }]}>Verification Code</Text>
                    <Text style={[style.r14, { color: Colors.disable, marginTop: 10 }]}>Please enter the verification code that we have sent to your email</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly", paddingTop: 50 }}>
                        <TextInput ref={e1}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: Colors.active, borderColor: Colors.border, borderWidth: 1 }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e2.current.focus()
                                }
                            }}
                        />
                        <TextInput ref={e2}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: Colors.active, borderColor: Colors.border, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e3.current.focus()
                                }
                            }}
                        />
                        <TextInput ref={e3}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: Colors.active, borderColor: Colors.border, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e4.current.focus()
                                }
                            }}
                        />
                        <TextInput ref={e4}
                            keyboardType='phone-pad'
                            maxLength={1}
                            selectionColor={Colors.primary}
                            style={[style.otp, { color: Colors.active, borderColor: Colors.border, }]}
                            onChangeText={txt => {
                                if (txt.length >= 1) {
                                    e4.current.focus()
                                }
                            }}
                        />

                    </View>
                    <Text style={[style.b14, { color: Colors.primary, textAlign: 'center', marginTop: 20 }]}>Resend Code</Text>
                    <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                            style={style.btn}>
                            <Text style={style.btntxt}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}