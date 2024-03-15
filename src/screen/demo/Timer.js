import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import Button from '../../component/Button'

const Timer = () => {
    const [count, setCount] = useState(30)
    let timerID = useRef()
    const handleStart = () =>{
        timerID.current = setInterval(()=>{
            setCount(prevCount => prevCount-1)
        },1000);
        console.log('handleStart: => ' +timerID.current);
    }
    const handleStop = () =>{
        clearInterval (timerID.current)
        console.log('handleStop: => ' +timerID.current);
    }
    return (
        <View>
            <Text>{count}</Text>
            <Button title='start' onPress={handleStart}/>
            <Button title='Stop' onPress={handleStop}/>
        </View>
    )
}

export default Timer