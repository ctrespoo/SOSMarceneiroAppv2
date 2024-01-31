import { View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, ImageBackground, StatusBar, FlatList, ScrollView } from 'react-native'
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

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Promo() {
    const navigation = useNavigation()
    const [checked, setChecked] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar translucent={false} backgroundColor={Colors.bg} barStyle='dark-content' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
                <View style={[style.main, { backgroundColor: Colors.bg }]}>

                    <AppBar
                        color={Colors.secondary}
                        leading={<Text style={[style.title, { color: Colors.active }]}>Promos</Text>}
                        elevation={0}
                        trailing={<TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Image source={require('../../assets/image/s2.png')} style={{ height: height / 36, width: width / 16, resizeMode: 'stretch' }} />
                        </TouchableOpacity>
                        } />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ padding: 12, borderColor: Colors.bord, borderWidth: 1, borderRadius: 12, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/image/p1.png')} style={{ height: height / 14, width: width / 6, resizeMode: 'stretch' }} />
                            <View style={[{ borderStyle: 'dashed', borderWidth: 1, borderColor: Colors.bord, height: '100%', marginHorizontal: 10 }]}></View>
                            <View style={{ flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Buy 1 drink and get 20% off on second drink</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: 2 }]}>Valid till 30 May 2020</Text>
                            </View>
                        </View>

                        <View style={{ padding: 12, borderColor: Colors.bord, borderWidth: 1, borderRadius: 12, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/p2.png')} size={60} style={{ backgroundColor: Colors.bg }} />
                            <View style={[{ borderStyle: 'dashed', borderWidth: 1, borderColor: Colors.bord, height: '100%', marginHorizontal: 10 }]}></View>
                            <View style={{ flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Flat 10% off on total bill of $10 or above</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: 2 }]}>Valid till 30 May 2020</Text>
                            </View>
                        </View>

                        <View style={{ padding: 12, borderColor: Colors.bord, borderWidth: 1, borderRadius: 12, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/p3.png')} size={60} style={{ backgroundColor: Colors.bg }} />
                            <View style={[{ borderStyle: 'dashed', borderWidth: 1, borderColor: Colors.bord, height: '100%', marginHorizontal: 10 }]}></View>
                            <View style={{ flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Get 20% off for 12 months!</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: 2 }]}>Valid till 30 May 2020</Text>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}