import * as React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput
} from 'react-native';
import { PrimaryButton  } from '../../Componets'

export default SignupScreen = ({navigation}) => {
  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Email</Text>
        <Text style={styles.boddyText}>Enter your email adress</Text>
        <TextInput style={styles.inputText} placeholder='youremail@domain.com'/>
      </View>
     
     <PrimaryButton title='Next' style={styles.customeButton}  onPress={()=>navigation.navigate('PersonalInfoScreen')}/>
     <View style={styles.foother}>
       <Text style={styles.boddyText}>Already have an account? </Text>
       <Text style={[styles.boddyText,{color:'#006175'}]}>Sign In</Text>
     </View>
    </SafeAreaView>
  );
};

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
    inputText:{
      borderColor:'#006175',
      fontSize:16,
      paddingTop:6,
      paddingBottom:6,
      paddingRight:6,
      paddingLeft:10,
      borderWidth:1,
      borderRadius:10,
    },
    foother:{
      justifyContent:'center',
      flexDirection:'row',
      marginTop:20
    },
    customeButton:{
      marginTop:250
    }
});