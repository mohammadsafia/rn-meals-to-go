import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const App = () => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.search}>
                    <Text>Search</Text>
                </View>
                <View style={styles.list}>
                    <Text>List</Text>
                </View>
                <ExpoStatusBar style="auto" />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    search: {
        padding: 16,
        backgroundColor: "green"
    },
    list: {
        flex: 1,
        padding: 16,
        backgroundColor: "blue"
    }
});

export default App;
