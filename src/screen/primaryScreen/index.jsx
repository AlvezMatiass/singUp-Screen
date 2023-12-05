import { View, Text } from 'react-native'
import { SingButton } from '../../components/index';
import { styles } from './style'
import { COLOR } from '../../themes'

const PrimaryScreen = ({ navigation }) => {

  const onHandlerCreateNavigation = () => {
    navigation.navigate('CreateScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.subtitlecontainer}>
        <Text style={styles.subtitle}>Look at what the world is talking about right now.</Text>
      </View>
      <View style={styles.buttoncontainer}>
        <SingButton textInput='Create an account' onHandlerCreateNavigation={onHandlerCreateNavigation} />
        <Text style={styles.accounttitle}>Have an account already? <Text style={[styles.buttoncontainer, {color: COLOR.logo}]}>Log in</Text></Text>
      </View>
      <Text style={styles.termstitle}>By signing up, you agree to our <Text style={[styles.termstitle, {color: COLOR.logo}]}>Terms, Privacy policy</Text> and <Text style={[styles.termstitle, {color: COLOR.logo}]}>Cookie Use.</Text></Text>
    </View>
  )
}

export default PrimaryScreen