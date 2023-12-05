import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

const SingButton = ({ textInput, onHandlerCreateNavigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onHandlerCreateNavigation}>
      <Text style={styles.buttontext}>{ textInput }</Text>
    </TouchableOpacity>
  )
}

export default SingButton