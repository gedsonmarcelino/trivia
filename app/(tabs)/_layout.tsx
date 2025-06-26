import {Image} from '@/components/ui/Image';
import {Tabs} from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <Image type='profile' />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          title: 'Ranking',
          tabBarIcon: () => <Image type='ranking' />,
          headerShown: false
        }}
      />
    </Tabs>
  );
}