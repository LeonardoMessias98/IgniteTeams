import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import LoadIndicator from '@components/Loading';
import {Routes} from '@routes/index';

import themes from './src/themes';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={themes}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {fontsLoaded ? <Routes /> : <LoadIndicator />}
    </ThemeProvider>
  );
}
