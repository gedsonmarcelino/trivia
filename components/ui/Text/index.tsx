import {Text as RNText} from 'react-native';
import {styles} from './styles';
import {TextProps} from './types';

export function Text({
  style,
  type = 'default',
  children,
  ...props
}: TextProps) {
  return (
    <RNText
      style={[
        styles[type],
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}


