import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import { images, COLORS } from '../constants/index'

export default function DetailProductScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <View
                style={styles.container_top}>
                <ImageBackground source={images.pizza}
                    resizeMode={"cover"}
                    style={{
                        flex: 1,
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        margin: 20,
                        height: 50,
                        width: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        borderColor: "white",
                        opacity: 0.5
                    }}
                        onPress={() => alert("haha")}
                    >
                        <Text style={{ color: COLORS.white }}>Back</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>


            <View
                style={styles.container_bot}
            >
                <Text style={{ fontSize: 16 }}>Bottom</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container_top: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },
    container_bot: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
})