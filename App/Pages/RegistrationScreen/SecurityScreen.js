import * as React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput
} from 'react-native';
import { PrimaryButton  } from '../../Componets'

export default SecurityScreen = () => {
  return ( 
    <SafeAreaView  style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Select a Username</Text>
        <Text style={styles.boddyText}>Help secure your account</Text>
      </View>

      <View style={styles.containerTextInput}>
        <Text style={styles.labelTextInput}>Username</Text>
        <TextInput style={styles.inputText} placeholder='Username'/>
      </View>

      <View style={styles.containerTextInput}>
        <Text style={styles.labelTextInput}>Password</Text>
        <TextInput style={styles.inputText} placeholder='Password'/>
      </View>

      <View style={styles.containerTextInput}>
        <Text style={styles.labelTextInput}>Confirm Password</Text>
        <TextInput style={styles.inputText} placeholder='Confirm Password'/>
      </View>

      <PrimaryButton title='Done' style={styles.customeButton}/>
      <View style={styles.foother}>
        <Text style={styles.boddyText}>Already have an account? </Text>
        <Text style={[styles.boddyText,{color:'#006175'}]}>Sign In</Text>
      </View>
    </SafeAreaView>
  )
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
    containerTextInput:{
      marginTop:15
    },
    foother:{
      justifyContent:'center',
      flexDirection:'row',
      marginTop:20
    },
    customeButton:{
      marginTop:80
    },
    labelTextInput:{
      fontFamily:'Poppins-Medium',
      fontSize:12,
    },
    inputText:{
      borderColor:'#006175',
      backgroundColor:'#DADADA',
      fontSize:16,
      paddingTop:6,
      paddingBottom:6,
      paddingRight:6,
      paddingLeft:10,
      borderWidth:1,
      borderRadius:10,
    },
});