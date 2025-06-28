import {CategoryApi} from "@/services/api/category/CategoryApi";
import {useQuery} from "@tanstack/react-query";
import {StyleSheet, View} from "react-native";
import {CategoryItem} from "./CategoryItem";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export function Categories() {

  const {isPending, error, data} = useQuery({
    queryKey: ['categories'],
    queryFn: () => CategoryApi.getAll(),
    staleTime: 5 * 1000
  })

  if (isPending) return <></>

  if (error) return <></>

  return data.length > 0 && (
    <View style={styles.container}>
      {data.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </View>
  )
}