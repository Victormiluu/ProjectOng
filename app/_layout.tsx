import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';

import { useColorScheme } from '@/hooks/useColorScheme';
import AnimalShelterScreen from './index';
import EventsScreen from './eventsScreen';
import AdoteConoscoScreen from './adoteConoscoScreen';
import VolunteerScreen from './volunteerScreen'; // criação do volutariado
import PetsAdotadosScreen from './petsAdotadosScreen';



SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const Stack = createStackNavigator();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={AnimalShelterScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Adote" component={AdoteConoscoScreen} />
        <Stack.Screen name="Volunteer" component={VolunteerScreen} /> 
        <Stack.Screen name="Adotados" component={PetsAdotadosScreen} />

      </Stack.Navigator>
    </ThemeProvider>
  );
}
