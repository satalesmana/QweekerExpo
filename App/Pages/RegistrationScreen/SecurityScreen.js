import * as React from 'react';
import axios from 'axios'
import {
    View, 
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput
} from 'react-native';
import { PrimaryButton  } from '../../Componets'

export default SecurityScreen = ({navigation,route}) => {
  const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [passwordConfirm, onChangePasswordConfirm] = React.useState(null);
  let request = {}
  React.useEffect(() => {
    request = route.params
  })

  const onSubmitData =()=>{
    const data = {
      ...request,
      ...{
        "username":username,
        "password": passwordConfirm,
      }
    }
    
    axios.post('https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/action/insertOne',{
      "dataSource": "Cluster0",
      "database": "app_taskita",
      "collection": "qweeker_member",
      "document": data
    },{
      headers:{
        'api-key':'zYwAQaYVJ2hdF6WVlhy4gFM7i6IOGAcAJ5lips8IYEjIkXjoksjPpuTBZvGjt4uC'
      }
    }).then(res=>{
      navigation.navigate('RegisterDoneScreen')
    }).catch(err=>{
      console.log(err)
    })
  }

  return ( 
    <SafeAreaView  style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Select a Username</Text>
        <Text style={styles.boddyText}>Help secure your account</Text>
      </View>

      <View style={styles.containerTextInput}>
        <Text style={styles.labelTextInput}>Username</Text>
        <TextInput 
          style={styles.inputText} 
          placeholder='Username'
          onChangeText={onChangeUsername}
          value={username}/>
      </View>

      <View style={styles.containerTextInput}>
        <Text style={styles.labelTextInput}>Password</Text>
        <TextInput 
          style={styles.inputText} 
          placeholder='Password'
          onChangeText={onChangePassword}
          value={password}/>
      </View>

      <View style={styles.containerTextInput}>
        <Text style={styles.labelTextInput}>Confirm Password</Text>
        <TextInput 
          style={styles.inputText} 
          placeholder='Confirm Password'
          onChangeText={onChangePasswordConfirm}
          value={passwordConfirm}/>
      </View>

      <PrimaryButton 
        title='Done' 
        style={styles.customeButton}
        onPress={()=> onSubmitData()}/>

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