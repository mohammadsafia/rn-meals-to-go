import { ColorsTypes } from "./colors.types";
import { IFonts, IFontSizes, IFontWeight } from "./fonts.types";
import { ILineHeight } from "./spacing.types";

export interface ITheme {
    colors: ColorsTypes;
    fontSize: IFontSizes;
    fontWeight: IFontWeight;
    lineHeight: ILineHeight;
    fonts: IFonts;
    sizes: string[];
    space: string[];
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

export * from "./colors.types";
export * from "./fonts.types";
export * from "./spacing.types";
