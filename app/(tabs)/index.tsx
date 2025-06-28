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

  return (
    <Container style={styles.container}>
      <Button.Root type="link" onPress={handleBack} style={styles.logout}>
        <Button.Icon type="logout" />
      </Button.Root>
      <Text type="title" style={styles.title}>{`Choose \n a category:`}</Text>
      <Categories />
    </Container>
  );
}