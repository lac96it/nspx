import { StyleSheet } from "react-native";
import colors from "../../configs/colors";

const createBackgroundStyle = (name, keyName, defaultIndex = 4) => {

  keyName = keyName || name;

  let r = {
    [`bg_${keyName}`]: {backgroundColor: colors[`${name}${defaultIndex}`]}
  };

  for (let index = 1; index <= 9; index++) {
    r[`bg_${keyName}_${index}`] = {backgroundColor: colors[`${name}${index}`]}
  }

  return r;
}

const BackgroundStyles = StyleSheet.create({
  bg_white: {
    backgroundColor: colors.white
  },

  bg_black: {
    backgroundColor: colors.black
  },

  bg_primary: {
    backgroundColor: colors.primary
  },

  bg_auction_yahoo: {
    backgroundColor: 'rgb(255, 218, 69)'
  },

  bg_price: {
    backgroundColor: '#f76902'
  },

  ...createBackgroundStyle('red'),
  ...createBackgroundStyle('yellow'),
  ...createBackgroundStyle('lime'),
  ...createBackgroundStyle('green'),
  ...createBackgroundStyle('cyan'),
  ...createBackgroundStyle('blue'),
  ...createBackgroundStyle('geekblue'),
  ...createBackgroundStyle('purple'),
  ...createBackgroundStyle('magenta'),
  ...createBackgroundStyle('gold'),
  ...createBackgroundStyle('grey', 'secondary'),
  ...createBackgroundStyle('volcano'),
  ...createBackgroundStyle('orange'),
});

export default BackgroundStyles;