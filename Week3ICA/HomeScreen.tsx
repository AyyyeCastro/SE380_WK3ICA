import { View, Text, Button } from "react-native";
// new imports
import { useNavigation } from "@react-navigation/native";
// new imports
import { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenNavigationProp = StackNavigationProp<StackParamList, "Home">;

export function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", { itemId: 123, otherParam: "test" })
        }
      />
      <Button
        title="Go to Modal"
        onPress={() => navigation.navigate("Modal")}
      />
            <Button
        title="Who Am I?"
        onPress={() => navigation.navigate('WhoAmI')}
      />
    </View>
  );
}
