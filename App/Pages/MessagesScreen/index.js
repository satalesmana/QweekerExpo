import * as React from 'react';
import {
  FlatList, View, Text, TextInput, StyleSheet 
} from 'react-native';
import { PrimaryButton } from "../../Componets";
import { useSelector, useDispatch } from 'react-redux'
import { 
  tambahData
} from '../../reducers/MessageReducer'

export default MessagesScreen = () => {
  const [isLoading, onSetLoading] = React.useState(false);
  const [inputMsg, onSetInputMsg] = React.useState(null);
  const data = useSelector(state => state.message.data);
  const dispatch = useDispatch()
  const addNew=()=>{
    dispatch(tambahData(inputMsg))
    onSetInputMsg("")
  }

  return (
    <View style={styles.constiner}>
      <TextInput
        value={inputMsg}
        numberOfLines={4}
        maxLength={120}
        multiline
        style={styles.inputText}
        onChangeText={onSetInputMsg}
      />

      <PrimaryButton
        title="Add New Message"
        isLoading={isLoading}
        style={styles.customeButton}
        onPress={() => addNew()}
      />
      <Text style={{padding: 10, fontSize: 30}}>Daftar Pesan</Text>

      <FlatList
         data={data}
         renderItem={({item}) => <Text style={styles.item}>{item.message}</Text>}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  constiner:{
    flex: 1,
    padding:15
  },
  customeButton:{
    marginTop:10
  },
  inputText: {
    borderColor: "#006175",
    backgroundColor: "#DADADA",
    fontSize: 16,
    paddingTop: 6,
    paddingBottom: 6,
    paddingRight: 6,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    textAlignVertical:'top'
  },
  item:{
    padding: 10,
    fontSize: 18,
    height: 44,
  }
})
