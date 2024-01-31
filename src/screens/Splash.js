import { View, Text, SafeAreaView, Dimensions, ImageBackground, Image} from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native';
import style from '../theme/style';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Splash() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,flexDirection:'row'}}>
                <Image source={require('../../assets/image/1.png')} style={{ height: height / 18, width: width / 8, resizeMode: 'stretch' }} />
                <Text style={[style.title,{color:Colors.active,fontSize:40,marginLeft:2}]}>lezatos</Text>
            </View>
        </SafeAreaView>
    )
}