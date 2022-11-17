import * as React from 'react';
import {
  Text, 
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

export const PrimaryCard=(props) =>{
    return (
      <TouchableOpacity  
        style={[styles.btnContainer, props.style]} 
        onPress={props.onPress}>
        <View style={styles.leftSide}>
            <Text>ICON</Text>
        </View>
        <View style={styles.rightSide}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.sutTitile}>{props.subtitle}</Text>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer:{
        flexDirection:'row',
        padding:10,
        borderWidth:1,
        borderColor:'#F2F2F2',
        backgroundColor:"white"
    },
    title:{
        fontFamily:'Poppins-Medium',
        fontSize:14
    },
    sutTitile:{
        fontWeight:"bold",
        fontFamily:'Poppins-SemiBold',
        fontSize:20
    },
    leftSide:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    rightSide:{
        flex:4
    }
})