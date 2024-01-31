import { View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView, TextInput, KeyboardAvoidingView, ImageBackground, StatusBar, FlatList, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../theme/color'
import style from '../theme/style'
import { AppBar } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar, } from 'react-native-paper'
import Icon1 from 'react-native-vector-icons/Feather'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Cart() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar translucent={false} backgroundColor={Colors.bg} barStyle='dark-content' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
                <View style={[style.main, { backgroundColor: Colors.bg }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        centerTitle={true}
                        title='Cart'
                        titleStyle={[style.b18, { color: Colors.active }]}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="chevron-back" color={Colors.active} size={24} />
                        </TouchableOpacity>
                        }
                    />
                    <Text style={[style.r16, { color: Colors.disable, textAlign: 'center', marginTop: 10 }]}>Total</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                        <Text style={[style.r14, { color: Colors.primary, }]}>$</Text>
                        <Text style={[style.title, { color: Colors.active, marginLeft: 5, }]}>21.34</Text>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ padding: 12, backgroundColor: '#F4F6FB', marginTop: 20, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/s26.png')} size={60} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active, }]}>Grilled Beaf Steak with Sauce...</Text>
                                <Text style={[style.r14, { color: Colors.disable, }]}>x1</Text>
                            </View>
                            <Text style={[style.r14, { color: Colors.primary, }]}>$</Text>
                            <Text style={[style.s16, { color: Colors.active, marginLeft: 5, }]}>9.67</Text>
                        </View>

                        <View style={{ padding: 12, backgroundColor: '#F4F6FB', marginTop: 10, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/s27.png')} size={60} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active, }]}>Salad Sayur Mantep</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: 5 }]}>x1</Text>
                            </View>
                            <Text style={[style.r14, { color: Colors.primary, }]}>$</Text>
                            <Text style={[style.s16, { color: Colors.active, marginLeft: 5, }]}>9.67</Text>
                        </View>

                        <View style={{ padding: 12, backgroundColor: '#F4F6FB', marginTop: 10, borderRadius: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                            <Avatar.Image source={require('../../assets/image/s28.png')} size={60} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active, }]}>Ayam Panggang Ciamik</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: 5 }]}>x1</Text>
                            </View>
                            <Text style={[style.r14, { color: Colors.primary, }]}>$</Text>
                            <Text style={[style.s16, { color: Colors.active, marginLeft: 5, }]}>9.67</Text>
                        </View>

                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('Payment')}
                        style={[style.btn, {}]}>
                        <Text style={[style.btntxt]}>Checkout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginVertical: 20, marginBottom: 80 }}>
                        <Text style={[style.b14, { color: Colors.primary, textAlign: 'center' }]}>Add more items</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}