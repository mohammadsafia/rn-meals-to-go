import React, { FC } from "react";
import { IRestaurant, ITheme } from "../../../types";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

interface RestaurantInfoCardProps {
    restaurant: IRestaurant;
}

const Title = styled.Text`
    padding: ${(props: { theme: ITheme }) => props.theme.space[3]};
    color: ${(props: { theme: ITheme }) => props.theme.colors.ui.primary};
    font-family: ${(props: { theme: ITheme }) => props.theme.fonts.body};
`;

const RestaurantCard = styled(Card)`
    background-color: ${(props: { theme: ITheme }) =>
        props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props: { theme: ITheme }) => props.theme.space[3]};
    background-color: ${(props: { theme: ITheme }) =>
        props.theme.colors.bg.primary};
`;

const RestaurantInfoCard: FC<RestaurantInfoCardProps> = ({ restaurant }) => {
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover
                key={restaurant.name}
                source={{
                    uri: "https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc="
                }}
            />
            <Title> {restaurant.name}</Title>
        </RestaurantCard>
    );
};
export default RestaurantInfoCard;
