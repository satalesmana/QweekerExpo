import * as React from 'react';
import {
  Text, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const onPress = ()=>{
  alert('onPress')
}

const MyButton=({title}) =>{
    return (
      <TouchableOpacity 
        style={styles.btnContainer}
        onPress={onPress}>
        <Text style={styles.btnText}>{title}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor:'#006175',
        alignItems:"center",
        padding:10,
        borderRadius: 7
      },
      btnText:{
        color:"white",
        fontWeight:"bold",
        fontFamily:'Poppins-SemiBold',
        fontSize:18
      }
})

export default MyButton;