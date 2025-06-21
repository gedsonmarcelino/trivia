import {styles} from '@/components/screens/login/styles';
import {TextLine} from '@/components/screens/login/TextLine';
import {TextLink} from '@/components/screens/login/TextLink';
import {Button} from '@/components/ui/Button';
import {Container} from '@/components/ui/Container';
import {Image} from '@/components/ui/Image';
import {Text} from '@/components/ui/Text';
import {TextInput} from '@/components/ui/TextInput';
import {useRouter} from 'expo-router';
import React, {useState} from 'react';

export default function Index() {

  const router = useRouter()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    router.navigate('/createAccount')
  };

  return (<Container style={styles.container}>
    <Image type='logo' style={styles.logoContainer} />
    <Text type='title' style={styles.text}>Trivia</Text>
    <TextInput
      placeholder='Username'
      value={username}
      style={styles.input}
      onChange={event => setUsername(event.nativeEvent.text)} />
    <TextInput
      placeholder='Password'
      secureTextEntry
      value={password}
      style={styles.input}
      onChange={event => setPassword(event.nativeEvent.text)} />
    <Button.Root type='primary' style={styles.button}>
      <Button.Text type='buttonPrimary'>Sign In</Button.Text>
    </Button.Root>
    <TextLine />
    <Button.Root
      type='secondary'
      style={styles.input}
    >
      <Button.Icon type='google' />
      <Button.Text type='buttonSecondary'>Google</Button.Text>
    </Button.Root>
    <TextLink onPress={handleCreateAccount} />
  </Container>);
}
