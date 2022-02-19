import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Input from './src/components/Input'

export default function App() {
  const [phone, setPhone] = useState('')
  const [currency, setCurrency] = useState('')

  return (
    <View style={styles.container}>
      <Input
        value={phone}
        mask='phone'
        inputMaskChange={(text: string) => setPhone(text)}
      />

      <Input
        value={currency}
        mask='currency'
        inputMaskChange={(text: string) => setCurrency(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0584B0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
})
