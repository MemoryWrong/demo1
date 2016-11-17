import {NativeModules, PixelRatio, Linking,} from "react-native";

//this border function is just for single pixel border calculation.
export function border() {
    switch (PixelRatio.get()) {
        case 1:
            return 1;
        case 1.5:
            return 1 / 1.5;
        case 2:
            return 0.5;
        case 3:
            return 1 / 3;
        case 3.5:
            return 1 / 3.5;
        default:
            return 0.5;
    }
}