import { useSpotifyAuth } from "../utils";
import SongList from "../components/SongList";
import SpotifyAuthButton from "../components/SpotifyAuthButton";
import { StyleSheet, SafeAreaView, Text, StatusBar} from "react-native";
import { myTopTracks } from "../utils/apiOptions";
import { Themes } from "../assets/Themes";


export default function HomeScreen({navigation}) {
    // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth(myTopTracks);
  
    let contentDisplayed = null;
    if (token) {
      contentDisplayed = <SongList tracks={tracks}/>;
    } else {
      contentDisplayed = <SpotifyAuthButton authenticationFunction={getSpotifyAuth}/>;
    }
  
    return (
      <SafeAreaView style={styles.container}>
        {/* TODO: Your code goes here */}
        {contentDisplayed}
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    authButton: {
      backgroundColor: Themes.colors.spotify,
      padding: 12, 
      borderRadius: 100,
    },
    authText: {
      color: "white",
    },
  });