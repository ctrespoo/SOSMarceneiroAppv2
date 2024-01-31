import { View, Text, Image, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground, StatusBar, FlatList } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import style from '../theme/style'
import Slides from './Slides';
import IntroItem from './IntroItem';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Introduction() {
    const navigation = useNavigation();
    const ref = React.useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const Footer = () => {
        return <View style={{ paddingHorizontal: 20, backgroundColor: Colors.bg }}>
            <View style={{
                flexDirection: 'row',
            }}>
                {Slides.map((_, index) =>
                (
                    <View key={index}
                        style={[style.indicator, { backgroundColor: Colors.border, borderColor: Colors.border, borderWidth: 1 }, currentSlideIndex === index && {
                            borderColor: Colors.primary,
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: Colors.primary,
                        },]}
                    />
                ))}
            </View>
            <View>
                {currentSlideIndex == 0 ? (
                    <View style={{ paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={[style.b14, { color: Colors.disable }]}>Skip</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={goNextSlide}
                        style={{ height: 50, width:width/4, backgroundColor: Colors.primary, borderRadius: 25,justifyContent:'center',alignItems:'center' }}>
                            <Text style={[style.btntxt]}>Next</Text>
                        </TouchableOpacity>
                    </View>

                ) : currentSlideIndex == 1 ? (
                    <View style={{ paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={[style.b14, { color: Colors.disable }]}>Skip</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={goNextSlide}
                        style={{ height: 50, width:width/4, backgroundColor: Colors.primary, borderRadius: 25,justifyContent:'center',alignItems:'center' }}>
                            <Text style={[style.btntxt]}>Next</Text>
                        </TouchableOpacity>
                    </View>
                ) :
                    <View style={{ paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={[style.b14, { color: Colors.disable }]}>Skip</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}
                        style={{ height: 50, width:width/4, backgroundColor: Colors.primary, borderRadius: 25,justifyContent:'center',alignItems:'center' }}>
                            <Text style={[style.btntxt]}>Next</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    }

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != Slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    };
    return (
        <SafeAreaView style={[style.area]}>
            <FlatList data={Slides}
                ref={ref}
                renderItem={({ item }) => <IntroItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onMomentumScrollEnd={updateCurrentSlideIndex}
            />
            <Footer />
        </SafeAreaView>
    )
}