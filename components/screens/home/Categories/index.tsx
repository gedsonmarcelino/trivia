import {ImageType} from "@/assets/images/types";
import {StyleSheet, View} from "react-native";
import {CategoryItem} from "./CategoryItem";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

type CategoriesProps = {
  items: {
    id: string,
    image: ImageType,
    title: string,
  }[]
}

export function Categories({items}: CategoriesProps) {
  return items.length > 0 && (
    <View style={styles.container}>
      {items.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </View>
  )
}