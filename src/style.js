import { StyleSheet } from "react-native";
import { COLOR } from "./themes";

export const styles = StyleSheet.create({
    loadingContainer: {
      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor: COLOR.background,
      flex: 1, 
    },
    container: {
      flex: 1,
      backgroundColor: COLOR.background,
    },
});