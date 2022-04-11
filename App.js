import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header'
import StartScreen from './screens/StartScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [loaded] = useFonts({
    RobotoCondensed: require('./assets/Fonts/RobotoCondensed-Regular.ttf')
  })

  if(!loaded) return <AppLoading/>

  return (
    <View style={styles.container}>
      <Header titulo='Roadrunner'></Header>
      <StartScreen></StartScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
