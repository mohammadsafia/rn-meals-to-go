import { ColorsTypes } from "./colors.types";
import { IFontWeight } from "./fonts.types";
import { ILineHeight } from "./spacing.types";

export * from "./colors.types";
export * from "./fonts.types";
export * from "./spacing.types";

class IFontSize {}

export interface ITheme {
    colors: ColorsTypes;
    fontSize: IFontSize;
    fontWeight: IFontWeight;
    lineHeight: ILineHeight;
}
export interface IRestaurant {
    name?: string;
    icon?: string;
    photos?: string[];
    address?: string;
    isOpenNow?: boolean;
    rating?: number;
    isClosedTemporarily?: boolean;
}
