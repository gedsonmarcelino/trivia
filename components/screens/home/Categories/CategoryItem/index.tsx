import {ImageType} from "@/assets/images/types";
import {Image} from "@/components/ui/Image";
import {Text} from "@/components/ui/Text";
import {StyleSheet, View} from "react-native";

export type CategoryItemProps = {
  item: {
    id: number;
    title: string;
    image: ImageType;
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#E2E2E1',
    borderWidth: 2,
    width: 120,
    height: 120,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 16
  }
})

export function CategoryItem({item}: CategoryItemProps) {
  return (
    <View key={item.id} style={styles.container}>
      <Image type={item.image} />
      <Text>{item.title}</Text>
    </View>
  )
}