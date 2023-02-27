import {Pressable, Text, StyleSheet} from "react-native"
import {Themes} from "../assets/Themes";

const SpotifyAuthButton = ({authenticationFunction}) => {
    return (
        <Pressable style={styles.authButton} onPress={authenticationFunction}>
            <Text style={styles.authText}>Connect with Spotify</Text>
        </Pressable>
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

export default SpotifyAuthButton;