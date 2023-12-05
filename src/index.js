import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text, View, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';

import { styles } from './style';
import { COLOR } from './themes';
import RootNavigator from './navigation';

const App = () => {
  
  const [loaded] = useFonts({
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf')
  })

  if(!loaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='black' />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <RootNavigator />
    </SafeAreaView>
  );
}

export default App