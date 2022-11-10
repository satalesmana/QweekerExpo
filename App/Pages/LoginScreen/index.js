import axios from "axios";
import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableWithoutFeedback } from "react-native";
import { PrimaryButton } from "../../Componets";
 
export default LoginScreen = ({ navigation }) => {
  //untuk memanggil nilai dari form sebelumnya
  const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [isErorr, onSetIsErorr] = React.useState(false);
  const [message, onSetMessage] = React.useState(null);
  const [isLoading, onSetLoading] = React.useState(false)
  const ErrorMessage =()=>{
    if(isErorr){
      return (
        <Text 
          style={{color:'red', textAlign:'center', marginTop:20}}>
            {message}
        </Text>
      )
    }else{
      return null
    }
  }

  //const onSubmitData untuk mendapatkan nilai username dan passwordtwo dari page ini
  const onSubmitData = () => {
    onSetLoading(true)
    onSetMessage(null)
    const data = {
      username: username,
      password: password,
    };

    axios
      .post(
        "https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/action/findOne",
        {
          dataSource: "Cluster0",
          database: "app_taskita",
          collection: "qweeker_member",
          filter: data,
        },
        {
          headers: {
            "api-key":
              "zYwAQaYVJ2hdF6WVlhy4gFM7i6IOGAcAJ5lips8IYEjIkXjoksjPpuTBZvGjt4uC",
          },
        }
      )
      .then((res) => {
        if(res.data.document != null){
          navigation.replace("MainScreen");
        }else{
          onSetIsErorr(true)
          onSetMessage("invalid username and password")
        }
        
      })
      .catch((err) => {
        onSetIsErorr(true)
        onSetMessage(err)
        console.log(err);
      }).finally(()=>{
        onSetLoading(false)
      });
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Login</Text>
      </View>
 
      <View style={styles.containerTextInput}>
        <Text style={styles.labelTextInput}>Username</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          onChangeText={onChangeUsername}
          value={username}
        />
      </View>
 
      <View style={styles.containerTextInput}>
        <Text style={styles.labelTextInput}>Password</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          onChangeText={onChangePassword}
          secureTextEntry
          value={password}
        />
      </View>
      
      <ErrorMessage/>

      <PrimaryButton
        title="Sign In"
        isLoading={isLoading}
        style={styles.customeButton}
        onPress={() => onSubmitData()}
      />
      <View style={styles.foother}>
          <Text style={styles.boddyText}>Don't have an account? </Text>
          <TouchableWithoutFeedback  onPress={()=>navigation.navigate('SignupScreen')}>
            <Text style={[styles.boddyText,{color:'#006175'}]}>Sign Up</Text>
          </TouchableWithoutFeedback>
        </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 25,
  },
  content: {
    marginTop: 200,
  },
  headerText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
  },
  boddyText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  containerTextInput: {
    marginTop: 15,
  },
  foother: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  customeButton: {
    marginTop: 80,
  },
  labelTextInput: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
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
  },
});
 