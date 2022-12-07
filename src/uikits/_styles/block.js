import { StyleSheet } from "react-native";

const START_VALUE = 2;
const SIZE = new Array(50).fill(1).map((i, idx) => idx + START_VALUE);

const createBorderRadiusStyles = () => {
  return SIZE.reduce((p, c) => {
    p[`br_${c}`] = { borderRadius: c };

    return p;
  }, {});
}

const BlockStyles = StyleSheet.create({

  flex_1: {
    flex: 1
  },

  flex_grow_1: {
    flexGrow: 1
  },

  flex_row: {
    flexDirection: 'row'
  },

  flex_row_reverse: {
    flexDirection: 'row-reverse'
  },

  flex_shrink_1: {
    flexShrink: 1
  },

  input_height: {
    height: 45
  },

  input_search_height: {
    height: 60
  },

  align_items_center: {
    alignItems: 'center'
  },

  justify_content_center: {
    justifyContent: 'center'
  },

  justify_content_between: {
    justifyContent: 'space-between'
  },

  justify_content_around: {
    justifyContent: 'space-around'
  },

  justify_content_start: {
    justifyContent: 'flex-start'
  },

  justify_content_end: {
    justifyContent: 'flex-end'
  },

  align_items_end: {
    alignItems: 'flex-end'
  },

  align_items_start: {
    alignItems: 'flex-start'
  },

  flex_wrap: {
    flexWrap: 'wrap'
  },

  overflow_hidden: {
    overflow: 'hidden'
  },


  ...createBorderRadiusStyles()
});

export default BlockStyles;