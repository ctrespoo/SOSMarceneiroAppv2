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

export default function NewPass() {
    const navigation = useNavigation()
    const [isFocused, setIsFocused] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary, paddingTop: 10, }]}>
            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.secondary} barStyle={'dark-content'} translucent={false}></StatusBar>
                <View style={{ flex: 1, marginHorizontal: 20 }}>
                    <AppBar
                        color={Colors.secondary}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Otp2')}>
                            <Icon name="chevron-back" color={Colors.active} size={25} />
                        </TouchableOpacity>
                        } />
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={[style.title, { marginTop: 10, color: Colors.active }]}>Create New Password</Text>
                        <Text style={[style.r16, { color: Colors.active, marginTop: 5 }]}>Your password must be different from previous used password</Text>

                        <View style={[style.inputContainer, { marginTop: 20, borderColor: isFocused === 'Password' ? Colors.primary : Colors.border, }]}>
                            <Icon name='lock-closed-outline' size={22} color={Colors.disable}></Icon>
                            <TextInput placeholder='Type your password'
                                selectionColor={Colors.primary}
                                secureTextEntry={isPasswordVisible}
                                onFocus={() => setIsFocused('Password')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable1}
                                style={[style.r16, { color: Colors.active, flex: 1, marginLeft: 5 }]}
                            ></TextInput>
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                                <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={Colors.disable} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={[style.inputContainer, { marginTop: 20, borderColor: isFocused === 'Password1' ? Colors.primary : Colors.border, }]}>
                            <Icon name='lock-closed-outline' size={22} color={Colors.disable}></Icon>
                            <TextInput placeholder='Confirm your password'
                                selectionColor={Colors.primary}
                                secureTextEntry={isPasswordVisible1}
                                onFocus={() => setIsFocused('Password1')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable1}
                                style={[style.r16, { color: Colors.active, flex: 1, marginLeft: 5 }]}
                            ></TextInput>
                            <TouchableOpacity onPress={() => setIsPasswordVisible1(!isPasswordVisible1)} >
                                <Icon name={isPasswordVisible1 ? 'eye-off' : 'eye'} color={Colors.disable} size={20} />
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                    <View style={{ paddingVertical: 30, }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Success')}
                            style={style.btn}>
                            <Text style={style.btntxt}>Reset Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}