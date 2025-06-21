import {Pressable} from 'react-native';
import {Image} from '../Image';
import {Text} from '../Text';
import {TextProps} from '../Text/types';
import {stylesButton, stylesIcon} from './styles';
import {ButtonIconProps, ButtonProps} from './types';

function ButtonRoot({
  type = 'primary',
  style = {},
  children,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      style={[stylesButton[type], style]}
      {...props}>
      {children}
    </Pressable>
  );
}


const ButtonText = ({
  children,
  ...props
}: TextProps) => {
  return (
    <Text {...props}>{children}</Text>
  )
}

const ButtonIcon = ({
  position = 'left',
  ...props
}: ButtonIconProps) => {
  return (
    <Image style={stylesIcon[position]} {...props} />
  )
}

export const Button = {
  Root: ButtonRoot,
  Text: ButtonText,
  Icon: ButtonIcon,
}