import {StyleSheet} from "react-native";

const stylesButton = StyleSheet.create({
  buttonPrimary: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonSecondary: {
    color: '#3C4043',
    fontWeight: 'normal',
    fontSize: 16,
  },
})

const stylesText = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 16,
    color: '#3D64F4',
    lineHeight: 24,
  },
});

export const styles = StyleSheet.create({
  ...stylesButton,
  ...stylesText,
});