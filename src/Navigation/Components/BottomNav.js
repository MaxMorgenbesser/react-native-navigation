import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

export default function BottomNav (){
const navigation = useNavigation()

const goHome = () => {
    navigation.navigate('Home', {
        screen: "Home"
    })
}
    return (
        <View style={{
            marginBottom:50
        }}>
        <Button onPress={goHome} title='Go Home'></Button>
        </View>
    )

}