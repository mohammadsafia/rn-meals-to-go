import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreen from "./src/features/restaurants/screens/restaurants.screen";

const App = () => {
    return (
        <>
            <RestaurantScreen />
            <ExpoStatusBar style="auto" />
        </>
    );
};

const styles = StyleSheet.create({});

export default App;
