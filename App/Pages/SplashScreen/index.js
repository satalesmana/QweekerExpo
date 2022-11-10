import * as React from 'react';
import {
  View, Text, StyleSheet, Image, Dimensions,
  TouchableWithoutFeedback   } from 'react-native';
import { BannerSplash  } from '../../assets'
import { PrimaryButton } from '../../Componets'
const windowHeight = Dimensions.get('window').height;


export default SplashScreen = ({navigation}) => {
  return (
    <View style={styles.bgMainApp}>
      <View style={styles.imgContainer}>
        <Image source={BannerSplash} style={styles.imgStyle}/>
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>Connect with</Text>
        <Text style={styles.headerText}>Friends and Family</Text>
        <Text style={styles.bodyText}>
            Connecting with Family 
            and Friends provides a sense of belonging and security 
        </Text>

        <PrimaryButton  title="Continue" onPress={()=>navigation.navigate('SignupScreen')}/>

        <View style={styles.foother}>
          <Text style={styles.boddyText}>Already have an account? </Text>
          <TouchableWithoutFeedback  onPress={()=>navigation.navigate('LoginScreen')}>
            <Text style={[styles.boddyText,{color:'#006175'}]}>Sign In</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  bgMainApp: {
    flex: 1,
  },
  imgContainer:{
    alignItems:'center'
  },
  container:{
    margin:40
  },
  imgStyle:{
    marginTop: windowHeight / 10,
    alignContent: "center",
    marginBottom:10
  },
  headerText:{
    fontFamily: 'Poppins-SemiBold',
    textAlign:'left',
    fontSize:30,
    fontWeight:'bold'
  },
  bodyText:{
    marginTop:10,
    marginBottom:50,
    fontFamily: 'Poppins-Medium',
    fontSize:16,
  },
  footherText:{
    textAlign:'center',
    marginTop:50,
    fontFamily: 'Poppins-Medium',
    fontSize:16,
  },
  foother:{
    justifyContent:'center',
    flexDirection:'row',
    marginTop:20
  },
  boddyText:{
    fontFamily:'Poppins-Medium',
    fontSize:16,
  },
});
