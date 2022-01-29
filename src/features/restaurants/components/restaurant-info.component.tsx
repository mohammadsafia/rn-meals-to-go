import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { IRestaurant } from "../../../types";
import { Card } from "react-native-paper";

interface RestaurantInfoProps {
    restaurant: IRestaurant;
}

const RestaurantInfo: FC<RestaurantInfoProps> = ({ restaurant }) => {
    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover
                key={restaurant.name}
                style={styles.cover}
                source={{
                    uri: "https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc="
                }}
            />
            <Text style={styles.title}> {restaurant.name}</Text>
        </Card>
    );
};
const styles = StyleSheet.create({
    card: {
        backgroundColor: "white"
    },
    cover: {
        padding: 20,
        backgroundColor: "white"
    },
    title: {
        padding: 16
    }
});
export default RestaurantInfo;
