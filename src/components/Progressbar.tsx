import React from 'react'
import { View, Text } from 'react-native'
import { ProgressBar } from 'react-native-paper'

const Progressbar = ({ value }: String) => {
    return (
        <View style={{ marginTop: 12 }}>
            <ProgressBar progress={0.25} color="rgb(255, 217, 90)" style={{ height: 10 }} />
            <Text style={{ width: '25%', paddingTop: 5 }}>{value}</Text>
        </View>
    )
}

export default Progressbar