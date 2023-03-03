import { StyleSheet, Text, View } from "react-native";
import React, {Component} from 'react';
import { WebView } from "react-native-webview";
import { RENDER } from "ci-info";

const DetailsScreen = ({navigation, route}) => {
    const params = route.params;
    return <WebView source={{ uri: params.url}} />;
};

export default DetailsScreen;
const styles = StyleSheet.create({});