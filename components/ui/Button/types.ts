import {type PressableProps as RNPressableProps, type TextProps as RNTextProps} from 'react-native'
import {ImageProps} from '../Image/types'

export type ButtonProps = RNPressableProps & {
  type: 'primary' | 'secondary' | 'link',
}

export type ButtonTextProps = RNTextProps & {
}

export type ButtonIconProps = ImageProps & {
  position?: 'left' | 'right'
}