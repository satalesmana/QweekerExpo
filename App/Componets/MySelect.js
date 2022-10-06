import * as React from 'react';
import {
  Text, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const SelectDate=(props) =>{
    return (
      <TouchableOpacity  style={[styles.btnContainer, props.style]} onPress={props.onPress}>
        <Text style={styles.btnText}>{props.title}</Text>
      </TouchableOpacity>
    )
}

const SelectGender=(props) =>{
    return (
      <TouchableOpacity  style={[styles.btnContainer, props.style]} onPress={props.onPress}>
        <Text style={styles.btnText}>{props.title}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer:{
        borderColor:'#006175',
        backgroundColor:'#DADADA',
        alignItems:"center",
        padding:10,
        borderRadius: 7,
        borderWidth:1,
      },
      btnText:{
        color:"white",
        fontWeight:"bold",
        fontFamily:'Poppins-SemiBold',
        fontSize:18
      }
})

export  {
    SelectDate,
    SelectGender
};