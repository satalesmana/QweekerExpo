import * as React from 'react';
import {View, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { resetState } from '../../reducers/UserReducer'
import { 
  PrimaryButton,
  PrimaryCard
 } from '../../Componets'

export default SettingsScreen = () => {
  
  const id = useSelector(state => state.user.id)
  const name = useSelector(state => state.user.name)
  const username = useSelector(state => state.user.username)
  const email = useSelector(state => state.user.email)
  const dispatch = useDispatch()
  
  return (
    <View style={{flex: 1}}>

      <PrimaryCard title="User ID" subtitle={id}/>
      <PrimaryCard title="Name" subtitle={name}/>
      <PrimaryCard title="User Name" subtitle={username}/>
      <PrimaryCard title="Email" subtitle={email}/>

      <PrimaryButton
        title="Sin Out"
        style={{marginTop:40, margin:30}}
        onPress={()=>dispatch(resetState())}
      />

    </View>
  );
};
