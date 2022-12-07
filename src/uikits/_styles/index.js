import { StyleSheet } from "react-native";
import BackgroundStyles from "./background";
import BlockStyles from "./block";
import BorderStyles from "./border";
import DistanceStyles from "./distance";
import TextStyles from "./text";
import UIKitStyles from './uikit';

const styles = StyleSheet.flatten([
  BackgroundStyles,
  BlockStyles,
  BorderStyles,
  DistanceStyles,
  TextStyles,
  UIKitStyles
]);

export default styles;