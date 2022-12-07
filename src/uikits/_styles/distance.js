import { StyleSheet } from "react-native";

const SIZE = new Array(11).fill(1).map((i, idx) => idx);
const STEP = 3;

const createDistanceStyle = (distance_type = 'p', distance_property = 'padding') => {
  return SIZE.reduce((p, c) => {
    p[`${distance_type}_${c}`] = {[distance_property]: c * STEP};

    return p;
  }, {});
}

const DistanceStyles = StyleSheet.create({
  ...createDistanceStyle('p', 'padding'),
  ...createDistanceStyle('pt', 'paddingTop'),
  ...createDistanceStyle('pr', 'paddingRight'),
  ...createDistanceStyle('pl', 'paddingLeft'),
  ...createDistanceStyle('pb', 'paddingBottom'),
  ...createDistanceStyle('px', 'paddingHorizontal'),
  ...createDistanceStyle('py', 'paddingVertical'),

  ...createDistanceStyle('m', 'margin'),
  ...createDistanceStyle('mt', 'marginTop'),
  ...createDistanceStyle('mr', 'marginRight'),
  ...createDistanceStyle('mb', 'marginBottom'),
  ...createDistanceStyle('ml', 'marginLeft'),
  ...createDistanceStyle('mx', 'marginHorizontal'),
  ...createDistanceStyle('my', 'marginVertical'),
});

export default DistanceStyles;