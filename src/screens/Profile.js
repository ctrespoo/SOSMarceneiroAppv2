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

export default function Profile() {
    const navigation = useNavigation()
    const [checked, setChecked] = useState(false)

    const [ison, setIsOn] = useState(true)
    const toggle = () => setIsOn(previousState => !previousState)

    const [ison1, setIsOn1] = useState(false)
    const toggle1 = () => setIsOn1(previousState => !previousState)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar translucent={false} backgroundColor={Colors.bg} barStyle='dark-content' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
                <View style={[style.main, { backgroundColor: Colors.bg }]}>

                    <AppBar
                        color={Colors.secondary}
                        leading={<Text style={[style.title, { color: Colors.active }]}>Profile</Text>}
                        elevation={0}
                        trailing={<TouchableOpacity >
                            <Image source={require('../../assets/image/s2.png')} style={{ height: height / 36, width: width / 16, resizeMode: 'stretch' }} />
                        </TouchableOpacity>
                        } />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Avatar.Image source={require('../../assets/image/s1.png')} size={60} style={{ backgroundColor: Colors.bg }} />
                            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}
                                style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b18, { color: Colors.active }]}>Beby Azalea</Text>
                                <Text style={[style.r14, { color: Colors.disable }]}>beby@gmail.com</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={[style.b18, { color: Colors.disable, marginTop: 20 }]}>General</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Avatar.Image source={require('../../assets/image/s42.png')} size={40} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Account Information</Text>
                                <Text style={[style.r12, { color: Colors.disable, marginTop: 2 }]}>Change your account information</Text>
                            </View>
                            <Icon name="chevron-forward" color={Colors.icon} size={20} />
                        </View>
                        <View style={[style.divider, { backgroundColor: Colors.bord, marginVertical: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Avatar.Image source={require('../../assets/image/s43.png')} size={40} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Payment Methods</Text>
                                <Text style={[style.r12, { color: Colors.disable, marginTop: 2 }]}>Add your credit or debit card</Text>
                            </View>
                            <Icon name="chevron-forward" color={Colors.icon} size={20} />
                        </View>
                        <View style={[style.divider, { backgroundColor: Colors.bord, marginVertical: 15 }]}></View>

                        <TouchableOpacity onPress={() => navigation.navigate('DLocation')}
                            style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Avatar.Image source={require('../../assets/image/s44.png')} size={40} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Delivery Location</Text>
                                <Text style={[style.r12, { color: Colors.disable, marginTop: 2 }]}>Change your delivery location</Text>
                            </View>
                            <Icon name="chevron-forward" color={Colors.icon} size={20} />
                        </TouchableOpacity>
                        <View style={[style.divider, { backgroundColor: Colors.bord, marginVertical: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Avatar.Image source={require('../../assets/image/s45.png')} size={40} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Invite your friends</Text>
                                <Text style={[style.r12, { color: Colors.disable, marginTop: 2 }]}>Get $10 each invitation!</Text>
                            </View>
                            <Icon name="chevron-forward" color={Colors.icon} size={20} />
                        </View>

                        <Text style={[style.b18, { color: Colors.disable, marginTop: 30 }]}>Notifications</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Avatar.Image source={require('../../assets/image/s46.png')} size={40} style={{ backgroundColor: Colors.bg }} />
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}
                                style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Notifications</Text>
                                <Text style={[style.r12, { color: Colors.disable, marginTop: 2 }]}>You will receive daily update</Text>
                            </TouchableOpacity>
                            <Switch
                                trackColor={{ false: Colors.disable, true: Colors.primary }}
                                thumbColor={ison ? Colors.secondary : Colors.secondary}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggle}
                                value={ison}
                            />
                        </View>
                        <View style={[style.divider, { backgroundColor: Colors.bord, marginVertical: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 80 }}>
                            <Avatar.Image source={require('../../assets/image/s47.png')} size={40} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active }]}>Promotional Notifications</Text>
                                <Text style={[style.r12, { color: Colors.disable, marginTop: 2 }]}>Get notified when promotions</Text>
                            </View>
                            <Switch
                                trackColor={{ false: Colors.disable, true: Colors.primary }}
                                thumbColor={ison1 ? Colors.secondary : Colors.secondary}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggle1}
                                value={ison1}
                            />
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}