import {TextInput as RNTextInput} from 'react-native'
import {styles} from './styles'
import {TextInputProps} from './types'

export function TextInput({
  style = {},
  ...props
}: TextInputProps) {
  return (
    <RNTextInput style={
      [styles.default, style]
    } {...props} />
  )
}