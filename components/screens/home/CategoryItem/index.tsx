import {ImageType} from "@/assets/images/types";
import {Image} from "@/components/ui/Image";
import {Text} from "@/components/ui/Text";
import {useRouter} from "expo-router";
import {Pressable, StyleSheet} from "react-native";

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

  const router = useRouter()

  const handlePress = () => {
    router.navigate(`/question?category=${item.title}`)
  }

  return (
    <Pressable key={item.id} style={styles.container} onPress={handlePress}>
      <Image type={item.image} />
      <Text>{item.title}</Text>
    </Pressable>
  )
}