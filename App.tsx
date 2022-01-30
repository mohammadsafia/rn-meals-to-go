import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreen from "./src/features/restaurants/screens/restaurants.screen";
import * as theme from "./src/infastructure/theme";
import { ThemeProvider } from "styled-components";
import {
    Oswald_400Regular,
    useFonts as useOswald
} from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";

const App = () => {
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular
    });
    const [latoLoaded] = useLato({
        Lato_400Regular
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

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
