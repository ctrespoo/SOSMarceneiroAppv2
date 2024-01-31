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

export default function Phone() {

    const navigation = useNavigation()
    const [isFocused, setIsFocused] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary, paddingTop: 10, }]}>
            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.secondary} barStyle={'dark-content'} translucent={false}></StatusBar>
                <View style={{ flex: 1, marginHorizontal: 20 }}>

                    <AppBar
                        color={Colors.secondary}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                            <Icon name="chevron-back" color={Colors.active} size={25} />
                        </TouchableOpacity>
                        } />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={[style.title, { marginTop: 10, color: Colors.active }]}>Reset Password</Text>
                        <Text style={[style.r16, { color: Colors.active }]}>Enter your phone number, we will send a verification code to your email</Text>

                        <View style={[style.inputContainer, { marginTop: 30, borderColor: isFocused === 'Phone' ? Colors.primary : Colors.border, }]}>
                            <Image source={require('../../assets/image/Flag.png')} resizeMode='stretch' style={{ height: height / 35, width: width / 13 }}></Image>
                            <TextInput placeholder='+62823328779'
                                selectionColor={Colors.primary}
                                onFocus={() => setIsFocused('Phone')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable1}
                                style={[style.r16, { color: Colors.active, flex: 1, marginLeft: 10 }]}
                            ></TextInput>
                        </View>

                    </ScrollView>
                    <View style={{ paddingVertical: 30, }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Otp2')}
                            style={style.btn}>
                            <Text style={style.btntxt}>Send Link</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
