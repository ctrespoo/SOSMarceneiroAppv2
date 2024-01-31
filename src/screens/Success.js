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

export default function Success() {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary, paddingTop: 10, }]}>
            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.secondary} barStyle={'dark-content'} translucent={false}></StatusBar>
                <View style={{ flex: 1, marginHorizontal: 20 }}>

                    <AppBar
                        color={Colors.secondary}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('NewPass')}>
                            <Icon name="close" color={Colors.active} size={25} />
                        </TouchableOpacity>
                        } />

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                        <Image source={require('../../assets/image/a1.png')} resizeMode='stretch' style={{ height: height / 5, width: width / 2.2 }}></Image>

                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 30 }]}>Password Changed</Text>
                        <Text style={[style.r14, { color: Colors.disable, textAlign: 'center', marginTop: 10 }]}>Password changed succesfully, You can login again with new password</Text>

                    </View>

                    <View style={{ paddingVertical: 30, marginTop: 70 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}
                            style={style.btn}>
                            <Text style={style.btntxt}>Sign In Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}