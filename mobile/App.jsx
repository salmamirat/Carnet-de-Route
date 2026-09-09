import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TripListScreen from "./src/screens/TripListScreen";
import TripDetailScreen from "./src/screens/TripDetailScreen";
import AddTripScreen from "./src/screens/AddTripScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TripList"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="TripList"
          component={TripListScreen}
        />

        <Stack.Screen
          name="TripDetail"
          component={TripDetailScreen}
        />

        <Stack.Screen
          name="AddTrip"
          component={AddTripScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}