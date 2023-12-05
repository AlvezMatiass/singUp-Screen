import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style';
import { COLOR } from '../../themes';

const Header = () => {
    return (
      <View style={styles.container}>
        <AntDesign name="slack" size={32} color={COLOR.logo} />
      </View>
    )
}

export default Header