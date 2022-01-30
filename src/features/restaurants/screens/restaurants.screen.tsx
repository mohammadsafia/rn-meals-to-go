import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";
import { ITheme } from "../../../types";

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
    padding: ${(props: { theme: ITheme }) => props.theme.space[3]};
`;
const RestaurantListContainer = styled.View`
    flex: 1;
    padding: ${(props: { theme: ITheme }) => props.theme.space[3]};
`;
const RestaurantScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                {/*@ts-ignore*/}
                <Searchbar placeholder="Search" />
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfoCard restaurant={{ name: "hello" }} />
            </RestaurantListContainer>
        </SafeArea>
    );
};
export default RestaurantScreen;
