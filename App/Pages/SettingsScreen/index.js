import * as React from 'react';
import {View, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../reducers/CounterReducer'
import { PrimaryButton } from '../../Componets'

export default SettingsScreen = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize:20, fontWeight:'bold'}}>Counter {count}</Text>

      <PrimaryButton
        title="Tambahkan"
        onPress={()=>dispatch(increment())}
      />

      <PrimaryButton
        title="Kurangi"
        onPress={()=>dispatch(decrement())}
      />

      <PrimaryButton
        title="Tambahkan 2"
        onPress={()=>dispatch(incrementByAmount(2))}
      />
    </View>
  );
};
