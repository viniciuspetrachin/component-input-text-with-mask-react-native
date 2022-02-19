import React from 'react'
import { TextInput, StyleSheet, TextInputProps } from 'react-native'

import { maskPhone, maskCurrency } from '../../utils/masks'

interface InputProps extends TextInputProps {
  mask: 'phone' | 'currency'
  inputMaskChange: any
}

const Input: React.FC<InputProps> = ({ mask, inputMaskChange, ...rest }) => {
  function handleChange(text: string) {
    if (mask === 'phone') {
      const value = maskPhone(text)
      inputMaskChange(value)
    }
    if (mask === 'currency') {
      const value = maskCurrency(text)
      inputMaskChange(value)
    }
  }

  return (
    <TextInput
      style={styles.input}
      onChangeText={(text: string) => handleChange(text)}
      placeholder={mask === 'phone' ? 'Phone number' : 'Value'}
      placeholderTextColor="rgba(255, 255, 255, 0.9)"
      {...rest}
    />
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 5,
    marginVertical: 5,
    padding: 15,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
    color: '#FFFFFF',
  },
})
