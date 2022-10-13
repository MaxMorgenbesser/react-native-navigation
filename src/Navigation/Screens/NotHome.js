import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function NotHome() {
  const navigate = useNavigation();
  return (
    <>
      <Text> Not Home</Text>
      {/* <Button onPress={()=>navigate.navigate("Home")} title="go home"></Button> */}
    </>
  );
}
