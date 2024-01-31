import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar } from 'react-native-paper'
import { Colors } from '../theme/color'
import style from '../theme/style'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'react-native-linear-gradient'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Tab = createMaterialTopTabNavigator()

const Top = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: '#F6F7FA', borderRadius: 25, marginTop: 5, marginHorizontal: 1, height: 50 },
                tabBarLabelStyle: {
                    fontSize: 15,
                    // backgroundColor:Colors.disable,
                    borderRadius: 20,
                },
                swipeEnabled: false,
                tabBarPressOpacity: 0.5,
                tabBarPressColor: '#F6F7FA',
                tabBarIndicatorStyle: { backgroundColor: 'transparent', },

            }}>

            <Tab.Screen name="Favourite" component={Favourite}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <View style={{ backgroundColor: focused ? Colors.secondary : '#F6F7FA', width: width / 2.4, height: 43, marginTop: -6, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: focused ? Colors.active : Colors.disable, fontFamily: 'Urbanist-Regular', textAlign: 'center' }}>Favourite</Text>
                        </View>
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen name="My Order" component={MyOrder}
                options={{
                    tabBarShowLabel: true,
                    tabBarLabel: ({ focused, color, }) => (
                        <View style={{ backgroundColor: focused ? Colors.secondary : '#F6F7FA', width: width / 2.4, height: 43, marginTop: -6, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: focused ? Colors.active : Colors.disable, fontFamily: 'Urbanist-Regular', textAlign: 'center' }}>My Order</Text>
                        </View>
                    ),
                    headerShown: false,
                }} />

        </Tab.Navigator>
    )
}

