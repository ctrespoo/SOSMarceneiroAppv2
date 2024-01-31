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

export default function DLocation() {
    const navigation = useNavigation()
    const [isFocused, setIsFocused] = useState(false)
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#F74B70', '#F99145']} style={{ flex: 1 }} >

            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.secondary} barStyle={'dark-content'} translucent={false} />
                <View style={{ backgroundColor: Colors.bg, marginHorizontal: 20, marginTop: 20, height: 60, borderRadius: 20 }}></View>

                <View style={{ flex: 1, backgroundColor: Colors.bg, marginTop: -40, paddingHorizontal: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                        <Text style={[style.b14, { color: Colors.primary, textAlign: 'right', marginTop: 15, }]}>Cancel</Text>
                    </TouchableOpacity>
                    <View style={[style.divider, { backgroundColor: Colors.bord, marginVertical: 15 }]}></View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Image source={require('../../assets/image/Maps.png')} style={{ height: height / 5, width: width - 40, marginTop: 15, resizeMode: 'stretch' }} />

                        <View style={[style.inputContainer, { marginTop: 20, borderColor: isFocused === 'Email' ? Colors.primary : Colors.border, }]}>
                            <Icon name='location-outline' size={22} color={Colors.disable}></Icon>
                            <TextInput placeholder='Type your email'
                                selectionColor={Colors.primary}
                                onFocus={() => setIsFocused('Email')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable1}
                                style={[style.r16, { color: Colors.active, flex: 1, marginLeft: 5 }]}
                            ></TextInput>
                        </View>

                        <View style={[style.inputContainer, { marginTop: 20, borderColor: isFocused === 'Name' ? Colors.primary : Colors.border, }]}>
                            <TextInput placeholder='Type your email'
                                selectionColor={Colors.primary}
                                onFocus={() => setIsFocused('Name')}
                                onBlur={() => setIsFocused(false)}
                                placeholderTextColor={Colors.disable1}
                                style={[style.r16, { color: Colors.active, flex: 1, }]}
                            ></TextInput>
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