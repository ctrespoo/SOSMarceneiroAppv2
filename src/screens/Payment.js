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

export default function Payment() {
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
                        title='Payment'
                        titleStyle={[style.b18, { color: Colors.active }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                            <Icon name="chevron-back" color={Colors.active} size={24} />
                        </TouchableOpacity>
                        }
                    />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={[style.b18, { color: Colors.active, marginTop: 10 }]}>Address</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image source={require('../../assets/image/s29.png')} style={{ height: height / 10, width: width / 3, resizeMode: 'stretch' }} />
                            <View style={{ marginLeft: 15, flex: 1 }}>
                                <Text style={[style.b16, { color: Colors.active, }]}>Home</Text>
                                <Text style={[style.r14, { color: Colors.disable, }]}>Jl. Ponorogo-Trenggalek, Sambit, Ponorogo</Text>
                            </View>
                        </View>

                        <Text style={[style.b18, { color: Colors.active, marginTop: 20 }]}>Payment Method</Text>

                        <TouchableOpacity onPress={() => this.RBSheet2.open()}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginHorizontal: 10 }}>

                            <RBSheet ref={ref => {
                                this.RBSheet2 = ref
                            }}
                                height={400}
                                openDuration={100}
                                customStyles={{
                                    container: {
                                        borderTopRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        backgroundColor: Colors.secondary
                                    }
                                }}>
                                <View style={{ marginHorizontal: 20, marginTop: 15 }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text></Text>
                                        <Text style={[style.b18, { color: Colors.active, }]}>Select Payment</Text>
                                        <TouchableOpacity onPress={() => this.RBSheet2.close()}>
                                            <Text style={[style.b14, { color: Colors.primary, }]}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ padding: 12, borderColor: Colors.bord, borderWidth: 1, borderRadius: 12, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../../assets/image/visa.png')} style={{ height: height / 18, width: width / 6, resizeMode: 'stretch' }} />
                                        <View style={{ marginLeft: 10, flex: 1 }}>
                                            <Text style={[style.s16, { color: Colors.active }]}>Visa</Text>
                                            <Text style={[style.r14, { color: Colors.disable, marginTop: 2 }]}>**** **** **** 9812</Text>
                                        </View>
                                        <RadioButton
                                            value="first"
                                            status={checked === 'first' ? 'checked' : 'unchecked'}
                                            onPress={() => setChecked('first')}
                                            color={Colors.primary}
                                            uncheckedColor={Colors.disable}
                                        />
                                    </View>

                                    <View style={{ padding: 12, borderColor: Colors.bord, borderWidth: 1, borderRadius: 12, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../../assets/image/master.png')} style={{ height: height / 18, width: width / 6, resizeMode: 'stretch' }} />
                                        <View style={{ marginLeft: 10, flex: 1 }}>
                                            <Text style={[style.s16, { color: Colors.active }]}>Master Card</Text>
                                            <Text style={[style.r14, { color: Colors.disable, marginTop: 2 }]}>**** **** **** 8329</Text>
                                        </View>
                                        <RadioButton
                                            value="second"
                                            status={checked === 'second' ? 'checked' : 'unchecked'}
                                            onPress={() => setChecked('second')}
                                            color={Colors.primary}
                                            uncheckedColor={Colors.disable}
                                        />
                                    </View>

                                    <View style={{ padding: 12, borderColor: Colors.bord, borderWidth: 1, borderRadius: 12, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../../assets/image/amex.png')} style={{ height: height / 18, width: width / 6, resizeMode: 'stretch' }} />
                                        <View style={{ marginLeft: 10, flex: 1 }}>
                                            <Text style={[style.s16, { color: Colors.active }]}>American Express</Text>
                                            <Text style={[style.r14, { color: Colors.disable, marginTop: 2 }]}>**** **** **** 9812</Text>
                                        </View>
                                        <RadioButton
                                            value="third"
                                            status={checked === 'third' ? 'checked' : 'unchecked'}
                                            onPress={() => setChecked('third')}
                                            color={Colors.primary}
                                            uncheckedColor={Colors.disable}
                                        />
                                    </View>

                                    <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Icons name="plus-circle-outline" color={Colors.primary} size={24} />
                                        <Text style={[style.b14, { color: Colors.primary, marginLeft: 5 }]}>Add Card</Text>
                                    </View>

                                </View>
                            </RBSheet>

                            <Avatar.Image source={require('../../assets/image/s30.png')} size={48} style={{ backgroundColor: Colors.bg }} />
                            <View style={{ marginLeft: 15, flex: 1 }}>
                                <Text style={[style.b14, { color: Colors.active, }]}>Master Card</Text>
                                <Text style={[style.r14, { color: Colors.disable, }]}>**** **** **** 8329</Text>
                            </View>
                            <Icon name="chevron-forward" color={Colors.disable} size={24} />
                        </TouchableOpacity>

                        <Text style={[style.b18, { color: Colors.active, marginTop: 20 }]}>Voucher</Text>
                        <TouchableOpacity onPress={() => this.RBSheet1.open()}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, }}>

                            <RBSheet ref={ref => {
                                this.RBSheet1 = ref
                            }}
                                height={300}
                                openDuration={100}
                                customStyles={{
                                    container: {
                                        borderTopRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        backgroundColor: Colors.secondary
                                    }
                                }}>
                                <View style={{ marginHorizontal: 20, marginTop: 15 }}>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text></Text>
                                        <Text style={[style.b18, { color: Colors.active, }]}>Select Voucher</Text>
                                        <TouchableOpacity onPress={() => this.RBSheet1.close()}>
                                            <Text style={[style.b14, { color: Colors.primary, }]}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ padding: 12, borderColor: Colors.bord, borderWidth: 1, borderRadius: 12, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ height: 46, width: 46, borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFEEE8' }}>
                                            <Image source={require('../../assets/image/s33.png')} style={{ height: height / 40, width: width / 20, resizeMode: 'stretch' }} />
                                        </View>

                                        <View style={[{ borderStyle: 'dashed', borderWidth: 1, borderColor: Colors.bord, height: '100%', marginHorizontal: 10 }]}></View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[style.b14, { color: Colors.active }]}>Get 20% off for 1 week!</Text>
                                            <Text style={[style.r12, { color: Colors.disable, marginTop: 2 }]}>Valid till 30 May 2022</Text>
                                        </View>
                                        <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: Colors.primary, borderRadius: 5 }}>
                                            <Text style={[style.s12, { color: Colors.secondary }]}>Use</Text>
                                        </View>
                                    </View>

                                    <View style={{ padding: 12, borderColor: Colors.bord, borderWidth: 1, borderRadius: 12, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ height: 46, width: 46, borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFEEE8' }}>
                                            <Image source={require('../../assets/image/s33.png')} style={{ height: height / 40, width: width / 20, resizeMode: 'stretch' }} />
                                        </View>

                                        <View style={[{ borderStyle: 'dashed', borderWidth: 1, borderColor: Colors.bord, height: '100%', marginHorizontal: 10 }]}></View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[style.b14, { color: Colors.active }]}>Get 20% off for 1 week!</Text>
                                            <Text style={[style.r12, { color: Colors.disable, marginTop: 2 }]}>Valid till 30 May 2022</Text>
                                        </View>
                                        <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: Colors.primary, borderRadius: 5 }}>
                                            <Text style={[style.s12, { color: Colors.secondary }]}>Use</Text>
                                        </View>
                                    </View>
                                </View>
                            </RBSheet>

                            <Image source={require('../../assets/image/s31.png')} style={{ height: height / 34, width: width / 15, resizeMode: 'stretch' }} />
                            <Text style={[style.r14, { color: Colors.active, marginLeft: 10, flex: 1 }]}>Add Voucher or Promo Code</Text>
                            <View style={{ height: 42, width: 42, borderRadius: 21, backgroundColor: '#FFEEE8', margin: 2, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name='add' color={Colors.primary} size={20} />
                            </View>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between' }}>
                            <Text style={[style.r16, { color: Colors.disable, }]}>Shipping cost</Text>
                            <Text style={[style.s16, { color: Colors.active, }]}>$1.00</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between' }}>
                            <Text style={[style.r16, { color: Colors.disable, }]}>Sub total</Text>
                            <Text style={[style.s16, { color: Colors.active, }]}>$16.00</Text>
                        </View>

                        <View style={[{ borderStyle: 'dashed', borderWidth: 1, borderColor: Colors.disable, marginTop: 20 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between' }}>
                            <Text style={[style.b18, { color: Colors.active, }]}>Total</Text>
                            <Text style={[style.s16, { color: Colors.active, }]}>$21.31</Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('PaymentSetting')}
                            style={[style.btn, { marginVertical: 30 }]}>
                            <Text style={[style.btntxt]}>Pay $21.34</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}