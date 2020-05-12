import {Platform, Dimensions} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? (IS_IPHONE_X ? 44 : 20) : 44;
const HEADER_HEIGHT = Platform.OS === "ios" ? (IS_IPHONE_X ? 88 : 64) : 64;

export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  IS_IPHONE_X,
  STATUS_BAR_HEIGHT,
  HEADER_HEIGHT,
};
