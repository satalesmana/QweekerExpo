import * as React from 'react';
import {View, Text, StyleSheet, Image, Dimensions  } from 'react-native';
import { BannerDone  } from '../../assets'
import { PrimaryButton } from '../../Componets'
const windowHeight = Dimensions.get('window').height;


export default RegisterDoneScreen = () => {
  return (
    <View style={styles.bgMainApp}>
      <View style={styles.imgContainer}>
        <Image source={BannerDone} style={styles.imgStyle}/>
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome</Text>
        

        <PrimaryButton  title="Continue"/>

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
  },
  headerText:{
    fontFamily: 'Poppins-SemiBold',
    textAlign:'left',
    fontSize:25,
    textAlign:'center',
    marginBottom:40
  },
});