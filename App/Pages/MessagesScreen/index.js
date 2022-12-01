import * as React from 'react';
import {
  FlatList, View, Text, TextInput, StyleSheet 
} from 'react-native';
import { PrimaryButton } from "../../Componets";
import { useSelector, useDispatch } from 'react-redux'
import { 
  tambahData
} from '../../reducers/MessageReducer'
import axios from "axios";
const BASE_URL = "https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/"
const HEADER = {
    headers: {
      "api-key":
        "zYwAQaYVJ2hdF6WVlhy4gFM7i6IOGAcAJ5lips8IYEjIkXjoksjPpuTBZvGjt4uC",
    },
}

export default MessagesScreen = () => {
  const [isLoading, onSetLoading] = React.useState(false);
  const [inputMsg, onSetInputMsg] = React.useState(null);
  const data = useSelector(state => state.message.data);
  const dispatch = useDispatch()
  const addNew=()=>{
    onSetLoading(true)
    axios.post(BASE_URL+ "action/insertOne",{
        dataSource: "Cluster0",
        database: "app_taskita",
        collection: "pesan",
        document: {message:inputMsg},
      },HEADER  
    ).then((res) => {
      dispatch(tambahData(inputMsg))
      onSetInputMsg("")
    }).catch((er)=>{
      console.log(er)
    }).finally(()=>{
      onSetLoading(false)
    })

    
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
