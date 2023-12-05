import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateScreen, PrimaryScreen } from "../screen";
import { Header } from "../components";

const Stack = createNativeStackNavigator()

function PrimaryNavigator() {
  return (
    <Stack.Navigator initialRouteName="PrimaryScreen">
      <Stack.Screen name="PrimaryScreen" component={PrimaryScreen} options={{
        header: () => {
          return (
            <Header />
          )
        },
        animation: 'slide_from_right'
      }}/>
      <Stack.Screen name="CreateScreen" component={CreateScreen} options={{
        headerTitle: 'Holalolo',
        animation: 'slide_from_right'
      }}/>
    </Stack.Navigator>
  )
}

export default PrimaryNavigator