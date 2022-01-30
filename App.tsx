import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreen from "./src/features/restaurants/screens/restaurants.screen";
import * as theme from "./src/infastructure/theme";
import { ThemeProvider } from "styled-components";

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <RestaurantScreen />
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
};

const styles = StyleSheet.create({});

export default App;
