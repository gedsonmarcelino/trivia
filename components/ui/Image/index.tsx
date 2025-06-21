import {Images} from '@/assets/images';
import {Image as RNImage, View} from 'react-native';
import {ImageProps} from './types';

export function Image({
  style,
  type = 'logo',
  ...props
}: ImageProps) {
  return (
    <View style={style}>
      <RNImage
        source={Images[type]}
        {...props}
      />
    </View>
  );
}


