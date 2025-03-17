import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorPrimaryBright: {
    color: theme.colors.textPrimaryBright,
  },
  colorError: {
    color: theme.colors.error,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  toButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    overflow: "hidden", // make borderRadius work in ios
    color: theme.colors.textPrimaryBright,
    alignSelf: "flex-start",
    padding: 4,
  },
});

const Text = ({ color, fontSize, fontWeight, toButton, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "textPrimaryBright" && styles.colorPrimaryBright,
    color === "error" && styles.colorError,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    toButton && styles.toButton,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
