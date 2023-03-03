import { StyleSheet, SafeAreaView, Text, StatusBar} from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";
import Colors from "./assets/Themes/colors";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import PreviewScreen from "./screens/PreviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";                  
import "react-native-gesture-handler";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Song Details" component={DetailsScreen} options={{headerStyle: {backgroundColor: 'black',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}} />
        <Stack.Screen name="Song Preview" component={PreviewScreen} options={{headerStyle: {backgroundColor: 'black',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

