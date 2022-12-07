import { StyleSheet } from "react-native";
import colors from "../../configs/colors";

const UIKitStyles = StyleSheet.create({
  containerShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.00,
    elevation: 12,
  },

  card: {
    margin: 10,
    marginBottom: 0,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.00,
    elevation: 2,
  },

  card2: {
    margin: 10,
    marginBottom: 0,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
  },

  badge: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Oswald-Medium',
    backgroundColor: colors.red6,
    minWidth: 25,
    textAlign: 'center',
    borderRadius: 20
  },

  label: {
    marginBottom: 5,
    fontSize: 16,
    color: colors.primary,
    fontWeight: '600',
    textTransform: 'uppercase',
  },

  input: {
    padding: 5,
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.grey3,
    justifyContent: 'center',
    fontSize: 15,
  }
});

export default UIKitStyles;