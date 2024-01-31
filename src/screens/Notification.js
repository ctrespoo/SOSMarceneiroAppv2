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

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Notification() {
    const navigation = useNavigation()
    const [checked, setChecked] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar translucent={false} backgroundColor={Colors.bg} barStyle='dark-content' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
                <View style={[style.main, { backgroundColor: Colors.bg }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        centerTitle={true}
                        title='Notification'
                        titleStyle={[style.b18, { color: Colors.active }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                            <Icon name="chevron-back" color={Colors.active} size={24} />
                        </TouchableOpacity>
                        }
                    />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={[style.b18, { color: Colors.disable, marginTop: 20 }]}>New Notification</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Avatar.Image source={require('../../assets/image/n1.png')} size={60} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.s16, { color: Colors.active }]}>Buy 1 get 1 free</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: 2 }]}>Valid till 20 May</Text>
                            </View>
                        </View>
                        <View style={[style.divider, { backgroundColor: Colors.bord, marginVertical: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Avatar.Image source={require('../../assets/image/n2.png')} size={60} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.s16, { color: Colors.active }]}>Sale 50% today</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: 2 }]}>Valid till 20 May</Text>
                            </View>
                        </View>

                        <Text style={[style.b18, { color: Colors.disable, marginTop: 30 }]}>This week</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Avatar.Image source={require('../../assets/image/n3.png')} size={60} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.s16, { color: Colors.active }]}>ONLY TODAY 20%</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: 2 }]}>Valid till 20 May</Text>
                            </View>
                        </View>
                        <View style={[style.divider, { backgroundColor: Colors.bord, marginVertical: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Avatar.Image source={require('../../assets/image/n4.png')} size={60} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.s16, { color: Colors.active }]}>Sale 50% today</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: 2 }]}>Valid till 20 May</Text>
                            </View>
                        </View>
                        <View style={[style.divider, { backgroundColor: Colors.bord, marginVertical: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Avatar.Image source={require('../../assets/image/n5.png')} size={60} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.s16, { color: Colors.active }]}>ONLY TODAY 20%</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: 2 }]}>Valid till 20 May</Text>
                            </View>
                        </View>
                        <View style={[style.divider, { backgroundColor: Colors.bord, marginVertical: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                            <Avatar.Image source={require('../../assets/image/n6.png')} size={60} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.s16, { color: Colors.active }]}>Sale 50% today</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: 2 }]}>Valid till 20 May</Text>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}