import {FlatList, Text, StyleSheet, View, Image, Dimensions, Pressable} from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";
import images from "../assets/Images/images";
import { logout } from "react-native-app-auth";
import PreviewScreen from "../screens/PreviewScreen";
import { Themes } from "../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 

const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;
let time = null;

const SongList = ({tracks}) => {
    const navigation = useNavigation();
    return (
        <View> 
            <View style={styles.spotify}>
                <Image source={images.spotify} style={styles.spotifylogo}/>
                <Text style={styles.toptracks}>My Top Tracks</Text>
            </View>
            <FlatList 
            data={tracks}
            renderItem = {({item, index}) => {
                console.log(item);
                time = item.duration;
                return (
                    <Pressable onPress={() => navigation.navigate('Song Details', {url: item.externalUrl})} >
                        <View style={styles.header}>
                            <Pressable 
                                style={styles.authButton} 
                                onPress={() => navigation.navigate('Song Preview', {url: item.previewUrl})}
                            >
                                <AntDesign name="play" size={24} color="#1DB954" />
                            </Pressable>
                            <Image source={{uri: item.imageUrl}} style={styles.headerIcons}/>
                            <View style={styles.nameheader}>
                                <Text style={styles.name} numberOfLines={1}>{item.songTitle}</Text>
                                <Text style={styles.artist} numberOfLines={1}>{item.songArtists[0].name}</Text>
                            </View>
                            <Text style={styles.album} numberOfLines={1}>{item.albumName}</Text>
                            <Text style={styles.time} numberOfLines={1}>{millisToMinutesAndSeconds(time)}</Text>
                        </View>
                    </Pressable>
                );
            }}
            keyExtractor={(item) => item.id}
            />
        </View>
        
    );
};

const styles = StyleSheet.create({
    spotify: {
        height: WindowHeight*0.1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    authButton: {
        //backgroundColor: Themes.colors.spotify,
        padding: 11, 
        //borderRadius: 100,
    },
    toptracks: {
        fontSize: 20,
        color: "white",
        margin: 7,
        fontWeight: 'bold',
    },
    spotifylogo: {
        height: 60,
        width: 60,
        margin: 7,
    },
    nameheader: {
        width: WindowWidth*0.3,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "flex-start",
    },
    index: {
        color: "white",
        width: "5%",
        fontSize: 12,
        padding: 20,
        //lineHeight: 100,
      },
    name: {
      color: "white",
      width: "100%",
      //height: "2%",
      fontSize: 12,
      padding: 1,
      //lineHeight: 100,
    },
    artist: {
        color: "grey",
        width: "100%",
        //height: "2%",
        fontSize: 12,
        padding: 1,
        //lineHeight: 100,
    },
    album: {
        color: "white",
        width: "20%",
        fontSize: 12,
    },
    time: {
        color: "white",
        width: "15%",
        fontSize: 12,
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        height: 80,
        width: WindowWidth,
        alignItems: 'center',
    },
    headerIcons: {
        height: "70%",
        width: "11%"
    },
});

export default SongList;