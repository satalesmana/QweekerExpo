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

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
       paddingLeft:30,
       paddingRight:25,
    }
});