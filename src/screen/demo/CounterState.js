import { View, Text } from 'react-native'
import React from 'react'

const CounterState = () => {
    const [count, setCount] = useState(0);
    
    const handIncrease = () => {
        setCount(count + 1)
      }
    
  return (
    <View>
    <Text style={{ fontSize: 20, paddingVertical: 40, paddingHorizontal: '30%' }}>{count}</Text>
    <Button title="Tăng" onPress={handIncrease} />
  </View>
  )
}

export default CounterState