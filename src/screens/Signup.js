import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar } from 'react-native-paper'
import { Colors } from '../theme/color'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Signup() {

    const navigation = useNavigation()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary, paddingTop: 10, }]}>
            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.secondary} barStyle={'dark-content'} translucent={false}></StatusBar>
                <View style={{ flex: 1, marginHorizontal: 20 }}>

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={[style.title, { marginTop: 10, color: Colors.active }]}>Sign Up</Text>
                        <Text style={[style.r16, { color: Colors.active }]}>Please fill out the form below!</Text>

                        <View style={[style.inputContainer, { marginTop: 30, borderColor: isFocused === 'Username' ? Colors.primary : Colors.border, }]}>
                            <Icon name='person-outline' size={22} color={Colors.disable}></Icon>
                            <TextInput placeholder='Username'
                                selectionColor={Colors.primary}
                                onFocus={() => setIsFocused('Username')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable1}
                                style={[style.r16, { color: Colors.active, flex: 1, marginLeft: 5 }]}
                            ></TextInput>
                        </View>

                        <View style={[style.inputContainer, { marginTop: 20, borderColor: isFocused === 'Email' ? Colors.primary : Colors.border, }]}>
                            <Icon name='mail-outline' size={22} color={Colors.disable}></Icon>
                            <TextInput placeholder='Type your email'
                                selectionColor={Colors.primary}
                                onFocus={() => setIsFocused('Email')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable1}
                                style={[style.r16, { color: Colors.active, flex: 1, marginLeft: 5 }]}
                            ></TextInput>
                        </View>

                        <View style={[style.inputContainer, { marginTop: 20, borderColor: isFocused === 'Password' ? Colors.primary : Colors.border, }]}>
                            <Icon name='lock-closed-outline' size={22} color={Colors.disable}></Icon>
                            <TextInput placeholder='Type your password'
                                selectionColor={Colors.primary}
                                onFocus={() => setIsFocused('Password')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable1}
                                style={[style.r16, { color: Colors.active, flex: 1, marginLeft: 5 }]}
                            ></TextInput>
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                                <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={Colors.disable} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ paddingVertical: 30, }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Otp')}
                                style={style.btn}>
                                <Text style={style.btntxt}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10 }}>
                            <View style={[style.divider, { flex: 1, backgroundColor: Colors.bord }]}></View>
                            <Text style={[style.r14, { color: Colors.disable, marginHorizontal: 10, }]}>Or sign up with</Text>
                            <View style={[style.divider, { flex: 1, backgroundColor: Colors.bord }]}></View>
                        </View>

                        <View style={{ paddingTop: 30, }}>
                            <TouchableOpacity style={[style.btn1, { borderColor: '#EDF1F8', borderWidth: 1, }]}>
                                <Image source={require('../../assets/image/apple.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 30, width: width / 15 }}></Image>
                                <Text style={[style.btntxt1, { color: Colors.active }]}>Continue with Apple</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingTop: 15 }}>
                            <TouchableOpacity style={[style.btn1, { borderColor: '#EDF1F8', borderWidth: 1, }]}>
                                <Image source={require('../../assets/image/google.png')}
                                    resizeMode='stretch'
                                    style={{ height: height / 32, width: width / 15 }}></Image>
                                <Text style={[style.btntxt1, { color: Colors.active }]}>Continue with Google</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10, marginTop: 30 }}>
                            <Text style={[style.r14, { color: Colors.disable1 }]}>Have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={[style.b14, { color: Colors.primary, }]}> Sign In</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={[style.r14, { color: Colors.active, textAlign: 'center', marginTop: 40, marginBottom: 15 }]}>By using our services you are agreeing to our<Text style={[style.b14, { color: Colors.primary }]}>Terms </Text>and<Text style={[style.b14, { color: Colors.primary }]}> Privacy Policy</Text></Text>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}