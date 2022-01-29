import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';

const App = () => {
    return (
        <>
            <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
                <View style={{padding: 16, backgroundColor: 'green'}}>
                    <Text>Search</Text>
                </View>
                <View style={{flex: 1, padding: 16, backgroundColor: 'blue'}}>
                    <Text>List</Text>
                </View>
                <ExpoStatusBar style="auto"/>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({});

export default App;