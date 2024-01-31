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

export default function PaymentSetting() {
  const navigation = useNavigation()
  const [checked, setChecked] = useState(false)

  const [ison, setIsOn] = useState(true)
  const toggle = () => setIsOn(previousState => !previousState)

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
            leading={<TouchableOpacity onPress={() => navigation.navigate('Payment')}>
              <Icon name="chevron-back" color={Colors.active} size={24} />
            </TouchableOpacity>
            }
            trailing={<TouchableOpacity onPress={() => this.RBSheet4.open()}>

              <RBSheet ref={ref => {
                this.RBSheet4 = ref
              }}
                height={450}
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
                    <Text style={[style.b18, { color: Colors.active, }]}>Add Card</Text>
                    <TouchableOpacity onPress={() => this.RBSheet4.close()}>
                      <Text style={[style.b14, { color: Colors.primary, }]}>Cancel</Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={[style.r14, { color: Colors.disable, marginTop: 20 }]}>Start typing to add your credit card details. Everything will upadate according to your data.</Text>

                  <View style={[style.inputContainer, { marginTop: 15, flexDirection: 'row', alignItems: 'center', height: 50 }]}>
                    <Image source={require('../../assets/image/master.png')} style={{ height: height / 40, width: width / 14, resizeMode: 'stretch' }} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                      <TextInput placeholder='0192 - 1245 - 0000 - 0000'
                        placeholderTextColor={Colors.active} selectionColor={Colors.primary}
                        style={[style.r14, { color: Colors.active, }]} />
                    </View>
                    <Icon name="checkmark-circle" color='#00BF6F' size={24} />
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <View style={{ flex: 1 }}>
                      <View style={[style.inputContainer, { flexDirection: 'row', alignItems: 'center', height: 50 }]}>
                        <View style={{ flex: 1 }}>
                          <TextInput placeholder='12/22'
                            placeholderTextColor={Colors.active} selectionColor={Colors.primary}
                            style={[style.r14, { color: Colors.active, }]} />
                        </View>
                        <Icon name="checkmark-circle" color='#00BF6F' size={24} />
                      </View>
                    </View>
                    <View style={{ marginHorizontal: 10 }}></View>
                    <View style={{ flex: 1 }}>
                      <View style={[style.inputContainer, { flexDirection: 'row', alignItems: 'center', height: 50 }]}>
                        <View style={{ flex: 1 }}>
                          <TextInput placeholder='234'
                            placeholderTextColor={Colors.active} selectionColor={Colors.primary}
                            style={[style.r14, { color: Colors.active, }]} />
                        </View>
                        <Icon name="checkmark-circle" color='#00BF6F' size={24} />
                      </View>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Switch
                      trackColor={{ false: Colors.disable, true: Colors.primary }}
                      thumbColor={ison ? Colors.secondary : Colors.secondary}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggle}
                      value={ison}
                    />
                    <Text style={[style.r14, { color: Colors.disable, marginLeft: 5 }]}>Set as default</Text>
                  </View>

                  <TouchableOpacity onPress={() => this.RBSheet4.close()}
                    style={[style.btn, { marginVertical: 20 }]}>
                    <Text style={[style.btntxt]}>Save Card</Text>
                  </TouchableOpacity>

                </View>
              </RBSheet>

              <Text style={[style.b14, { color: Colors.primary }]}>Add Card</Text>
            </TouchableOpacity>}
          />

          <ScrollView showsVerticalScrollIndicator={false}>

            <Text style={[style.b18, { color: Colors.active, marginTop: 10 }]}>Active Card</Text>
            <TouchableOpacity onPress={() => this.RBSheet3.open()}>

              <RBSheet ref={ref => {
                this.RBSheet3 = ref
              }}
                height={200}
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
                    <Text style={[style.b18, { color: Colors.active, }]}>Options</Text>
                    <TouchableOpacity onPress={() => this.RBSheet3.close()}>
                      <Text style={[style.b14, { color: Colors.primary, }]}>Cancel</Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={[style.b14, { color: Colors.active, marginTop: 20 }]}>Set as default</Text>
                  <View style={[style.divider, { backgroundColor: Colors.bord, marginVertical: 20 }]}></View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icons name="delete-outline" color={Colors.primary} size={24} />
                    <Text style={[style.b14, { color: Colors.primary, marginLeft: 5 }]}>Delete Card</Text>
                  </View>
                </View>
              </RBSheet>

              <Image source={require('../../assets/image/s34.png')} style={{ height: height / 5, width: width - 40, resizeMode: 'stretch', marginTop: 15 }} />
            </TouchableOpacity>

            <Text style={[style.b18, { color: Colors.active, marginTop: 30 }]}>Payment Methods</Text>
            <TouchableOpacity onPress={() => this.RBSheet3.open()}>
              <Image source={require('../../assets/image/s35.png')} style={{ height: height / 5, width: width - 40, resizeMode: 'stretch', marginTop: 15 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.RBSheet3.open()}>
              <Image source={require('../../assets/image/s36.png')} style={{ height: height / 5, width: width - 40, resizeMode: 'stretch', marginTop: 15 }} />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}