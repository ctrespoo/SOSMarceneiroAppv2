import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./color";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default StyleSheet.create({
    area: {
        flex: 1,
    },
    main: {
        flex: 1,
        marginHorizontal: 20
    },
    title: {
        fontSize: 32,
        color: Colors.active,
        fontFamily: 'Urbanist-Bold'
    },
    subtitle: {
        fontSize: 24,
        color: Colors.active,
        fontFamily: 'Urbanist-Bold'
    },
    apptitle: {
        fontSize: 20,
        fontFamily: 'Urbanist-Bold',
        color: Colors.active,
    },
    b10: {
        fontSize: 10,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold',
    },
    r12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'Urbanist-Regular',
    },
    s12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold',
    },
    b12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'Urbanist-Bold',
    },
    r14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'Urbanist-Regular',
    },
    s14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold',
    },
    b14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'Urbanist-Bold',
    },
    r16: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'Urbanist-Regular'

    },
    s16: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold'

    },
    b16: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'Urbanist-Bold'

    },
    r18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Urbanist-Regular'

    },
    s18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Urbanist-SemiBold'

    },
    b18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Urbanist-Bold'

    },

    btn: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        borderRadius: 25,
        height:56,
        justifyContent:'center',
    },
    btntxt: {
        fontSize: 14,
        color: Colors.secondary,
        fontFamily: 'Urbanist-Bold'
    },
    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 25,
        height: 56,
        borderColor: Colors.border,
        borderWidth: 1,
        paddingHorizontal:15
        // flex: 1
    },
    txtinput: {
        borderRadius: 25,
        height: 56,
        borderColor: Colors.border,
        borderWidth: 1,
        paddingHorizontal:15
    },

    indicator: {
        borderColor: '#E0E0E0',
        borderWidth: 1,
        padding: 4,
        borderRadius: 20,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 5
    },


    shadow: {
        shadowColor: Colors.active,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: '#FFFFFF',

    },



    radio: {
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        borderColor: Colors.bord,
        color: Colors.disable,
    },

    divider: {
        height: 1,
        backgroundColor: Colors.border,
    },

    divider1: {
        height: 1.5,
        backgroundColor: Colors.border,
        marginTop: 20,
        marginBottom: 20,
        flex: 1
    },

    dividertxt: {
        color: Colors.disable,
        fontFamily: 'Urbanist-Regular'
    },

    btn1: {

        alignItems: 'center',
        // paddingVertical:15,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 55


    },
    btntxt1: {
        fontSize: 14,
        color: Colors.active,
        paddingLeft: 15,
        fontFamily: 'Urbanist-Bold'
    },



    verticaldivider: {
        height: '60%',
        width: 1,
    },

    modalcontainer: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 140,
        paddingTop: 20,
        marginHorizontal: -10,
        alignSelf: 'center',
    },
    btnoutline: {
        borderColor: Colors.bord,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 55,
        width: width / 4.5,
    },

    b3: {
        backgroundColor: Colors.secondary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 30,
        alignItems: 'center',
        borderColor: '#E5E7EB',
        borderWidth: 1
    },
    follow: {
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, backgroundColor: Colors.primary
    },
    following: {
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, borderColor: Colors.primary, borderWidth: 2
    },
    categoryTextSelected: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        color: Colors.secondary,
        fontFamily: 'Urbanist-Regular'
    },
    categoryText: {
        fontSize: 14,
        color: Colors.active,
        borderWidth: 1,
        borderColor: Colors.active,
        borderRadius: 10,
        paddingBottom: 5,
        paddingTop: 7,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        fontFamily: 'Urbanist-Regular'
    },
    categorycontainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 30,
        justifyContent: 'space-between',

    },
    otp:{
        height: 50, width: 50, borderRadius: 10,  textAlign: 'center',fontSize:18,fontFamily: 'Urbanist-Bold', color:Colors.active,borderWidth:1
    }
}
);