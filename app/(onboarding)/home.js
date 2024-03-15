import { Link, Stack, useNavigation } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {




  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Link href="(tabs)/profile">About</Link>
    </View>
  );
}
