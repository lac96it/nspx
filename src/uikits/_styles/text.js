import { StyleSheet } from "react-native";
import colors from "../../configs/colors";

const START_VALUE = 8;
const SIZE = new Array(50).fill(1).map((i, idx) => idx + START_VALUE);

const createFontSizeStyle = () => {
  return SIZE.reduce((p, c) => {
    p[`fs_${c}`] = { fontSize: c };

    return p;
  }, {});
}

const createTextStyle = (name, keyName, defaultIndex = 4) => {

  keyName = keyName || name;

  let r = {
    [`text_${keyName}`]: { color: colors[`${name}${defaultIndex}`] }
  };

  for (let index = 1; index <= 9; index++) {
    r[`text_${keyName}_${index}`] = { color: colors[`${name}${index}`] }
  }

  return r;
}

const TextStyles = StyleSheet.create({
  text_center: {
    textAlign: 'center'
  },

  text_right: {
    textAlign: 'right'
  },

  text_uppercase: {
    textTransform: 'uppercase'
  },

  text_capitalize: {
    textTransform: 'capitalize'
  },

  text_lowercase: {
    textTransform: 'lowercase'
  },

  text_italic: {
    fontStyle: 'italic'
  },

  text_underline: {
    textDecorationLine: 'underline'
  },

  fw_bold: {
    fontWeight: 'bold'
  },

  text_black: {
    color: colors.black
  },

  text_primary: {
    color: colors.primary
  },

  text_white: {
    color: '#fff'
  },

  text_price: {
    color: '#f76902'
  },

  ...createTextStyle('red'),
  ...createTextStyle('yellow'),
  ...createTextStyle('lime'),
  ...createTextStyle('green'),
  ...createTextStyle('cyan'),
  ...createTextStyle('blue'),
  ...createTextStyle('geekblue'),
  ...createTextStyle('purple'),
  ...createTextStyle('magenta'),
  ...createTextStyle('gold'),
  ...createTextStyle('grey', 'secondary'),
  ...createTextStyle('volcano'),
  ...createTextStyle('orange'),

  ...createFontSizeStyle()
});

export default TextStyles;