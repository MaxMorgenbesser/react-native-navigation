import { Button } from "react-native";
import { useContext } from "react";
import { data } from "../../../App";
export default function Login (){
    const { setLoggedIn } = useContext(data)
return (<>
<Button title="log in" onPress={()=> setLoggedIn(true)}></Button>
</>)

}