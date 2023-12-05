import { NavigationContainer } from "@react-navigation/native";
import PrimaryNavigator from "./primaryscreen";

function RootNavigator() {
  return (
    <NavigationContainer>
      <PrimaryNavigator />
    </NavigationContainer>
  )
}

export default RootNavigator