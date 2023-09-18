import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

interface LoadingIndicatorInterface {
    text: string
}
const LoadingIndicator: React.FC<LoadingIndicatorInterface> = ({text}) => {
    return (
        <View>
            <Text style={styles.text}>
                {text}
            </Text>
            <ActivityIndicator size="large" color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20, 
        marginBottom: 20,
        color: 'white',
        textAlign: 'center',
    }
})

export default LoadingIndicator