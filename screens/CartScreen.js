import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    Alert, Animated, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useDispatch, useSelector } from 'react-redux';
import CustomCart from '../components/CustomCart';
import { COLORS, icons, SIZES } from '../constants';
import { removeItemFromCart } from '../redux/actions/actions';




export default function CartScreen() {

    const navigation = useNavigation()
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()


    //xoá item
    const removeItem = ({ item }) => {

        //action
        const action = removeItemFromCart(item.id)
        //dispatch
        dispatch(action)
    }
    const renderRightAction = (progress, dragX, onClick) => {

        const scale = dragX.interpolate({
            inputRange: [-60, 0.5],
            outputRange: [1, 0.1]
        })
        const Style = {
            transform: [
                {
                    scale
                }
            ]
        }
        return (
            <Animated.View
                style={[Style, {
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FFCC66",
                    width: 90,
                    height: "100%"
                }]}>
                <TouchableOpacity
                    onPress={onClick}
                >
                    <Image
                        source={icons.trash}
                        style={{
                            height: 35,
                            width: 35
                        }}
                    />
                </TouchableOpacity>
            </Animated.View>
        )
    }


    const renderItem = ({ item }, onClick) => {

        return (
            <Swipeable
                renderRightActions={(progress, dragX) => renderRightAction(progress, dragX, onClick)}>
                <View
                    style={{
                        alignItems: "center",
                        marginVertical: 10,
                    }}>
                    <CustomCart item={item} />
                </View>
            </Swipeable>
        )
    }
    return (
        <SafeAreaView
            style={styles.container}>

            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.primary,
                }}>
                <TouchableOpacity
                    style={{
                        height: 50,
                        width: 50,
                        marginTop: 30,
                        marginLeft: 20

                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        style={{
                            height: 35,
                            width: 35
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "85%",
                    backgroundColor: "#FFCC66",
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    alignItems: "center"
                }}>

                <View
                    style={{
                        position: "absolute",
                        top: 15,
                        height: "60%",
                        width: "95%",
                        backgroundColor: "white",
                        padding: SIZES.padding,
                        borderRadius: SIZES.radius,

                        ...styles.shadows
                    }}>


                    <FlatList
                        data={cart.food}
                        renderItem={(item) => renderItem(item, () => removeItem(item))}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            borderRadius: SIZES.radius
                        }}
                    />

                </View>
                <View
                    style={{
                        position: "absolute",
                        bottom: 80,
                        height: "20%",
                        width: "95%",
                        backgroundColor: "#FFCC66",
                        borderWidth: 0.4,
                        borderRadius: SIZES.radius / 2,
                        padding: SIZES.padding,
                        ...styles.shadows,
                        flexDirection: "column"
                    }}>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                        <Text>Total</Text>
                        <Text>$1000</Text>

                    </View>
                    <View
                        style={{
                            height: 0,
                            width: "100%",
                            borderWidth: 1,
                            position: "absolute",
                            bottom: 35,
                            marginLeft: 10
                        }}></View>
                    <View
                        style={{
                            height: 20,
                            width: "100%",

                            position: "absolute",
                            bottom: 10,
                            marginLeft: 10
                        }}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                            <Text>Total</Text>
                            <Text>$1000</Text>
                        </View>
                    </View>


                </View>
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        bottom: 10,
                        height: 50,
                        width: "90%",
                        backgroundColor: COLORS.primary,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: SIZES.radius
                    }}
                    onPress={() => Alert.alert("Thanh toán thành công")}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontStyle: "italic"
                        }}>Payment</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    shadows: {
        shadowColor: "#000",
        shadowOffset: {
            height: 0,
            width: 0
        },
        shadowOpacity: 0.3,
        shadowRadius: SIZES.radius,
        elevation: 20
    }
})
