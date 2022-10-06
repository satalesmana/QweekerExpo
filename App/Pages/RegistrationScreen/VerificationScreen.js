import * as React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput
} from 'react-native';
import { PrimaryButton  } from '../../Componets'


export default VerificationScreen = () => {
    return (
        <SafeAreaView  style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.headerText}>Verification Code</Text>
                <Text style={styles.boddyText}>Enter the OTP sent to your email</Text>
            </View>
            <View style={styles.otpContainer}>
                <TextInput style={styles.inputOTP} maxLength={1}/>
                <TextInput style={styles.inputOTP} maxLength={1}/>
                <TextInput style={styles.inputOTP} maxLength={1}/>
                <TextInput style={styles.inputOTP} maxLength={1}/>
            </View>
            <View style={styles.countDownContainer}>
                <Text style={styles.boddyText}>Didn't receive any code? </Text>
                <Text style={styles.countDown}>Resend in 01:00</Text>
            </View>

            <PrimaryButton title='Next' style={styles.customeButton}/>
     <View style={styles.foother}>
       <Text style={styles.boddyText}>Already have an account? </Text>
       <Text style={[styles.boddyText,{color:'#006175'}]}>Sign In</Text>
     </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
       flex: 1, 
       paddingLeft:30,
       paddingRight:25,
    },
    content:{
        marginTop:200
    },
    headerText:{
        fontFamily:'Poppins-SemiBold',
        fontSize:20
    },
    boddyText:{
        fontFamily:'Poppins-Medium',
        fontSize:16,
    },
    countDown:{
        fontFamily:'Poppins-Medium',
        fontSize:16,
        color:'red'
    },
    countDownContainer:{
        flexDirection:'row',
        marginTop:10
    },
    otpContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    inputOTP:{
        borderColor:'#006175',
        backgroundColor:'#006175',
        fontSize:25,
        paddingTop:15,
        paddingBottom:15,
        paddingRight:15,
        paddingLeft:20,
        borderWidth:1,
        borderRadius:10,
        color:'white',
        margin:10
    },
    customeButton:{
        marginTop:250
    },
    foother:{
        justifyContent:'center',
        flexDirection:'row',
        marginTop:20
    }
})

