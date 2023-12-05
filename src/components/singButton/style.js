import { StyleSheet } from "react-native";
import { COLOR } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderColor: COLOR.border,

    paddingVertical: 12,
    borderRadius: 24,
    borderWidth: 2,
  },
  buttontext: {
    fontFamily: 'Inter-Bold',

    fontSize: 13,
    opacity: .8
  },
})