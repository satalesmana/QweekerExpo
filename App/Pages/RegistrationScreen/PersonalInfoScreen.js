import * as React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput
} from 'react-native';
import { 
  PrimaryButton,
  SelectDate,
  SelectGender  
} from '../../Componets'

import { requiredValue, charValue } from '../../utils'

export default PersonalInfoScreen = ({navigation,route}) => {
  const [name, onChangeName] = React.useState(null);
  const [isValidForm, onSetValidForm] = React.useState(true);
  const [errMessage, onSetErrorMsg] =React.useState(null);

  const ErrorMessage =()=>{
    if(!isValidForm){
      return (
        <Text 
          style={{color:'red', textAlign:'center', marginTop:20}}>
            {errMessage}
        </Text>
      )
    }else{
      return null
    }
  }

  let request = {}
  React.useEffect(() => {
    request.email = route.params.email
  })

  const onSetNext = ()=>{
    onSetValidForm(true)
    const cekIsEmptyName = requiredValue(name);
    if(!cekIsEmptyName){
      onSetValidForm(false)
      onSetErrorMsg("[Full Name] : harus di isi")
      return
    }

    const isAlvabet = charValue(name);
    if(!isAlvabet){
      onSetValidForm(false)
      onSetErrorMsg("[Full Name] : harus di isi dengan alfabet")
      return
    }

    navigation.navigate('SecurityScreen',{
      ...request,
      ...{"name":name}
    })
    
    
  }

  return ( 
    <SafeAreaView  style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Personal Information</Text>
        <Text style={styles.boddyText}>Please fill the following</Text>
      </View>

      <View style={styles.containerTextInput}>
        <Text style={styles.labelTextInput}>Full name</Text>
        <TextInput 
          style={styles.inputText} 
          placeholder='Full Name'
          onChangeText={onChangeName}
          value={name}/>
      </View>

      <View style={[styles.containerTextInput,{flexDirection:'row'}]}>
        <View style={{flex:1.5, paddingRight:20}}>
          <Text style={styles.labelTextInput}>Date of birth</Text>
          <SelectDate/>
        </View>

        <View  style={{flex:1}}>
          <Text style={styles.labelTextInput}>Gender</Text>
          <SelectGender/>
        </View>
      </View>

      <View style={styles.containerTextInput}>
        <Text style={styles.labelTextInput}>About</Text>
        <TextInput style={[styles.inputText,{height: 120, textAlignVertical: 'top'}]} placeholder='About' multiline={true}/>
      </View>

      <ErrorMessage/>

      <PrimaryButton 
        title='Next' 
        style={styles.customeButton}
        onPress={()=> onSetNext()}
        />

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
    }
});