const Favourite = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary, paddingTop: 10, }]}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Image source={require('../../assets/image/a5.png')} resizeMode='stretch' style={{ height: 80, width: 80 }}></Image>
                    <View style={{ flex: 1, marginLeft: 8 }}>
                        <Text style={[style.b14, { color: Colors.active }]}>Pasta spaghetti with shrimps</Text>
                        <Text style={[style.s12, { color: Colors.active, marginTop: 5 }]}>$ 9.1</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 18 }}>
                            <Text style={[style.r12, { color: Colors.disable }]}>by Dapur Umami</Text>
                            <Text style={[style.r12, { color: Colors.disable, flex: 1, marginLeft: 10 }]}>⭐ 4.9</Text>
                            <Icon name='heart' color={'#FD451C'} size={24}></Icon>
                        </View>
                    </View>
                </View>

                <View style={[style.divider, { backgroundColor: Colors.div, marginTop: 15 }]}></View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Image source={require('../../assets/image/a6.png')} resizeMode='stretch' style={{ height: 80, width: 80 }}></Image>
                    <View style={{ flex: 1, marginLeft: 8 }}>
                        <Text style={[style.b14, { color: Colors.active }]}>Baked chicken wings with sauce</Text>
                        <Text style={[style.s12, { color: Colors.active, marginTop: 5 }]}>$ 6.9</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
                            <Text style={[style.r12, { color: Colors.disable }]}>by Eco Kitchen</Text>
                            <Text style={[style.r12, { color: Colors.disable, flex: 1, marginLeft: 10 }]}>⭐ 4.9</Text>
                            <Icon name='heart' color={'#FD451C'} size={24}></Icon>
                        </View>
                    </View>
                </View>

                <View style={[style.divider, { backgroundColor: Colors.div, marginTop: 15 }]}></View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Image source={require('../../assets/image/a7.png',)} resizeMode='stretch' style={{ height: 80, width: 80 }}></Image>
                    <View style={{ flex: 1, marginLeft: 8 }}>
                        <Text style={[style.b14, { color: Colors.active }]}>Chicken steak with salad</Text>
                        <Text style={[style.s12, { color: Colors.active, marginTop: 5 }]}>$ 8.4</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
                            <Text style={[style.r12, { color: Colors.disable }]}>by Joglo Manis</Text>
                            <Text style={[style.r12, { color: Colors.disable, flex: 1, marginLeft: 10 }]}>⭐ 4.9</Text>
                            <Icon name='heart' color={'#FD451C'} size={24}></Icon>
                        </View>
                    </View>
                </View>

                <View style={[style.divider, { backgroundColor: Colors.div, marginTop: 15 }]}></View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Image source={require('../../assets/image/a8.png')} resizeMode='stretch' style={{ height: 80, width: 80 }}></Image>
                    <View style={{ flex: 1, marginLeft: 8 }}>
                        <Text style={[style.b14, { color: Colors.active }]}>Tom yum kung or river prawn </Text>
                        <Text style={[style.s12, { color: Colors.active, marginTop: 5 }]}>$ 8.0</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
                            <Text style={[style.r12, { color: Colors.disable }]}>by RM Citra Alam</Text>
                            <Text style={[style.r12, { color: Colors.disable, flex: 1, marginLeft: 10 }]}>⭐ 4.9</Text>
                            <Icon name='heart' color={'#FD451C'} size={24}></Icon>
                        </View>
                    </View>
                </View>

                <View style={[style.divider, { backgroundColor: Colors.div, marginTop: 15 }]}></View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 80 }}>
                    <Image source={require('../../assets/image/a9.png')} resizeMode='stretch' style={{ height: 80, width: 80 }}></Image>
                    <View style={{ flex: 1, marginLeft: 8 }}>
                        <Text style={[style.b14, { color: Colors.active }]}>Bakso Malang Ciamik</Text>
                        <Text style={[style.s12, { color: Colors.active, marginTop: 5 }]}>$ 6.9</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
                            <Text style={[style.r12, { color: Colors.disable }]}>by Mbok Mangap</Text>
                            <Text style={[style.r12, { color: Colors.disable, flex: 1, marginLeft: 10 }]}>⭐ 4.9</Text>
                            <Icon name='heart' color={'#FD451C'} size={24}></Icon>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const MyOrder = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary, paddingTop: 10, }]}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>

                    <View style={[{ flex: 1, }]}>
                        <View style={[{ backgroundColor: Colors.bg, borderRadius: 15 }]}>
                            <ImageBackground source={require('../../assets/image/f3.png')} resizeMode='stretch' style={{ height: height / 5.5 }}>
                                <View style={{ padding: 10 }}>
                                    <View style={{ width: width / 6, paddingVertical: 8, borderRadius: 10, backgroundColor: '#00000040', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                        <Icon name='star' color='#F9B34C' size={12} />
                                        <Text style={[style.s12, { color: Colors.secondary, marginLeft: 5 }]}>4.9</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <Text style={[style.b14, { color: Colors.active, marginTop: 10, marginLeft: 10, marginRight: 5 }]}>Pasta spaghetti with shrimps</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginHorizontal: 10, paddingBottom: 5 }}>
                                <Text style={[style.r14, { color: Colors.primary, }]}>$</Text>
                                <Text style={[style.b14, { color: Colors.active, marginLeft: 5, flex: 1 }]}>8.00</Text>
                                <Icon name='heart' color={Colors.primary} size={24} />
                            </View>
                        </View>
                    </View>

                    <View style={{ marginHorizontal: 5 }}></View>
                    <View style={[{ flex: 1, }]}>
                        <View style={[{ backgroundColor: Colors.bg, borderRadius: 15 }]}>
                            <ImageBackground source={require('../../assets/image/f2.png')} resizeMode='stretch' style={{ height: height / 5.5 }}>
                                <View style={{ padding: 10 }}>
                                    <View style={{ width: width / 6, paddingVertical: 8, borderRadius: 10, backgroundColor: '#00000040', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                        <Icon name='star' color='#F9B34C' size={12} />
                                        <Text style={[style.s12, { color: Colors.secondary, marginLeft: 5 }]}>4.9</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <Text style={[style.b14, { color: Colors.active, marginTop: 10, marginLeft: 10, marginRight: 5 }]}>Baked chicken wings with sauce</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginHorizontal: 10, paddingBottom: 5 }}>
                                <Text style={[style.r14, { color: Colors.primary, }]}>$</Text>
                                <Text style={[style.b14, { color: Colors.active, marginLeft: 5, flex: 1 }]}>8.00</Text>
                                <Icon name='heart' color={Colors.primary} size={24} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>

                    <View style={[{ flex: 1, }]}>
                        <View style={[{ backgroundColor: Colors.bg, borderRadius: 15 }]}>
                            <ImageBackground source={require('../../assets/image/f4.png')} resizeMode='stretch' style={{ height: height / 5.5 }}>
                                <View style={{ padding: 10 }}>
                                    <View style={{ width: width / 6, paddingVertical: 8, borderRadius: 10, backgroundColor: '#00000040', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                        <Icon name='star' color='#F9B34C' size={12} />
                                        <Text style={[style.s12, { color: Colors.secondary, marginLeft: 5 }]}>4.9</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <Text style={[style.b14, { color: Colors.active, marginTop: 10, marginLeft: 10, marginRight: 5 }]}>Chicken steak with salad</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginHorizontal: 10, paddingBottom: 5 }}>
                                <Text style={[style.r14, { color: Colors.primary, }]}>$</Text>
                                <Text style={[style.b14, { color: Colors.active, marginLeft: 5, flex: 1 }]}>8.00</Text>
                                <Icon name='heart' color={Colors.primary} size={24} />
                            </View>
                        </View>
                    </View>

                    <View style={{ marginHorizontal: 5 }}></View>
                    <View style={[{ flex: 1, }]}>
                        <View style={[{ backgroundColor: Colors.bg, borderRadius: 15 }]}>
                            <ImageBackground source={require('../../assets/image/f5.png')} resizeMode='stretch' style={{ height: height / 5.5 }}>
                                <View style={{ padding: 10 }}>
                                    <View style={{ width: width / 6, paddingVertical: 8, borderRadius: 10, backgroundColor: '#00000040', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                        <Icon name='star' color='#F9B34C' size={12} />
                                        <Text style={[style.s12, { color: Colors.secondary, marginLeft: 5 }]}>4.9</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <Text style={[style.b14, { color: Colors.active, marginTop: 10, marginLeft: 10, marginRight: 5 }]}>Tom yum kung or river prawn </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginHorizontal: 10, paddingBottom: 5 }}>
                                <Text style={[style.r14, { color: Colors.primary, }]}>$</Text>
                                <Text style={[style.b14, { color: Colors.active, marginLeft: 5, flex: 1 }]}>8.00</Text>
                                <Icon name='heart' color={Colors.primary} size={24} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 80 }}>

                    <View style={[{ flex: 1, }]}>
                        <View style={[{ backgroundColor: Colors.bg, borderRadius: 15 }]}>
                            <ImageBackground source={require('../../assets/image/f6.png')} resizeMode='stretch' style={{ height: height / 5.5 }}>
                                <View style={{ padding: 10 }}>
                                    <View style={{ width: width / 6, paddingVertical: 8, borderRadius: 10, backgroundColor: '#00000040', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                        <Icon name='star' color='#F9B34C' size={12} />
                                        <Text style={[style.s12, { color: Colors.secondary, marginLeft: 5 }]}>4.9</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <Text style={[style.b14, { color: Colors.active, marginTop: 10, marginLeft: 10, marginRight: 5 }]}>Spaghetti with Spicy Mixed Seafood</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginHorizontal: 10, paddingBottom: 5 }}>
                                <Text style={[style.r14, { color: Colors.primary, }]}>$</Text>
                                <Text style={[style.b14, { color: Colors.active, marginLeft: 5, flex: 1 }]}>8.00</Text>
                                <Icon name='heart' color={Colors.primary} size={24} />
                            </View>
                        </View>
                    </View>

                    <View style={{ marginHorizontal: 5 }}></View>
                    <View style={[{ flex: 1, }]}>
                        <View style={[{ backgroundColor: Colors.bg, borderRadius: 15 }]}>
                            <ImageBackground source={require('../../assets/image/f7.png')} resizeMode='stretch' style={{ height: height / 5.5 }}>
                                <View style={{ padding: 10 }}>
                                    <View style={{ width: width / 6, paddingVertical: 8, borderRadius: 10, backgroundColor: '#00000040', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                        <Icon name='star' color='#F9B34C' size={12} />
                                        <Text style={[style.s12, { color: Colors.secondary, marginLeft: 5 }]}>4.9</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <Text style={[style.b14, { color: Colors.active, marginTop: 10, marginLeft: 10, marginRight: 5 }]}>Spaghetti with Spicy Mixed Seafood</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginHorizontal: 10, paddingBottom: 5 }}>
                                <Text style={[style.r14, { color: Colors.primary, }]}>$</Text>
                                <Text style={[style.b14, { color: Colors.active, marginLeft: 5, flex: 1 }]}>8.00</Text>
                                <Icon name='heart' color={Colors.primary} size={24} />
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default function FavouriteTab() {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary, paddingTop: 10, }]}>
            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }}>
                <StatusBar backgroundColor={Colors.secondary} barStyle={'dark-content'} translucent={false}></StatusBar>
                <View style={{ flex: 1, marginHorizontal: 20 }}>

                    <AppBar
                        color={Colors.secondary}
                        leading={<Text style={[style.title, { color: Colors.active }]}>Favourite</Text>}
                        elevation={0}
                        trailing={<TouchableOpacity >
                            <Image source={require('../../assets/image/s2.png')} style={{ height: height / 36, width: width / 16, resizeMode: 'stretch' }} />
                        </TouchableOpacity>
                        } />

                    <Top></Top>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}