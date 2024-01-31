import { View, Text, Image, Dimensions, Switch, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, ImageBackground, StatusBar, FlatList, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../theme/color'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar, RadioButton } from 'react-native-paper'
import Icon1 from 'react-native-vector-icons/Feather'
import RBSheet from 'react-native-raw-bottom-sheet'
import { LinearGradient } from 'expo-linear-gradient'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function EditProfile() {
    const navigation = useNavigation()
    const [isFocused, setIsFocused] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F99145', '#F74B70',]} style={{ flex: 1 }} >

            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.secondary} barStyle={'dark-content'} translucent={false} />
                <View style={{ backgroundColor: Colors.bg, marginHorizontal: 20, marginTop: 20, height: 60, borderRadius: 20 }}></View>

                <View style={{ flex: 1, backgroundColor: Colors.bg, marginTop: -40, paddingHorizontal: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                        <Text style={[style.b14, { color: Colors.primary, textAlign: 'right', marginTop: 15, }]}>Cancel</Text>
                    </TouchableOpacity>
                    <View style={[style.divider, { backgroundColor: Colors.bord, marginVertical: 15 }]}></View>

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Image source={require('../../assets/image/p4.png')} style={{ height: height / 12, width: width / 5, marginTop: 15, resizeMode: 'stretch', alignSelf: 'center' }} />

                        <View style={[style.inputContainer, { marginTop: 20, borderColor: isFocused === 'Email' ? Colors.primary : Colors.border, }]}>
                            <Icon name='person-outline' size={22} color={Colors.disable}></Icon>
                            <TextInput placeholder='bebyjovanca'
                                selectionColor={Colors.primary}
                                onFocus={() => setIsFocused('Email')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable1}
                                style={[style.b14, { color: Colors.active, flex: 1, marginLeft: 5 }]}
                            ></TextInput>
                        </View>

                        <View style={[style.inputContainer, { marginTop: 15, borderColor: isFocused === 'Name' ? Colors.primary : Colors.border, }]}>
                            <Icon name='mail-outline' size={22} color={Colors.disable}></Icon>
                            <TextInput placeholder='bebyjovanca@gmail.com'
                                selectionColor={Colors.primary}
                                onFocus={() => setIsFocused('Name')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable1}
                                style={[style.b14, { color: Colors.active, flex: 1, marginLeft: 5 }]}
                            ></TextInput>
                        </View>

                        <View style={[style.inputContainer, { marginTop: 15, borderColor: isFocused === 'Phone' ? Colors.primary : Colors.border, }]}>
                            <Image source={require('../../assets/image/Flag.png')} resizeMode='stretch' style={{ height: height / 35, width: width / 13 }}></Image>
                            <TextInput placeholder='+62823328779'
                                selectionColor={Colors.primary}
                                onFocus={() => setIsFocused('Phone')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable1}
                                keyboardType='phone-pad'
                                style={[style.b14, { color: Colors.active, flex: 1, marginLeft: 10 }]}
                            ></TextInput>
                        </View>

                        <View style={[style.inputContainer, { marginTop: 15, marginBottom: 20, borderColor: isFocused === 'Password' ? Colors.primary : Colors.border, }]}>
                            <Icon name='lock-closed-outline' size={22} color={Colors.disable}></Icon>
                            <TextInput placeholder='Type your password'
                                selectionColor={Colors.primary}
                                onFocus={() => setIsFocused('Password')}
                                secureTextEntry={isPasswordVisible}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable1}
                                style={[style.b14, { color: Colors.active, flex: 1, marginLeft: 5 }]}
                            ></TextInput>
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                                <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={Colors.disable} size={20} />
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                    <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                        style={[style.btn, { marginVertical: 20, }]}>
                        <Text style={style.btntxt}>Save Changes</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>
        </LinearGradient>
    )
}