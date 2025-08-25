import { Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';

export default function Home() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(SubTabs)" options={{ href: null, headerShown: false }} />
    </Stack>
  )
}