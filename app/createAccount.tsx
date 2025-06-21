import {Button} from "@/components/ui/Button";
import {Container} from "@/components/ui/Container";
import {Text} from "@/components/ui/Text";
import {TextInput} from "@/components/ui/TextInput";
import {useRouter} from "expo-router";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
  },
  title: {
    marginTop: 94,
    marginBottom: 26
  },
  input: {
    marginBottom: 20
  }
});

export default function CreateAccount() {

  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <Container style={styles.container}>
      <Button.Root type="link" onPress={handleBack}>
        <Button.Icon type="back" />
      </Button.Root>
      <Text type="title" style={styles.title}>{"Create \n Account"}</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <Button.Root type="primary">
        <Button.Text type="buttonPrimary">Sign Up</Button.Text>
      </Button.Root>
    </Container>
  );
}