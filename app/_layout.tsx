import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Veecontext } from '@/components/Veecontext';
import { useColorScheme } from '@/components/useColorScheme';
import Toast from 'react-native-toast-message';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Satoshi: require('../assets/fonts/Satoshi-Light.otf'),
    Satoshimid: require('../assets/fonts/Satoshi-Regular.otf'),
    SoraBold: require('../assets/fonts/Sora-Bold.ttf'),
    Soramid: require('../assets/fonts/Sora-Regular.ttf'),
    Soraxxl: require('../assets/fonts/Sora-ExtraBold.ttf'),

    PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
    Poppinsmid: require('../assets/fonts/Poppins-Medium.ttf'),

    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}



function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Veecontext>

    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
   
      <Stack initialRouteName="/(onboarding)">
      <Stack.Screen name="(onboarding)"  options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="(auth)"  options={{ headerShown: false }} />
       <Stack.Screen name="(signup)" options={{ headerShown: false }} />
       <Stack.Screen name="transaction" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
    <Toast />
    </Veecontext>
  );
}
