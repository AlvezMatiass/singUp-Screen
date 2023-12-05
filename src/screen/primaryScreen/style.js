import { StyleSheet } from "react-native";
import { COLOR } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: COLOR.background,
    alignItems: 'center',

    flex: 1,
    paddingHorizontal: 34
  },
  subtitlecontainer: {
    flex: .4
  },
  subtitle: {
    fontFamily: 'Inter-Bold',

    fontSize: 28,
  },
  buttoncontainer: {
    alignItems: 'center',
    width: '100%',
    
    gap: 4,
    marginVertical: 8,
  },
  accounttitle: {
    fontFamily: 'Inter-Bold',
    alignSelf: 'flex-start',

    fontSize: 12,
    opacity: .8,
    marginTop: 4,
  },
  termstitle: {
    fontFamily: 'Inter-Medium',
    alignSelf: 'flex-start',
    position: 'absolute',

    fontSize: 12,
    marginVertical: 12,
    marginHorizontal: 34,
    bottom: 24,
  }
})