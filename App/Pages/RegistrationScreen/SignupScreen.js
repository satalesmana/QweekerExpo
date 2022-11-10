import * as React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableWithoutFeedback
} from 'react-native';
import { PrimaryButton  } from '../../Componets'
import { emailValidation } from '../../utils'

export default SignupScreen = ({navigation}) => {
  const [email, onChangeEmail] = React.useState(null);
  const [isErorr, onSetIsErorr] = React.useState(false);

  const ErrorEmail =()=>{
    if(isErorr){
      return (
        <Text 
          style={{color:'red', textAlign:'center', marginTop:20}}>
            Invalid email format
        </Text>
      )
    }else{
      return null
    }
  }

  const onSetNext = ()=>{
    const isValidEmail = emailValidation(email);
    onSetIsErorr(!isValidEmail)
    if(isValidEmail){
      navigation.navigate('PersonalInfoScreen',{
        "email":email
      })
    }
    
  }


  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Email</Text>
        <Text style={styles.boddyText}>Enter your email adress</Text>
        <TextInput 
          style={styles.inputText} 
          placeholder='youremail@domain.com'
          onChangeText={onChangeEmail}
          value={email}/>

          <ErrorEmail/>
      </View>
     
     <PrimaryButton 
        title='Next' 
        style={styles.customeButton}  
        onPress={()=> onSetNext()}/>

        <View style={styles.foother}>
          <Text style={styles.boddyText}>Already have an account? </Text>
          <TouchableWithoutFeedback  onPress={()=>navigation.navigate('LoginScreen')}>
            <Text style={[styles.boddyText,{color:'#006175'}]}>Sign In</Text>
          </TouchableWithoutFeedback>
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