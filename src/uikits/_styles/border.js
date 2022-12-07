import { StyleSheet } from "react-native";
import colors from "../../configs/colors";

const createBorderStyle = (name, keyName, defaultIndex = 4) => {

  keyName = keyName || name;

  let r = {
    [`border_${keyName}`]: {borderColor: colors[`${name}${defaultIndex}`]}
  };

  for (let index = 1; index <= 9; index++) {
    r[`border_${keyName}_${index}`] = {borderColor: colors[`${name}${index}`]}
  }

  return r;
}

const BorderStyles = StyleSheet.create({
  border_1: {
    borderWidth: 1
  },

  border_2: {
    borderWidth: 2
  },

  border_bottom: {
    borderBottomWidth: 1
  },

  border_left: {
    borderLeftWidth: 1
  },

  border_right: {
    borderRightWidth: 1
  },

  border_top: {
    borderTopWidth: 1
  },

  border_primary: {
    borderColor: colors.primary
  },

  border_dashed: {
    borderStyle: 'dashed',
    borderRadius: 1
  },

  border_auction_yahoo: {
    borderColor: 'rgb(255, 218, 69)'
  },

  border_input: {
    borderColor: colors.grey4
  },

  ...createBorderStyle('red'),
  ...createBorderStyle('yellow'),
  ...createBorderStyle('lime'),
  ...createBorderStyle('green'),
  ...createBorderStyle('cyan'),
  ...createBorderStyle('blue'),
  ...createBorderStyle('geekblue'),
  ...createBorderStyle('purple'),
  ...createBorderStyle('magenta'),
  ...createBorderStyle('gold'),
  ...createBorderStyle('grey', 'secondary'),
  ...createBorderStyle('volcano'),
  ...createBorderStyle('orange'),
});

export default BorderStyles;