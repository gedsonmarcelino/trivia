import {ImageType} from "@/assets/images/types";
import {Categories} from "@/components/screens/home/Categories";
import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";
import {Text} from "@/components/ui/Text";
import {useRouter} from "expo-router";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
  },
  logout: {
    alignSelf: 'flex-end'
  },
  title: {
    marginTop: 94,
    marginBottom: 26
  },

});

export default function Index() {

  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  const items = [{
    id: '1',
    image: 'science' as ImageType,
    title: 'Science'
  }, {
    id: '2',
    image: 'geography' as ImageType,
    title: 'Geography'
  }, {
    id: '3',
    image: 'random' as ImageType,
    title: 'Random'
  }]

  return (
    <Container style={styles.container}>
      <Button.Root type="link" onPress={handleBack} style={styles.logout}>
        <Button.Icon type="logout" />
      </Button.Root>
      <Text type="title" style={styles.title}>{`Choose \n a category:`}</Text>
      <Categories items={items} />
    </Container>
  );
}