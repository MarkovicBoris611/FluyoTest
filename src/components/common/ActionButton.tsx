import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface ActionButtonProps {
    label: string;
    onPress: () => void;
    disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onPress, disabled }) => {
    return (
        <TouchableOpacity disabled={disabled} style={disabled ? styles.button_disable : styles.button_enable} activeOpacity={0.7} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        textAlign: 'center',
    },
    button_enable: {
        backgroundColor: '#1AE3E8',
        padding: 20,
        borderRadius: 40,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button_disable: {
        backgroundColor: '#6392A6',
        padding: 20,
        borderRadius: 40,
        margin: 10
    },
})

export default ActionButton;