import { View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground, StatusBar, } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import style from '../theme/style'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function IntroItem({ item }) {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ width: width, backgroundColor: Colors.bg }}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View style={{  flex: 2 }}>
                <Image source={item.img}
                    style={{ width: width, height: height / 1.8, resizeMode: 'stretch', }} />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor:Colors.bg }}>
                <View style={{ marginTop:20 }}>
                    <Text style={[style.r16, { color: Colors.active }]}>{item.subtitle}</Text>
                    <Text style={[style.title, {color:Colors.active,marginTop:15}]}>{item.title1}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}